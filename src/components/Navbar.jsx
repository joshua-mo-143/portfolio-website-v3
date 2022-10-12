import React from 'react'
import { Link } from 'react-router-dom'
import SocialsMenu from './SocialsMenu'
const Navbar = () => {
  return (<>
    <div>
      <nav>
        <ul className="w-full absolute flex flex-row justify-center text-[0.5em] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.5rem] gap-2 sm:gap-4 lg:gap-8 sm:ml-5 md:ml-0 mt-3 font-bold text-white" id="navbar-list">
          <Link to="/"><li className="cursor-pointer">Home</li></Link>
          <Link to="/about"><li className="cursor-pointer">About</li></Link>
          <Link to="/projects"><li className="cursor-pointer">Projects</li></Link>
          <Link to="/contact"><li className="cursor-pointer">Contact</li></Link>
        </ul>
      </nav>
    </div>
              </>
  )
}

export default Navbar