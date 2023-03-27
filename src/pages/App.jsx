// src/App.jsx

import styles from './style';

import {Navbar, Hero, Stats, Business, Billing, CTA, Footer } from './components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogPage from './pages/blog';

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Router>
          <Switch>
            <Route exact path="/blog" component={BlogPage} />
          </Switch>
        </Router>
        <Stats/>
        <Business/>
        <Billing/>
        <CTA/>
      </div>
    </div>
  </div>
);

export default App;
