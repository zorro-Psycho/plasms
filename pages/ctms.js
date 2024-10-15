// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, Stars } from '@react-three/drei';
// import { motion } from 'framer-motion';
// import { useRef } from 'react';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import styles from '../styles/ctms.module.css';
// import "../app/globals.css";

// export default function CTMS() {
//   return (
//     <>
//       <Header />

//       <div className={styles.canvasContainer}>
//         <Canvas className={styles.canvas}>
//           <ambientLight intensity={0.7} />
//           <directionalLight position={[5, 5, 5]} />
//           <Stars radius={200} depth={70} count={20000} factor={10} fade />
//           <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />

//           {/* Planet Object */}
//           <CelestialBody position={[-2, 0, -5]} scale={1.5} color={"#6c757d"} />

//           {/* Asteroid Belt */}
//           <AsteroidBelt />
//         </Canvas>
//       </div>

//       <div className={styles.container}>
//         {/* Content Section */}
//         <section className={styles.section}>
//           <motion.div
//             className={styles.content}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.5 }}
//           >
//             <h1 className={styles.title}>Celestial Traffic Management System (CTMS)</h1>
//             <p className={styles.description}>
//             The Celestial Traffic Management System (CTMS) is a robust and comprehensive solution designed to monitor, manage, and optimize the increasingly congested space environment. As the number of satellites and space missions grows, CTMS ensures that celestial traffic is safe, efficient, and sustainable. Powered by advanced AI algorithms, CTMS integrates real-time data analytics and predictive modeling to manage satellite paths and prevent collisions.
//             </p>
//           </motion.div>
//         </section>

//         {/* New Content Section: Overview */}
//         {/* <section className={styles.section}>
//           <motion.div
//             className={styles.content}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.5 }}
//           >
//             <h2 className={styles.subtitle}>Overview of CTMS</h2>
//             <p className={styles.description}>
//               The Celestial Traffic Management System (CTMS) is a robust and comprehensive solution designed to monitor, manage, and optimize the increasingly congested space environment. As the number of satellites and space missions grows, CTMS ensures that celestial traffic is safe, efficient, and sustainable. Powered by advanced AI algorithms, CTMS integrates real-time data analytics and predictive modeling to manage satellite paths and prevent collisions.
//             </p>
//           </motion.div>
//         </section> */}

//         {/* New Content Section: Celestrak Integration */}
//         <section className={styles.section}>
//           <motion.div
//             className={styles.content}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.5 }}
//           >
//             <h2 className={styles.title}>Celestrak Integration</h2>
//             <p className={styles.description}>
//               CTMS is fully integrated with Celestrak, a leader in satellite tracking data. By leveraging Celestrak's comprehensive database, CTMS provides accurate and real-time satellite tracking, enabling operators to manage and optimize satellite trajectories.
//             </p>
//           </motion.div>
//         </section>

//         {/* New Content Section: Real-time Satellite Tracking */}
//         <section className={styles.section}>
//           <motion.div
//             className={styles.content}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.5 }}
//           >
//             <h2 className={styles.title}>Real-time Satellite Tracking</h2>
//             <p className={styles.description}>
//               Our real-time satellite tracking module utilizes state-of-the-art sensors and AI algorithms to provide instant updates on satellite locations, velocities, and trajectories. This feature ensures accurate and up-to-date information for all stakeholders involved in space traffic management.
//             </p>
//           </motion.div>
//         </section>

//         {/* New Content Section: Collision Avoidance Algorithms */}
//         <section className={styles.section}>
//           <motion.div
//             className={styles.content}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.5 }}
//           >
//             <h2 className={styles.title}>Collision Avoidance Algorithms</h2>
//             <p className={styles.description}>
//               CTMS features sophisticated collision avoidance algorithms that predict potential collisions between satellites or other space objects. These algorithms offer automated recommendations for trajectory adjustments to ensure the safety of all celestial assets.
//             </p>
//           </motion.div>
//         </section>

//         {/* New Content Section: Space Traffic Analytics */}
//         <section className={styles.section}>
//           <motion.div
//             className={styles.content}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.5 }}
//           >
//             <h2 className={styles.title}>Space Traffic Analytics</h2>
//             <p className={styles.description}>
//               With our advanced space traffic analytics, users can visualize and analyze data regarding space object movements. This module provides insights into satellite congestion zones, orbital debris patterns, and future traffic forecasts to help operators make informed decisions.
//             </p>
//           </motion.div>
//         </section>

//         {/* Subscription Plan Cards */}
//         <section className={styles.section}>
//           <h2 className={styles.subtitle}>Subscription Plans</h2>
//           <div className={styles.planGrid}>
//             <motion.div
//               className={styles.planCard}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1.2 }}
//             >
//               <h3>Basic Plan - Free</h3>
//               <ul className={styles.planFeatures}>
//                 <li>Real-time Satellite Tracking</li>
//                 <li>Limited Collision Avoidance</li>
//                 <li>Space Traffic Alerts</li>
//               </ul>
//             </motion.div>

