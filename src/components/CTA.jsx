import React from 'react';
import Button from './Button';
import { defaultStyles } from '@/utils/default_styles';

const CTA = () => (
  <section
    className={`${defaultStyles.flexCenter} ${defaultStyles.marginY} ${defaultStyles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={defaultStyles.heading2}>Let&apos;s build web3 now!</h2>
      <p className={`${defaultStyles.paragraph} max-w-[850px] mt-5`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    <div className={`${defaultStyles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
