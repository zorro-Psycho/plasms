// components/Login.js
import { Canvas, useFrame } from '@react-three/fiber';

import { useState } from 'react';
import { motion } from 'framer-motion';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../pages/firebase'; // Import Firebase Auth
import { useRouter } from 'next/router';
import styles from '../styles/LoginSignUp.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/Profile');
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <>
      <Header />
      <div className={styles.canvasContainer}>
        <Canvas className={styles.canvas}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} />
         
        </Canvas>
      </div>
      <div className={styles.container}>
        <motion.div
          className={styles.formContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className={styles.title}>Login to Your Account</h1>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              required
            />
            {error && <p className={styles.error}>{error}</p>}
            <button type="submit" className={styles.submitButton}>
              Login
            </button>
          </form>
          <p className={styles.toggleText}>
            Don't have an account? 
            <span onClick={() => router.push('/sign')} className={styles.toggleLink}>
              Sign up here
            </span>
          </p>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
