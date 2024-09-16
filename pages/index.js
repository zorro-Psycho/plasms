import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars, Cloud } from '@react-three/drei';
import { TextureLoader } from 'three';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';
import "../app/globals.css";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Header />
      <div className={styles.canvasContainer}>
        {isMounted && (
          <Canvas className={styles.canvas}>
            <ambientLight intensity={0.7} />
            <directionalLight position={[3, 3, 7]} />
            <Stars radius={300} depth={120} count={12000} factor={8} fade={false} />
            <Cloud opacity={0.2} speed={0.3} width={30} depth={8} segments={35} />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.7} />
            <mesh position={[0, 0, -5]} scale={[2.5, 2.5, 3]}>
              <sphereGeometry args={[1.5, 64, 64]} />
              <meshStandardMaterial map={useLoader(TextureLoader, '/earthmap.jpg')} />
            </mesh>
            <mesh position={[5, 4, 5]} scale={[2.5, 2.5, 2.5]}>
              <sphereGeometry args={[0.9, 64, 64]} />
              <meshStandardMaterial map={useLoader(TextureLoader, '/satellite.jpg')} />
            </mesh>
          </Canvas>
        )}
      </div>

      <div className={styles.container}>
        {/* Overview Section */}
        <section id="overview" className={styles.section}>
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <h1 className={styles.title}>
              Welcome to Phoenix Labs Astro-Satellite Monitoring System (PLASMS)
            </h1>
            <p className={styles.description}>
            Welcome to the Phoenix Labs Astro-Satellite Monitoring System (PLASMS™), a cutting-edge platform where the latest advancements in technology meet the boundless possibilities of space exploration. At PLASMS™, we are committed to solving real-world challenges by leveraging artificial intelligence and space technologies. Our platform offers a suite of innovative projects ranging from Celestial Traffic Management and Quantum Mesh Networks to Lunar Relay Networks and Solar Flare Resilient Systems. Whether you're an industry professional, researcher, or space enthusiast, PLASMS™ provides a comprehensive solution for navigating and optimizing the future of satellite operations and space communication.
            </p>
          </motion.div>
        </section>

        {/* Mission and Vision Section */}
        <section id="mission-vision" className={`${styles.section} ${styles.newsUpdates}`}>
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <h2 className={styles.title}>
              Mission and Vision
            </h2>
            <p className={styles.description}>
            Our mission is to pioneer the next era of space monitoring and management by integrating advanced AI and quantum computing technologies. PLASMS™ is dedicated to ensuring safe, secure, and sustainable space exploration while positively impacting people's lives on Earth. Our vision is to create a world where satellite communication is seamless, space traffic is efficiently managed, and celestial bodies are safely navigated to support humanity's quest for knowledge and progress.
            </p>
          </motion.div>
        </section>

        {/* News and Updates Section */}
        <section id="news-updates" className={styles.section} >
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <h2 className={styles.title}>
              Latest News and Updates
            </h2>
            <p className={styles.description}>
            Stay up to date with the latest news and developments from PLASMS™. Here, you can find information about our latest projects, technology advancements, collaborations, and industry insights. We provide updates on everything from new partnerships and research breakthroughs to events and webinars hosted by Phoenix Labs.
            </p>
          </motion.div>
        </section>
      </div>
      <Footer />
    </>
  );
}