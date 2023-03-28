import React from 'react';
import Image from 'next/image';
import { defaultStyles } from '@/utils/default_styles';
import { arrowUp } from '../assets';

const GetStarted = () => (
  <div
    className={`${defaultStyles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
  >
    <div
      className={`${defaultStyles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
    >
      <div className={`${defaultStyles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
          <span className="text-gradient">Get</span>
        </p>
        <div className="relative w-[23px] h-[23px]">
          <Image src={arrowUp} alt="arrow" layout="fill" objectFit="contain" />
        </div>
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
