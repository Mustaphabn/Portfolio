import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Mustapha | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center uppercase'>Mohamed Mustapha Banaceur</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/mohamed-mustapha-banaceur-5687b6225/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/Mustaphabn'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span>Back-End Web Developer
            <span className='px-2'>|</span>HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>NoSQL
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span>MongoDB
            <span className='px-2'>|</span>RESTAPI
          </p>

        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            CAPGEMINI ENGINEERING Tunisia
            </span>
            <span className='px-2'>|</span>Ariana, Tunisia 
          </p>
          <p className='py-1 italic'>Head of Software Logistics (OCT-2021 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Led management of software and hardware components of the electrical power grid.
            </li>
            <li>
            Coordinated technical development work and integration participation.
            </li>
            <li>
            Managed software development at suppliers and coordination of delivery dates.
            </li>
            <li>
            Controlled integration participation and executed evaluations and error analyses.
            </li>
            <li>
            Documented processes and presented project results in meetings.
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              SeeWise SARL
            </span>
            <span className='px-2'>|</span>Ras Djebel, Bizerte
          </p>
          <p className='py-1 italic'>Project end of study internship (JAN-2021 - JUN-2021)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Built an e-learning website from the ground up, providing a platform for online education.
            </li>
            <li>
            Created and distributed newsletters, keeping users informed and up-to-date with new developments.
            </li>
            <li>
            Published a wide range of courses and videos online, providing valuable educational resources.
            </li>
          </ul>
        </div>

      {/* Personal Experience */}
      <div className='py-6'>
                <p className='italic'>
                  <span className='font-bold italic'>
                  WIC MIC GROUP 
                  </span>
                  <span className='px-2'>|</span>Ras Djebel, Bizerte
                </p>
                <p className='py-1 italic'>IT maintenance Summer internship(Aug-2020)</p>
                <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
                  <li>
                  Repaired and maintained computers in various departments of the factory, ensuring smooth operations.
                  </li>
                  <li>
                  Monitored the performance of the production line and identified potential issues, taking necessary actions to address them.
                  </li>
                  <li>
                  Troubleshooted and resolved network outages, minimizing downtime and ensuring seamless connectivity.
                  </li>
                </ul>
              </div>

        </div>
    </>
  );
};

export default resume;
