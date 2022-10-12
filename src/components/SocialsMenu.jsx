import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const SocialsMenu = () => {
  return (
    <div className="flex flex-row justify-center gap-8 px-5 py-2 pt-15">
    <a href="https://www.linkedin.com/in/joshua-mo-4146aa220/"><FontAwesomeIcon icon={faLinkedin} size="xl" className="hover:text-blue-500 cursor-pointer"/></a>
    <a href="https://github.com/joshua-mo-143"><FontAwesomeIcon icon={faGithub} size="xl" className="hover:text-slate-500 cursor-pointer"/></a>
    <a href="https://twitter.com/joshmo_dev" className=""><FontAwesomeIcon icon={faTwitter} size="xl" className="hover:text-blue-400 cursor-pointer"/></a>
    </div>
  )
}

export default SocialsMenu