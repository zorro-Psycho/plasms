import { ParallaxProvider } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import { FaIndustry, FaUniversity, FaGavel } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Partnerships.module.css';
import "../app/globals.css";

export default function Partnerships() {
  return (
    <ParallaxProvider>
      <Header />

      {/* Industry Collaborations Section */}
      <div className={styles.industrySection}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className={styles.title}>
            <FaIndustry className={styles.icon} /> Industry Collaborations
          </h1>
          <p className={styles.description}>
            We collaborate with leading companies in the aerospace and technology sectors to bring the latest innovations to PLASMS™. Discover our partners and learn more about our collaborative projects.
          </p>
        </motion.div>
      </div>

      {/* Academic Partnerships Section */}
      <div className={styles.academicSection}>
        <motion.div
          className={styles.card}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className={styles.title}>
            <FaUniversity className={styles.icon} /> Academic Partnerships
          </h2>
          <p className={styles.description}>
            PLASMS™ partners with top universities and research institutions worldwide to drive academic research in space technology. Learn more about our academic partnerships and joint research initiatives.
          </p>
        </motion.div>
      </div>

      {/* Government Collaborations Section */}
      <div className={styles.governmentSection}>
        <motion.div
          className={styles.card}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className={styles.title}>
            <FaGavel className={styles.icon} /> Government Collaborations
          </h2>
          <p className={styles.description}>
            PLASMS™ works closely with government agencies to ensure our solutions meet regulatory standards and national security requirements. Discover our government collaborations and how they support our mission.
          </p>
        </motion.div>
      </div>

      <Footer />
    </ParallaxProvider>
  );
}
