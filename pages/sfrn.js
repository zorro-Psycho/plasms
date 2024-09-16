import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '../styles/sfrn.module.css';
import "../app/globals.css";

export default function CTMS() {
  return (
    <>
      <Header />

      <div className={styles.canvasContainer}>
        <Canvas className={styles.canvas}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} />
          <Stars radius={200} depth={70} count={15000} factor={10} fade />

          {/* Solar Object */}
          <SolarObject position={[0, 0, -8]} scale={1.5} />
          <SolarFlareEffect />

          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          
          <AsteroidBelt />
        </Canvas>
      </div>

      <div className={styles.container}>
        {/* Content Section */}
        <section className={styles.section}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <h1 className={styles.title}>Solar Flare Resilient Network (SFRN)</h1>
            <p className={styles.description}>
              The Solar Flare Resilient Network (SFRN) is a specialized system designed to ensure uninterrupted satellite communications during solar flare events.
            </p>
          </motion.div>
        </section>

        {/* Detailed Section */}
        <section className={styles.sectionOverview}>
          {renderDetailedSection()}
        </section>

        {/* Subscription Plans */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>Subscription Plans</h2>
          <div className={styles.planGrid}>
            <motion.div
              className={styles.planCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <h3>Basic Plan - Free</h3>
              <ul className={styles.planFeatures}>
                <li>Solar Flare Monitoring</li>
                <li>Basic Resilient Communication Protocols</li>
              </ul>
            </motion.div>

            <motion.div
              className={styles.planCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <h3>Premium Plan - $12.99/month</h3>
              <ul className={styles.planFeatures}>
                <li>Enhanced Resilient Communication Protocols</li>
                <li>Historical Solar Flare Data</li>
                <li>Disaster Recovery Planning Tools</li>
              </ul>
            </motion.div>

            <motion.div
              className={styles.planCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <h3>Enterprise Plan - Contact for Pricing</h3>
              <ul className={styles.planFeatures}>
                <li>API Access</li>
                <li>Custom Resilient Network Solutions</li>
                <li>Priority Support</li>
              </ul>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

function renderDetailedSection() {
  const sections = [
    {
      title: "Space Weather Monitor Application Integration",
      description: "SFRN integrates with the Space Weather Monitor Application to provide real-time solar flare monitoring. This integration ensures that satellite operators receive timely alerts about solar activity, allowing them to take precautionary measures.",
    },
    {
      title: "Real-time Solar Flare Monitoring",
      description: "Our real-time solar flare monitoring module provides continuous updates on solar activity, radiation levels, and potential impacts on satellites. This feature allows operators to implement immediate risk mitigation strategies",
    },
    {
      title: "Resilient Satellite Communication Protocols",
      description: "SFRN includes a suite of resilient communication protocols that ensure data integrity and connectivity during solar flare events. These protocols are designed to maintain reliable communication links and minimize signal loss.",
    },
    {
      title: "Disaster Recovery Planning",
      description: "SFRN offers comprehensive disaster recovery planning tools that help operators prepare for and respond to solar flare-induced disruptions. These tools include automated recovery simulations, failover strategies, and contingency planning.",
    }
  ];

  return sections.map((section, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className={styles.subheading}>{section.title}</h3>
      <p className={styles.text}>{section.description}</p>
    </motion.div>
  ));
}

function renderPlanCard(planName, features) {
  return (
    <motion.div
      className={styles.planCard}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <h3>{planName}</h3>
      <ul className={styles.planFeatures}>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </motion.div>
  );
}

// Solar Object
function SolarObject({ position, scale }) {
  return (
    <mesh position={position} scale={scale}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial emissive={"#FFA500"} emissiveIntensity={1.5} />
      <pointLight intensity={2.5} distance={10} decay={2} />
    </mesh>
  );
}

// Solar Flare Effect
function SolarFlareEffect() {
  const particles = Array.from({ length: 120 }, (_, i) => (
    <mesh
      key={i}
      position={[
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 12
      ]}
      scale={Math.random() * 0.3}
    >
      <sphereGeometry args={[0.05, 16, 16]} />
      <meshStandardMaterial color={"#FF4500"} />
    </mesh>
  ));

  return <group>{particles}</group>;
}

// Asteroid Belt
function AsteroidBelt() {
  const asteroids = Array.from({ length: 50 }, (_, i) => (
    <mesh
      key={i}
      position={[
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
      ]}
      scale={Math.random() * 0.4}
    >
      <sphereGeometry args={[0.2, 8, 8]} />
      <meshStandardMaterial color={"#808080"} />
    </mesh>
  ));

  return <group>{asteroids}</group>;
}
