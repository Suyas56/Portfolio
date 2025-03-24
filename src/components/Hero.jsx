import React from 'react';
import { Download,Eye } from 'lucide-react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Profile from './images.png';
import { motion } from 'framer-motion';
import "../Css/Hero.css";

const Hero = () => {
  return (
    <section className="h-max md:h-screen bg-gradient-to-l bg-gray-950 text-white flex flex-col justify-center items-center relative z-10 pb-10">
      
      <div className="max-w-7xl mt-24 mx-auto items-center flex flex-col md:flex-row gap-16 md:gap-40 justify-between">
        
        {/* Left Content */}
        <div className="md:space-y-6 px-4">
          <motion.h1 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:text-6xl text-4xl font-bold mb-4"
          >
            Hi👋, I'm <p className="text-blue-400">Suyash Vishnoi</p>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="md:text-2xl text-lg mb-3"
          >
            Aspiring Software Developer | DSA & MERN Enthusiast  
          </motion.p>

          <motion.p 
  initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.4, delay: 0.5 }}
  className="lg:w-[600px] mb-4 md:mb-0 text-sm text-gray-300"
>
  Passionate about <strong>Data Structures & Algorithms</strong>, problem-solving, and <strong>mathematical computing</strong>.  
  I enjoy breaking down <strong>complex problems</strong> into optimized solutions and developing <strong>efficient, scalable</strong> applications.  
  Skilled in <strong>MERN stack development</strong>, currently working on the <strong>official NIT Patna website</strong>.
</motion.p>


          {/* Download CV Button */}
          {/* <motion.a 
      href="/Suyash_Resume.pdf" // Ensure your file is in the 'public' folder
      target="_blank" // Opens the PDF in a new tab
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -100 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 1.6, ease: "easeInOut" }} 
      className="px-3 py-2 flex items-center gap-2 bg-blue-500 rounded-md text-white 
                 hover:bg-blue-600 shadow-blue-500 border-2 border-blue-400 transition-all"
    >
      <Download className="w-5 h-5" /> View CV
    </motion.a> */}
 {/* <motion.a 
      href="/Suyash_Vishnoi_CV.pdf" // Ensure your file is in the 'public' folder
      download="Suyash_Vishnoi_CV.pdf"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, delay: 0.4 }}
      className="px-3 py-2 flex items-center gap-2 bg-blue-500 rounded-md text-white hover:bg-blue-600 
                shadow-blue-500 border-2 border-blue-400 transition-all 
                shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC]"
    >
      <Download className="w-5 h-5" /> Download CV
    </motion.a> */}


<div className="flex gap-4">
      {/* View CV Button */}
      <motion.a
        href="/Suyash_Resume.pdf" // Ensure your file is in the 'public' folder
        target="_blank" // Opens the PDF in a new tab
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
        className="px-3 py-2 flex items-center gap-2 bg-blue-500 rounded-md text-white 
                   hover:bg-blue-600 shadow-blue-500 border-2 border-blue-400 transition-all"
      >
        <Eye className="w-5 h-5" /> View CV
      </motion.a>

      {/* Download CV Button */}
      <motion.a
        href="/Suyash_Resume.pdf" // Ensure your file is in the 'public' folder
        download="Suyash_Resume.pdf"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
        className="px-3 py-2 flex items-center gap-2 bg-green-500 rounded-md text-white 
                   hover:bg-green-600 shadow-green-500 border-2 border-green-400 transition-all"
      >
        <Download className="w-5 h-5" /> Download CV
      </motion.a>
    </div>
          {/* Social Media Icons (Only GitHub, LinkedIn, Instagram) */}
          <div className="flex gap-5 text-3xl mt-5 md:mt-0">
            <a href="https://github.com/Suyas56" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-blue-400 transition-all" />
            </a>
            <a href="https://www.linkedin.com/in/suyashvishnoi56/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-blue-400 transition-all" />
            </a>
            <a href="https://instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-blue-400 transition-all" />
            </a>
          </div>

        </div>

        {/* Profile Image with Smooth Animation */}
        <div className="relative group">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 2, // Smooth and slightly slower animation
              ease: [0.25, 0.1, 0.25, 1], // Custom cubic bezier easing
            }}
            // src={Profile}
            alt="Suyash Vishnoi"
            className="rounded-full border border-blue-600 md:w-[500px] w-[300px] shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
