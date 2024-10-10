"use client"
import React from 'react'
import Image from 'next/image'
import imageSrcmo from '../Picpro/Pfp-s/th.jpg'
import imageSrcmo1 from '../Picpro/Pfp-s/th (1).jpg'
import imageSrcmo2 from '../Picpro/Pfp-s/th (2).jpg'
import imageSrcmo3 from '../Picpro/Pfp-s/th (3).jpg'
import imageSrcmo4 from '../Picpro/Pfp-s/th (4).jpg'
import imageSrcmo5 from '../Picpro/Pfp-s/th (5).jpg'


const Skills = () => {
  return (
    <div> <section className="py-32 bg-gradient-to-r from-blue-500 to-purple-600">
    <div className="container flex flex-col items-center text-center">
     
      <h2 className="my-6 text-pretty text-2xl font-bold lg:text-4xl text-black hover:text-orange-200">
       Skills
      </h2>
      <p className="mb-8  text-black hover:text-orange-200 lg:text-xl">
      Expertise in frontend technologies: HTML5, CSS3, JavaScript, React <br />
      Proficient in responsive design and cross-browser compatibility <br />
      Strong problem-solving skills and attention to detail
      </p>
   
      <div className="flex flex-col items-center">
     
        <Image
          src={imageSrcmo}
          alt='Htm.Pic'
          className="relative flex shrink-0 overflow-hidden rounded-full mb-4 size-20 border md:mb-5 lg:size-24"
        />
       
       <p className="text-center font-medium text-gray-100 mt-0">95%</p>
      <div className=' relative h-1 w-96 bg-gray-500 '><div className=' relative h-1 w-96 bg-gray-500 '>
<div className='absolute h-1 w-96 bg-red-300 '></div>
      </div>
      
      </div>

      </div>

      <div className="flex flex-col items-center">
      <Image
          src={imageSrcmo1}
          alt='Htm.Pic'
          className="relative flex shrink-0 overflow-hidden rounded-full mb-4 size-20 border md:mb-5 lg:size-24"
        />
         <p className="text-center font-medium text-gray-100 mt-0">90%</p>
         <div className=' relative h-1 w-96 bg-gray-500 '>
<div className='absolute h-1 w-96 bg-red-300 '></div>
      </div>
      
      </div>

    
      <div className="flex flex-col items-center">
      <Image
          src={imageSrcmo2}
          alt='Htm.Pic'
          className="relative flex shrink-0 overflow-hidden rounded-full mb-4 size-20 border md:mb-5 lg:size-24"
        />
        <p className="text-center font-medium text-gray-100 mt-0">85%</p>
        <div className=' relative h-1 w-96 bg-gray-500 '>
<div className='absolute h-1 w-80 bg-red-300 '></div>
</div>
      </div>
      <div className="flex flex-col items-center">
      <Image
          src={imageSrcmo3}
          alt='Htm.Pic'
          className="relative flex shrink-0 overflow-hidden rounded-full mb-4 size-20 border md:mb-5 lg:size-24"
        />
         <p className="text-center font-medium text-gray-100 mt-0">85%</p>
         <div className=' relative h-1 w-96 bg-gray-500 '>
<div className='absolute h-1 w-80 bg-red-300 '></div>
</div>
      </div>
      <div className="flex flex-col items-center">
      <Image
          src={imageSrcmo4}
          alt='Htm.Pic'
          className="relative flex shrink-0 overflow-hidden rounded-full mb-4 size-20 border md:mb-5 lg:size-24"
        />
      <p className="text-center font-medium text-gray-100 mt-0">70%</p>
      <div className=' relative h-1 w-96 bg-gray-500 '>
<div className='absolute h-1 w-72 bg-red-300 '></div>
</div>
      </div>
      <div className="flex flex-col items-center">
      <Image
          src={imageSrcmo5}
          alt='Htm.Pic'
          className="relative flex shrink-0 overflow-hidden rounded-full mb-4 size-20 border md:mb-5 lg:size-24"
        />
       <p className="text-center font-medium text-gray-100 mt-0">70%</p>
       <div className=' relative h-1 w-96 bg-gray-500 '>
<div className='absolute h-1 w-72 bg-red-300 '></div>
</div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Skills