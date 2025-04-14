import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const userRole = "Admin";

  const styles = {
    navbar: {
      backgroundColor: '#0b1e3d',
      padding: '1rem 2rem',
    },
    navLink: {
      color: '#ffffff',
      fontWeight: '500',
      padding: '0.5rem 1rem',
      borderRadius: '4px',
      transition: 'all 0.3s ease',
    },
    navLinkActive: {
      backgroundColor: '#b40000',
      color: '#ffffff',
    },
    logo: {
      height: '40px',
      width: 'auto',
    },
    navSection: {
      display: 'flex',
      alignItems: 'center',
    }
  };

  const commonLinks = (
    <>
      <NavLink to="/dashboard" className="nav-link" style={({ isActive }) => ({ ...styles.navLink, ...(isActive ? styles.navLinkActive : {}) })}>Dashboard</NavLink>
      <NavLink to="/exams" className="nav-link" style={({ isActive }) => ({ ...styles.navLink, ...(isActive ? styles.navLinkActive : {}) })}>Exams</NavLink>
      <NavLink to="/library" className="nav-link" style={({ isActive }) => ({ ...styles.navLink, ...(isActive ? styles.navLinkActive : {}) })}>Library</NavLink>
      <NavLink to="/messages" className="nav-link" style={({ isActive }) => ({ ...styles.navLink, ...(isActive ? styles.navLinkActive : {}) })}>Messages</NavLink>
      <NavLink to="/settings" className="nav-link" style={({ isActive }) => ({ ...styles.navLink, ...(isActive ? styles.navLinkActive : {}) })}>Settings</NavLink>
    </>
  );

  const adminTeacherLinks = (
    <>
      <NavLink to="/students" className="nav-link" style={({ isActive }) => ({ ...styles.navLink, ...(isActive ? styles.navLinkActive : {}) })}>Students</NavLink>
      <NavLink to="/staff" className="nav-link" style={({ isActive }) => ({ ...styles.navLink, ...(isActive ? styles.navLinkActive : {}) })}>Staff</NavLink>
      <NavLink to="/academic" className="nav-link" style={({ isActive }) => ({ ...styles.navLink, ...(isActive ? styles.navLinkActive : {}) })}>Academic</NavLink>
      <NavLink to="/attendance" className="nav-link" style={({ isActive }) => ({ ...styles.navLink, ...(isActive ? styles.navLinkActive : {}) })}>Attendance</NavLink>
      <NavLink to="/finance" className="nav-link" style={({ isActive }) => ({ ...styles.navLink, ...(isActive ? styles.navLinkActive : {}) })}>Finance</NavLink>
      <NavLink to="/inventory" className="nav-link" style={({ isActive }) => ({ ...styles.navLink, ...(isActive ? styles.navLinkActive : {}) })}>Inventory</NavLink>
    </>
  );

  return (
    <nav className="navbar navbar-expand-md fixed-top" style={styles.navbar}>
      <div className="container-fluid">
        <NavLink to="/">
          <img src="/Logo.png" alt="Logo" style={styles.logo} />
        </NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <div style={styles.navSection}>
            {commonLinks}
            {(userRole === "Admin" || userRole === "Teacher") && adminTeacherLinks}
          </div>

          <div className="d-flex">
            <NavLink to="/login" className="nav-link" style={({ isActive }) => ({ ...styles.navLink, ...(isActive ? styles.navLinkActive : {}) })}>Logout</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
    