//             <motion.div
//               className={styles.planCard}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1.2 }}
//             >
//               <h3>Premium Plan - $9.99/month</h3>
//               <ul className={styles.planFeatures}>
//                 <li>Advanced Collision Avoidance</li>
//                 <li>Historical Traffic Data</li>
//                 <li>Custom Alerts</li>
//               </ul>
//             </motion.div>

//             <motion.div
//               className={styles.planCard}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1.2 }}
//             >
//               <h3>Enterprise Plan - Contact for Pricing</h3>
//               <ul className={styles.planFeatures}>
//                 <li>API Access</li>
//                 <li>Custom Integration</li>
//                 <li>24/7 Support</li>
//               </ul>
//             </motion.div>
//           </div>
//         </section>
//       </div>
//       <Footer />
//     </>
//   );
// }

// function CelestialBody({ position, scale, color }) {
//   const mesh = useRef();
//   useFrame(() => {
//     mesh.current.rotation.y += 0.01;
//   });
//   return (
//     <mesh position={position} scale={scale} ref={mesh}>
//       <sphereGeometry args={[1, 64, 64]} />
//       <meshStandardMaterial color={color} />
//     </mesh>
//   );
// }

// function AsteroidBelt() {
//   const asteroids = Array.from({ length: 50 }, (_, i) => (
//     <mesh
//       key={i}
//       position={[
//         (Math.random() - 0.5) * 10,
//         (Math.random() - 0.5) * 10,
//         (Math.random() - 0.5) * 10
//       ]}
//       scale={Math.random() * 0.3}
//     >
//       <sphereGeometry args={[0.5, 32, 32]} />
//       <meshStandardMaterial color={"#5d5d5d"} />
//     </mesh>
//   ));

//   return <group>{asteroids}</group>;
// }
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '../styles/ctms.module.css';
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

          {/* Planet Object */}
          <CelestialBody position={[-2, 0, -5]} scale={1.5} color={"#6c757d"} />

          {/* Asteroid Belt */}
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
            <h1 className={styles.title}>Celestial Traffic Management System (CTMS)</h1>
            <p className={styles.description}>
              The Celestial Traffic Management System (CTMS) is a robust and comprehensive solution designed to monitor, manage, and optimize the increasingly congested space environment. As the number of satellites and space missions grows, CTMS ensures that celestial traffic is safe, efficient, and sustainable. Powered by advanced AI algorithms, CTMS integrates real-time data analytics and predictive modeling to manage satellite paths and prevent collisions.
            </p>
          </motion.div>
        </section>

        {/* Real-time Satellite Tracking Section */}
        <section className={styles.section}>
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <h2 className={styles.title}>Real-time Satellite Tracking</h2>
            <p className={styles.description}>
              Our real-time satellite tracking module utilizes state-of-the-art sensors and AI algorithms to provide instant updates on satellite locations, velocities, and trajectories. This feature ensures accurate and up-to-date information for all stakeholders involved in space traffic management.
            </p>

            {/* Satellite Tracking Integration */}
            <div className={styles.iframeContainer}>
              <iframe
                src="https://phoenix-labs-satellite-tracker.netlify.app/"
                className={styles.iframe}
                title="Satellite Tracker"
                frameBorder="0"
                allowFullScreen
              ></iframe>
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
            <h2 className={styles.title}>Collision Avoidance Algorithms</h2>
            <p className={styles.description}>
              CTMS features sophisticated collision avoidance algorithms that predict potential collisions between satellites or other space objects. These algorithms offer automated recommendations for trajectory adjustments to ensure the safety of all celestial assets.
            </p>
          </motion.div>
        </section>

        {/* New Content Section: Space Traffic Analytics */}
        <section className={styles.section}>
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <h2 className={styles.title}>Space Traffic Analytics</h2>
            <p className={styles.description}>
              With our advanced space traffic analytics, users can visualize and analyze data regarding space object movements. This module provides insights into satellite congestion zones, orbital debris patterns, and future traffic forecasts to help operators make informed decisions.
            </p>
          </motion.div>
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
                <li>Real-time Satellite Tracking</li>
                <li>Limited Collision Avoidance</li>
                <li>Space Traffic Alerts</li>
              </ul>
            </motion.div>

            <motion.div
              className={styles.planCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <h3>Premium Plan - $9.99/month</h3>
              <ul className={styles.planFeatures}>
                <li>Advanced Collision Avoidance</li>
                <li>Historical Traffic Data</li>
                <li>Custom Alerts</li>
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
                <li>Custom Integration</li>
                <li>24/7 Support</li>
              </ul>
            </motion.div>
          </div>
        </section>
      {/* </div> */}
       
        {/* Other sections remain unchanged */}

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
