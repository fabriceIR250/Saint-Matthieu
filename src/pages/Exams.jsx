import React from 'react';

function Exams() {
  return (
    <div className="exams-page" style={{
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
      paddingTop: '80px',
      width : '100vw'
      // Account for fixed navbar
    }}>
      <div className="container py-5">
        {/* Page Header */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3" style={{ color: '#0b1e3d' }}>
            <i className="bi bi-journal-bookmark text-danger-custom me-3"></i>
            Exam Portal
          </h1>
          <div className="mx-auto mb-4" style={{
            height: '4px',
            width: '100px',
            backgroundColor: '#b40000'
          }}></div>
          <p className="lead" style={{ color: '#0b1e3d' }}>
            Access exam results, schedules, and academic performance statistics
          </p>
        </div>

        {/* Main Content */}
        <div className="row g-4">
          {/* Exam Results Card */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-header bg-danger-custom text-white py-3">
                <h2 className="h4 text-danger mb-0">
                  <i className="bi bi-clipboard-data me-2"></i>
                  View Exam Results
                </h2>
              </div>
              <div className="card-body d-flex flex-column">
                <p className="text-muted">
                  Check term and annual exam results once they are published.
                </p>
                <ul className="list-group list-group-flush mb-4">
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-danger-custom me-3"></i>
                    Term Results
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-danger-custom me-3"></i>
                    Annual Results
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-danger-custom me-3"></i>
                    Performance Statistics
                  </li>
                </ul>
                <button className="btn btn-outline-danger-custom mt-auto">
                  View Results <i className="bi bi-arrow-right ms-2"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Report Cards Card */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-header bg-danger-custom text-white py-3">
                <h2 className="h4 text-danger mb-0">
                  <i className="bi bi-file-earmark-text me-2"></i>
                  Download Report Cards
                </h2>
              </div>
              <div className="card-body d-flex flex-column">
                <p className="text-muted">
                  Download official report cards for your academic records.
                </p>
                <div className="mb-4">
                  <div className="alert alert-warning" style={{ backgroundColor: 'rgba(180, 0, 0, 0.1)' }}>
                    <i className="bi bi-exclamation-circle-fill text-danger-custom me-2"></i>
                    Results are only available for students who have completed all requirements.
                  </div>
                </div>
                <button className="btn btn-outline-danger-custom mt-auto">
                  Download <i className="bi bi-download ms-2"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Exam Timetables Card */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-header bg-danger-custom text-white py-3">
                <h2 className="h4 text-danger mb-0">
                  <i className="bi bi-calendar-event me-2"></i>
                  Exam Timetables
                </h2>
              </div>
              <div className="card-body d-flex flex-column">
                <p className="text-muted">
                  View upcoming exam schedules and important dates.
                </p>
                <ul className="list-group list-group-flush mb-4">
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-calendar-week text-danger-custom me-3"></i>
                    Term 1 Exams: March 2025
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-calendar-week text-danger-custom me-3"></i>
                    Term 2 Exams: May 2025
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-calendar-week text-danger-custom me-3"></i>
                    Annual Exams: November 2025
                  </li>
                </ul>
                <button className="btn btn-outline-danger-custom mt-auto">
                  View Schedule <i className="bi bi-calendar3 ms-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card border-0 shadow-sm">
              <div className="card-body text-center py-4" style={{ backgroundColor: '#0b1e3d' }}>
                <h3 className="text-white mb-3">
                  <i className="bi bi-megaphone text-danger-custom me-2"></i>
                  Latest Announcement
                </h3>
                <p className="text-white-50 lead mb-0">
                  Term 2 Results to be Released on May 20, 2025
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Login Reminder */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="text-center py-3">
              <p className="text-muted mb-0">
                <i className="bi bi-info-circle-fill text-danger-custom me-2"></i>
                Please login to access personalized exam information
              </p>
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
        .btn-outline-danger-custom {
          color: #b40000;
          border-color: #b40000;
          transition: all 0.3s ease;
        }
        .btn-outline-danger-custom:hover {
          background-color: #b40000;
          color: white;
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
  );
}

export default Exams;