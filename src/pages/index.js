import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillInstagram, AiFillLinkedin , AiOutlineArrowDown } from 'react-icons/ai';
import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";
import Image from "next/image";
import junbin from 'public/JunBin.png';
import 'src/pages/index.js';
import web1 from 'public/web1.png';
import whatChat from 'public/whatChat.png';
import paw from 'public/paw.png';
import life1 from 'public/life1.jpeg';
import life2 from 'public/life2.jpeg';
import life3 from 'public/life3.jpeg';
import life4 from 'public/life4.jpeg';
import life5 from 'public/life5.jpeg';
import {useState} from "react";




// favicon font fugaz one, #285e61
export default function Home() {
  const [darkMode, setDarkMode] =useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Tan Jun Bin Portfolio</title>
        <meta name="description" content="Jun Bin's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10 md:px-20 lg:px-20 xl:px-40 dark:bg-gray-900'>
        {/* Page 1  intro*/}
        <section id='one' className="min-h-screen">
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
           <a href='https://www.instagram.com/nolucktdy/' target='_blank' className='cursor-pointer'>
            <AiFillInstagram/>
            </a>
            <a href='https://www.linkedin.com/in/tanjunbin/' target='_blank' className='cursor-pointer'>
              <AiFillLinkedin/>
            </a>
            <a href='https://github.com/junbin-tan' target='_blank' className='cursor-pointer'>
            <BiLogoGithub/>
            </a>
           </div>
           <div className='relative mx-auto mt-10 object-center h-80 w-80 overflow-hidden md:h-96 md:w-96 '>
              <Image src={junbin} className='rounded-full h-80 w-80 object-cover object-top' layout='fill' objectFit='cover'/>
           </div>
           <div className="bounce flex justify-center mt-32">
              <AiOutlineArrowDown className='text-4xl text-teal-500'/>
          </div>
        </section>
        

        {/* Page 2 about */}
        <section id='two' className='mb-9'>
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
        <section id='three' className='mb-9'>
          <div className='p-10'>
              <h3 className='text-3xl py-1 dark:text-white '>Experience</h3>
                <div className='lg:flex flex-col'>
                 {/* one */}
                  <div className='text-center shadow-lg hover:scale-105 ease-in-out duration-300 dark:bg-white dark:shadow-dark-lg p-10 rounded-xl my-5 hover:bg-gray-300 hover:bg-opacity-50'> 
                    <div className='lg:flex md:flex-none  lg:gap-10'>
                      <header className='flex-none z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'>JUN 2023 - PRESENT</header>
                      <div className='lg:text-left '>
                        <h3 className='text-lg font-medium pb-2 leading-tight'>Head of Product • Google Developer Student Clubs NUS  </h3>
                        <p className='py-2 leading-normal text-sm'>As Head of Product for the Google Developer Students' Club NUS projects, led the development of technological solutions for non-profit organizations. Defined product vision, strategy, and roadmap aligned with organizational goals. Collaborated with cross-functional teams, managed product development, executed successful launches, and iterated based on user feedback. Skilled in stakeholder communication and product advocacy.</p>
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
                  <div className='text-center shadow-lg  hover:scale-105 ease-in-out duration-300 dark:bg-white dark:shadow-dark-lg p-10 rounded-xl my-5 hover:bg-gray-300 hover:bg-opacity-50'> 
                    <div className='lg:flex md:flex-none  lg:gap-10'>
                      <header className='flex-none z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'>MAY 2023 - PRESENT</header>
                      <div className='lg:text-left '>
                        <h3 className='text-lg font-medium pb-2 leading-tight'>Software Engineering Intern • Bitopia Technology </h3>
                        <p className='py-2 leading-normal text-sm'>Developed high-quality and robust production code for custom management systems based on client specifications, while also conducting software product testing on the latest production of these systems. Implemented a modular 2FA solution for an existing system, allowing for selective activation of 2FA for specific user groups.</p>
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
                  <div className='text-center shadow-lg hover:scale-105 ease-in-out duration-300  dark:bg-white dark:shadow-dark-lg p-10 rounded-xl my-5 hover:bg-gray-300 hover:bg-opacity-50'> 
                    <div className='lg:flex md:flex-none  lg:gap-10'>
                      <header className='flex-none z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'>MAY 2022 - AUG 2022</header>
                      <div className='lg:text-left '>
                        <h3 className='text-lg font-medium pb-2 leading-tight'>Ticketing Strategy & Projects Intern • Land Transport Authority (LTA) Singapore </h3>
                        <p className='py-2 leading-normal text-sm'>Collaborated closely with upper management to ensure successful preparation for the SimplyGo Concession Card Launch. Managed the distribution of launch information to over 200 educational institutions and served as the primary liaison for the collection and dissemination of communication materials across 12+ IHL. Conducted comprehensive analysis and research, implementing promotional trials with retail partners to optimize the SimplyGo Concession Launch</p>
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

                  {/* end */}



                </div>
            </div>
        </section>
        {/* Portfolio */}

        <section id='four' className='mb-9'>
            <div className='p-10'>
              <h3 className='text-3xl py-1 dark:text-white '>Projects</h3>
              <div className='lg:flex flex-col'>

                {/* PROJECT 1 */}
                  <div className='text-center shadow-lg hover:scale-105 ease-in-out duration-300 dark:bg-white dark:shadow-dark-lg p-10 rounded-xl my-5 hover:bg-gray-300 hover:bg-opacity-50'> 
                    <div className='lg:flex md:flex-none  lg:gap-10 '>
                      <div className='flex items-center flex-col'>
                          <a href='https://thewhatchat.netlify.app' target='_blank'>
                            <Image className="mx-auto rounded-lg" src={whatChat} height={200} width={200} />
                          </a>
                          <div className='flex flex-row gap-2 mt-3'>
                            <a href='https://thewhatchat.netlify.app' target='_blank'>
                                <div className='hover:scale-125 ease-in-out duration-300 flex gap-1 items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-medium leading-5 text-teal-800'>
                                  Link 
                                  <BiLinkExternal className='text-xs'/>
                                </div>
                            </a>
                            <a href='https://github.com/junbin-tan/chatapp' target='_blank'>
                                <div className='hover:scale-125 ease-in-out duration-300 flex gap-1 items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-medium leading-5 text-teal-800 '>
                                  Code
                                  <BiLogoGithub className='text-xs'/>
                                </div>
                            </a>
                          </div>
                      </div>
                      <div className='lg:text-left mt-1'>
                        <div className='flex place-content-center gap-2 mt-5 sm:place-content-center md:place-content-center lg:place-content-start'> 
                          < h3 className='text-lg font-medium pb-2'>WhatChat App</h3>
                        </div>
                        <p className='py-2 leading-normal text-sm'>Connect and chat effortlessly in our sleek and user-friendly app</p>
                        <h4 className='text-teal-600 py-4'>Technical Proficiencies</h4>
                        <ul className='flex flex-wrap sm:place-content-center md:place-content-center lg:place-content-start gap-2'>
                          <li><div className='items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-medium leading-5 text-teal-800 '>
                            Firebase
                         </div></li>
                         <li><div className='items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-medium leading-5 text-teal-800 '>
                            React.js
                         </div></li>
                        </ul>
                      </div>
                    </div>
                  </div>
             
                  {/* Project 2 */}
                  <div className='text-center shadow-lg hover:scale-105 ease-in-out duration-300 dark:bg-white dark:shadow-dark-lg p-10 rounded-xl my-5 hover:bg-gray-300 hover:bg-opacity-50'> 
                    <div className='lg:flex md:flex-none  lg:gap-10'>
                      <div className='flex items-center flex-col'>
                          <a href='https://www.youtube.com/watch?v=-0h5f99wD6Q' target='_blank'>
                            <Image className="mt-5 mx-auto rounded-lg" src={paw} height={200} width={200} />
                          </a>
                          <div className='flex flex-row gap-2 mt-3'>
                            <a href='https://www.youtube.com/watch?v=-0h5f99wD6Q' target='_blank'>
                                <div className='hover:scale-125 ease-in-out duration-300 flex gap-1 items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-medium leading-5 text-teal-800'>
                                  Link 
                                  <BiLinkExternal className='text-xs'/>
                                </div>
                            </a>
                            <a href='https://github.com/junbin-tan/animalAdoptionApplication' target='_blank'>
                                <div className='hover:scale-125 ease-in-out duration-300 flex gap-1 items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-medium leading-5 text-teal-800 '>
                                  Code
                                  <BiLogoGithub className='text-xs'/>
                                </div>
                            </a>
                          </div>
                      </div>
                      <div className='lg:text-left mt-1 '>
                        <div className='flex place-content-center gap-2 mt-5 sm:place-content-center md:place-content-center lg:place-content-start'> 
                          < h3 className='text-lg font-medium pb-2'>Pawfect Animal Adoption App</h3>
                        </div>
                        <p className='py-2 leading-normal text-sm'>Find your perfect furry companion with animal adoption app.</p>
                        <h4 className='text-teal-600 py-4'>Technical Proficiencies</h4>
                        <ul className='flex flex-wrap sm:place-content-center md:place-content-center lg:place-content-start gap-2'>
                          <li><div className='items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-medium leading-5 text-teal-800 '>
                            Figma
                         </div></li>
                         <li><div className='items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-medium leading-5 text-teal-800 '>
                            React.js
                         </div></li>
                         <li><div className='items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-medium leading-5 text-teal-800 '>
                            Jakarta EE
                         </div></li>
                         <li><div className='items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-medium leading-5 text-teal-800 '>
                            MySQL
                         </div></li>
                        </ul>
                      </div>
                    </div>
                  </div>
             
                  {/* Project 3 */}
                  <div className='text-center shadow-lg hover:scale-105 ease-in-out duration-300 dark:bg-white dark:shadow-dark-lg p-10 rounded-xl my-5 hover:bg-gray-300 hover:bg-opacity-50'> 
                    <div className='lg:flex md:flex-none  lg:gap-10'>
                      <div className='flex items-center flex-col'>
                          <a href='https://figmatowebsitepractice.netlify.app/' target='_blank'>
                            <Image className="mx-auto rounded-lg" src={web1} height={200} width={200} />
                          </a>
                          <div className='flex flex-row gap-2 mt-3'>
                            <a href='https://figmatowebsitepractice.netlify.app/' target='_blank'>
                                <div className='hover:scale-125 ease-in-out duration-300 flex gap-1 items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-medium leading-5 text-teal-800'>
                                  Link 
                                  <BiLinkExternal className='text-xs'/>
                                </div>
                            </a>
                            <a href='https://github.com/junbin-tan/gpt3_junbin' target='_blank'>
                                <div className='hover:scale-125 ease-in-out duration-300 flex gap-1 items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-medium leading-5 text-teal-800 '>
                                  Code
                                  <BiLogoGithub className='text-xs'/>
                                </div>
                            </a>
                          </div>
                      </div>
                      <div className='lg:text-left mt-1 '>
                        <div className='flex place-content-center gap-2 mt-5 sm:place-content-center md:place-content-center lg:place-content-start'> 
                          < h3 className='text-lg font-medium pb-2'>WhatIsGPT3 Website</h3>
                        </div>
                        <p className='py-2 leading-normal text-sm'>Transforming Figma Design into a Dynamic React Website</p>
                        <h4 className='text-teal-600 py-4'>Technical Proficiencies</h4>
                        <ul className='flex flex-wrap sm:place-content-center md:place-content-center lg:place-content-start gap-2'>
                          <li><div className='items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-medium leading-5 text-teal-800 '>
                            Figma
                         </div></li>
                         <li><div className='items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-medium leading-5 text-teal-800 '>
                            React.js
                         </div></li>
                        </ul>
                      </div>
                    </div>
                  </div>
             
                  {/* end */}
              </div>
            </div>
        </section>

        {/* tester */}
        <section id='five' className='min-h-screen'>
          <div className='p-10'>
            <h3 className='text-3xl py-1 dark:text-white '>Beyond Work</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              Work is just a part of my life; beyond it, I truly live, embracing every moment with joy, adventure, and passion. 
            </p>
          
            <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
              <div className='basis-1/3 flex-1'>
                <Image src={life1} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
              </div>
              <div className='basis-1/3 flex-1'>
                <Image src={life2} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
              </div>
              <div className='basis-1/3 flex-1'>
                <Image src={life3} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
              </div>
              <div className='basis-1/3 flex-1'>
                <Image src={life4} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
              </div>
              <div className='basis-1/3 flex-1'>
                <Image src={life5} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
              </div>
            </div>
            <div className='mb-10 mt-10 text-teal-500 text-center'>
              developedbyjunbin_ver1.1_2023
            </div>
          </div>
        </section> 


      </main>
    </div>

  )
}
