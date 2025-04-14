import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import {
  ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell,
  LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

function Dashboard({ user }) {
  const userName = user?.name || "John Doe";
  const [showNotifications, setShowNotifications] = useState(false);

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

  const COLORS = ['#0d6efd', '#ffc107'];

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4" style={{ paddingTop: '80px', width: '100vw' }}>
        <header className="mb-4 d-flex justify-content-between align-items-center">
          <div>
            <h1 className="text-primary">Dashboard Overview</h1>
            <p className="lead">Welcome, <strong>{userName}</strong> 👋 — Here’s what’s happening today!</p>
          </div>

          {/* Bell Icon Button */}
          <button className="btn btn-outline-primary position-relative" onClick={toggleNotifications}>
            🔔
            {notifications.length > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
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
            zIndex: 1000
          }}>
            <div className="card-header d-flex justify-content-between align-items-center">
              Notifications
              <button className="btn-close" onClick={toggleNotifications}></button>
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
          <h2 className="mb-3">Quick Statistics</h2>
          <div className="row g-4">

            {/* Total Students/Staff/Books - Bar */}
            <div className="col-md-6">
              <h5>Total Students, Staff & Books</h5>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={peopleData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#0d6efd" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Attendance - Pie */}
            <div className="col-md-6">
              <h5>Today's Attendance</h5>
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
              <h5>Daily Income (RWF 000)</h5>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={incomeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="income" stroke="#28a745" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Recent Exams - Area */}
            <div className="col-md-6">
              <h5>Recent Exams</h5>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={examsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="term" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="exams" stroke="#6610f2" fill="#d6c9fa" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

          </div>
        </section>

        {/* Quick Links */}
        <section>
          <h2 className="mb-3">Quick Links</h2>
          <div className="row g-3">
            {[
              { to: '/students', label: 'Students', icon: '🧑‍🎓' },
              { to: '/staff', label: 'Staff', icon: '👨‍🏫' },
              { to: '/attendance', label: 'Attendance', icon: '📝' },
              { to: '/exams', label: 'Exams', icon: '📚' },
              { to: '/library', label: 'Library', icon: '📖' },
            ].map((link, idx) => (
              <div className="col-6 col-md-3" key={idx}>
                <Link to={link.to} className="btn btn-outline-primary w-100 d-flex flex-column align-items-center py-3">
                  <span className="fs-2">{link.icon}</span>
                  <span>{link.label}</span>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
  // Define Navbar styles here too (or import from Navbar file)
const dashboardStyles = {
    heading: {
      color: '#0b1e3d',
    },
    notificationButton: {
      ...styles.btnOutline,
      position: 'relative'
    },
    badge: {
      backgroundColor: '#b40000'
    },
    notificationCard: {
      position: 'absolute',
      top: '100px',
      right: '20px',
      width: '300px',
      zIndex: 1000,
      border: '1px solid #ddd',
      borderRadius: '8px'
    },
    barColor: '#0b1e3d',
    pieColors: ['#0b1e3d', '#b40000'],
    lineColor: '#b40000',
    quickLinkButton: {
      ...styles.btnOutline,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '1rem',
      color: '#0b1e3d',
      border: '1px solid #0b1e3d',
      borderRadius: '8px'
    }
  };
  
}

export default Dashboard;
