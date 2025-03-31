// import React from 'react';
// import AboutImg from '../assets/About.png';
// import { FaChevronRight } from 'react-icons/fa';

// const About = () => {
//   return (
//     <div id="about" className="py-20 bg-gray-900 z-50 text-gray-300">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-4xl md:text-5xl font-bold mb-11 text-center text-blue-400">
//           About Me
//         </h2>

//         <div className="flex flex-col md:flex-row gap-16 items-center">
//           {/* Image Section */}
//           <div className="relative hidden md:block border border-blue-600 p-1 rounded-full bg-blue-500 shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500">
//             <img
//               src={AboutImg}
//               alt="Profile"
//               className="w-[250px] md:w-[400px] rounded-full border border-blue-600 shadow-blue-500"
//             />
//           </div>

//           {/* Text Section */}
//           <div className="p-5 md:p-10 bg-gray-950 rounded-md shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)]">
//             <div className="max-w-3xl mx-auto">
//               <p className="text-lg leading-7 mb-6">
//                 Hi! I'm <span className="font-semibold text-blue-400">Suyash Vishnoi</span>, a passionate Full-Stack Developer and a 2nd-year Computer Science Engineering undergraduate at 
//                 <span className="font-medium text-blue-300"> NIT Patna</span>. I specialize in the
//                 <span className="font-medium text-blue-300"> MERN stack</span> and have experience in modern web development. I've worked on
//                 <span className="font-medium text-blue-300"> file-sharing platforms</span> and contributed to building the
//                 <span className="font-medium text-blue-300"> new NIT Patna website</span> as part of the
//                 <span className="font-medium text-blue-300"> Web Development Club</span>. Additionally, I have worked on the
//                 <span className="font-medium text-blue-300"> admin portal</span> for the official NIT Patna website.
//               </p>

//               <p className="text-lg leading-7 mb-6">
//                 My journey into tech has been filled with exciting challenges, including <span className="font-medium text-blue-300">hackathons</span>, 
//                 real-world projects, and internships in <span className="font-medium text-blue-300">Machine Learning</span> and
//                 <span className="font-medium text-blue-300"> Web Development</span>. I always strive to improve my problem-solving skills and build
//                 efficient, scalable applications.
//               </p>

//               <p className="text-lg leading-7">
//                 When I’m not coding, I enjoy brainstorming innovative project ideas, collaborating with fellow developers, and 
//                 refining my skills through hands-on learning.
//               </p>
//             </div>

//             {/* Skills Section */}
//             {/* <div className="mt-8">
//               <h1 className="font-bold text-2xl mb-5 text-blue-400">My Skills</h1>
//               <div className="flex flex-wrap gap-3 mb-5 text-sm">
//                 {["React", "Next.js", "Tailwind CSS", "Redux", "Node.js", "GitHub"].map((skill, index) => (
//                   <p key={index} className="bg-gray-900 cursor-pointer text-gray-300 px-3 py-1 rounded-full border border-blue-500">
//                     {skill}
//                   </p>
//                 ))}
//               </div> */}


// <div className="mt-8">
//   <h1 className="font-bold text-2xl mb-5 text-blue-400">My Skills</h1>

//   {/* Frontend Skills */}
//   <h2 className="font-semibold text-blue-300 text-lg mt-4">Frontend</h2>
//   <div className="flex flex-wrap gap-3 mb-5 text-sm">
//     {["React", "Next.js", "Tailwind CSS", "Redux", "HTML", "CSS", "JavaScript"].map((skill, index) => (
//       <p key={`frontend-${index}`} className="bg-gray-900 cursor-pointer text-gray-300 px-3 py-1 rounded-full border border-blue-500">
//         {skill}
//       </p>
//     ))}
//   </div>

//   {/* Backend Skills */}
//   <h2 className="font-semibold text-blue-300 text-lg mt-4">Backend</h2>
//   <div className="flex flex-wrap gap-3 mb-5 text-sm">
//     {["Node.js", "Express.js"].map((skill, index) => (
//       <p key={`backend-${index}`} className="bg-gray-900 cursor-pointer text-gray-300 px-3 py-1 rounded-full border border-green-500">
//         {skill}
//       </p>
//     ))}
//   </div>

//   {/* Programming Languages */}
//   <h2 className="font-semibold text-blue-300 text-lg mt-4">Languages</h2>
//   <div className="flex flex-wrap gap-3 mb-5 text-sm">
//     {["C++", "JavaScript", "Java", "SQL"].map((skill, index) => (
//       <p key={`lang-${index}`} className="bg-gray-900 cursor-pointer text-gray-300 px-3 py-1 rounded-full border border-yellow-500">
//         {skill}
//       </p>
//     ))}
//   </div>

