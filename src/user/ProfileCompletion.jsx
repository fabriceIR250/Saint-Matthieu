import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

function ProfileCompletion() {
  const navigate = useNavigate();
  const location = useLocation();
  const { uid, email, displayName } = location.state || {};

  const [formData, setFormData] = useState({
    firstName: displayName?.split(' ')[0] || '',
    lastName: displayName?.split(' ').slice(1).join(' ') || '',
    phone: '',
    role: '',
    childrenNames: '', // Added for parent role
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        role: formData.role,
        email,
        uid,
        createdAt: new Date(),
      };

      // Add childrenNames only if the role is parent
      if (formData.role === 'parent') {
        userData.childrenNames = formData.childrenNames;
      }

      await setDoc(doc(db, 'users', uid), userData);
      navigate('user/dashboard');
    } catch (error) {
      console.error("Profile Completion Error: ", error);
      alert("Failed to save profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="profile-completion-container d-flex align-items-center justify-content-center" style={styles.container}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-lg border-0" style={styles.card}>
              <div className="card-header text-center py-4" style={styles.cardHeader}>
                <h2 className="mb-0" style={styles.title}>
                  <i className="bi bi-person-check me-2"></i>
                  Complete Your Profile
                </h2>
              </div>
              
              <div className="card-body p-4 p-md-5">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label htmlFor="firstName" className="form-label" style={styles.label}>
                        <i className="bi bi-person me-2"></i>
                        First Name
                      </label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          style={styles.input}
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="col-md-6 mb-4">
                      <label htmlFor="lastName" className="form-label" style={styles.label}>
                        <i className="bi bi-person me-2"></i>
                        Last Name
                      </label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          style={styles.input}
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="phone" className="form-label" style={styles.label}>
                      <i className="bi bi-telephone me-2"></i>
                      Phone Number
                    </label>
                    <div className="input-group">
                      <input
                        type="tel"
                        className="form-control"
                        style={styles.input}
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="role" className="form-label" style={styles.label}>
                      <i className="bi bi-person-badge me-2"></i>
                      Role
                    </label>
                    <select
                      className="form-select"
                      style={styles.select}
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select your role</option>
                      <option value="teacher">Teacher</option>
                      <option value="parent">Parent</option>
                    </select>
                  </div>

                  {formData.role === 'parent' && (
                    <div className="mb-4">
                      <label htmlFor="childrenNames" className="form-label" style={styles.label}>
                        <i className="bi bi-people me-2"></i>
                        Children's Full Names (Comma-separated)
                      </label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          style={styles.input}
                          id="childrenNames"
                          name="childrenNames"
                          value={formData.childrenNames}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn w-100 py-2 mb-3"
                    style={styles.submitButton}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Saving...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-save me-2"></i>
                        Save Profile
                      </>
                    )}
                  </button>
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
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
    padding: '20px 0',
    width: '100vw',
  },
  card: {
    borderRadius: '12px',
    border: 'none',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden'
  },
  cardHeader: {
    backgroundColor: '#0b1e3d',
    borderBottom: 'none',
    padding: '1.5rem'
  },
  title: {
    color: '#ffffff',
    fontSize: '1.8rem',
    fontWeight: '600',
    margin: '0'
  },
  label: {
    color: '#495057',
    fontWeight: '500',
    marginBottom: '8px',
   fontSize: '0.95rem',
    display: 'flex',
    alignItems: 'center'
  },
  input: {
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #ced4da',
    width: '100%'
  },
  select: {
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #ced4da'
  },
  submitButton: {
    backgroundColor: '#b40000',
    color: '#ffffff',
    border: 'none',
    borderRadius: '6px',
    fontWeight: '500',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ':hover': {
      backgroundColor: '#900000'
    },
    ':disabled': {
      backgroundColor: '#cccccc'
    }
  }
};

export default ProfileCompletion;
