import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const styles = {
    navbar: {
      backgroundColor: '#ffffff',
      borderBottom: '3px solid #0b1e3d', // Deep navy blue
      padding: '1rem 2rem',
      zIndex: 1000,
    },
    navLink: {
      color: '#0b1e3d',
      fontWeight: '500',
      transition: 'color 0.3s ease',
    },
    navLinkHover: {
      color: '#b40000',
    },
    brandLogo: {
      height: '60px',
    },
    btnOutline: {
      color: '#0b1e3d',
      border: '1px solid #0b1e3d',
      transition: 'all 0.3s ease',
    },
    btnOutlineHover: {
      backgroundColor: '#0b1e3d',
      color: '#fff',
    },
    btnPrimary: {
      backgroundColor: '#b40000',
      border: '1px solid #b40000',
      color: '#fff',
      transition: 'all 0.3s ease',
    },
    btnPrimaryHover: {
      backgroundColor: '#900000',
      borderColor: '#900000',
    },
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow" style={styles.navbar}>
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          <img src="/public/Logo.png" alt="School Logo" style={styles.brandLogo} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            {[
              { to: '/', label: 'Home', icon: 'house-door' },
              { to: '/about', label: 'About Us', icon: 'info-circle' },
              { to: '/academics', label: 'Academics', icon: 'book' },
              { to: '/admissions', label: 'Admissions', icon: 'file-earmark-text' },
              { to: '/gallery', label: 'Gallery', icon: 'camera' },
              { to: '/contact', label: 'Contact', icon: 'envelope' },
            ].map(({ to, label, icon }, index) => (
              <li className="nav-item mx-2" key={index}>
                <Link
                  className="nav-link"
                  to={to}
                  style={styles.navLink}
                  onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)}
                  onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
                >
                  <i className={`bi bi-${icon}`}></i> {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="d-flex ms-auto">
            <button
              className="btn mx-2"
              style={styles.btnOutline}
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
