import React from 'react';
import './Features.css'; // Still use for transitions

function Features() {
  return (
    <div className="container-fluid mt-4 mb-5">
      <div className="row text-center g-4">
        {/* Academic Excellence */}
        <div className="col-12 col-md-4">
          <div className="card feature-card shadow-lg border-0 rounded-4 overflow-hidden animate-card h-100 bg-light">
            <div className="card-body d-flex flex-column justify-content-between">
              <div className="feature-icon mb-3 text-danger">
                <i className="bi bi-award fs-1"></i>
              </div>
              <div>
                <h4 className="mt-3 fs-5 fw-bold text-primary-custom">Academic Excellence</h4>
                <p className="text-secondary">
                  Our curriculum focuses on fostering critical thinking and excellence in all subjects.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Student-Centered Approach */}
        <div className="col-12 col-md-4">
          <div className="card feature-card shadow-lg border-0 rounded-4 overflow-hidden animate-card h-100 bg-light">
            <div className="card-body d-flex flex-column justify-content-between">
              <div className="feature-icon mb-3 text-danger">
                <i className="bi bi-person-lines-fill fs-1"></i>
              </div>
              <div>
                <h4 className="mt-3 fs-5 fw-bold text-primary-custom">Student-Centered Approach</h4>
                <p className="text-secondary">
                  We place our students at the center of their education, encouraging individual growth and learning.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Facilities */}
        <div className="col-12 col-md-4">
          <div className="card feature-card shadow-lg border-0 rounded-4 overflow-hidden animate-card h-100 bg-light">
            <div className="card-body d-flex flex-column justify-content-between">
              <div className="feature-icon mb-3 text-danger">
                <i className="bi bi-building fs-1"></i>
              </div>
              <div>
                <h4 className="mt-3 fs-5 fw-bold text-primary-custom">Modern Facilities</h4>
                <p className="text-secondary">
                  Saint Matthieu is equipped with state-of-the-art facilities for a hands-on and engaging learning experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
