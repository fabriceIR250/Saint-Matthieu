import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroCarousel.css';

function HeroCarousel() {
  const navigate = useNavigate();

  return (
    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {/* First Slide */}
        <div className="carousel-item active">
          <div
            className="hero-section"
            style={{
              backgroundImage: `linear-gradient(rgba(11, 30, 61, 0.7), rgba(11, 30, 61, 0.7)), url(https://pbs.twimg.com/media/Gj21VnUWUAELjTi?format=jpg&name=large)`,
            }}
          >
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12 hero-content text-center text-white">
                  <p className="text-danger-custom animate-text mb-2" style={{ fontSize: '1.25rem' }}>
                    <i className="bi bi-stars me-2"></i>Welcome to GS Busasamana
                  </p>
                  <h1 className="animate-text display-4 fw-bold mb-4">
                    Empowering Students for Excellence
                  </h1>
                  <p className="animate-text lead mb-5" style={{ maxWidth: '700px', margin: '0 auto' }}>
                    GS Busasamana is committed to nurturing academic achievement, discipline,
                    and holistic development for every student.
                  </p>
                  <div className="d-flex gap-3 justify-content-center">
                    <button className="btn hero-btn btn-lg" style={{
                      backgroundColor: '#b40000',
                      borderColor: '#b40000',
                      color: '#fff'
                    }}>
                      Learn More <i className="bi bi-arrow-right ms-2"></i>
                    </button>
                    <button
                      className="btn hero-btn btn-lg"
                      style={{
                        backgroundColor: 'transparent',
                        border: '2px solid #fff',
                        color: '#fff'
                      }}
                      onClick={() => navigate('/admissions')}
                    >
                      Admissions <i className="bi bi-file-earmark-text ms-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Slide */}
        <div className="carousel-item">
          <div
            className="hero-section"
            style={{
              backgroundImage: `linear-gradient(rgba(11, 30, 61, 0.7), rgba(11, 30, 61, 0.7)), url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR50EIz-7WlDlfOr7PQ6RzAHYfM4ZmG3hH-mg&s)`,
            }}
          >
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12 hero-content text-center text-white">
                  <p className="text-danger-custom animate-text mb-2" style={{ fontSize: '1.25rem' }}>
                    <i className="bi bi-trophy me-2"></i>Academic Excellence
                  </p>
                  <h1 className="animate-text display-4 fw-bold mb-4">
                    Building Future Leaders
                  </h1>
                  <p className="animate-text lead mb-5" style={{ maxWidth: '700px', margin: '0 auto' }}>
                    Our programs develop critical thinking, leadership skills, and 
                    social responsibility in a supportive learning environment.
                  </p>
                  <div className="d-flex gap-3 justify-content-center">
                    <button className="btn hero-btn btn-lg" style={{
                      backgroundColor: '#b40000',
                      borderColor: '#b40000',
                      color: '#fff'
                    }}>
                      View Programs <i className="bi bi-book ms-2"></i>
                    </button>
                    <button className="btn hero-btn btn-lg" style={{
                      backgroundColor: 'transparent',
                      border: '2px solid #fff',
                      color: '#fff'
                    }}>
                      Gallery <i className="bi bi-images ms-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third Slide - Login and Signup */}
        <div className="carousel-item">
          <div
            className="hero-section"
            style={{
              backgroundImage: `linear-gradient(rgba(11, 30, 61, 0.7), rgba(11, 30, 61, 0.7)), url(https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1400&q=80)`,
            }}
          >
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12 hero-content text-center text-white">
                  <h1 className="animate-text display-4 fw-bold mb-4">Join Our Community</h1>
                  <p className="animate-text lead mb-5" style={{ maxWidth: '700px', margin: '0 auto' }}>
                    Already have an account? Login. New here? Sign up and explore the world of learning with us.
                  </p>
                  <div className="d-flex gap-3 justify-content-center">
                    <button
                      className="btn hero-btn btn-lg"
                      style={{
                        backgroundColor: '#b40000',
                        borderColor: '#b40000',
                        color: '#fff'
                      }}
                      onClick={() => navigate('/login')}
                    >
                      Login <i className="bi bi-box-arrow-in-right ms-2"></i>
                    </button>
                    <button
                      className="btn hero-btn btn-lg"
                      style={{
                        backgroundColor: 'transparent',
                        border: '2px solid #fff',
                        color: '#fff'
                      }}
                      onClick={() => navigate('/register')}
                    >
                      Sign Up <i className="bi bi-person-plus ms-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

      {/* Bootstrap Icons */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css"
      />

      {/* Inline CSS */}
      <style jsx>{`
        .hero-section {
          height: 90vh;
          min-height: 600px;
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
        }
        .text-danger-custom {
          color: #b40000;
        }
        .hero-btn {
          transition: all 0.3s ease;
          padding: 0.75rem 1.5rem;
          font-weight: 500;
        }
        .hero-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
        .animate-text {
          animation: fadeInUp 1s ease;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default HeroCarousel;
