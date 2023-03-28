import { Inter } from 'next/font/google';
import { defaultStyles } from '@/utils/default_styles';
import { Navbar, Hero, Stats, Business, Billing, CTA } from '@/components';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import BlogPage from './pages/blog';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${defaultStyles.paddingX} ${defaultStyles.flexCenter}`}>
        <div className={`${defaultStyles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${defaultStyles.flexStart}`}>
        <div className={`${defaultStyles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div
        className={`bg-primary ${defaultStyles.paddingX} ${defaultStyles.flexStart}`}
      >
        <div className={`${defaultStyles.boxWidth}`}>
          {/* <Router>
            <Switch>
              <Route exact path="/blog" component={BlogPage} />
            </Switch>
          </Router> */}
          <Stats />
          <Business />
          <Billing />
          <CTA />
        </div>
      </div>
    </div>
    // <div className="bg-primary w-full overflow-hidden">
    //   <div className={`${defaultStyles.paddingX} ${defaultStyles.flexCenter}`}>
    //     <div className={`${defaultStyles.boxWidth}`}>
    //       <Navbar />
    //     </div>
    //   </div>

    //   <div className={`bg-primary ${defaultStyles.flexStart}`}>
    //     <div className={`${defaultStyles.boxWidth}`}>
    //       <Hero />
    //     </div>
    //   </div>
    // </div>
  );
}
