import React, {useState} from 'react'
import { projectData } from '../projectData'
import useModal from '../components/UseModal';
import ProjectModal from '../components/ProjectModal';
import { motion } from 'framer-motion';

const Projects = () => {

const {vis, toggle} = useModal();
const [proj, setProj] = useState(0);

const showModal = (e) => {
    setProj(e.target.getAttribute('data-id'));
    toggle()
}

  return (

    <>
    <ProjectModal vis={vis} hide={toggle} id={proj}/>
    <motion.div className="absolute left-8 md:left-1/4 top-80 lg:top-32 w-4/5 md:w-1/2 lg:w-1/3 flex flex-col gap-2 justify-center p-5 rounded-xl -mb-5 shadow-md"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
    <h1>Projects</h1>
    <div className="flex flex-col gap-4">
    <h1>Take a look at some of my recent work:</h1>
    <div className="flex flex-col gap-4">
        {projectData.sort((a, b) => b - a).map((x) => (
            <div key={x.id}  className="bg-white w-full h-full text-black p-5 inline-flex flex-row justify-between">
                    <h1 className="text-lg">{x.name}</h1>
                    <span onClick={showModal} data-id={x.id} className="cursor-pointer">+</span>
            </div>
        ))}
        </div>
    </div>
</motion.div>



</>
  )
}

export default Projects