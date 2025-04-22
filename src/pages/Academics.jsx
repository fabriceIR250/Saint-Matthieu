import React from 'react';
import { Nav } from 'react-bootstrap';
import Navbar from '../components/Navbar';

const Academics = () => {
  const styles = {
    header: {
        backgroundImage: "url('https://steinmontpublicschool.ac.in/wp-content/uploads/2021/03/AcademicSkillsLogoMainPage_0.png')",  // update this to your actual image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '100px 20px',
        position: 'relative',
      },
    section: {
      padding: '3rem 1rem',
      maxWidth: '1000px',
      margin: '0 auto',
    },
    sectionTitle: {
      color: '#0b1e3d',
      marginBottom: '1rem',
      fontWeight: '600',
    },
    sectionText: {
      fontSize: '1.1rem',
      lineHeight: '1.7',
    },
    card: {
      backgroundColor: '#f8f9fa',
      padding: '1.5rem',
      borderRadius: '8px',
      marginBottom: '1.5rem',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    },
    cardTitle: {
      color: '#b40000',
      marginBottom: '0.75rem',
      fontWeight: '600',
    }
  };

  return (
   <>
   <Navbar />
    <div style={{width: '100vw',paddingTop: '80px'}}>
      <header style={styles.header}>
        <h1>Our Academics</h1>
        <p>Discover a world of learning opportunities</p>
      </header>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Curriculum Overview</h2>
        <p style={styles.sectionText}>
          At our institution, we offer a rich and balanced academic program designed to nurture every student’s potential.
          Our curriculum is built on international standards with a local context, ensuring that students are well-prepared for future challenges and opportunities.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Programs Offered</h2>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Pre-Primary</h3>
          <p style={styles.sectionText}>
            A fun, engaging, and nurturing environment for young learners to explore and build foundational skills.
          </p>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Primary School</h3>
          <p style={styles.sectionText}>
            A structured program that combines core subjects with creativity and innovation, building essential academic and social skills.
          </p>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>High School</h3>
          <p style={styles.sectionText}>
            A comprehensive curriculum preparing students for national and international examinations, leadership, and global citizenship.
          </p>
        </div>
      </section>
    </div>
   </>
  );
};

export default Academics;
