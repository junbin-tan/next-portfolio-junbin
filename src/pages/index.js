import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube , AiOutlineArrowDown } from 'react-icons/ai';
import Image from "next/image";
import junbin from 'public/JunBin.png';
import 'src/pages/index.js';
import web1 from 'public/web1.png';
import {useState} from "react";




// favicon font fugaz one, #285e61
export default function Home() {
  const [darkMode, setDarkMode] =useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Tan Jun Bin Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10 md:px-20 lg:px-20 xl:px-40 dark:bg-gray-900'>
        {/* Page 1  intro*/}
        <section className="min-h-screen">
           <nav className='py-10 mb-12 flex justify-between dark:text-white'>
              <h1 className='md:text-xl sm:text-xs'>developedbyjunbin</h1>
              <ul className='flex items-center'>
                <li>
                  <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/>
                </li>  
              <li><a href='/TanJunBin_Resume2023.pdf' download="Resume_TanJunBin" className='cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'>Resume</a></li>
              </ul>
              
           </nav>
           <div className='text-center p-10 mt-28'>
            <h2 className='text-4xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400'>Tan Jun Bin</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Software Engineer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-200  md:text-xl max-w-xl mx-auto'>
              Aspiring Software Engineer and product enthusiast with a flair for innovative digital solutions. Dive in to discover my tech journey!
            </p>
           </div>
           <div className='flex text-5xl justify-center gap-16 py-3 text-teal-600 dark:text-teal-400'>
            <AiFillTwitterCircle/>
            <a href='https://www.linkedin.com/in/tanjunbin/' className='cursor-pointer'>
              <AiFillLinkedin/>
            </a>
            <AiFillYoutube/>
           </div>
           <div className='relative mx-auto mt-10 object-center h-80 w-80 overflow-hidden md:h-96 md:w-96 '>
              <Image src={junbin} className='rounded-full h-80 w-80 object-cover object-top' layout='fill' objectFit='cover'/>
           </div>
           <div className="bounce flex justify-center mt-32">
              <AiOutlineArrowDown className='text-4xl text-teal-400'/>
          </div>
        </section>
        

        {/* Page 2 about */}
        <section className='mb-32'>
          <div className='p-10'>
            <h3 className='text-3xl py-1 dark:text-white '>About me</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
            Hello! I'm Jun Bin, an aspiring Software Engineer specialising in Computing in Information Systems at the National University of Singapore. I've had an exciting journey spanning roles as a <span className='text-teal-500'>Software Engineer at Bitopia Technology</span>, to leading as the <span className='text-teal-500'>Head of Product at Google Developer Student Clubs NUS</span>, 
            and founding <span className='text-teal-500'>/ff</span> — all with an unwavering focus on crafting user-centric digital solutions. 
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
            Off-screen, my passions lie in immersing myself in anime, devouring manga, and exploring the world through photography. I'm thrilled to continue my journey towards making technology increasingly accessible and intuitive.
            </p>
          </div>
          
        </section>
        {/* Page 3 Skills and Experince */}
        <section className='mb-32'>
          <div className='p-10'>
              <h3 className='text-3xl py-1 dark:text-white '>Experience</h3>
                <div className='lg:flex flex-col'>
                 {/* one */}
                  <div className='text-center shadow-lg  dark:bg-white dark:shadow-dark-lg p-10 rounded-xl my-5 hover:bg-gray-300 hover:bg-opacity-50'> 
                    <div className='lg:flex md:flex-none  lg:gap-10'>
                      <header className='flex-none z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'>JUN 2023 - PRESENT</header>
                      <div className='lg:text-left '>
                        <h3 className='text-lg font-medium pb-2 leading-tight'>Head of Product • Google Developer Student Clubs NUS  </h3>
                        <p className='py-2 leading-normal text-md'>As Head of Product for the Google Developer Students' Club NUS projects, led the development of technological solutions for non-profit organizations. Defined product vision, strategy, and roadmap aligned with organizational goals. Collaborated with cross-functional teams, managed product development, executed successful launches, and iterated based on user feedback. Skilled in stakeholder communication and product advocacy.</p>
                        <h4 className='text-teal-600 py-4'>Technical Proficiencies</h4>
                        <ul className='flex flex-wrap gap-2'>
                          <li><div className='items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-medium leading-5 text-teal-800 '>
                            Product Management
                         </div></li>
                         <li><div className='items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-medium leading-5 text-teal-800 '>
                            Stakeholder Management
                         </div></li>
                         <li><div className='items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-medium leading-5 text-teal-800 '>
                            Agile Methodologies
                         </div></li>
                         <li><div className='items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-medium leading-5 text-teal-800 '>
                            Problem Solving and Decision Making
                         </div></li>
                         <li><div className='items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-medium leading-5 text-teal-800 '>
                            Product Strategy and Vision
                         </div></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* two */}
                  <div className='text-center shadow-lg  dark:bg-white dark:shadow-dark-lg p-10 rounded-xl my-5 hover:bg-gray-300 hover:bg-opacity-50'> 
                    <div className='lg:flex md:flex-none  lg:gap-10'>
                      <header className='flex-none z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'>MAY 2023 - PRESENT</header>
                      <div className='lg:text-left '>
                        <h3 className='text-lg font-medium pb-2 leading-tight'>Software Engineering Intern • Bitopia Technology </h3>
                        <p className='py-2 leading-normal text-md'>Developed high-quality and robust production code for custom management systems based on client specifications, while also conducting software product testing on the latest production of these systems. Implemented a modular 2FA solution for an existing system, allowing for selective activation of 2FA for specific user groups.</p>
                        <h4 className='text-teal-600 py-4'>Technical Proficiencies</h4>
                        <ul className='flex flex-wrap gap-2'>
                          <li><div className='items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-medium leading-5 text-teal-800 '>
                            React.js
                         </div></li>
                         <li><div className='items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-medium leading-5 text-teal-800 '>
                            Vue.js
                         </div></li>
                         <li><div className='items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-medium leading-5 text-teal-800 '>
                            SQL
                         </div></li>
                         <li><div className='items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-medium leading-5 text-teal-800 '>
                            Java
                         </div></li>
                         <li><div className='items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-medium leading-5 text-teal-800 '>
                            Springboot
                         </div></li>
                         <li><div className='items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-medium leading-5 text-teal-800 '>
                            Hibernate
                         </div></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* three */}
                  <div className='text-center shadow-lg  dark:bg-white dark:shadow-dark-lg p-10 rounded-xl my-5 hover:bg-gray-300 hover:bg-opacity-50'> 
                    <div className='lg:flex md:flex-none  lg:gap-10'>
                      <header className='flex-none z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'>MAY 2022 - AUG 2022</header>
                      <div className='lg:text-left '>
                        <h3 className='text-lg font-medium pb-2 leading-tight'>Ticketing Strategy & Projects Intern • Land Transport Authority (LTA) Singapore </h3>
                        <p className='py-2 leading-normal text-md'>Collaborated closely with upper management to ensure successful preparation for the SimplyGo Concession Card Launch. Managed the distribution of launch information to over 200 educational institutions and served as the primary liaison for the collection and dissemination of communication materials across 12+ IHL. Conducted comprehensive analysis and research, implementing promotional trials with retail partners to optimize the SimplyGo Concession Launch</p>
                        <h4 className='text-teal-600 py-4'>Technical Proficiencies</h4>
                        <ul className='flex flex-wrap gap-2'>
                          <li><div className='items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-medium leading-5 text-teal-800 '>
                            Product Management
                         </div></li>
                         <li><div className='items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-medium leading-5 text-teal-800 '>
                            Stakeholder Management
                         </div></li>
                         <li><div className='items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-medium leading-5 text-teal-800 '>
                            Marketing and Promotions
                         </div></li>
                         <li><div className='items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-medium leading-5 text-teal-800 '>
                            Problem Solving and Decision Making
                         </div></li>
                         <li><div className='items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-medium leading-5 text-teal-800 '>
                            Product Strategy and Vision
                         </div></li>
                         <li><div className='items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-medium leading-5 text-teal-800 '>
                            Data Analytics
                         </div></li>
                         <li><div className='items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-medium leading-5 text-teal-800 '>
                            Retail Partnership
                         </div></li>
                        </ul>
                      </div>
                    </div>
                  </div>





                </div>
            </div>
        </section>
        {/* Portfolio */}

        <section className='mb-32'>
            <div className='p-10'>
              <h3 className='text-3xl py-1 dark:text-white '>Projects</h3>
              <div className='lg:flex gap-10'>
                <div className='text-center shadow-lg  dark:bg-white dark:shadow-dark-lg p-10 rounded-xl my-5'> 
                  <Image className='mx-auto rounded-lg' src={web1} width={400} height={400}/>
                  <h3 className='text-lg font-medium pt-8 pb-2'>WhatGPT3 Website</h3>
                  <p className='py-2'>Transforming Figma Design into a Dynamic React Website</p>
                  <h4 className='text-teal-600 py-4'>Technology Stack</h4>
                  <p className='text-gray-800 py-1'>add the stack here</p>
                </div>

                <div className='text-center shadow-lg dark:bg-white dark:shadow-dark-lg p-10 rounded-xl my-5'> 
                  <Image className='mx-auto rounded-lg' src={web1} width={400} height={400}/>
                  <h3 className='text-lg font-medium pt-8 pb-2'>Website 2</h3>
                  <p className='py-2'>Transforming Figma Design into a Dynamic React Website</p>
                  <h4 className='text-teal-600 py-4'>Technology Stack</h4>
                  <p className='text-gray-800 py-1'>add the stack here</p>
                </div>

                <div className='text-center shadow-lg  dark:bg-white dark:shadow-dark-lg p-10 rounded-xl my-5'> 
                  <Image className='mx-auto rounded-lg' src={web1} width={400} height={400}/>
                  <h3 className='text-lg font-medium pt-8 pb-2'>Website 3</h3>
                  <p className='py-2'>Transforming Figma Design into a Dynamic React Website</p>
                  <h4 className='text-teal-600 py-4'>Technology Stack</h4>
                  <p className='text-gray-800 py-1'>add the stack here</p>
                </div>
              </div>
            </div>
        </section>

        {/* tester */}
        <section className='min-h-screen'>
          <div className='p-10'>
            <h3 className='text-3xl py-1 dark:text-white '>Pictures of me</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
            Write somethign here about anime <span className='text-teal-500'>Jojo</span>, to leading as the <span className='text-teal-500'>Head of Product at Google Developer Student Clubs NUS</span>, 
            and founding <span className='text-teal-500'>/ff</span> — all with an unwavering focus on crafting user-centric digital solutions. 
            </p>
          
            <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
              <div className='basis-1/3 flex-1'>
                <Image src={web1} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
              </div>
              <div className='basis-1/3 flex-1'>
                <Image src={web1} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
              </div>
              <div className='basis-1/3 flex-1'>
                <Image src={web1} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
              </div>
            </div>
          </div>

          {/* Contact me */}



        </section> 
      </main>
    </div>

  )
}
