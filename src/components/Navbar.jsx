import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const styles = {
    navbar: {
      backgroundColor: '#0b1e3d', // Navy blue background
      padding: '1rem 2rem',
      zIndex: 1000,
    },
    navLink: {
      color: '#ffffff', // White text
      fontWeight: '500',
      transition: 'all 0.3s ease',
      padding: '0.5rem 1rem',
      borderRadius: '4px',
    },
    navLinkHover: {
      color: '#ffffff',
      backgroundColor: '#b40000', // Red background on hover
    },
    navLinkActive: {
      color: '#ffffff',
      backgroundColor: '#b40000', // Red background for active link
    },
    brandLogo: {
      height: '40px',
      filter: 'brightness(0) invert(1)', // Makes logo white
    },
    btnOutline: {
      color: '#ffffff',
      border: '1px solid #ffffff',
      transition: 'all 0.3s ease',
      marginRight: '0.5rem',
    },
    btnOutlineHover: {
      backgroundColor: '#ffffff',
      color: '#0b1e3d',
    },
    btnPrimary: {
      backgroundColor: '#b40000', // Red button
      border: '1px solid #b40000',
      color: '#fff',
      transition: 'all 0.3s ease',
    },
    btnPrimaryHover: {
      backgroundColor: '#900000', // Darker red on hover
      borderColor: '#900000',
    },
    toggler: {
      filter: 'invert(1)', // White toggler icon
    },
  };

  // Check if a nav item is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Handle navigation to login page
  const handleLoginClick = () => {
    navigate('/login');
  };

  // Handle navigation to register page
  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={styles.navbar}>
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold" to="/">
          <img src="/Logo.png" alt="GS Busasamana Logo" style={styles.brandLogo} />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          style={styles.toggler}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            {[
              { to: '/', label: 'Home', icon: 'house-door' },
              { to: '/about', label: 'About Us', icon: 'info-circle' },
              { to: '/admissions', label: 'Admissions', icon: 'file-earmark-text' },
              { to: '/exams', label: 'Exams', icon: 'book' },
              { to: '/gallery', label: 'Gallery', icon: 'camera' },
              { to: '/contact', label: 'Contact', icon: 'envelope' },
            ].map(({ to, label, icon }) => (
              <li className="nav-item mx-1" key={to}>
                <NavLink
                  className="nav-link"
                  to={to}
                  style={({ isActive }) => ({
                    ...styles.navLink,
                    ...(isActive ? styles.navLinkActive : {}),
                  })}
                  onMouseEnter={(e) => {
                    if (!isActive(to)) {
                      e.currentTarget.style.color = styles.navLinkHover.color;
                      e.currentTarget.style.backgroundColor = styles.navLinkHover.backgroundColor;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(to)) {
                      e.currentTarget.style.color = styles.navLink.color;
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  <i className={`bi bi-${icon} me-1`}></i> {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="d-flex ms-auto">
            <button
              className="btn mx-2"
              style={styles.btnOutline}
              onClick={handleLoginClick}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = styles.btnOutlineHover.backgroundColor;
                e.target.style.color = styles.btnOutlineHover.color;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = styles.btnOutline.color;
              }}
            >
              Login
            </button>
            <button
              className="btn"
              style={styles.btnPrimary}
              onClick={handleRegisterClick}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = styles.btnPrimaryHover.backgroundColor;
                e.target.style.borderColor = styles.btnPrimaryHover.borderColor;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = styles.btnPrimary.backgroundColor;
                e.target.style.borderColor = styles.btnPrimary.borderColor;
              }}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;