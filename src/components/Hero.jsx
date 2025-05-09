import React from 'react'
import { HERO_CONTENT,HERO_CONTENT_2 } from '../constants/index'
import profilePic from '../assets/profilePicture.jpg'
import { motion } from "framer-motion"

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  }
})

export default function Hero() {
  return (
    <div className='border-b pb-4 border-neutral-900 lg:mb-35'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <motion.h1 variants={container(0.5)} initial='hidden' animate="visible"
                       className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl'>
              Ayush Rawat
            </motion.h1>
            <motion.span variants={container(1)} initial='hidden' animate="visible"
                         className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Full Stack Developer
            </motion.span>
            <motion.p variants={container(1.5)} initial='hidden' animate="visible"
                      className='my-2 max-w-xl py-6 font-light tracking-tight'>
              {HERO_CONTENT}
              <br/>
              <br/>
              {HERO_CONTENT_2}
            </motion.p>
            <motion.p variants={container(1.5)} initial='hidden' animate="visible"
                      className='my-2 max-w-xl py-6 font-light tracking-tight'>

            </motion.p>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center'>
            <motion.img
                initial={{x: 100, opacity: 0}}
                animate={{x:0,opacity:1}}
            transition={{duration:1,delay:1.2}}
            style={{borderRadius:'1000px'}}
             src={profilePic} alt='ayush' />
          </div>
        </div>
      </div>
    </div>
  )
}
