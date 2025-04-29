import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb,SiAngular } from 'react-icons/si';
// import { DiRedis } from 'react-icons/di';
import { FaNodeJs, FaPhp, FaJava } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { CgCPlusPlus } from 'react-icons/cg';

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse'
        }
    }
});

const technologies = [
    { icon: <RiReactjsLine className='text-7xl text-cyan-400' />, name: 'React' },
    { icon: <TbBrandNextjs className='text-7xl' />, name: 'Next.js' },
    { icon: <SiAngular className='text-7xl text-red-600' />, name: 'Angular' },
    { icon: <FaNodeJs className='text-7xl text-green-400' />, name: 'Node.js' },
    { icon: <FaPhp className='text-7xl text-purple-600' />, name: 'PHP' },
    { icon: <SiMongodb className='text-7xl text-green-500' />, name: 'MongoDB' },
    { icon: <BiLogoPostgresql className='text-7xl text-sky-700' />, name: 'PostgreSQL' },
    { icon: <FaJava className='text-7xl text-blue-600' />, name: 'Java' },
    { icon: <CgCPlusPlus className='text-7xl text-blue-600' />, name: 'C++' }
];

export default function Tech() {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl'>
                Technologies
            </motion.h1>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className='flex flex-wrap items-center justify-center gap-4'>
                {technologies.map((tech, index) => (
                    <motion.div
                        key={index}
                        variants={iconVariants(index + 2)} // Use index + 2 for different durations
                        animate="animate"
                        initial="initial"
                        className='flex flex-col items-center rounded-2xl  border-neutral-800 p-4'>
                        <div className='mb-2'>
                            {tech.icon}
                        </div>
                        <p className='text-lg'>{tech.name}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
