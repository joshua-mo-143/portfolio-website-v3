import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SocialsMenu from '../components/SocialsMenu'

const Home = () => {
  return (
<>
        <motion.div className="absolute left-8 md:left-1/4 top-96 lg:top-48 w-4/5 md:w-1/2 lg:w-1/3 flex flex-col gap-4 justify-center p-5 rounded-xl -mb-5 shadow-md"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
          <SocialsMenu/>
      <h1 className="">Hi! I'm <span className="text-cyan-300">Joshua Mo.</span></h1>
        <h1 className="text-sm md:text-xl">I <span className="text-cyan-300">add value</span> to companies <span className="text-cyan-300">with taste</span><br/> through digital <span className="text-cyan-300">solutions.</span></h1>
        <div className="flex flex-row justify-center"><Link to="/about"><button className="relative bg-white shadow-md text-lg py-4 px-2 w-36 bg-white text-black" id="btn">Find out more</button></Link></div>
        </motion.div>
    </>    
  )
}

export default Home