import React from 'react';
// import './Gallery.css';

function Gallery() {
  // Sample gallery items - replace with your actual images
  const galleryItems = [
    {
      id: 1,
      title: 'Graduation Ceremony 2024',
      category: 'Graduation',
      imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Science Fair Winners',
      category: 'Science Fair',
      imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Sports Day Competition',
      category: 'Sports',
      imageUrl: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'Cultural Week Performances',
      category: 'Cultural Events',
      imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      title: 'Math Olympiad Champions',
      category: 'Academic Competitions',
      imageUrl: 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      title: 'School Choir Performance',
      category: 'Music & Arts',
      imageUrl: 'https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  // Categories from your document
  const categories = [
    'Graduation Ceremonies',
    'Sports Competitions',
    'Science Fairs',
    'Cultural Week Celebrations'
  ];

  return (
    <div className="gallery-page" style={{
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
      paddingTop: '80px', // Account for fixed navbar
        width: '100vw' // Forces full viewport width
    }}>
      <div className="container py-5">
        {/* Page Header */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3" style={{ color: '#0b1e3d' }}>
            <i className="bi bi-images text-danger-custom me-3"></i>
            GS Busasamana Moments
          </h1>
          <div className="mx-auto mb-4" style={{
            height: '4px',
            width: '100px',
            backgroundColor: '#b40000'
          }}></div>
          <p className="lead" style={{ color: '#0b1e3d' }}>
            Relive the memorable events and achievements that define our community
          </p>
        </div>

        {/* Category Filters */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <button className="btn btn-outline-danger-custom active">
                All Events
              </button>
              {categories.map((category, index) => (
                <button key={index} className="btn btn-outline-danger-custom">
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="row g-4">
          {galleryItems.map((item) => (
            <div key={item.id} className="col-12 col-md-6 col-lg-4">
              <div className="gallery-card card border-0 shadow-sm h-100">
                <div className="gallery-image-container">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    className="img-fluid gallery-image"
                  />
                  <div className="gallery-overlay">
                    <div className="gallery-overlay-content">
                      <h5 className="text-white fw-bold">{item.title}</h5>
                      <span className="badge bg-danger-custom rounded-pill">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card-footer bg-white">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-muted">
                      <i className="bi bi-calendar me-1"></i> May 15, 2024
                    </span>
                    <button className="btn btn-sm btn-danger-custom">
                      <i className="bi bi-eye-fill me-1"></i> View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <button className="btn btn-danger-custom px-4 py-2">
              Load More <i className="bi bi-arrow-down-circle ms-2"></i>
            </button>
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
        .gallery-card {
          transition: all 0.3s ease;
          overflow: hidden;
        }
        .gallery-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15) !important;
        }
        .gallery-image-container {
          position: relative;
          overflow: hidden;
          height: 250px;
        }
        .gallery-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .gallery-card:hover .gallery-image {
          transform: scale(1.05);
        }
        .gallery-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to top, rgba(11, 30, 61, 0.9), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: flex-end;
          padding: 20px;
        }
        .gallery-card:hover .gallery-overlay {
          opacity: 1;
        }
        .gallery-overlay-content {
          transform: translateY(20px);
          transition: transform 0.3s ease;
        }
        .gallery-card:hover .gallery-overlay-content {
          transform: translateY(0);
        }
        .btn-outline-danger-custom {
          color: #b40000;
          border-color: #b40000;
          transition: all 0.3s ease;
        }
        .btn-outline-danger-custom:hover, 
        .btn-outline-danger-custom.active {
          background-color: #b40000;
          color: white;
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
      `}</style>
    </div>
  );
}

export default Gallery;