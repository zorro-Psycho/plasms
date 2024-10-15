import { useEffect, useState } from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  let scrollTimeout;

  const handleScroll = () => {
    if (scrollTimeout) clearTimeout(scrollTimeout);

    setIsVisible(false);

    scrollTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 250); // Header reappears 250ms after scrolling stops
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isVisible ? styles.visible : styles.hidden}`}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="PLASMS Logo" />
      </div>
      <div className={styles.plasmsName}>PLASMS</div>
      <nav className={styles.nav}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/ctms">CTMS</a></li>
          <li><a href="/vcd">VCD</a></li>
          <li><a href="/sfrn">SFRN</a></li>
          <li><a href="/lnr">LNR</a></li>
          <li><a href="/qmn">QMN</a></li>
          <li className={styles.more}>
            <a href="#">More</a>
            <ul className={styles.dropdown}>
              <li><a href="/Research">Research and Development</a></li>
              <li><a href="/partnership">Partnerships</a></li>
              <li><a href="/Support">Support</a></li>
            </ul>
          </li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/LoginSignUp">Login</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