//   {/* Databases & Cloud */}
//   <h2 className="font-semibold text-blue-300 text-lg mt-4">Databases & Cloud</h2>
//   <div className="flex flex-wrap gap-3 mb-5 text-sm">
//     {["MongoDB", "MySQL"].map((skill, index) => (
//       <p key={`db-${index}`} className="bg-gray-900 cursor-pointer text-gray-300 px-3 py-1 rounded-full border border-purple-500">
//         {skill}
//       </p>
//     ))}
//   </div>

//   {/* Developer Tools */}
//   <h2 className="font-semibold text-blue-300 text-lg mt-4">Developer Tools</h2>
//   <div className="flex flex-wrap gap-3 mb-5 text-sm">
//     {["Git", "GitHub"].map((skill, index) => (
//       <p key={`tools-${index}`} className="bg-gray-900 cursor-pointer text-gray-300 px-3 py-1 rounded-full border border-pink-500">
//         {skill}
//       </p>
//     ))}
//   </div>

//   {/* Core CS Subjects */}
//   <h2 className="font-semibold text-blue-300 text-lg mt-4">Core CS Subjects</h2>
//   <div className="flex flex-wrap gap-3 mb-5 text-sm">
//     {["Data Structures & Algorithms", "OOPs", "Operating Systems", "DBMS"].map((skill, index) => (
//       <p key={`core-${index}`} className="bg-gray-900 cursor-pointer text-gray-300 px-3 py-1 rounded-full border border-red-500">
//         {skill}
//       </p>
//     ))}
//   </div>
// </div>


//               {/* <button className="px-4 py-2 rounded-md bg-blue-500 text-white flex items-center gap-2 hover:bg-blue-600 transition-all">
//                 Contact <FaChevronRight /> */}
//               {/* </button> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;




import React from "react";
import AboutImg from "../assets/About.png";
import { FaChevronRight } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="py-20 bg-gray-900 z-50 text-gray-300">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-11 text-center text-blue-400">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Image Section */}
          <div className="relative hidden md:block border border-blue-600 p-1 rounded-full bg-blue-500 shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500">
            <img
              src={AboutImg}
              alt="Profile"
              className="w-[250px] md:w-[400px] rounded-full border border-blue-600 shadow-blue-500"
            />
          </div>

          {/* Text Section */}
          <div className="p-5 md:p-10 bg-gray-950 rounded-md shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)]">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg leading-7 mb-6">
                Hi! I'm{" "}
                <span className="font-semibold text-blue-400">
                  Suyash Vishnoi
                </span>
                , a passionate Full-Stack Developer and a 2nd-year Computer
                Science Engineering undergraduate at
                <span className="font-medium text-blue-300"> NIT Patna</span>. I
                specialize in the
                <span className="font-medium text-blue-300"> MERN stack</span>{" "}
                and have experience in modern web development. I've worked on
                <span className="font-medium text-blue-300">
                  {" "}
                  file-sharing platforms
                </span>{" "}
                and contributed to building the
                <span className="font-medium text-blue-300">
                  {" "}
                  new NIT Patna website
                </span>{" "}
                as part of the
                <span className="font-medium text-blue-300">
                  {" "}
                  Web Development Club
                </span>
                . Additionally, I have worked on the
                <span className="font-medium text-blue-300">
                  {" "}
                  admin portal
                </span>{" "}
                for the official NIT Patna website.
              </p>

              <p className="text-lg leading-7 mb-6">
                My journey into tech has been filled with exciting challenges,
                including{" "}
                <span className="font-medium text-blue-300">hackathons</span>,
                real-world projects, and internships in
                <span className="font-medium text-blue-300">
                  {" "}
                  Machine Learning
                </span>{" "}
                and
                <span className="font-medium text-blue-300">
                  {" "}
                  Web Development
                </span>
                . I always strive to improve my problem-solving skills and build
                efficient, scalable applications.
              </p>

              <p className="text-lg leading-7">
                When I’m not coding, I enjoy brainstorming innovative project
                ideas, collaborating with fellow developers, and refining my
                skills through hands-on learning.
              </p>
            </div>

            {/* <div className="mt-8">
  <h1 className="font-bold text-2xl mb-5 text-blue-400">
    My Skills
  </h1>

  <h2 className="font-semibold text-blue-300 text-lg mt-4">
    Frontend
  </h2>
  <div className="flex flex-wrap gap-3 mb-5 text-sm">
    {[
      "React",
      "Next.js",
      "Tailwind CSS",
      "Redux",
      "HTML",
      "CSS",
      "JavaScript",
    ].map((skill, index) => (
      <p
        key={`frontend-${index}`}
        className="bg-gray-900 cursor-pointer text-gray-300 px-3 py-1 rounded-full border border-blue-500"
      >
        {skill}
      </p>
    ))}
  </div>

  <h2 className="font-semibold text-blue-300 text-lg mt-4">
    Backend
  </h2>
  <div className="flex flex-wrap gap-3 mb-5 text-sm">
    {["Node.js", "Express.js"].map((skill, index) => (
      <p
        key={`backend-${index}`}
        className="bg-gray-900 cursor-pointer text-gray-300 px-3 py-1 rounded-full border border-green-500"
      >
        {skill}
      </p>
    ))}
  </div>

  <h2 className="font-semibold text-blue-300 text-lg mt-4">
    Languages
  </h2>
  <div className="flex flex-wrap gap-3 mb-5 text-sm">
    {["C++", "JavaScript", "Java", "SQL"].map((skill, index) => (
      <p
        key={`lang-${index}`}
        className="bg-gray-900 cursor-pointer text-gray-300 px-3 py-1 rounded-full border border-yellow-500"
      >
        {skill}
      </p>
    ))}
  </div>

  <h2 className="font-semibold text-blue-300 text-lg mt-4">
    Databases & Cloud
  </h2>
  <div className="flex flex-wrap gap-3 mb-5 text-sm">
    {["MongoDB", "MySQL"].map((skill, index) => (
      <p
        key={`db-${index}`}
        className="bg-gray-900 cursor-pointer text-gray-300 px-3 py-1 rounded-full border border-purple-500"
      >
        {skill}
      </p>
    ))}
  </div>

  <h2 className="font-semibold text-blue-300 text-lg mt-4">
    Developer Tools
  </h2>
  <div className="flex flex-wrap gap-3 mb-5 text-sm">
    {["Git", "GitHub"].map((skill, index) => (
      <p
        key={`tools-${index}`}
        className="bg-gray-900 cursor-pointer text-gray-300 px-3 py-1 rounded-full border border-pink-500"
      >
        {skill}
      </p>
    ))}
  </div>

  <h2 className="font-semibold text-blue-300 text-lg mt-4">
    Core CS Subjects
  </h2>
  <div className="flex flex-wrap gap-3 mb-5 text-sm">
    {[
      "Data Structures & Algorithms",
      "OOPs",
      "Operating Systems",
      "DBMS",
    ].map((skill, index) => (
      <p
        key={`core-${index}`}
        className="bg-gray-900 cursor-pointer text-gray-300 px-3 py-1 rounded-full border border-red-500"
      >
        {skill}
      </p>
    ))}
  </div>
</div> */}


