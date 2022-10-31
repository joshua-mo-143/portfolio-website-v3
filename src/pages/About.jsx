import React from 'react'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <>
            <motion.div className="absolute left-8 md:left-1/4 top-80 lg:top-32 w-4/5 md:w-1/2 lg:w-1/3 flex flex-col gap-2 justify-center p-5 rounded-xl -mb-5 shadow-md"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}>
                <h1>About</h1>
                <div className="flex flex-col gap-4">
                    <p className="text-sm lg:text-lg">
                    I'm a web developer who aims to add value by creating digital solutions that comprehensively cover
                    business needs while using elegant design and clean, high quality tested code.
                    </p>
                    <hr/>
                    <p>My skills:</p>
                    <div className="flex flex-col lg:flex-row">
                    <ul className="list-style-none lg:text-[1rem]">
                        <li>ReactJS</li>
                        <li>Typescript</li>
                        <li>Tailwind, SCSS</li>
                        <li>Node & Express</li>
                        <li>PHP Laravel</li>
                        <li>SQL & MongoDB</li>
                    </ul>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default About