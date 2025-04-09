import React from 'react';

function Footer() {
  return (
    <footer className="footer-bg text-white pt-5 pb-4">
      <div className="container">
        <div className="row">
          {/* About School */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase mb-4 fw-bold d-flex align-items-center">
              <i className="bi bi-book-half me-2 text-danger-custom"></i>
              Saint Matthieu
            </h5>
            <p className="mb-4 text-light">
              We are committed to academic excellence and character development in a safe and supportive learning environment.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="bg-white text-danger-custom p-2 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="bg-white text-danger-custom p-2 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="bg-white text-danger-custom p-2 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase mb-4 fw-bold d-flex align-items-center">
              <i className="bi bi-lightning-charge me-2 text-danger-custom"></i>
              Quick Links
            </h5>
            <ul className="list-unstyled">
              {['About Us', 'Academics', 'Admissions', 'Events', 'Contact'].map((link, index) => (
                <li className="mb-2" key={index}>
                  <a href="#" className="text-white-50 text-decoration-none d-flex align-items-center hover-white">
                    <i className="bi bi-chevron-right me-2"></i>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase mb-4 fw-bold d-flex align-items-center">
              <i className="bi bi-envelope me-2 text-danger-custom"></i>
              Contact Us
            </h5>
            <ul className="list-unstyled text-white-50">
              <li className="mb-3 d-flex align-items-start">
                <i className="bi bi-geo-alt me-2 mt-1"></i>
                <span>123 Education Way, Saint Matthieu District</span>
              </li>
              <li className="mb-3 d-flex align-items-start">
                <i className="bi bi-telephone me-2 mt-1"></i>
                <span>+250 782 123 456</span>
              </li>
              <li className="d-flex align-items-start">
                <i className="bi bi-envelope me-2 mt-1"></i>
                <span>info@saintmatthieu.rw</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase mb-4 fw-bold d-flex align-items-center">
              <i className="bi bi-newspaper me-2 text-danger-custom"></i>
              Newsletter
            </h5>
            <p className="text-white-50 mb-4">Subscribe to our newsletter for updates on school events and news.</p>
            <div className="input-group mb-3">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Your email" 
                aria-label="Your email"
              />
              <button 
                className="btn btn-danger-custom" 
                type="button"
              >
                <i className="bi bi-send text-white"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-4 border-light" />

        {/* Copyright */}
        <div className="row align-items-center">
          <div className="col-md-8 mb-3 mb-md-0">
            <p className="mb-0 text-white-50">
              © 2025 Saint Matthieu. All rights reserved.
            </p>
          </div>
          <div className="col-md-4 text-end">
            <p className="mb-0 text-white-50 d-flex justify-content-md-end align-items-center">
              Made with 
              <i className="bi bi-heart-fill text-danger mx-1"></i>
              by Dev Fab250
            </p>
          </div>
        </div>
      </div>

      {/* Bootstrap Icons */}
      <link 
        rel="stylesheet" 
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css"
      />

      {/* Inline CSS */}
      <style jsx>{`
        .footer-bg {
          background-color: #0b1e3d; /* Navy blue */
        }
        .btn-danger-custom {
          background-color: #b40000;
          border-color: #b40000;
        }
        .btn-danger-custom:hover {
          background-color: #900000;
          border-color: #900000;
        }
        .text-danger-custom {
          color: #b40000;
        }
        .hover-white:hover {
          color: white !important;
          transition: color 0.3s ease;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
