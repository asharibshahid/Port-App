import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import imageSrcio from '../Picpro/Pfp-s/At-Nisaar.jpg'

const About = () => {
  return (
    <div>
<section className="py-32">
  <div className="container">
    <div className="flex w-full flex-col overflow-hidden rounded-lg border border-border bg-gradient-to-r from-blue-500 to-purple-600 md:rounded-xl lg:flex-row lg:items-center">
      <div className="w-full shrink-0 self-stretch lg:w-1/2 ">
        <Image
          src={imageSrcio}
          alt="placeholder hero"
          
          className="aspect-[3/2] w-full rounded-md object-cover mb-24 h-96"
        />
      </div>
      <div className="w-full shrink-0 px-4 py-6 md:p-8 lg:w-1/2 lg:px-16">
        <h3 className="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
        Introduction
        </h3>
        <p className="mb-8 text-black lg:text-lg">
        I am passionate about continuous learning and staying up-to-date with the latest web development trends and tools. My goal is to create user-friendly and visually stunning web applications that meet both business objectives and user needs. <br />
    

Lets build something amazing together!
        </p>
     <ul className='text-slate-100'>
          <li>Age: 16</li>
          <li>10Th Matric</li>
          <li>Hafiz Al Quran</li>
          </ul><br />
        <Link href={"/"}>
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-zinc-900 text-white hover:bg-zinc-900/90 h-10 px-4 py-2" >
        Go to Home
        </button></Link>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default About