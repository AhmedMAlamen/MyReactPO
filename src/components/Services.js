import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs'
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'

const services = [
  {name: 'Landing Page',
    description: 'I will Design A Unique Landing Page For You Accourding To Your Request And You Can Request Animations And So Much More',
    link:'Learn More'
},
{ name: 'Full-Websites',
  description: 'I will Design A Unique Website For You Up To 10 Pages Accourding To Your Request And You Can Request Animations So Much More',
  link:'Learn More'
},
{name: ' Fixing + Adding ',
description: 'I will Fix Or Add A New Feature Like Animtion Transtion And Alot More',
link:'Learn More'
},
]

const Services = () => {
  return <div>
    <br/>
  <br/><section className='section' id='services'>
    <div className='container mx-auto mt-40 pb-20'>
      <div className='flex flex-col lg:flex-row'>
      <motion.div 
       variants={fadeIn('right', 0.3)}
       initial ="hidden"
       whileInView={"show"}
       viewport={{once: false, amount: 0.3}}  
      className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-5 lg:mb-0 '>
        <h2 className='h2 text-accent mb-10 lg:mt-32 items-top'>What Can I do For You ?</h2>
        <h3 className='h3 max-w-[455px] mb-10 lg:mt-4'> I'm Front-end Developer who's Work As Freelancer,<br/>
        With Over 3 Years Of Experince</h3>
        <button className='btn btn-sm'>See My Work</button>
      </motion.div>
      <motion.div 
       variants={fadeIn('left', 0.5)}
       initial ="hidden"
       whileInView={"show"}
       viewport={{once: false, amount: 0.3}}  
      className='flex-1'>
        <div>
        {services.map((service, index) => {
          const {name,description,link} = service;
          return (
          <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
            <div className='max-w-[476px] '>
              <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'><br/> {name}</h4>
              <p className='font-secondary leading-tight'><br/> {description}</p>
            </div>
            <div className='flex flex-col flex-1 items-end'> 
              <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                <BsArrowUpRight/>
              </a>
              <a href='#' className='text-gradient text-sm'>{link}</a>
            </div>
          
          </div>
          )
      })}
        </div>
      </motion.div>
      </div>
    </div>
  </section>
  
  </div>;
};

export default Services;
