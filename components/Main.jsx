/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

function Main() {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='maw-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
            <p className='uppercase text-sm tracking-widest text-gray-600 italic'>Let's Build something legendary together</p>
            <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[#5651e5]'>Mustapha</span>
            </h1> 
            <h1 className='py-4 text-gray-700'> 
                I'm Front-End Web Developer
            </h1>
            <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto text-lg'>
            I'm a front-end web developer specializing in building (and occasionally designing) 
            exceptional digital experiences. Currently, I'm focused on building responsive front-end web applications
            while learning back-end technologies.
          </p>
          <div className='flex flex-row items-center justify-between max-w-[330px] m-auto py-4'>
          <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer
             hover:scale-125 ease-in duration-200 '>
                    <FaLinkedinIn />
                </div>
          <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer
              hover:scale-125 ease-in duration-200 '>
                    <FaGithub />

                </div>
          <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer
              hover:scale-125 ease-in duration-200 '>
                    <AiOutlineMail />
                </div>
          <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer
              hover:scale-125 ease-in duration-200 '>
                    <BsFillPersonLinesFill />
                </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
