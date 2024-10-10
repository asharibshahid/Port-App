"use client"
import React from 'react'

const Contact = () => {

  return (
    <div><>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tailwind Contact Form</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n    body {\n      background-color: #1a202c;\n      color: #e2e8f0;\n    }\n\n    .form-container {\n      animation: fadeIn 0.5s ease forwards;\n    }\n\n    @keyframes fadeIn {\n      from {\n        opacity: 0;\n        transform: translateY(-20px);\n      }\n\n      to {\n        opacity: 1;\n        transform: translateY(0);\n      }\n    }\n  "
      }}
    />
    <div className="max-w-md mx-auto p-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md shadow-md form-container custom-image ">
      <h2 className="text-2xl font-semibold text-white mb-6">Contact Us</h2>
      <form  target="blank" action={"https://m.facebook.com/asharib.shahid/"} method="POST">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-300 text-sm font-bold mb-2"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Asharib Shahid"
           
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-300 text-sm font-bold mb-2"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="ashu@example.com"
          
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-300 text-sm font-bold mb-2"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="How can we help you?"
           
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
            defaultValue={""}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Send Message
        </button>
        <p className="mt-5 text-gray-300">
          If you are not a fan of forms you can email us instead{" "}
          <a
          target='blank'
         
            className="font-medium text-green-300 dark:text-blue-500 hover:underline"
            href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSDXXrmKzwrMJjsHkDGSKKSDzVGCqTkLSBhMqLhRsFbwHgCrBgvhprdCbJfSMgGrsLzPmlKq"
          >
           asharibshahid2@gmail.com
          </a><br />

          
          <button  className='text-center text-red-200 bg-black'> Click me For Social Media Accounts  </button>
        </p>
      </form>
    </div>
  </>
  </div>
  )
}

export default Contact