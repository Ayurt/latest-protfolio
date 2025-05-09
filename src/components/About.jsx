import React from 'react'
import aboutImg from '../assets/college.jpg'
import { ABOUT_TEXT , ABOUT_TEXT_2, ABOUT_TEXT_3} from '../constants'
import { motion } from "framer-motion"
export default function About() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl'>About <span className='text-neutral-500'> Me</span> </h1>
        <div className='flex flex-wrap'>
            <motion.div
            whileInView={{opacity:1,x:0}}
             initial={{x:-100,opacity:0}}
            //  animate={{x:0,opacity:1}}
             transition={{duration:0.5}}
             className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <img className='rounded-2xl' width={300} height={300}  src={aboutImg} alt='about'/>
                </div>

            </motion.div>
            <motion.div
                whileInView={{opacity: 1, x: 0}}
                initial={{x: 100, opacity: 0}}
                //  animate={{x:0,opacity:1}}
                transition={{duration: 0.5}}
                className='w-full lg:w-1/2'>
                <div className='flex justify-center lg:justify-start'>
                    <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
                </div>
                <div className='flex justify-center lg:justify-start' style={{marginTop: "-50px"}}>
                    <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT_2}</p>
                </div>
                <div className='flex justify-center lg:justify-start' style={{marginTop: "-50px"}}>
                    <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT_3}</p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}
