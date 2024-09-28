import React from 'react'
import {FaEnvelopeOpenText, FaRocket} from "react-icons/fa6"

const NewsLetter = () => {
  return (
      <div>
        <h3 className='text-lg text-primary font-bold mb-2 flex items-center gap-2'><FaEnvelopeOpenText /> Email me for jobs</h3>
        <p className='text-primary/75 text-base mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit aperiam.</p>
        <div className='w-full space-y-4'>
          <input type="email" name="email" id='email' placeholder='name@gmail.com' className='w-full block py-2 pl-3 border focus:outline-none'/>
          <input type="submit" value={"Subscribe"} className='w-full py-2 bg-blue rounded-md text-white cursor-pointer font-semibold' />
        </div>
        {/* 2nd Part */}
        <h3 className='text-lg text-primary font-bold mb-2 flex items-center gap-2 mt-16'><FaRocket /> Get noticed faster</h3>
        <p className='text-primary/75 text-base mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit aperiam.</p>
        <div className='w-full space-y-4'>
          <input type="submit" value={"Upload your resume"} className='w-full py-2 bg-blue rounded-md text-white cursor-pointer font-semibold' />
        </div>
      </div>
  )
}

export default NewsLetter
