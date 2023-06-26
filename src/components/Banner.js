import React from 'react';
import image from '../assets/avatar.svg'

import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import {fadeIn} from '../variants'
const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
<div className='contanier mx-auto'>
<div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
  <div className='flex-1 text-center font-secondary lg:text-left'>
    <motion.h1 variants={fadeIn('up',0.3)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}} className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>AHMED <span>ALAMEN</span></motion.h1>
    <motion.div variants={fadeIn('up',0.4)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}} className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
      <span className='text-white mr-4'>I'm A </span>
      <TypeAnimation sequence={[
        'FreeLancer',
        2000,
        'Front-End Developer',
        2000,
        'JavaScript Expert',
        2000,
        'React Developer',
        2000,

      ]}
      speed={50}
      className='text-accent'
      wrapper='span'
      repeat={Infinity}
      />
      
    </motion.div>
    <motion.p variants={fadeIn('up',0.5)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}} className='mb-8 max-w-lg mx-auto lg:mx-0'>
      Hi, I'm Ahmed A Front-End Developer, Welcome To My Portfolio ,<br/>
      I have experince Coding With JavaScript , Bootstrap , React ,Tailwind<br/>
      And Ofcourse HTML & CSS XD, You Can Check Some Of My Work In This Portfolio<br/>
  
    </motion.p>
    <motion.div variants={fadeIn('up',0.6)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}} 
    className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
      <button className='btn btn-lg'>Contact Me</button>
      <a href='/src/components/Projects' className='text-gradient btn-link'> My Portfolio </a>
    </motion.div>
    <div>
     
    </div>
  </div>
  <motion.div variants={fadeIn('dpwn',0.5)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}} 
   className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
    <img src = {image} />
  </motion.div>
</div>

</div>



  </section>;
};

export default Banner;
