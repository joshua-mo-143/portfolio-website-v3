import React from 'react'
import { motion } from 'framer-motion'

export const Success = () => {
  return (
    <motion.div className="absolute left-8 md:left-1/4 top-80 lg:top-32 w-4/5 md:w-1/2 lg:w-1/3 flex flex-col gap-2 justify-center p-5 rounded-xl -mb-5 shadow-md"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
        <h1>Thank you! I'll make sure to respond to you soon.</h1>
        </motion.div>
  )
}

export default Success