"use client"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Typewriter from 'typewriter-effect';
import imageSrchero from '../Picpro/Pfp-s/Ai-pic.jpg'
const Hero = () => {
  return (
  <>
  <section className="text-gray-600 body-font">
  <div className=" container mx-auto flex px-5 py-24 items-center justify-center custom-image">
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center">
    
      {/* Image Section */}
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
     
        <Image
          className="object-cover object-center rounded "
          width={400}
          height={300}
        
          alt="Ai Generated"
          src={imageSrchero}
        
        />
          <h1 className='text-center text-green-200  hover:text-violet-800 text-lg  mr-48 font-bold'>Asharib Shahid</h1>
      </div>
     

      {/* Text and Input Section */}
      <div className="lg:flex-grow md:w-1/2 lg:pl-12 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center text-white  ">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium hover:text-black"><span className='text-black hover:text-white'> I am
        </span>
        <Typewriter
  options={{
    strings: ['Web Developer', 'Ui/UX Designer', 'Frontend Developer' ,'Prompt Engineer'],
    autoStart: true,
    loop: true,
  }}
/>
        </h1>
        <p className="mb-8 leading-relaxed hover:text-white text-black font-serif">
        I am a passionate web developer with a strong background in designing and building dynamic, responsive websites that deliver exceptional user experiences. With expertise in modern technologies such as HTML5, CSS3, JavaScript (ES6+), and frameworks like React, I specialize in creating clean, efficient, and maintainable code.
        </p>

        {/* Input Field and Button */}
        <div className="flex w-full md:justify-start justify-center items-end mb-6">
        <Link href={"/contact"}>
          <button  className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" >
            Contact
          </button></Link>
          
        </div>
        
       

      
           
       
     
      </div>
    </div>
  </div>
</section>

  
  
  
  
  
  
  </>
  )
}

export default Hero