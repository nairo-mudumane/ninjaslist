import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>HOme Page</h1>
      <p>
        Sit consequat sint nostrud consequat exercitation do nisi dolore minim
        commodo voluptate reprehenderit anim exercitation. Aute qui laboris sint
        proident in enim est officia dolor ipsum proident consectetur. Mollit
        incididunt reprehenderit sit aliqua qui eu sit ullamco voluptate minim
        voluptate consequat eu eiusmod. Culpa eiusmod esse culpa fugiat
        exercitation eiusmod quis esse sit. Fugiat id tempor aute occaecat
        occaecat aute ipsum.
      </p>

      <Footer />
    </div>
  );
}
