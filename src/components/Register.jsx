import React from 'react';
import { Link } from 'react-router-dom';

function RegistrationForm() {
  // Mock Google OAuth handler (frontend only)
  const handleGoogleSignIn = () => {
    console.log("Google OAuth would trigger here in production");
    alert("In a real implementation, this would open Google OAuth flow");
  };

  return (
    <div className="registration-container d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-7">
            <div className="card shadow-lg border-0 mt-4">
              <div className="card-header bg-primary-custom text-white text-center py-4">
                <h2 className="mb-0">
                  <i className="bi bi-person-plus me-2"></i>
                  GS Busasamana Registration
                </h2>
              </div>
              <div className="card-body p-5">
                {/* Google OAuth Button - Frontend Only */}
                <div className="text-center mb-4">
                  <button 
                    onClick={handleGoogleSignIn}
                    className="btn btn-google-oauth"
                  >
                    <img 
                      src="/google-icon-logo-svgrepo-com.svg" 
                      alt="Google logo" 
                      className="google-logo"
                    />
                    Sign up with Google
                  </button>
                  
                  <div className="divider my-4">
                    <span className="divider-line"></span>
                    <span className="divider-text">OR</span>
                    <span className="divider-line"></span>
                  </div>
                </div>

                {/* Manual Registration Form */}
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label htmlFor="firstName" className="form-label">First Name</label>
                      <div className="input-group">
                        <span className="input-group-text bg-danger-custom text-white">
                          <i className="bi bi-person"></i>
                        </span>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="firstName" 
                          placeholder="Enter first name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <label htmlFor="lastName" className="form-label">Last Name</label>
                      <div className="input-group">
                        <span className="input-group-text bg-danger-custom text-white">
                          <i className="bi bi-person"></i>
                        </span>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="lastName" 
                          placeholder="Enter last name"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <div className="input-group">
                      <span className="input-group-text bg-danger-custom text-white">
                        <i className="bi bi-envelope"></i>
                      </span>
                      <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="Enter email address"
                        required
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label htmlFor="password" className="form-label">Password</label>
                      <div className="input-group">
                        <span className="input-group-text bg-danger-custom text-white">
                          <i className="bi bi-lock"></i>
                        </span>
                        <input 
                          type="password" 
                          className="form-control" 
                          id="password" 
                          placeholder="Create password"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                      <div className="input-group">
                        <span className="input-group-text bg-danger-custom text-white">
                          <i className="bi bi-lock"></i>
                        </span>
                        <input 
                          type="password" 
                          className="form-control" 
                          id="confirmPassword" 
                          placeholder="Confirm password"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <div className="input-group">
                      <span className="input-group-text bg-danger-custom text-white">
                        <i className="bi bi-telephone"></i>
                      </span>
                      <input 
                        type="tel" 
                        className="form-control" 
                        id="phone" 
                        placeholder="Enter phone number"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="role" className="form-label">Register As</label>
                    <select className="form-select" id="role" required>
                      <option value="">Select your role</option>
                      <option value="teacher">Teacher</option>
                      <option value="parent">Parent</option>
                    </select>
                  </div>

                  <div className="form-check mb-4">
                    <input className="form-check-input" type="checkbox" id="terms" required />
                    <label className="form-check-label" htmlFor="terms">
                      I agree to the <Link to="/terms" className="text-danger-custom">Terms and Conditions</Link>
                    </label>
                  </div>

                  <button type="submit" className="btn btn-danger-custom w-100 py-2 mb-3">
                    Register <i className="bi bi-person-plus ms-2"></i>
                  </button>

                  <div className="text-center">
                    <p className="mb-0">
                      Already have an account?{' '}
                      <Link to="/login" className="text-danger-custom fw-bold text-decoration-none">
                        Login here
                      </Link>
                    </p>
                  </div>
                </form>
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
        .registration-container {
          min-height: calc(100vh - 60px); /* Subtract navbar height */
          padding-top: 60px; /* Equal to navbar height */
          width: 100vw;
          background-color: #f8f9fa;
        }
        .bg-primary-custom {
          background-color: #0b1e3d;
        }
        .bg-danger-custom {
          background-color: #b40000;
        }
        .btn-danger-custom {
          background-color: #b40000;
          border-color: #b40000;
          color: white;
        }
        .btn-danger-custom:hover {
          background-color: #900000;
          border-color: #900000;
          color: white;
        }
        .text-danger-custom {
          color: #b40000;
        }
        .card {
          border-radius: 10px;
          overflow: hidden;
          border: none;
        }
        .card-header {
          border-bottom: none;
        }
        .divider {
          display: flex;
          align-items: center;
          text-align: center;
          color: #6c757d;
        }
        .divider::before,
        .divider::after {
          content: '';
          flex: 1;
          border-bottom: 1px solid #dee2e6;
        }
        .divider:not(:empty)::before {
          margin-right: 1em;
        }
        .divider:not(:empty)::after {
          margin-left: 1em;
        }
        .btn-google-oauth {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: white;
          color: #444;
          border: 1px solid #ddd;
          border-radius: 50px;
          padding: 10px 20px;
          font-weight: 500;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          width: 100%;
          max-width: 300px;
          margin: 0 auto;
        }
        .btn-google-oauth:hover {
          background: #f8f8f8;
          box-shadow: 0 3px 6px rgba(0,0,0,0.15);
        }
        .google-logo {
          width: 20px;
          height: 20px;
          margin-right: 12px;
        }
      `}</style>
    </div>
  );
}

export default RegistrationForm;