{/* Skills Section */}
<div className="mt-8">
  <h1 className="font-bold text-2xl mb-5 text-blue-400">My Skills</h1>

  {/* Development Skills */}
  <h2 className="font-semibold text-blue-300 text-lg mt-4">Development</h2>
  <div className="flex flex-wrap gap-3 mb-5 text-sm">
    {[
      "React",
      "Next.js",
      "Tailwind CSS",
      "Redux",
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
    ].map((skill, index) => (
      <p
        key={`dev-${index}`}
        className="bg-gray-900 cursor-pointer text-gray-300 px-3 py-1 rounded-full border border-blue-500"
      >
        {skill}
      </p>
    ))}
  </div>

  {/* Programming Languages */}
  <h2 className="font-semibold text-blue-300 text-lg mt-4">Languages</h2>
  <div className="flex flex-wrap gap-3 mb-5 text-sm">
    {["C++", "JavaScript", "Java", "SQL"].map((skill, index) => (
      <p
        key={`lang-${index}`}
        className="bg-gray-900 cursor-pointer text-gray-300 px-3 py-1 rounded-full border border-yellow-500"
      >
        {skill}
      </p>
    ))}
  </div>

  {/* Databases, Cloud & Dev Tools */}
  <h2 className="font-semibold text-blue-300 text-lg mt-4">Databases & Tools</h2>
  <div className="flex flex-wrap gap-3 mb-5 text-sm">
    {["MongoDB", "MySQL", "Git", "GitHub"].map((skill, index) => (
      <p
        key={`tools-${index}`}
        className="bg-gray-900 cursor-pointer text-gray-300 px-3 py-1 rounded-full border border-purple-500"
      >
        {skill}
      </p>
    ))}
  </div>

  {/* Core CS Subjects */}
  <h2 className="font-semibold text-blue-300 text-lg mt-4">Core CS Subjects</h2>
  <div className="flex flex-wrap gap-3 mb-5 text-sm">
    {["Data Structures & Algorithms", "OOPs", "Operating Systems", "DBMS"].map(
      (skill, index) => (
        <p
          key={`core-${index}`}
          className="bg-gray-900 cursor-pointer text-gray-300 px-3 py-1 rounded-full border border-red-500"
        >
          {skill}
        </p>
      )
    )}
  </div>
</div>



            {/* Contact Button */}
            {/* Uncomment this button if needed */}
            {/* 
            <button className="px-4 py-2 rounded-md bg-blue-500 text-white flex items-center gap-2 hover:bg-blue-600 transition-all">
              Contact <FaChevronRight />
            </button> 
            */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

