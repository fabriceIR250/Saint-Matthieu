import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

const Navbar = ({ user }) => {
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  const styles = {
    navbar: {
      backgroundColor: '#0b1e3d',
      padding: '0.75rem 2rem',
    },
    navLink: {
      color: '#ffffff',
      fontWeight: '500',
      padding: '0.5rem 1rem',
      borderRadius: '4px',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
    },
    navLinkActive: {
      backgroundColor: '#b40000',
      color: '#ffffff',
    },
    logo: {
      height: '45px',
      width: 'auto',
    },
    navSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
    },
  };

  useEffect(() => {
    const fetchUserRole = async () => {
      if (user?.uid) {
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUserRole(userData.role);
          } else {
            console.warn("User document not found in Firestore.");
            setUserRole('Unknown');
          }
        } catch (error) {
          console.error("Error fetching user role: ", error);
          setUserRole('Error');
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
        setUserRole('Guest');
      }
    };

    fetchUserRole();
  }, [user?.uid]);

  const buildLinks = () => {
    const links = [
      { to: '/dashboard', label: 'Dashboard' },
      { to: '/exams', label: 'Exams' },
      { to: '/messages', label: 'Messages' },
    ];

    if (userRole === "Teacher") {
      links.push(
        { to: '/students', label: 'Students' },
        { to: '/attendance', label: 'Attendance' },
        { to: '/academic', label: 'Academic' },
        { to: '/library', label: 'Library' }
      );
    } else if (userRole === "Parent") {
      links.push(
        { to: '/students', label: 'My Children' },
        { to: '/finance', label: 'Finance' }
      );
    } else if (userRole === "Admin") {
      links.push(
        { to: '/students', label: 'Students' },
        { to: '/staff', label: 'Staff' },
        { to: '/attendance', label: 'Attendance' },
        { to: '/exams', label: 'Exams' },
        { to: '/library', label: 'Library' },
        { to: '/finance', label: 'Finance' },
        { to: '/inventory', label: 'Inventory' },
        { to: '/academic', label: 'Academic' }
      );
    }

    return links.map(link => (
      <NavLink 
        key={link.to}
        to={link.to}
        className="nav-link"
        style={({ isActive }) => ({
          ...styles.navLink,
          ...(isActive ? styles.navLinkActive : {})
        })}
      >
        {link.label}
      </NavLink>
    ));
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={styles.navbar}>
      <div className="container-fluid d-flex align-items-center justify-content-between">
        {/* Logo */}
        <NavLink to="/" className="navbar-brand">
          <img src="/logo.png" alt="Logo" style={styles.logo} />
        </NavLink>

        {/* Toggler */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <div style={styles.navSection}>
            {loading ? (
              <span className="text-light">Loading...</span>
            ) : (
              buildLinks()
            )}
          </div>
        </div>

        {/* Logout */}
        <div className="d-none d-lg-flex">
          <NavLink 
            to="/login" 
            className="nav-link"
            style={({ isActive }) => ({
              ...styles.navLink,
              ...(isActive ? styles.navLinkActive : {})
            })}
          >
            Logout
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
