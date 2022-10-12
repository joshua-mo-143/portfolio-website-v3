import React, { useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { useNavigate } from 'react-router-dom';
import SocialsMenu from '../components/SocialsMenu';

const Contact = () => {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const templateParams = {
    name: email,
    message: message
  }

  const submitEmail = (e) => {
    e.preventDefault()
    if (document.querySelector("#bot-field").value > "") {
      return;
    } else {
    emailjs.sendForm("service_4vy0jz3", "template_26k1dlc","#form", "48zFfCOEC4GVRj-g1");
    setEmail("");
    setMessage("");
    setSuccess(true);
    }
  }

  return (
    <>
                <motion.div className="absolute left-8 md:left-1/4 top-80 lg:top-28 w-4/5 md:w-1/2 lg:w-1/3 flex flex-col gap-2 justify-center p-5 rounded-xl -mb-5 shadow-md"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}>
                  {success && <h1 className="text-green-500">Sent!</h1>}
                <h1>Contact</h1>
                <div className="flex flex-col gap-4">
                    <p className="text-sm lg:text-lg">
                    Send a message and I'll get back to you shortly.
                      </p>
                      <SocialsMenu/>

                    <form className="flex flex-col gap-4" action="/success" id="form"
                    name="contact" method="POST" onSubmit="submit">
                        <input className="hidden" name="bot-field" id="bot-field"/>
                        <label htmlFor="email" className="flex flex-col gap-4">
                            <span>Email:</span>
                            <input type="email" name="email" id="email" className="text-black px-5 py-2 text-sm" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </label>
                        
                        <label htmlFor="message" className="flex flex-col gap-4">
                            <span>Message:</span>
                            <textarea name="message" id="message" className="p-5 text-sm text-black h-64" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        </label>

                        <button id="btn" type="submit" value="submit" className="px-5 py-2 relative bg-white text-black" onClick={submitEmail}>Submit</button>
                    </form>
                </div>
            </motion.div>
    </>
  )
}

export default Contact