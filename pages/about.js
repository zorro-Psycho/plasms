// About.js

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '../styles/about.module.css';
import "../app/globals.css";

export default function About() {
  return (
    <>
      <Header />

      {/* Space Background with Celestial Bodies */}
      <div className={styles.canvasContainer}>
        <Canvas className={styles.canvas}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[3, 3, 7]} />
          <Stars radius={200} depth={70} count={25000} factor={8} fade={false} />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.7} />
          <CelestialBody position={[0, 0, -5]} scale={3} color={"#6db9d5"} />
          <CelestialBody position={[5, 3, -8]} color={"#F6F1D5"} />
          <CelestialBody position={[395, 5, -4]} scale={30}color={"#F6F1D5"} />
          <CelestialBody position={[550, 5, -4]} scale={3}color={"#6db9d5"} />


        </Canvas>
      </div>

      {/* Company Info Sections */}
      <div className={styles.container}>
        <section className={styles.section}>
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <div className={styles.companyHistory}>
              <h1 className={styles.title}>Company History</h1>
              <p className={styles.description}>
              Learn about the history of Phoenix Labs and our journey to becoming a leader in space technology and AI-driven solutions.
              </p>
            </div>
          </motion.div>
        </section>

        <section className={styles.section}>
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <div className={styles.missionVisionCentered}>
              <h1 className={styles.title}>Mission and Vision</h1>
              <p className={styles.description}>
              Discover our mission and core values that guide our work at Phoenix Labs and the development of PLASMS™.
              </p>
            </div>
          </motion.div>
        </section>
        
        {/* Team Members Section */}
        <section className={styles.teamSection}>
        <div className={styles.missionVisionCentered}>
          <h2 className={styles.sectionTitle}>Team Members</h2>
          <p className={styles.description}>Meet the dedicated team behind PLASMS™. From AI engineers to space scientists, our team brings together a diverse range of expertise to drive innovation.</p>
          </div>
          <div className={styles.teamGrid}>
            {Array(4).fill().map((_, i) => (
              <motion.div
                key={i}
                className={styles.teamCard}
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.8 }}
              >
                <div className={styles.cardFront}>
                  <img src="/team-placeholder.jpg" alt="Team Member" className={styles.teamImage} />
                  <h3 className={styles.cardName}>Team Member {i + 1}</h3>
                </div>
                <div className={styles.cardBack}>
                  <h3 className={styles.cardName}>Member Name</h3>
                  <p>Role: Engineer</p>
                  <p>Specialty: Satellite Systems</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Privacy Policy Section */}
        <section className={styles.privacySection}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Privacy Policy
          </motion.h2>
          <div className={styles.policyGrid}>
            <motion.div
              className={styles.policyItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <h3>Information We Collect</h3>
              <div>
                <p>Personal Information:</p>
                <ul>
                  <li>Name</li>
                  <li>Email Address</li>
                  <li>Payment Information (for premium plans)</li>
                  <li>Communication Preferences</li>
                </ul>
                <p>Usage Data:</p>
                <ul>
                  <li>Pages visited</li>
                  <li>Features used</li>
                  <li>Time spent on the platform</li>
                </ul>
                <p>Device Information:</p>
                <ul>
                  <li>Device type</li>
                  <li>Browser information</li>
                  <li>IP address</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className={styles.policyItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <h3>How We Use Your Information</h3>
              <div>
                <p>Providing Services:</p>
                <ul>
                  <li>Customizing your experience</li>
                  <li>Processing subscription payments</li>
                </ul>
                <p>Improving User Experience:</p>
                <ul>
                  <li>Analyzing usage patterns</li>
                  <li>Enhancing platform features</li>
                </ul>
                <p>Communication:</p>
                <ul>
                  <li>Sending updates and notifications</li>
                  <li>Responding to user inquiries</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className={styles.policyItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <h3>Data Security</h3>
              <div>
                <p>Encryption:</p>
                <ul>
                  <li>All data transmitted is encrypted using industry-standard protocols.</li>
                </ul>
                <p>Access Control:</p>
                <ul>
                  <li>Limited access to personal information within our organization.</li>
                </ul>
                <p>Third-Party Security:</p>
                <ul>
                  <li>Implementing security measures with third-party service providers.</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className={styles.policyItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <h3>Sharing Your Information</h3>
              <div>
                <p>Legal Requirements:</p>
                <ul>
                  <li>Complying with legal obligations.</li>
                </ul>
                <p>Consent:</p>
                <ul>
                  <li>Sharing information with your explicit consent.</li>
                </ul>
              </div>
            </motion.div>
          </div>

          <div className={styles.horizontalPolicySection}>
            <div className={styles.horizontalPolicyItem}>
              <h3>Your Choices</h3>
              <ul>
                <li>Opt-Out: You can opt-out of non-essential communications.</li>
                <li>Data Access: Request access to your personal information.</li>
                <li>Data Deletion: Request deletion of your personal information.</li>
              </ul>
            </div>
            <div className={styles.horizontalPolicyItem}>
              <h3>Changes to this Policy</h3>
              <p>
                We may update this Privacy Policy periodically. The date of the latest revision will be displayed at the top of the page. Please review this policy regularly.
              </p>
            </div>
           
          </div>
          <div className={styles.horizontalPolicyItem}>
              <h3>Contact Info</h3>
              <p>
              If you have any questions or concerns about this Privacy Policy, please contact us at <strong>contact@phoenixlabs.com </strong>
              Helpline Number- <strong>1-800-372-7052</strong> 
              </p>
            </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

// Celestial Body Component (3D Orbiting Planets)
function CelestialBody({ position, scale, color }) {
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.y += 0.01;
    mesh.current.rotation.x += 0.005;
  });
  return (
    <mesh position={position} scale={scale} ref={mesh}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
