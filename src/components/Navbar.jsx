import React, { useEffect, useState, useRef } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const navbarCollapseRef = useRef(null);

  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  const handleDashboard = () => {
    navigate('/user/Dashboard');
    closeNavbar();
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const closeNavbar = () => {
    if (navbarCollapseRef.current?.classList.contains('show')) {
      navbarCollapseRef.current.classList.remove('show');
    }
  };

  const styles = {
    navbar: {
      backgroundColor: '#0b1e3d',
      padding: '1rem 2rem',
      zIndex: 1000,
    },
    navLink: {
      color: '#ffffff',
      fontWeight: '600',
      textTransform: 'uppercase',
      transition: 'all 0.3s ease',
      padding: '0.5rem 1rem',
      fontSize: '0.95rem',
    },
    navLinkActive: {
      color: '#ffffff',
      backgroundColor: '#b40000',
      borderRadius: '4px',
    },
    brandLogo: {
      height: '45px',
    },
    btnPrimary: {
      backgroundColor: '#b40000',
      border: 'none',
      color: '#fff',
      padding: '0.5rem 1rem',
      borderRadius: '5px',
      fontWeight: '600',
      marginLeft: '0.75rem',
      textTransform: 'uppercase',
      fontSize: '0.9rem',
    },
    profileImage: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      objectFit: 'cover',
      cursor: 'pointer',
      border: '2px solid #fff',
    },
    dropdown: {
      position: 'absolute',
      top: '60px',
      right: '10px',
      background: '#fff',
      color: '#333',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      padding: '10px',
      zIndex: 9999,
      width: '220px',
    },
    dropdownItem: {
      padding: '10px',
      borderBottom: '1px solid #ddd',
      cursor: 'pointer',
      textAlign: 'left',
    },
    dropdownEmail: {
      fontSize: '0.9rem',
      fontWeight: 'bold',
      marginBottom: '10px',
      wordBreak: 'break-word',
    },
    logoutButton: {
      backgroundColor: '#b40000',
      color: 'white',
      border: 'none',
      padding: '8px 12px',
      borderRadius: '5px',
      width: '100%',
      cursor: 'pointer',
    }
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={styles.navbar}>
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold" to="/" onClick={closeNavbar}>
          <img src="/Logo.png" alt="Logo" style={styles.brandLogo} />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          style={{ filter: 'invert(1)' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav" ref={navbarCollapseRef}>
          <ul className="navbar-nav">
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About Us' },
              { to: '/admissions', label: 'Admissions' },
              { to: '/academics', label: 'Academics' },
              { to: '/gallery', label: 'Gallery' },
              { to: '/contact', label: 'Contact' },
            ].map(({ to, label }) => (
              <li className="nav-item mx-1" key={to}>
                <NavLink
                  className="nav-link"
                  to={to}
                  onClick={closeNavbar}
                  style={({ isActive }) => ({
                    ...styles.navLink,
                    ...(isActive ? styles.navLinkActive : {}),
                  })}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="d-flex ms-auto align-items-center">
            {!user ? (
              <>
                <button
                  className="btn"
                  style={styles.btnPrimary}
                  onClick={() => {
                    navigate('/admissions');
                    closeNavbar();
                  }}
                >
                  Apply Now
                </button>
              </>
            ) : (
              <div className="position-relative">
                <img
                  src={user.photoURL || 'https://cdn-icons-png.flaticon.com/512/7153/7153150.png'}
                  alt="Profile"
                  style={styles.profileImage}
                  onClick={toggleDropdown}
                />
                {dropdownOpen && (
                  <div style={styles.dropdown}>
                    <div style={styles.dropdownEmail}>{user.email}</div>
                    <div
                      style={styles.dropdownItem}
                      onClick={handleDashboard}
                    >
                      My Dashboard
                    </div>
                    <button
                      style={styles.logoutButton}
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
