import React from 'react';

function Contact() {
  return (
    <div className="contact-page" style={{
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
      paddingTop: '80px', // Account for fixed navbar
      width: '100vw' // Forces full viewport width
    }}>
      <div className="container py-5">
        {/* Page Header */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3" style={{ color: '#0b1e3d' }}>
            <i className="bi bi-envelope text-danger-custom me-3"></i>
            Contact GS Busasamana
          </h1>
          <div className="mx-auto mb-4" style={{
            height: '4px',
            width: '100px',
            backgroundColor: '#b40000'
          }}></div>
          <p className="lead" style={{ color: '#0b1e3d' }}>
            We'd love to hear from you! Reach out with any questions or inquiries.
          </p>
        </div>

        <div className="row g-5">
          {/* Contact Information */}
          <div className="col-lg-5">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-header bg-danger-custom text-white py-3">
                <h2 className="h4 text-danger mb-0">
                  <i className="bi bi-info-circle me-2"></i>
                  School Information
                </h2>
              </div>
              <div className="card-body">
                <div className="mb-4">
                  <h4 className="fw-bold mb-3" style={{ color: '#0b1e3d' }}>
                    <i className="bi bi-geo-alt text-danger-custom me-2"></i>
                    Address
                  </h4>
                  <p className="text-muted mb-0">
                    GS Busasamana, Rubavu District, Western Province, Rwanda
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="fw-bold mb-3" style={{ color: '#0b1e3d' }}>
                    <i className="bi bi-telephone text-danger-custom me-2"></i>
                    Phone
                  </h4>
                  <p className="text-muted mb-0">
                    +250 78X XXX XXX
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="fw-bold mb-3" style={{ color: '#0b1e3d' }}>
                    <i className="bi bi-envelope text-danger-custom me-2"></i>
                    Email
                  </h4>
                  <p className="text-muted mb-0">
                    info@gsbusasamana.rw
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="fw-bold mb-3" style={{ color: '#0b1e3d' }}>
                    <i className="bi bi-clock text-danger-custom me-2"></i>
                    Office Hours
                  </h4>
                  <p className="text-muted mb-0">
                    Monday - Friday: 7:30 AM - 5:00 PM<br />
                    Saturday: 8:00 AM - 12:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>

                <div className="mt-4">
                  <h4 className="fw-bold mb-3" style={{ color: '#0b1e3d' }}>
                    <i className="bi bi-share text-danger-custom me-2"></i>
                    Follow Us
                  </h4>
                  <div className="d-flex gap-3">
                    <a href="#" className="social-icon">
                      <i className="bi bi-facebook fs-4"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="bi bi-twitter fs-4"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="bi bi-instagram fs-4"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="bi bi-youtube fs-4"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-header bg-danger-custom text-white py-3">
                <h2 className="h4 text-danger mb-0">
                  <i className="bi bi-send me-2"></i>
                  Send Us a Message
                </h2>
              </div>
              <div className="card-body">
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label fw-bold" style={{ color: '#0b1e3d' }}>
                        Full Name
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="bi bi-person"></i>
                        </span>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="name" 
                          placeholder="Your name" 
                          required 
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label fw-bold" style={{ color: '#0b1e3d' }}>
                        Email Address
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="bi bi-envelope"></i>
                        </span>
                        <input 
                          type="email" 
                          className="form-control" 
                          id="email" 
                          placeholder="Your email" 
                          required 
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="subject" className="form-label fw-bold" style={{ color: '#0b1e3d' }}>
                        Subject
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="bi bi-card-heading"></i>
                        </span>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="subject" 
                          placeholder="Message subject" 
                          required 
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="form-label fw-bold" style={{ color: '#0b1e3d' }}>
                        Your Message
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="bi bi-chat-left-text"></i>
                        </span>
                        <textarea 
                          className="form-control" 
                          id="message" 
                          rows="5" 
                          placeholder="Type your message here..." 
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <button 
                        type="submit" 
                        className="btn btn-danger-custom w-100 py-2"
                      >
                        <i className="bi bi-send-fill me-2"></i>
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-danger-custom text-white py-3">
                <h2 className="h4 text-danger mb-0">
                  <i className="bi bi-map me-2"></i>
                  Our Location
                </h2>
              </div>
              <div className="card-body p-0">
                <div className="ratio ratio-16x9">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.634075729687!2d29.38312981475392!3d-1.6777229987349845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dc3b1c5f4c8e5f%3A0x5a9e0c1b3d1e3e1f!2sRubavu%20District%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy"
                    title="GS Busasamana Location"
                  ></iframe>
                </div>
              </div>
            </div>
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
        .contact-page {
          position: relative;
          overflow-x: hidden;
        }
        .card {
          transition: all 0.3s ease;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1) !important;
        }
        .social-icon {
          color: #0b1e3d;
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          color: #b40000;
          transform: translateY(-3px);
        }
        .btn-danger-custom {
          background-color: #b40000;
          border-color: #b40000;
          transition: all 0.3s ease;
        }
        .btn-danger-custom:hover {
          background-color: #900000;
          border-color: #900000;
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(180, 0, 0, 0.2);
        }
        .text-danger-custom {
          color: #b40000;
        }
        .input-group-text {
          background-color: #f8f9fa;
          color: #b40000;
        }
      `}</style>
    </div>
  );
}

export default Contact;