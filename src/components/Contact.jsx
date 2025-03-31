import React from 'react';
import { FaGithub , FaInstagram, FaLinkedin } from 'react-icons/fa';


const Contact = () => {
  return (
    <section id='contact' className='bg-gray-950 py-16 px-6'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-5xl font-bold text-center text-gray-300 mb-12'>Contact Me</h2>
        <div className='grid lg:grid-cols-2 gap-10'>
          {/* Contact Info */}
          <div className='flex flex-col justify-center space-y-8'>
            <div>
              <h1 className='text-4xl lg:text-6xl font-bold text-gray-300'>Let's Connect</h1>
              <p className='text-gray-300 my-5'>
                Have a project idea, collaboration opportunity, or just want to chat about web development?
                Feel free to reach out!
              </p>
              <h3 className='text-2xl font-semibold text-gray-300'>Email</h3>
              <p className='text-gray-600 mt-2'>
                <a href='mailto:suyashvishnoi@example.com' className='text-blue-500 hover:underline'>
                  suyashvishnoi1234@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h3 className='text-2xl font-semibold text-gray-300'>Phone</h3>
              <p className='text-gray-600 mt-2'>
                <a href='tel:+918765432109' className='text-blue-500 hover:underline'>
                  +91 9122079774
                </a>
              </p>
            </div>
<<<<<<< HEAD
          
=======
            {/* <div>
              <h3 className='text-2xl font-semibold text-gray-300'>Follow Me</h3>
              <div className='flex gap-3 text-2xl transition-all mt-5'>
                <a href='#' className='text-blue-400 hover:text-blue-500'><FaFacebook /></a>
                <a href='#' className='text-blue-400 hover:text-blue-500'><FaInstagram /></a>
                <a href='#' className='text-blue-400 hover:text-blue-500'><FaLinkedin /></a>
                <a href='#' className='text-blue-400 hover:text-blue-500'><FaSquareXTwitter /></a>
              </div>
            </div> */}
>>>>>>> 16f70041df7ce2151cf2dc42cd40c1876cfe266b
            <div>
  <h3 className='text-2xl font-semibold text-gray-300'>Follow Me</h3>
  <div className='flex gap-3 text-2xl transition-all mt-5'>
    <a href='#' className='text-blue-400 hover:text-blue-500'><FaLinkedin /></a>
    <a href='#' className='text-blue-400 hover:text-blue-500'><FaGithub /></a>
    <a href='#' className='text-blue-400 hover:text-blue-500'><FaInstagram /></a>
  </div>
</div>
          </div>
          {/* Contact Form */}
          <div className='bg-gray-900 rounded-lg shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500 p-8'>
            <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Get in Touch</h3>
            <form className='space-y-6'>
              <div>
                <label htmlFor='name' className='block text-sm font-medium text-gray-300'>Name</label>
                <input 
                  type='text' 
                  id='name' 
                  className='mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500' 
                  placeholder='Your Name' 
                />
              </div>
              <div>
                <label htmlFor='email' className='block text-sm font-medium text-gray-300'>Email</label>
                <input 
                  type='email' 
                  id='email' 
                  className='mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500' 
                  placeholder='Your Email' 
                />
              </div>
              <div>
                <label htmlFor='message' className='block text-sm font-medium text-gray-300'>Message</label>
                <textarea 
                  id='message' 
                  rows={5} 
                  className='mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500' 
                  placeholder='How can I help you?'
                ></textarea>
              </div>
              <button type='submit' className='w-full bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors'>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
