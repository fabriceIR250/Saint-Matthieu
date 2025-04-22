import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell,
  LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';  // Import your Firebase config
import Navbar from './Navbar'; // Corrected relative path


function Dashboard() {
  const [userName, setUserName] = useState("John Doe");
  const [showNotifications, setShowNotifications] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Data sets for each graph
  const peopleData = [
    { name: 'Students', value: 500 },
    { name: 'Staff', value: 50 },
    { name: 'Books', value: 1200 },
  ];

  const attendanceData = [
    { name: 'Present', value: 95 },
    { name: 'Absent', value: 5 },
  ];

  const incomeData = [
    { day: 'Mon', income: 200 },
    { day: 'Tue', income: 220 },
    { day: 'Wed', income: 210 },
    { day: 'Thu', income: 250 },
    { day: 'Fri', income: 230 },
  ];

  const examsData = [
    { term: 'Term 1', exams: 1 },
    { term: 'Term 2', exams: 0 },
    { term: 'Term 3', exams: 0 },
  ];

  const notifications = [
    { id: 1, date: "2024-03-10", message: "Upcoming: Parent-Teacher Meeting on March 25th." },
    { id: 2, date: "2024-03-05", message: "Reminder: School fees due by March 15th." },
  ];

  // Updated color scheme
  const COLORS = ['#0b1e3d', '#b40000', '#1a3a6a']; // Navy blue, red, and darker blue

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      navigate('/login'); // Redirect to login if no user is in session
      return;
    }
    const user = JSON.parse(storedUser);
    setUser(user);

    const fetchUserName = async () => {
      if (user?.uid) {
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            // Check if firstName and lastName exist before concatenating
            const fullName = userData.firstName && userData.lastName
              ? userData.firstName + ' ' + userData.lastName
              : userData.firstName || userData.lastName || "User Name Not Found";
            setUserName(fullName);
          } else {
            console.warn("User document not found in Firestore.");
            setUserName("User Not Found");
          }
        } catch (error) {
          console.error("Error fetching user data: ", error);
          setUserName("Error Loading Name"); // Set an appropriate error message
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchUserName();
  }, [navigate]);


  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container mt-4" style={{ paddingTop: '80px', width: '100vw' }}>
        <header className="mb-4 d-flex justify-content-between align-items-center">
          <div>
            <h1 style={{ color: '#0b1e3d' }}>Dashboard Overview</h1>
            <p className="lead">
              Welcome, <strong style={{ color: '#b40000' }}>
                {loading ? "Loading..." : userName}
              </strong> 👋 — Here's what's happening today!
            </p>
          </div>

          {/* Bell Icon Button */}
          <button
            className="btn position-relative"
            onClick={toggleNotifications}
            style={{
              backgroundColor: 'transparent',
              border: '1px solid #0b1e3d',
              color: '#0b1e3d'
            }}
          >
            <i className="bi bi-bell-fill"></i>
            {notifications.length > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{ backgroundColor: '#b40000' }}>
                {notifications.length}
              </span>
            )}
          </button>
        </header>

        {/* Notification Panel */}
        {showNotifications && (
          <div className="card position-absolute" style={{
            top: '100px',
            right: '20px',
            width: '300px',
            zIndex: 1000,
            border: '1px solid #0b1e3d'
          }}>
            <div className="card-header d-flex justify-content-between align-items-center" style={{ backgroundColor: '#0b1e3d', color: 'white' }}>
              Notifications
              <button className="btn-close btn-close-white" onClick={toggleNotifications}></button>
            </div>
            <ul className="list-group list-group-flush">
              {notifications.map(notification => (
                <li key={notification.id} className="list-group-item">
                  <small className="text-muted">{notification.date}</small>
                  <p className="mb-0">{notification.message}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Graph Section */}
        <section className="mb-5">
          <h2 className="mb-3" style={{ color: '#0b1e3d' }}>Quick Statistics</h2>
          <div className="row g-4">

            {/* Total Students/Staff/Books - Bar */}
            <div className="col-md-6">
              <h5 style={{ color: '#0b1e3d' }}>Total Students, Staff & Books</h5>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={peopleData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="name" stroke="#0b1e3d" />
                  <YAxis stroke="#0b1e3d" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#0b1e3d" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Attendance - Pie */}
            <div className="col-md-6">
              <h5 style={{ color: '#0b1e3d' }}>Today's Attendance</h5>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={attendanceData}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={90}
                    label
                  >
                    {attendanceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Daily Income - Line */}
            <div className="col-md-6">
              <h5 style={{ color: '#0b1e3d' }}>Daily Income (RWF 000)</h5>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={incomeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="day" stroke="#0b1e3d" />
                  <YAxis stroke="#0b1e3d" />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="income"
                    stroke="#b40000"
                    strokeWidth={3}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Recent Exams - Area */}
            <div className="col-md-6">
              <h5 style={{ color: '#0b1e3d' }}>Recent Exams</h5>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={examsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="term" stroke="#0b1e3d" />
                  <YAxis stroke="#0b1e3d" />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="exams"
                    stroke="#0b1e3d"
                    fill="#d6e3f8"
                    fillOpacity={0.8}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

          </div>
        </section>

        {/* Quick Links */}
        <section>
          <h2 className="mb-3" style={{ color: '#0b1e3d' }}>Quick Links</h2>
          <div className="row g-3">
            {[
              { to: '/students', label: 'Students', icon: 'bi-people-fill' },
              { to: '/staff', label: 'Staff', icon: 'bi-person-video2' },
              { to: '/attendance', label: 'Attendance', icon: 'bi-clipboard-check' },
              { to: '/exams', label: 'Exams', icon: 'bi-journal-text' },
              { to: '/library', label: 'Library', icon: 'bi-book' },
            ].map((link, idx) => (
              <div className="col-6 col-md-3" key={idx}>
                <Link
                  to={link.to}
                  className="btn w-100 d-flex flex-column align-items-center py-3"
                  style={{
                    border: '1px solid #0b1e3d',
                    color: '#0b1e3d',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    ':hover': {
                      backgroundColor: '#0b1e3d',
                      color: 'white'
                    }
                  }}
                >
                  <i className={`bi ${link.icon} fs-2 mb-2`} style={{ color: '#b40000' }}></i>
                  <span>{link.label}</span>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Bootstrap Icons */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css"
      />
    </>
  );
}

export default Dashboard;

