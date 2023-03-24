import React from 'react';
import Image from 'next/image';
import styles from '../style';
import { discount, robot } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => (
  <section
    id="home"
    className={`flex md:flex-row flex-col pt-0 ${styles.paddingY}`}
  >
    <div
      className={`flex-1 ${styles.flexStart} flex-col pt-0 xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          The Next <br className="sm:block hidden" />{' '}
          <span className="text-gradient">Generation</span>{' '}
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>

      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
        of DAOs.
      </h1>
      <p
        className={`${styles.paragraph} max-w-[470px] mt-5`}
      >
        We are a community gathering the resources and talent to build a DAO
        focused on educating, onboarding, and collaboration. We strive for a
        rich culture of productive builders assisting in creating network
        effect for the LUKSO blockchain.
      </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <div className="relative w-[100%] h-[100%] inset-y-0 z-[5]">
        <Image src={robot} alt="billing" layout="fill" objectFit="contain" />
      </div>
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 pink__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 pink__gradient" />
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;