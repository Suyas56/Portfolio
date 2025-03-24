import React from 'react';

const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "National Institute of Technology Patna",
    year: "2023 - 2027",
    description: "Pursuing B-Tech in Computer Science and Engineering."
  },
  {
    degree: "12th/ Intermediate",
    institution: "Modern School",
    year: "2022",
    description: "Completed senior secondary education with a focus on Science."
  },
  {
    degree: "10th/ Matriculation",
    institution: "St. Karen's High School",
    year: "2020",
    description: "Completed secondary education with distinction."
  }
];

const experience = [
  {
    role: "Web Development Intern",
    company: "Prodigy InfoTech",
    year: "2024",
    description: "Worked on projects like Tik Tak Toe, Stopwatch, and others."
  },
  {
    role: "Machine Learning Intern",
    company: "Encryptix",
    year: "2024",
    description: "Worked on projects including Credit Card Fraud Detection, Customer Churn Prediction, and Spam SMS Detection."
  }
];

const achievements = [
  { descr: "Selected for Hackofrest Offline Hackathon", year: "2024" },
  { descr: "Received a certificate for PitchTember idea pitch on Graphene", year: "2024" },
  { descr: "Developed and deployed a file upload & sharing platform", year: "2024" }
];

const Education = () => {
  return (
    <section id='education' className='bg-gray-950 py-16 px-6'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl md:text-5xl font-extrabold text-center text-gray-300 mb-12'>Education & Experience</h2>
        <div className='grid md:grid-cols-2 gap-12'>
          {/* Education Section */}
          <div>
            <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Education</h3>
            {education.map((edu, index) => (
              <div key={index} className='flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6'>
                <div className='text-4xl mr-6 text-blue-500'>🎓</div>
                <div>
                  <h4 className='text-xl font-bold text-gray-200'>{edu.degree}</h4>
                  <p className='text-gray-300'>{edu.institution}</p>
                  <p className='text-gray-300 text-sm italic'>{edu.year}</p>
                  <p className='text-gray-300 mt-2'>{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Experience Section */}
          <div>
            <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Experience</h3>
            {experience.map((exp, index) => (
              <div key={index} className='flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6'>
                <div className='text-4xl mr-6 text-blue-500'>💼</div>
                <div>
                  <h4 className='text-xl font-bold text-gray-200'>{exp.role}</h4>
                  <p className='text-gray-300'>{exp.company}</p>
                  <p className='text-gray-300 text-sm italic'>{exp.year}</p>
                  <p className='text-gray-300 mt-2'>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Achievements Section */}
        <div className='mt-16'>
          <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Achievements</h3>
          <div className='bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2'>
            <ul className='list-disc list-inside space-y-2 text-gray-300'>
              {achievements.map((ach, index) => (
                <li key={index} className='pl-3.5 m-1.5 flex items-center transition transform hover:scale-[1.07] origin-left'>
                  🏆 {ach.descr} {ach.year ? `- ${ach.year}` : ''}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
