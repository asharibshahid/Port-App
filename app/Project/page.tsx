"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// At the top of your file
import imageSrc from '../Picpro/Projects/sc-by-ashu.png'
import imageSrc1 from '../Picpro/Projects/sc-by.png'
import imageSrc2 from '../Picpro/Projects/--sc.png'
import { useEffect,useState } from 'react'
const Projects= () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);
  
    if (!isMounted) {
      return null;  // Ensures no client-side code runs during SSR
    }
  return (
//    
<div>
<section className=" bg-black ">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header>
      <h2 className="text-xl font-bold text-purple-300 sm:text-3xl">My Projects</h2>

      <p className="mt-4 max-w-md text-stone-300">
        {/* Add any description for your projects here */}
      </p>
    </header>

    {/* Responsive grid layout for projects */}
    <ul className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <li>
        <a href="#" className="group block overflow-hidden">
          <Image
            src={imageSrc}
            alt="Pro.Ashu"
            className="h-[250px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[350px]"
          />

          <div className="relative bg-black pt-3">
            <h3 className="text-xs text-purple-400 group-hover:underline group-hover:underline-offset-4">
              Car Dealing 
            </h3><br />

            <Link href={"https://car-dealing-frontend-web.vercel.app/"} target='blank'>
              <h3 className='text-blue-500'>View Project</h3>
            </Link>

            <p className="mt-2">
              <span className="tracking-wider text-purple-300">Car Dealing Web: An online platform for buying and selling cars</span>
            </p>
          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <Image
            src={imageSrc1}
            alt=""
            className="h-[250px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[350px]"
          />

          <div className="relative bg-black pt-3">
            <h3 className="text-xs text-purple-400 group-hover:underline group-hover:underline-offset-4">
              Resume Builder
            </h3><br />

            <Link href={"https://mile5-68qc.vercel.app/"} target='blank'>
              <h3 className='text-blue-500'>View Project</h3>
            </Link>

            <p className="mt-2">
              <span className="tracking-wider text-purple-300">Resume Builder: A tool for creating professional resumes easily</span>
            </p>
          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <Image
            src={imageSrc2}
            alt=""
            className="h-[250px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[350px]"
          />

          <div className="relative bg-black pt-3">
            <h3 className="text-xs text-purple-400 group-hover:underline group-hover:underline-offset-4">
              Email Validator
            </h3><br />

            <Link href={"https://email-validator-w-eb-814b.vercel.app/"} target='blank'>
              <h3 className='text-blue-500'>View Project</h3>
            </Link>

            <p className="mt-2">
              <span className="tracking-wider text-purple-300">Email Validator: A tool to validate email addresses for proper format and syntax</span>
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</section>
</div>

  )
}

export default Projects