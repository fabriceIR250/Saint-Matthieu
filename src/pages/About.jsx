import React from 'react';
import Footer from '../components/Footer'; // Import Footer component
import Navbar from '../components/Navbar'; // Import Navbar component

function About() {
  return (
    <>
    <Navbar /> {/* Navbar component */}
    <div 
      className="about-bg text-white d-flex flex-column min-vh-100" 
      style={{ width: '100vw' }} // Forces full viewport width
    >
      {/* Main Content Container */}
      <div className="container my-auto py-5"> {/* my-auto centers vertically */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            
            {/* Header */}
            <div className="text-center mb-5 py-5">
              <h1 className="display-4 fw-bold mb-4">
                <i className="bi bi-building text-danger-custom me-3"></i>
                About GS Busasamana
              </h1>
              <div 
                className="mx-auto bg-danger-custom" 
                style={{ height: '4px', width: '100px' }}
              ></div>
            </div>

            {/* School Description */}
            <p className="lead text-center text-white-50 mb-5">
              GS Busasamana is a public secondary school in Rubavu District, Rwanda. 
              Established in <span className="text-danger-custom fw-bold">1986</span>, 
              we're recognized for academic excellence and holistic development.
            </p>

            {/* Core Values Card */}
            <div className="card bg-dark-custom border-0 shadow mb-5">
              <div className="card-header bg-danger-custom py-3">
                <h2 className="h4 text-danger mb-0">
                  <i className="bi bi-stars me-2"></i>
                  Our Core Values
                </h2>
              </div>
              <div className="card-body p-4">
                <ul className="list-group list-group-flush">
                  {['Integrity', 'Excellence', 'Discipline', 'Responsibility', 'Teamwork'].map((value) => (
                    <li 
                      key={value} 
                      className="list-group-item bg-transparent text-white border-light d-flex align-items-center py-3"
                    >
                      <i className="bi bi-check-circle-fill text-danger-custom me-3 fs-5"></i>
                      <span className="fs-5">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mission & Vision Grid */}
            <div className="row g-4">
              <div className="col-md-6">
                <div className="h-100 p-4 bg-dark-custom rounded">
                  <h3 className="text-danger-custom">
                    <i className="bi bi-compass me-2"></i>
                    Mission
                  </h3>
                  <p className="text-white-50 mb-0">
                    To provide quality education that nurtures learners academically, morally, and socially.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="h-100 p-4 bg-dark-custom rounded">
                  <h3 className="text-danger-custom">
                    <i className="bi bi-eye me-2"></i>
                    Vision
                  </h3>
                  <p className="text-white-50 mb-0">
                    To be a center of excellence in academic performance and character formation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer component */}
      <>
      <Footer /> 
      </>

      {/* Bootstrap Icons */}
      <link 
        rel="stylesheet" 
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css" 
      />

      {/* Inline CSS */}
      <style jsx>{`
        .about-bg {
          background-color: #0b1e3d; /* Navy blue */
          overflow-x: hidden; /* Prevents horizontal scroll */
        }
        .bg-dark-custom {
          background-color: #122a4f; /* Darker navy */
        }
        .text-danger-custom {
          color: #b40000; /* Red accent */
        }
        .list-group-item {
          transition: all 0.3s ease;
        }
        .list-group-item:hover {
          transform: translateX(8px);
          background-color: rgba(180, 0, 0, 0.1) !important;
        }
      `}</style>
    </div>
    </>
  );
}

export default About;