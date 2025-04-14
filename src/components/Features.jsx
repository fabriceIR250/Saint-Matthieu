import React from 'react';
import './Features.css';

function Features() {
  return (
    <div 
    className="about-bg text-white d-flex flex-column min-vh-100" 
    style={{ width: '100vw' }} // Forces full viewport width
  >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5 py-4">
          <h2 className="display-5 fw-bold mb-3" style={{ color: '#0b1e3d' }}>
            <i className="bi bi-stars text-danger-custom me-2"></i>
            Why Choose GS Busasamana
          </h2>
          <div className="mx-auto" style={{ 
            height: '3px', 
            width: '80px', 
            backgroundColor: '#b40000' 
          }}></div>
        </div>

        <div className="row g-4">
          {/* Academic Excellence */}
          <div className="col-12 col-md-4">
            <div className="card feature-card h-100 border-0 rounded-4 shadow-sm overflow-hidden bg-white">
              <div className="card-body p-4 d-flex flex-column">
                <div className="feature-icon mb-4 text-center">
                  <div className="icon-wrapper rounded-circle d-inline-flex align-items-center justify-content-center" 
                    style={{
                      width: '70px',
                      height: '70px',
                      backgroundColor: 'rgba(180, 0, 0, 0.1)'
                    }}>
                    <i className="bi bi-award fs-3" style={{ color: '#b40000' }}></i>
                  </div>
                </div>
                <h4 className="text-center fw-bold mb-3" style={{ color: '#0b1e3d' }}>
                  Academic Excellence
                </h4>
                <p className="text-center text-muted mb-4">
                  Our curriculum focuses on fostering critical thinking and excellence in all subjects.
                </p>
                <div className="mt-auto text-center">
                  <button className="btn btn-sm" style={{ 
                    color: '#b40000',
                    border: '1px solid #b40000',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#b40000';
                    e.target.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#b40000';
                  }}>
                    Learn More <i className="bi bi-arrow-right ms-1"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Student-Centered Approach */}
          <div className="col-12 col-md-4">
            <div className="card feature-card h-100 border-0 rounded-4 shadow-sm overflow-hidden bg-white">
              <div className="card-body p-4 d-flex flex-column">
                <div className="feature-icon mb-4 text-center">
                  <div className="icon-wrapper rounded-circle d-inline-flex align-items-center justify-content-center" 
                    style={{
                      width: '70px',
                      height: '70px',
                      backgroundColor: 'rgba(180, 0, 0, 0.1)'
                    }}>
                    <i className="bi bi-person-lines-fill fs-3" style={{ color: '#b40000' }}></i>
                  </div>
                </div>
                <h4 className="text-center fw-bold mb-3" style={{ color: '#0b1e3d' }}>
                  Student-Centered Approach
                </h4>
                <p className="text-center text-muted mb-4">
                  We place our students at the center of their education, encouraging individual growth.
                </p>
                <div className="mt-auto text-center">
                  <button className="btn btn-sm" style={{ 
                    color: '#b40000',
                    border: '1px solid #b40000',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#b40000';
                    e.target.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#b40000';
                  }}>
                    Learn More <i className="bi bi-arrow-right ms-1"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Modern Facilities */}
          <div className="col-12 col-md-4">
            <div className="card feature-card h-100 border-0 rounded-4 shadow-sm overflow-hidden bg-white">
              <div className="card-body p-4 d-flex flex-column">
                <div className="feature-icon mb-4 text-center">
                  <div className="icon-wrapper rounded-circle d-inline-flex align-items-center justify-content-center" 
                    style={{
                      width: '70px',
                      height: '70px',
                      backgroundColor: 'rgba(180, 0, 0, 0.1)'
                    }}>
                    <i className="bi bi-building fs-3" style={{ color: '#b40000' }}></i>
                  </div>
                </div>
                <h4 className="text-center fw-bold mb-3" style={{ color: '#0b1e3d' }}>
                  Modern Facilities
                </h4>
                <p className="text-center text-muted mb-4">
                  Our school is equipped with state-of-the-art facilities for hands-on learning.
                </p>
                <div className="mt-auto text-center">
                  <button className="btn btn-sm" style={{ 
                    color: '#b40000',
                    border: '1px solid #b40000',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#b40000';
                    e.target.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#b40000';
                  }}>
                    Learn More <i className="bi bi-arrow-right ms-1"></i>
                  </button>
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
        .feature-card {
          transition: all 0.3s ease;
          border: 1px solid rgba(0,0,0,0.05);
        }
        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important;
        }
        .icon-wrapper {
          transition: all 0.3s ease;
        }
        .feature-card:hover .icon-wrapper {
          transform: rotate(15deg);
          background-color: rgba(180, 0, 0, 0.2) !important;
        }
      `}</style>
    </div>
  );
}

export default Features;