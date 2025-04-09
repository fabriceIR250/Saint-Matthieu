import React from 'react';
import './HeroCarousel.css'; // Still use this for extra styles

function HeroCarousel() {
  return (
    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {/* First Slide */}
        <div className="carousel-item active">
          <div
            className="hero-section"
            style={{
              backgroundImage: `url(https://pbs.twimg.com/media/Gj21VnUWUAELjTi?format=jpg&name=large)`,
            }}
          >
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12 hero-content text-center text-md-left text-white">
                  <p className="text-danger animate-text">Welcome to Saint Matthieu</p>
                  <h1 className="animate-text" style={{ color: '#0b1e3d' }}>Empowering Students for a Brighter Future</h1>
                  <p className="animate-text">
                    Saint Matthieu is committed to nurturing academic excellence, creativity,
                    and strong values for every student.
                  </p>
                  <button className="btn hero-btn" style={{ backgroundColor: '#0b1e3d', color: '#fff' }}>
                    Learn More
                  </button>
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
              backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR50EIz-7WlDlfOr7PQ6RzAHYfM4ZmG3hH-mg&s)`,
            }}
          >
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12 hero-content text-center text-md-left text-white">
                  <p className="text-danger animate-text">Unlock Potential</p>
                  <h1 className="animate-text" style={{ color: '#0b1e3d' }}>Building Future Leaders Today</h1>
                  <p className="animate-text">
                    We offer a supportive learning environment that encourages
                    leadership, innovation, and community engagement.
                  </p>
                  <button className="btn hero-btn" style={{ backgroundColor: '#0b1e3d', color: '#fff' }}>
                    Explore
                  </button>
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
    </div>
  );
}

export default HeroCarousel;
