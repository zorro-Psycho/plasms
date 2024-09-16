
import { useState } from 'react';
import { motion } from 'framer-motion';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../pages/firebase'; // Import Firestore database
import { useRouter } from 'next/router';
import { doc, setDoc } from 'firebase/firestore'; // Firestore imports
import styles from '../styles/LoginSignUp.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState(''); // New username field
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    try {
      // Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user data to Firestore
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        username: username, // Save the username
        email: user.email,
        createdAt: new Date().toISOString(),
      });

      setSuccessMessage('Account created successfully! Redirecting to login...');
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setError('This email is already in use.');
      } else if (err.code === 'auth/weak-password') {
        setError('Password should be at least 6 characters.');
      } else {
        console.log(err);
        setError('Registration failed. Please try again.');
      }
    }
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <motion.div
          className={styles.formContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className={styles.title}>Create an Account</h1>
          <form onSubmit={handleSignUp}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={styles.input}
              required
            />
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
            {successMessage && <p className={styles.success}>{successMessage}</p>}
            <button type="submit" className={styles.submitButton}>
              Sign Up
            </button>
          </form>
          <p className={styles.toggleText}>
            Already have an account? 
            <span onClick={() => router.push('/login')} className={styles.toggleLink}>
              Login here
            </span>
          </p>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
