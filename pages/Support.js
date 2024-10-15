
import { FaBook, FaQuestionCircle, FaEnvelope, FaTools } from 'react-icons/fa';
import { ParallaxProvider } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Support.module.css';
import "../app/globals.css";

export default function Research() {
  return (
    <ParallaxProvider>
      <Header />

    
      <div className={styles.researchSection}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className={styles.title}>
          <FaBook className={styles.icon} /> Knowledge Base
          </h1>
          <p className={styles.description}>
          Access our comprehensive knowledge base for detailed guides, tutorials, and documentation on using PLASMS™. Whether you're new to the platform or an advanced user, our knowledge base has something for you.
          </p>
        </motion.div>
      </div>

    
      <div className={styles.projectsSection}>
        <motion.div
          className={styles.card}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className={styles.title}>
             <FaQuestionCircle className={styles.icon} /> FAQs
        </h2>
         <p className={styles.description}>
           Find answers to frequently asked questions about PLASMS™, including setup guides, feature explanations, and troubleshooting tips.
          </p>
         
        </motion.div>
      </div>

     
      <div className={styles.collaborationSection}>
        <motion.div
          className={styles.card}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className={styles.title}>
          <FaEnvelope className={styles.icon} /> Contact Information
        </h2>
         <p className={styles.description}>
           Get in touch with our support team for any inquiries or assistance. We are here to help you make the most of PLASMS™.
         </p>
        </motion.div>
      </div>

      
      <div className={styles.opensourceSection}>
        <motion.div
          className={styles.card}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className={styles.title}>
          <FaTools className={styles.icon} /> Technical Support
         </h2>
         <p className={styles.description}>
           Our technical support team is available 24/7 to assist with any technical issues or challenges you may face while using PLASMS™.
        </p>
        </motion.div>
      </div>

      <Footer />
    </ParallaxProvider>
  );
}
