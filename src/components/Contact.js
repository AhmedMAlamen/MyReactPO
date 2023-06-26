import React from 'react';
import { motion } from 'framer-motion';
import {fadeIn} from '../variants'

const Contact = () => {
  return <section className='py-16 lg:section' id='contact'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row ' >
        <motion.div 
         variants={fadeIn('right', 0.3)}
         initial ="hidden"
         whileInView={"show"}
         viewport={{once: false, amount: 0.3}}  
        className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='text-accent text-xl uppercase font-medium mb-2
            tracking-wide'>Get In Touch </h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's Work <br/> Together!</h2>
          </div>
        </motion.div>
        <motion.form action='mailto:ahmedalamen0x@gmail.com' method='POST'encType='multipart/form-data'
           variants={fadeIn('left', 0.3)}
           initial ="hidden"
           whileInView={"show"}
           viewport={{once: false, amount: 0.3}}  
        className='flex-1 border rounderd-2x1 flex flex-col gap-y-6 pb-24 p-6 items-start'>
          <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent
           transition-all ' type='text' placeholder='Your Name' required/>
           <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent
           transition-all ' type='email' placeholder='Your Email' required/>
           <textarea className='bg-transparent border-b py-13 outline-none w-full placeholder:text-white focus:border-accent
           transition-all resize-none mb-20' placeholder='Your Message' required></textarea>
           <button className='btn btn-lg'>Send Message</button>
        </motion.form>  
      </div>
    </div>
  </section>;
};

export default Contact;
