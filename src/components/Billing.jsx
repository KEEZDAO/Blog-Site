import React from 'react';
import Image from 'next/image';
import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';

const Billing = () => (
  <section id="prodcut" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <div className="relative z-[5] w-[75%] h-[100%]">
        <Image src={bill} alt="billing" layout="fill" objectFit="cover" />
      </div>
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Lorem ipsum <br className="sm:block hidden" />
        sit amet, consectetur.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  </section>
);

export default Billing;