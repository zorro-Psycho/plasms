import { useState, useEffect } from 'react';
import styles from '../styles/Footer.module.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { TextField, Button } from '@mui/material';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const footerElement = document.querySelector(`.${styles.footer}`);
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  return (
    <footer className={`${styles.footer} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.footerContent}>
        <div className={styles.column}>
          <h3>Company Information</h3>
          <ul>
            <li>About Us
              <ul>
                <li>Who We Are</li>
                <li>Our Mission & Vision</li>
                <li>Leadership Team</li>
                <li>Careers</li>
              </ul>
            </li>
            <li>Newsroom
              <ul>
                <li>Press Releases</li>
                <li>Media Coverage</li>
                <li>Blog</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Support & Resources</h3>
          <ul>
            <li>Help Center
              <ul>
                <li>FAQs</li>
                <li>User Guides</li>
                <li>Troubleshooting</li>
              </ul>
            </li>
            <li>Contact Us
              <ul>
                <li>General Inquiries</li>
                <li>Sales Inquiries</li>
                <li>Technical Support</li>
              </ul>
            </li>
            <li>Training & Development
              <ul>
                <li>Webinars</li>
                <li>Online Courses</li>
                <li>Certification Programs</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Legal & Compliance</h3>
          <ul>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Data Protection & Compliance</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Partnerships & Affiliations</h3>
          <ul>
            <li>Research Institutions</li>
            <li>Government & Defense Agencies</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Connect With Us</h3>
          <ul>
            <li>
              Follow Us
              <div className={styles.socialMedia}>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <TwitterIcon className={styles.icon} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FacebookIcon className={styles.icon} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon className={styles.icon} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <InstagramIcon className={styles.icon} />
                </a>
              </div>
            </li>
            <li>
              Subscribe to Our Newsletter
              <form className={styles.subscriptionForm}>
                <TextField
                  variant="outlined"
                  placeholder="Your Email Address"
                  className={styles.emailInput}
                  size="small"
                  InputProps={{
                    style: { color: '#ffffff' }
                  }}
                />
                <Button variant="contained" color="primary" type="submit">
                  Subscribe
                </Button>
              </form>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Contact Information</h3>
          <ul>
            <li>
              Headquarters
              <ul>
                <li>Phoenix Labs Global</li>
                <li>The Metaverse</li>
              </ul>
            </li>
            <li>Phone: +1-800-372-7052</li>
            <li>Email: phoenixlabsglobal@gmail.com</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Quick Links</h3>
          <ul>
            <li>Request a Demo</li>
            <li>Investor Relations</li>
            <li>Site Map</li>
            <li>Accessibility</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
