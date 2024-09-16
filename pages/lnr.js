import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '../styles/lnr.module.css';
import "../app/globals.css";

export default function CTMS() {
  return (
    <>
      <Header />

      <div className={styles.canvasContainer}>
        <Canvas className={styles.canvas}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} />
          <Stars radius={200} depth={70} count={20000} factor={10} fade />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          
          <AsteroidBelt />
        </Canvas>
      </div>

      <div className={styles.container}>
        {/* Content Section */}
        <section className={styles.section}>
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <h1 className={styles.title}>Lunar Relay Network (LNR)</h1>
            <p className={styles.description}>
              The Lunar Relay Network (LNR) is a next-generation communication network designed to support lunar missions. LNR provides reliable communication relay stations and surface coverage maps to ensure uninterrupted connectivity between lunar explorers and Earth-based stations.
            </p>
          </motion.div>
        </section>

        <section className={styles.featureSection}>
          <h2 className={styles.featureTitle}>STK (Systems Tool Kit) Integration</h2>
          <p className={styles.featureDescription}>
            LNR integrates with the Systems Tool Kit (STK) to provide advanced orbital analysis and trajectory planning capabilities. This integration allows users to plan lunar communication strategies with precision.
          </p>
        </section>

        <section className={styles.featureSection}>
          <h2 className={styles.featureTitle}>Orbital Analysis and Trajectory Planning</h2>
          <p className={styles.featureDescription}>
            Our orbital analysis and trajectory planning tools provide detailed simulations and calculations for lunar missions. This feature helps users optimize mission trajectories, reduce fuel consumption, and increase mission success rates.
          </p>
        </section>

        <section className={styles.featureSection}>
          <h2 className={styles.featureTitle}>Lunar Communication Relay Stations</h2>
          <p className={styles.featureDescription}>
            LNR includes a network of lunar communication relay stations strategically positioned to provide maximum coverage and redundancy. These stations ensure continuous communication with lunar missions, regardless of their location on the moon.
          </p>
        </section>

        <section className={styles.featureSection}>
          <h2 className={styles.featureTitle}>Lunar Surface Coverage Maps</h2>
          <p className={styles.featureDescription}>
            Our lunar surface coverage maps provide detailed visualizations of communication coverage areas on the lunar surface. These maps help mission planners identify optimal landing sites and communication points.
          </p>
        </section>

        {/* Subscription Plan Cards */}
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
                <li>Lunar Surface Coverage Maps</li>
                <li>Limited Orbital Analysis</li>
              </ul>
            </motion.div>

            <motion.div
              className={styles.planCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <h3>Premium Plan - $17.99/month</h3>
              <ul className={styles.planFeatures}>
                <li>Advanced Orbital Analysis</li>
                <li>Real-time Trajectory Planning</li>
                <li>Custom Lunar Relay Solutions</li>
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
                <li>Custom Integration Options</li>
              </ul>
            </motion.div>
          </div>
        </section>

      </div>
      <Footer />
    </>
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
