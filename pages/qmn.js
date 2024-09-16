// CTMS.js
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '../styles/qmn.module.css';
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
            <h1 className={styles.title}>Quantum Mesh Networks (QMN)</h1>
            <p className={styles.description}>
            Quantum Mesh Networks (QMN) represent the forefront of secure and resilient space communication. Utilizing quantum communication protocols and quantum key distribution, QMN ensures that data transmission is secure from cyber threats and quantum attacks.
            </p>
          </motion.div>
        </section>

      

        {/* Features Section */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>Key Features</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Quantum Communication Protocols</h3>
              <p className={styles.featureText}>
                QMN leverages advanced quantum communication protocols to provide highly secure data transmission channels. These protocols utilize quantum mechanics principles to encrypt data, ensuring maximum security and confidentiality.
              </p>
            </div>

            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Mesh Network Deployment</h3>
              <p className={styles.featureText}>
                Our mesh network deployment module allows for the creation of dynamic and flexible communication networks. This feature ensures redundancy and reliability in satellite communication, even in the event of node failures.
              </p>
            </div>

            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Quantum Key Distribution</h3>
              <p className={styles.featureText}>
                QMN utilizes quantum key distribution (QKD) technology to provide unbreakable encryption for data transmitted over satellite networks. This feature ensures that data is protected from interception or tampering.
              </p>
            </div>

            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Secure and Resilient Communication</h3>
              <p className={styles.featureText}>
                The QMN platform offers a suite of tools and protocols designed to provide secure and resilient communication in the space environment. These tools include quantum-resistant algorithms and automated threat detection systems.
              </p>
            </div>
          </div>
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
                <li>Basic Quantum Communication Protocols</li>
                <li>Limited Mesh Network Deployment</li>
              </ul>
            </motion.div>

            <motion.div
              className={styles.planCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <h3>Premium Plan - $19.99/month</h3>
              <ul className={styles.planFeatures}>
                <li>Advanced Quantum Communication</li>
                <li>Mesh Network Optimization</li>
                <li>Quantum Key Distribution</li>
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
                <li>Custom Quantum Solutions</li>
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
      <meshStandardMaterial color={"#FF5349"} />
    </mesh>
  ));

  return <group>{asteroids}</group>;
}
