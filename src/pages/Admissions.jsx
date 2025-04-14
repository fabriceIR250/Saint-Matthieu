import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the path as necessary

function Admissions() {
  return (
    <>
    <Navbar />
    <div className="admissions-page text-white d-flex flex-column min-vh-100" style={{
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
      paddingTop: '80px' ,
      width: '100vw'// Added padding to account for fixed navbar
    }}>
      {/* Page Header - Now properly displayed below navbar */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3" style={{ color: '#0b1e3d' }}>
            <i className="bi bi-file-earmark-text text-danger-custom me-3"></i>
            Admissions for 2025 Academic Year
          </h1>
          <div className="mx-auto mb-4" style={{
            height: '4px',
            width: '100px',
            backgroundColor: '#b40000'
          }}></div>
          <p className="lead" style={{ color: '#0b1e3d' }}>
            Join GS Busasamana's dynamic learning environment where academic and personal growth are prioritized
          </p>
        </div>

        {/* Main Content */}
        <div className="row g-5">
          {/* Requirements Section */}
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-header bg-danger-custom text-white py-3">
                <h2 className="h4 text-danger mb-0">
                  <i className="bi bi-list-check me-2"></i>
                  Admission Requirements
                </h2>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-danger-custom me-3 fs-5"></i>
                    Completed Application Form
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-danger-custom me-3 fs-5"></i>
                    Copy of Birth Certificate
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-danger-custom me-3 fs-5"></i>
                    Recent Passport-sized Photographs (2)
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-danger-custom me-3 fs-5"></i>
                    Academic Transcripts (where applicable)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-header bg-danger-custom text-white py-3">
                <h2 className="h4 text-danger mb-0">
                  <i className="bi bi-diagram-3 me-2"></i>
                  Admission Process
                </h2>
              </div>
              <div className="card-body">
                <div className="process-steps">
                  <div className="step d-flex mb-4">
                    <div className="step-number rounded-circle d-flex align-items-center justify-content-center me-3" 
                      style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: '#b40000',
                        color: 'white',
                        fontWeight: 'bold'
                      }}>
                      1
                    </div>
                    <div className="step-content">
                      <h5 className="fw-bold" style={{ color: '#0b1e3d' }}>Obtain Application Form</h5>
                      <p className="text-muted mb-0">
                        Collect the admission form from our school office or download it online
                      </p>
                    </div>
                  </div>

                  <div className="step d-flex mb-4">
                    <div className="step-number rounded-circle d-flex align-items-center justify-content-center me-3" 
                      style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: '#b40000',
                        color: 'white',
                        fontWeight: 'bold'
                      }}>
                      2
                    </div>
                    <div className="step-content">
                      <h5 className="fw-bold" style={{ color: '#0b1e3d' }}>Submit Documents</h5>
                      <p className="text-muted mb-0">
                        Complete the form and submit with all required documents
                      </p>
                    </div>
                  </div>

                  <div className="step d-flex">
                    <div className="step-number rounded-circle d-flex align-items-center justify-content-center me-3" 
                      style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: '#b40000',
                        color: 'white',
                        fontWeight: 'bold'
                      }}>
                      3
                    </div>
                    <div className="step-content">
                      <h5 className="fw-bold" style={{ color: '#0b1e3d' }}>Await Acceptance</h5>
                      <p className="text-muted mb-0">
                        Our admissions team will review your application and notify you of acceptance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card border-0 shadow-sm">
              <div className="card-body text-center py-4">
                <h3 className="mb-4" style={{ color: '#0b1e3d' }}>
                  <i className="bi bi-download text-danger-custom me-2"></i>
                  Ready to Apply?
                </h3>
                <p className="lead mb-4">
                  Download the application form and begin your journey with GS Busasamana
                </p>
                <button className="btn btn-danger-custom btn-lg px-5 py-3">
                  <i className="bi bi-file-earmark-arrow-down me-2"></i>
                  Download Application Form
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="text-center py-4" style={{ backgroundColor: '#0b1e3d', borderRadius: '8px' }}>
              <h4 className="text-white mb-4">
                <i className="bi bi-question-circle me-2"></i>
                Need Help With Admission?
              </h4>
              <p className="text-white-50 mb-4">
                Contact our admissions office for any questions about the process
              </p>
              <div className="d-flex justify-content-center gap-4">
                <a href="tel:+25078XXXXXX" className="text-white text-decoration-none">
                  <i className="bi bi-telephone-fill me-2"></i>
                  +250 78X XXX XXX
                </a>
                <a href="mailto:info@gsbusasamana.rw" className="text-white text-decoration-none">
                  <i className="bi bi-envelope-fill me-2"></i>
                  info@gsbusasamana.rw
                </a>
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
        .card {
          transition: all 0.3s ease;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1) !important;
        }
      `}</style>
    </div>
    </>
  );
}

export default Admissions;