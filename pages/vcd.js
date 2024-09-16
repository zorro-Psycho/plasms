import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '../styles/vcd.module.css';
import "../app/globals.css";

export default function CTMS() {
  return (
    <>
      <Header />

      {/* Background Animation */}
      <div className={styles.canvasContainer}>
        <Canvas className={styles.canvas}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} />
          <Stars radius={200} depth={70} count={20000} factor={10} fade />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />

          {/* Planet Object */}
          <CelestialBody position={[-2, 0, -5]} scale={1.2} color={"#F6F1D5"} />

          {/* Asteroid Belt */}
          <AsteroidBelt />
        </Canvas>
      </div>

      <div className={styles.container}>

        {/* Overview Section */}
        <section className={styles.overviewSection}>
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <h1 className={styles.title}>Virtual Constellation Deployment System (VCD)</h1>
            <p className={styles.description}>
            The Virtual Constellation Deployment System (VCD) is a groundbreaking tool that provides a virtual environment for satellite constellation planning and deployment. VCD enables operators to simulate satellite launches and optimize constellation configurations for maximum coverage and efficiency.
            </p>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className={styles.featuresSection}>
          <div className={styles.featureGrid}>
            {/* <motion.div className={styles.featureCard}>
              <h2>Overview of VCD</h2>
              <p>
                The Virtual Constellation Deployment System (VCD) is a groundbreaking tool that provides a virtual environment for satellite constellation planning and deployment. VCD enables operators to simulate satellite launches and optimize constellation configurations for maximum coverage and efficiency.
              </p>
            </motion.div> */}

            <motion.div className={styles.featureCard}>
              <h2>Celestrak Integration</h2>
              <p>
                VCD is seamlessly integrated with Celestrak for accurate and reliable satellite positioning data. This integration allows users to simulate constellation deployments based on real-time orbital data.
              </p>
            </motion.div>

            <motion.div className={styles.featureCard}>
              <h2>Constellation Planning Tools</h2>
              <p>
                Our constellation planning tools allow operators to design and plan satellite constellations with precision. This feature includes customizable templates, automated path optimization, and advanced analytics to achieve desired coverage and connectivity.
              </p>
            </motion.div>

            <motion.div className={styles.featureCard}>
              <h2>Virtual Satellite Deployment Simulations</h2>
              <p>
                The VCD platform provides detailed simulations of satellite deployments. These simulations consider various parameters, including launch windows, orbital mechanics, and environmental factors, to help users plan effectively.
              </p>
            </motion.div>

            <motion.div className={styles.featureCard}>
              <h2>Automated Constellation Optimization</h2>
              <p>
                VCD offers automated optimization algorithms that recommend the best configurations for satellite constellations. This feature is designed to maximize coverage, minimize latency, and optimize resource utilization.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Subscription Plan Cards */}
        <section className={styles.plansSection}>
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
                <li>Virtual Constellation Simulations</li>
                <li>Limited Constellation Planning Tools</li>
              </ul>
            </motion.div>

            <motion.div
              className={styles.planCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <h3>Premium Plan - $14.99/month</h3>
              <ul className={styles.planFeatures}>
                <li>Advanced Constellation Optimization</li>
                <li>Real-time Satellite Deployment Metrics</li>
                <li>Customized Constellation Planning</li>
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
                <li>Dedicated Support</li>
                <li>Custom Deployment Simulations</li>
              </ul>
            </motion.div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}

function CelestialBody({ position, scale, color }) {
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });
  return (
    <mesh position={position} scale={scale} ref={mesh}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function AsteroidBelt() {
  const asteroids = Array.from({ length: 50 }, (_, i) => (
    <mesh
      key={i}
      position={[
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ]}
      scale={Math.random() * 0.3}
    >
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color={"#5d5d5d"} />
    </mesh>
  ));

  return <group>{asteroids}</group>;
}
