import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import Navbar from './Navbar';

function RegistrationForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        role: '',
        terms: false,
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            setLoading(false);
            return;
        }

        if (!formData.terms) {
            setError('You must accept the terms and conditions');
            setLoading(false);
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            );

            await updateProfile(userCredential.user, {
                displayName: `${formData.firstName} ${formData.lastName}`,
            });

            const userData = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                phone: formData.phone,
                role: formData.role,
                terms: formData.terms,
                uid: userCredential.user.uid,
                createdAt: new Date(),
            };

            console.log("Data to be stored on register: ", userData);

            await setDoc(doc(db, 'users', userCredential.user.uid), userData);

            console.log("Data stored successfully on register!");

            navigate('/login');
        } catch (error) {
            setError(error.message);
            console.error('Registration Error: ', error);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        setError('');
        setLoading(true);
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            const userData = {
                firstName: user.displayName.split(' ')[0],
                lastName: user.displayName.split(' ').slice(1).join(' '),
                phone: '',
                role: '',
                terms: true,
                createdAt: new Date(),
                uid: user.uid,
            };

            console.log("Data to be stored on google sign in: ", userData);

            await setDoc(doc(db, 'users', user.uid), userData);

            console.log("Data stored successfully on google sign in!");

            navigate('/login');
        } catch (error) {
            setError(error.message);
            console.error('Google Sign-In Error: ', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
        <Navbar />
        <div className="registration-page mt-5" style={styles.registrationPage}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <div className="registration-card" style={styles.registrationCard}>
                            <div className="card-header bg-primary-custom text-white text-center py-4" style={styles.cardHeader}>
                                <h2 style={styles.title}>
                                    <i className="bi bi-person-plus me-2"></i>
                                    GS Busasamana Registration
                                </h2>
                            </div>

                            <div className="card-body p-4 p-md-5">
                                {error && (
                                    <div className="alert alert-danger" role="alert" style={styles.errorAlert}>
                                        {error}
                                    </div>
                                )}

                                <div className="text-center mb-4">
                                    <button
                                        onClick={handleGoogleSignIn}
                                        className="btn btn-google-oauth"
                                        style={styles.googleButton}
                                        disabled={loading}
                                    >
                                        <img
                                            src="/google-icon-logo-svgrepo-com.svg"
                                            alt="Google logo"
                                            style={styles.googleLogo}
                                        />
                                        Sign up with Google
                                    </button>

                                    <div className="divider my-4" style={styles.divider}>
                                        <span className="divider-line" style={styles.dividerLine}></span>
                                        <span className="divider-text" style={styles.dividerText}>OR</span>
                                        <span className="divider-line" style={styles.dividerLine}></span>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        {['firstName', 'lastName'].map((field) => (
                                            <div className="col-md-6 mb-3" key={field}>
                                                <label htmlFor={field} className="form-label" style={styles.label}>
                                                    {field === 'firstName' ? 'First Name' : 'Last Name'}
                                                </label>
                                                <div className="input-group">
                                                    <span className="input-group-text bg-danger-custom text-white" style={styles.inputGroupText}>
                                                        <i className={`bi bi-${field === 'firstName' ? 'person' : 'person'}`}></i>
                                                    </span>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        style={styles.input}
                                                        id={field}
                                                        name={field}
                                                        value={formData[field]}
                                                        onChange={handleChange}
                                                        placeholder={`Enter ${field === 'firstName' ? 'first' : 'last'} name`}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label" style={styles.label}>
                                            Email Address
                                        </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-danger-custom text-white" style={styles.inputGroupText}>
                                                <i className="bi bi-envelope"></i>
                                            </span>
                                            <input
                                                type="email"
                                                className="form-control"
                                                style={styles.input}
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Enter email address"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        {['password', 'confirmPassword'].map((field) => (
                                            <div className="col-md-6 mb-3" key={field}>
                                                <label htmlFor={field} className="form-label" style={styles.label}>
                                                    {field === 'password' ? 'Password' : 'Confirm Password'}
                                                </label>
                                                <div className="input-group">
                                                    <span className="input-group-text bg-danger-custom text-white" style={styles.inputGroupText}>
                                                        <i className="bi bi-lock"></i>
                                                    </span>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        style={styles.input}
                                                        id={field}
                                                        name={field}
                                                        value={formData[field]}
                                                        onChange={handleChange}
                                                        placeholder={field === 'password' ? 'Create password' : 'Confirm password'}
                                                        minLength="6"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="phone" className="form-label" style={styles.label}>
                                            Phone Number
                                        </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-danger-custom text-white" style={styles.inputGroupText}>
                                                <i className="bi bi-telephone"></i>
                                            </span>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                style={styles.input}
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Enter phone number"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="role" className="form-label" style={styles.label}>
                                            Register As
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

                                    <div className="form-check mb-4">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            style={styles.checkbox}
                                            id="terms"
                                            name="terms"
                                            checked={formData.terms}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label className="form-check-label" htmlFor="terms" style={styles.termsLabel}>
                                            I agree to the <Link to="/terms" style={styles.termsLink}>Terms and Conditions</Link>
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-danger-custom w-100 py-2 mb-3"
                                        style={styles.submitButton}
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                Registering...
                                            </>
                                        ) : (
                                            <>
                                                Register <i className="bi bi-person-plus ms-2"></i>
                                            </>
                                        )}
                                    </button>

                                    <div className="text-center">
                                        <p style={styles.loginText}>
                                            Already have an account?{' '}
                                            <Link to="/login" style={styles.loginLink}>
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

            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css" />
        </div>
        </>
    );
}

const styles = {
    registrationPage: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f9fa',
        width: '100vw',
        padding: '50px',
    },
    registrationCard: {
        border: 'none',
        borderRadius: '15px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    cardHeader: {
        backgroundColor: '#0b1e3d',
        color: 'white',
        borderBottom: 'none',
        borderRadius: '15px 15px 0 0',
    },
    title: {
        fontWeight: '600',
        fontSize: '1.8rem',
    },
    errorAlert: {
        marginBottom: '1.5rem',
    },
    googleButton: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'white',
        color: '#444',
        border: '1px solid #ddd',
        borderRadius: '50px',
        padding: '10px 20px',
        fontWeight: '500',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease',
        width: '100%',
        maxWidth: '300px',
        margin: '0 auto',
    },
    googleLogo: {
        width: '20px',
        height: '20px',
        marginRight: '12px',
    },
    divider: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#6c757d',
        margin: '20px 0',
    },
    dividerLine: {
        flex: '1',
        height: '1px',
        backgroundColor: '#dee2e6',
    },
    dividerText: {
        padding: '0 10px',
    },
    label: {
        fontWeight: '500',
        marginBottom: '0.5rem',
    },
    inputGroupText: {
        backgroundColor: '#b40000',
        border: '1px solid #ced4da',
    },
    input: {
        border: '1px solid #ced4da',
        borderRadius: '5px',
    },
    select: {
        border: '1px solid #ced4da',
        borderRadius: '5px',
    },
    checkbox: {
        marginTop: '0.3rem',
    },
    termsLabel: {
        marginLeft: '0.5rem',
    },
    termsLink: {
        color: '#007bff',
        textDecoration: 'none',
    },
    submitButton: {
        backgroundColor: '#b40000',
        borderColor: '#b40000',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
    },
    loginText: {
        marginTop: '1rem',
    },
    loginLink: {
        color: '#007bff',
        textDecoration: 'none',
    },
};

export default RegistrationForm;