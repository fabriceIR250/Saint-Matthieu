import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';
import Navbar from './Navbar';

function LoginForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        role: '',
    });
    const [error, setError] = useState('');
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
        setError('');
        setLoading(true);

        try {
            await signInWithEmailAndPassword(auth, formData.email, formData.password);
            navigate('./user/Dashboard');
        } catch (error) {
            setError(error.message);
            console.error('Login Error: ', error);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        setError('');
        setLoading(true);
        try {
            await signInWithPopup(auth, provider);
            navigate('./user/Dashboard');
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
        <div className="login-container" style={styles.loginContainer}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <div className="card shadow-lg border-0 mt-5" style={styles.card}>
                            <div className="card-header bg-primary-custom text-white text-center py-4" style={styles.cardHeader}>
                                <h2 className="mb-0">
                                    <i className="bi bi-lock me-2"></i>
                                    GS Busasamana Login
                                </h2>
                            </div>
                            <div className="card-body p-5">
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
                                        Sign in with Google
                                    </button>

                                    <div className="divider my-4" style={styles.divider}>
                                        <span className="divider-line" style={styles.dividerLine}></span>
                                        <span className="divider-text" style={styles.dividerText}>OR</span>
                                        <span className="divider-line" style={styles.dividerLine}></span>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="form-label" style={styles.label}>
                                            Email
                                        </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-danger-custom text-white" style={styles.inputGroupText}>
                                                <i className="bi bi-person"></i>
                                            </span>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Enter your email"
                                                required
                                                style={styles.input}
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="password" className="form-label" style={styles.label}>
                                            Password
                                        </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-danger-custom text-white" style={styles.inputGroupText}>
                                                <i className="bi bi-key"></i>
                                            </span>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="password"
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                placeholder="Enter your password"
                                                required
                                                style={styles.input}
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="role" className="form-label" style={styles.label}>
                                            Select Role
                                        </label>
                                        <select
                                            className="form-select"
                                            id="role"
                                            name="role"
                                            value={formData.role}
                                            onChange={handleChange}
                                            required
                                            style={styles.select}
                                        >
                                            <option value="">Select your role</option>
                                            <option value="teacher">Teacher</option>
                                            <option value="parent">Parent</option>
                                        </select>
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
                                                Logging in...
                                            </>
                                        ) : (
                                            <>
                                                Login <i className="bi bi-arrow-right ms-2"></i>
                                            </>
                                        )}
                                    </button>

                                    <div className="text-center">
                                        <p className="mb-0" style={styles.registerText}>
                                            Don't have an account?{' '}
                                            <Link to="/register" className="text-danger-custom fw-bold text-decoration-none" style={styles.registerLink}>
                                                Register here
                                            </Link>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css"
            />
        </div>
       </>
    );
}

const styles = {
    loginContainer: {
        width: '100vw',
        paddingTop: '50px',
    },
    card: {
        borderRadius: '10px',
        overflow: 'hidden',
        border: 'none',
        marginTop: '2rem',
    },
    cardHeader: {
        backgroundColor: '#0b1e3d',
        borderBottom: 'none',
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
    submitButton: {
        backgroundColor: '#b40000',
        borderColor: '#b40000',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
    },
    registerText: {
        marginTop: '1rem',
    },
    registerLink: {
        color: '#b40000',
        fontWeight: 'bold',
        textDecoration: 'none',
    },
};

export default LoginForm;