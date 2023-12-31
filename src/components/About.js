import React from 'react';
import Countup from 'react-countup'
import {useInView} from 'react-intersection-observer'
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const [ref,inView] = useInView({
    threshold: 0.5,
  });
  return <section className='section mb-20' id='about' ref={ref}>
    <div className='container mx-auto'> 
    <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
    <motion.div 
    variants={fadeIn('right', 0.3)}
    initial ="hidden"
    whileInView={"show"}
    viewport={{once: false, amount: 0.3}}
    className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></motion.div>
    <motion.div 
      variants={fadeIn('left', 0.5)}
      initial ="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.3}}    
    className='flex-1'>
      <h2 className='h2 text-accent'>About Me</h2>
      <h3 className='h3 mb-4'>
        I'm Front-end Developer who's Work As Freelancer ,With Over 3 Years Of Experince
      </h3>
      <p className='p mb-6'>
        Let's Work Toghther</p>
      <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
        <div>
          <div className='text-[40px] font-tertiary text-gradient mb-2'>
            {inView ? <Countup start={0} end={3} duration={3}/> : null} 
          </div>
          <div className='font-primary text-sm tracking-[2px]'>
            Years Of <br/> Experince
          </div>
        </div>
        <div>
          <div className='text-[40px] font-tertiary text-gradient mb-2'>
            {inView ? <Countup start={0} end={100} duration={15}/> : null} 
          </div>
          <div className='font-primary text-sm tracking-[2px]'>
            Porjects <br/> Completed
          </div>
        </div>
        <div>
          <div className='text-[40px] font-tertiary text-gradient mb-2'>
            {inView ? <Countup start={0} end={100} duration={15}/> : null} 
          </div>
          <div className='font-primary text-sm tracking-[2px]'>
            Satisfied <br/> Clients
          </div>
        </div>
      </div>
      <div className='flex gap-x-8 items-center'>
          <button className='btn btn-lg '> Contact Me </button>
          <a href='#' className='text-gradient btn-link'>My Portfoilo</a>
        </div>
    </motion.div>
    </div>
    </div>
    <br/>
  <br/>
  </section>;
};

export default About;
