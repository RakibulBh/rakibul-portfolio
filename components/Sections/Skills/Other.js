import React from 'react';
import { skillsData } from '@/lib/data';
import Skill from '@/components/Sections/Skills/Skill';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 }, 
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delay in seconds between each child's animation
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 }, 
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring', // You can customize the type of transition (spring, tween, etc.)
      duration: 0.5
    }
  }
};

export default function Other() {
  return (
    <motion.div
      className='w-full flex flex-wrap justify-center gap-5 px-10 md:px-36'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {skillsData.other.map((skill, index) => (
        <motion.div key={skill} variants={itemVariants}>
          <Skill skill={skill} />
        </motion.div>
      ))}
    </motion.div>
  );
}
