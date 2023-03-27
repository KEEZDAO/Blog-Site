'use client'; // this is a client component
import styles from '../style';
import dynamic from 'next/dynamic';
import { Hero, Stats, Business, Billing, CTA, Footer } from '../components';

const Navbar = dynamic(() => import('../components/Navbar'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);
