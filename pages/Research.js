import { ParallaxProvider } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import { FaMicroscope, FaSatellite, FaCodeBranch, FaHandshake } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Research.module.css';
import "../app/globals.css";

export default function Research() {
  return (
    <ParallaxProvider>
      <Header />

      {/* Research and Development Section */}
      <div className={styles.researchSection}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className={styles.title}>
            <FaMicroscope className={styles.icon} /> Research and Development
          </h1>
          <p className={styles.description}>
            Learn more about our ongoing research and development projects at PLASMS™. From developing new quantum communication protocols to creating advanced AI algorithms for space traffic management, our R&D team is at the forefront of innovation.
          </p>
        </motion.div>
      </div>

      {/* Ongoing Projects Section */}
      <div className={styles.projectsSection}>
        <motion.div
          className={styles.card}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className={styles.title}>
            <FaSatellite className={styles.icon} /> Ongoing Projects
          </h2>
          <p className={styles.description}>
            Learn more about our ongoing research and development projects at PLASMS™. From developing new quantum communication protocols to creating advanced AI algorithms for space traffic management, our R&D team is at the forefront of innovation.
          </p>
        </motion.div>
      </div>

      {/* Collaboration Opportunities Section */}
      <div className={styles.collaborationSection}>
        <motion.div
          className={styles.card}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className={styles.title}>
            <FaHandshake className={styles.icon} /> Collaboration Opportunities
          </h2>
          <p className={styles.description}>
            PLASMS™ actively seeks collaboration opportunities with industry leaders, academic institutions, and government agencies to advance space technology. Learn more about how you can partner with us to drive the future of space exploration.
          </p>
        </motion.div>
      </div>

      {/* Open Source Contributions Section */}
      <div className={styles.opensourceSection}>
        <motion.div
          className={styles.card}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className={styles.title}>
            <FaCodeBranch className={styles.icon} /> Open Source Contributions
          </h2>
          <p className={styles.description}>
            We believe in the power of open-source collaboration. PLASMS™ contributes to various open-source projects in space technology, AI, and quantum computing. Explore our repositories and join the community.
          </p>
        </motion.div>
      </div>

      <Footer />
    </ParallaxProvider>
  );
}
