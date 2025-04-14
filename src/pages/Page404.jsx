import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="not-found-container">
      <div className="stars">
        {[...Array(100)].map((_, i) => (
          <div key={i} className="star" style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}></div>
        ))}
      </div>
      
      <div className="content text-center">
        <div className="book-spine">
          <div className="book-cover">
            <div className="book-title">404</div>
          </div>
        </div>
        
        <h1 className="mt-4 mb-3">Page Not Found</h1>
        <p className="lead mb-4">
          Oops! The page you're looking for seems to have gone on a field trip.<br />
          Maybe it's in the library or playing sports?
        </p>
        
        <div className="d-flex justify-content-center gap-3">
          <Link to="/" className="btn btn-danger-custom">
            <i className="bi bi-house-door me-2"></i> Return Home
          </Link>
          <Link to="/contact" className="btn btn-outline-custom">
            <i className="bi bi-envelope me-2"></i> Report Issue
          </Link>
        </div>
        
        <div className="school-items mt-5">
          <div className="item microscope">
            <i className="bi bi-eyeglasses"></i>
          </div>
          <div className="item football">
            <i className="bi bi-joystick"></i>
          </div>
          <div className="item book">
            <i className="bi bi-book"></i>
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
        .not-found-container {
          min-height: 100vh;
          background: linear-gradient(to bottom, #0b1e3d, #1a3a6a);
          color: white;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }
        
        .stars {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          animation: twinkle infinite alternate;
        }
        
        @keyframes twinkle {
          0% { opacity: 0.2; }
          100% { opacity: 1; }
        }
        
        .content {
          position: relative;
          z-index: 1;
          max-width: 800px;
        }
        
        .book-spine {
          perspective: 2000px;
          display: inline-block;
        }
        
        .book-cover {
          width: 150px;
          height: 200px;
          background: #b40000;
          border-radius: 5px 15px 15px 5px;
          transform: rotateY(20deg);
          box-shadow: -10px 10px 20px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        
        .book-cover::after {
          content: '';
          position: absolute;
          top: 0;
          right: 15px;
          width: 30px;
          height: 100%;
          background: rgba(0,0,0,0.1);
          transform: skewY(45deg) translateX(15px);
        }
        
        .book-title {
          font-size: 5rem;
          font-weight: bold;
          color: white;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        
        h1 {
          font-size: 2.5rem;
          font-weight: bold;
          color: white;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        
        .lead {
          font-size: 1.25rem;
          opacity: 0.9;
        }
        
        .btn-danger-custom {
          background-color: #b40000;
          border-color: #b40000;
          color: white;
          padding: 0.5rem 1.5rem;
        }
        
        .btn-danger-custom:hover {
          background-color: #900000;
          border-color: #900000;
          color: white;
        }
        
        .btn-outline-custom {
          border-color: white;
          color: white;
          padding: 0.5rem 1.5rem;
        }
        
        .btn-outline-custom:hover {
          background-color: rgba(255,255,255,0.1);
          color: white;
        }
        
        .school-items {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-top: 3rem;
        }
        
        .item {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          animation: float 3s ease-in-out infinite;
        }
        
        .microscope {
          background: rgba(180, 0, 0, 0.2);
          color: #b40000;
          animation-delay: 0s;
        }
        
        .football {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          animation-delay: 0.5s;
        }
        
        .book {
          background: rgba(11, 30, 61, 0.2);
          color: #0b1e3d;
          animation-delay: 1s;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </div>
  );
}

export default PageNotFound;