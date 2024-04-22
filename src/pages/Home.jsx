import React,{useState} from 'react'
import HomeBanner from '../components/HomeBanner';
import {FaPhoneSquareAlt} from 'react-icons/fa';
import woman from '../assets/images/home_bg_1.jpg';
import { Link } from 'react-router-dom';
import electrician from '../assets/images/electrician_1.jpg'
import electrician_2 from '../assets/images/electrician_2.jpg'
import highTension from '../assets/images/high_tension.jpg'
import users1 from '../assets/images/delivery_agent.jpg'
import users2 from '../assets/images/banner_bg.jpg'
import users3 from '../assets/images/investor-1.jpg'
import contact_bg from '../assets/images/contact_bg.jpg'
import { GrStatusGood } from "react-icons/gr";
import { FaBoltLightning } from "react-icons/fa6";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import ProjectSection from '../components/ProjectSection';
const Home = ({banner}) => {

  const[counter, setCounter] = useState(false);
  
  return (
    <div className=''>
      <HomeBanner />
      {/* Section About Start */}
      <section className='py-12 lg:py-20 px-7 lg:px-0'>
        <div className="max-w-6xl mx-auto">
          <div className="flex  gap-x-12 flex-col lg:flex-row items-center">

            {/* Left Hand Content */}
            <div className='w-full lg:w-2/4 flex-shrink-0 mb-10 lg:mb-0'>
              <div className=''>
                <div className='mb-7' data-aos="fade-up">
                  <a className='uppercase text-sm lg:text-base px-5 py-2 border border-primary rounded-full text-center font-medium'>About Allbright Tech Systems Limited</a>
                </div>

                <div className=''data-aos="fade-up" data-aos-delay="300"  data-aos-duration="500" >
                  <h1 className='heading-primary text-[37px] lg:text-[50px] leading-[51.8px] lg:leading-[60px] font-semibold text-[rgb(40,44,49)]'>Empowering Your Journey with Electrical Excellence</h1>
                </div>

                <div className='my-5 lg:my-7' data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
                  <p className='text-my-grey-light'>
                    We offer a 100% satisfaction guarantee on all our services. Our electricians are skilled
                    in everything from installing outdoor security lighting to setting up a whole home
                    generator to ensure your appliances keep running during a power outage.
                  </p>
                </div>

                <div className='flex mb-5' data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
                  <div className='flex-shrink-0 mr-5'>
                    <GrStatusGood className='text-primary text-2xl'/>
                  </div>
                  <div className='-mt-1'>
                    <h3 className='text-my-grey text-lg font-semibold'>Authorize Experts</h3>
                    <p className='pr-20 text-my-grey-light'>
                      Our team of experts in electrical matters are adept at solving complex issues 
                      and ensuring safety standards are met with precision.
                    </p>
                  </div>
                </div>

                <div className='flex mb-10' data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
                  <div className='flex-shrink-0 mr-5'>
                    <GrStatusGood className='text-primary text-2xl'/>
                  </div>
                  <div className='-mt-1'>
                    <h3 className='text-my-grey text-lg font-semibold'>Skilled Technician</h3>
                    <p className='pr-20 text-my-grey-light'>
                      Our skilled electrical technicians excel in resolving intricate problems and maintaining precise safety standards.
                    </p>
                  </div>
                </div>

                <div className='flex gap-x-4' data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
                  <Link href="" className='inline-block text-white bg-primary rounded-full font-semibold px-4  py-2 transition-all duration-300 ease-in border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-black'>
                      Learn More &rarr;
                  </Link>
                  <Link href="report" className='inline-block  rounded-full font-semibold px-4 border-2 border-primary  py-2 transition-all duration-300 ease-in hover:border-transparent hover:bg-primary hover:text-white'>
                      Contact Us 
                  </Link>
                </div>
              
              </div>
            </div>
            
          
            {/* Right Hand Contents */}
            <div className='w-full lg:w-2/4 flex-shrink-0'>
              {/* About images Gallery Start */}

              <div className='relative pb-32'>
                <img src={electrician_2} alt="" className='h-full rounded-xl image-outline'/>
                <img src={highTension} alt="" className='w-2/3 -mt-20 absolute right-5 rounded-xl image-outline'/>
              </div>
              {/* <div className='text-center lg:text-left overflow-hidden'>
                <div className="flex mb-1 gap-x-1 items-cemter">
                  <div className="w-2/4 grow" data-aos="flip-left" data-aos-easing="ease-out-cubic">
                    <img src={woman} alt="" className="h-full  rounded"/>
                  </div>
                  <div className="w-[30%]" data-aos="flip-left" data-aos-easing="ease-out-cubic">
                    <img src={users1} alt="" className="h-full object-cover rounded"/>
                  </div>
                </div>
                <div className="flex mb-4 gap-x-1">
                  <div className="w-[30%]" data-aos="flip-left" data-aos-easing="ease-out-cubic">
                    <img src={users3} alt="" className="h-full object-cover rounded"/>
                  </div>
                  <div className="w-2/4 grow" data-aos="flip-left" data-aos-easing="ease-out-cubic">
                    <img src={users2} alt="" className="h-full rounded"/>
                  </div>
                </div>
              </div> */}
              {/* About images Gallery End */}
            </div>
            
          </div>
        </div>
      </section>
      {/* Section About End */}

      {/* Section Services Start */}
      <section className='py-12 lg:py-20 bg-gray-50  px-7 lg:px-0'>
        <div className="max-w-6xl mx-auto">
          <div className='text-center'>
            <div className='mb-8' data-aos="fade-up">
                <a className='px-5 py-2 border border-primary rounded-full text-center font-medium uppercase'>Our Services</a>
            </div>

            <div className='max-w-2xl mx-auto mb-16' data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
              <h1 className='heading-primary text-[37px] lg:text-[50px] leading-[51.8px] lg:leading-[70px] font-semibold text-[rgb(40,44,49)]'>No Shocking Prices, Just Shocking Quality</h1>
            </div>
          </div>

          <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-16'>

            <div className='mb-7 min-h-[455px]' data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
              <div className="flex flex-col">
                <div className='h-[250px]  w-full lg:w-[380px] overflow-hidden rounded-2xl'>
                  <img src={woman} alt=""  className='rounded-2xl h-full'/>
                </div>
                <div className='mt-4'>
                  <h3 className='text-[23px] font-semibold text-my-grey'>Home Automation System</h3>
                  
                </div>
                <div className='mb-4 pt-2'>
                  <p className='text-my-grey-light'>
                    Lorem ipsum dolor sit amet, consectetur adipi scing elit. Ut elit tellus, luctus nec.
                  </p>
                </div>

                <div className=''>
                  <Link to='/' className='inline-block w-full bg-white p-3 text-my-grey transition-all duration-100 hover:bg-primary hover:text-white'>Learn More &rarr;</Link>
                </div>
              </div>
            </div>


            <div className='mb-4 min-h-[455px]' data-aos="fade-up" data-aos-delay="300" data-aos-duration="500">
              <div className="flex flex-col">
                <div className='h-[250px]  w-full lg:w-[380px] overflow-hidden'>
                  <img src={users1} alt="" className='rounded-2xl h-full'/>
                </div>
                <div className='mt-4'>
                  <h3 className='text-[23px] font-semibold text-my-grey'>House Wiring & Maintenance</h3>
                  
                </div>
                <div className='mb-4 pt-2'>
                  <p className='text-my-grey-light'>
                    Lorem ipsum dolor sit amet, consectetur adipi scing elit. Ut elit tellus, luctus nec.
                  </p>
                </div>

                <div className=''>
                  <Link to='/' className='inline-block w-full bg-white p-3 text-my-grey transition-all duration-100 hover:bg-primary hover:text-white'>Learn More &rarr;</Link>
                </div>
              </div>
            </div>



            <div className='mb-4 min-h-[455px]' data-aos="fade-up" data-aos-delay="400" data-aos-duration="500">
              <div className="flex flex-col h-full">
                <div className='h-[250px]  w-full lg:w-[380px] overflow-hidden'>
                  <img src={users2} alt="" className='rounded-2xl h-full'/>
                </div>
                <div className='mt-4'>
                  
                  <h3 className='text-[23px] font-semibold text-my-grey'>CCTV Camera Installation/Maintenance</h3>
                </div>
                <div className='mb-4 pt-2'>
                  <p className='text-my-grey-light'>
                    Lorem ipsum dolor sit amet, consectetur adipi scing elit. Ut elit tellus, luctus nec.
                  </p>
                </div>

                <div className=''>
                  <Link to='/' className='inline-block w-full bg-white p-3 text-my-grey transition-all duration-100 hover:bg-primary hover:text-white'>Learn More &rarr;</Link>
                </div>
              </div>
            </div>


            <div className='mb-4 min-h-[455px]' data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
              <div className="flex flex-col">
                <div className='h-[250px]  w-full lg:w-[380px] overflow-hidden'>
                  <img src={users2} alt="" className='rounded-2xl h-full'/>
                </div>
                <div className='mt-4'>
                  <h3 className='text-[23px] font-semibold text-my-grey'>Dstv & GoTv Installation</h3>
                </div>
                <div className='mb-4 pt-2'>
                  <p className='text-my-grey-light'>
                    Lorem ipsum dolor sit amet, consectetur adipi scing elit. Ut elit tellus, luctus nec.
                  </p>
                </div>

                <div className=''>
                  <Link to='/' className='inline-block w-full bg-white p-3 text-my-grey transition-all duration-100 hover:bg-primary hover:text-white'>Learn More &rarr;</Link>
                </div>
              </div>
            </div>

            <div className='mb-4 min-h-[455px]' data-aos="fade-up" data-aos-delay="300" data-aos-duration="500">
              <div className="flex flex-col">
                <div className='h-[250px]  w-full lg:w-[380px] overflow-hidden'>
                  <img src={woman} alt="" className='rounded-2xl h-full'/>
                </div>
                <div className='mt-4'>
                  <h3 className='text-[23px] font-semibold text-my-grey'>Trouble Shooting</h3>
                </div>
                <div className='mb-4 pt-2'>
                  <p className='text-my-grey-light'>
                    Lorem ipsum dolor sit amet, consectetur adipi scing elit. Ut elit tellus, luctus nec.
                  </p>
                </div>

                <div className=''>
                  <Link to='/' className='inline-block w-full bg-white p-3 text-my-grey transition-all duration-100 hover:bg-primary hover:text-white'>Learn More &rarr;</Link>
                </div>
              </div>
            </div>


            <div className='mb-4 min-h-[455px]' data-aos="fade-up" data-aos-delay="400" data-aos-duration="500">
              <div className="flex flex-col">
                <div className='h-[250px]  w-full lg:w-[380px] overflow-hidden'>
                  <img src={woman} alt="" className='rounded-2xl h-full'/>
                </div>
                <div className='mt-4'>
                  <h3 className='text-[23px] font-semibold text-my-grey'>Digital Display Board</h3>
                </div>
                <div className='mb-4 pt-2'>
                  <p className='text-my-grey-light'>
                    Lorem ipsum dolor sit amet, consectetur adipi scing elit. Ut elit tellus, luctus nec.
                  </p>
                </div>

                <div className=''>
                  <Link to='/' className='inline-block w-full bg-white p-3 text-my-grey transition-all duration-100 hover:bg-primary hover:text-white'>Learn More &rarr;</Link>
                </div>
              </div>
            </div>

            <div className='mb-4 min-h-[455px]' data-aos="fade-up" data-aos-delay="400" data-aos-duration="500">
              <div className="flex flex-col">
                <div className='h-[250px]  w-full lg:w-[380px] overflow-hidden'>
                  <img src={woman} alt="" className='rounded-2xl h-full'/>
                </div>
                <div className='mt-4'>
                <h3 className='text-[23px] font-semibold text-my-grey'>Solar Installation, Repairs & Maintenance</h3>
                </div>
                <div className='mb-4 pt-2'>
                  <p className='text-my-grey-light'>
                    Lorem ipsum dolor sit amet, consectetur adipi scing elit. Ut elit tellus, luctus nec.
                  </p>
                </div>

                <div className=''>
                  <Link to='/' className='inline-block w-full bg-white p-3 text-my-grey transition-all duration-100 hover:bg-primary hover:text-white'>Learn More &rarr;</Link>
                </div>
              </div>
            </div>

            <div className='mb-4 min-h-[455px]' data-aos="fade-up" data-aos-delay="400" data-aos-duration="500">
              <div className="flex flex-col">
                <div className='h-[250px]  w-full lg:w-[380px] overflow-hidden'>
                  <img src={woman} alt="" className='rounded-2xl h-full'/>
                </div>
                <div className='mt-4'>
                  <h3 className='text-[23px] font-semibold text-my-grey'>Students Project</h3>
                </div>
                <div className='mb-4 pt-2'>
                  <p className='text-my-grey-light'>
                    Lorem ipsum dolor sit amet, consectetur adipi scing elit. Ut elit tellus, luctus nec.
                  </p>
                </div>

                <div className=''>
                  <Link to='/' className='inline-block w-full bg-white p-3 text-my-grey transition-all duration-100 hover:bg-primary hover:text-white'>Learn More &rarr;</Link>
                </div>
              </div>
            </div>
          </div>

         

          <div className='mt-20 border-t border-t-my-grey-light'> 
            <div className=''>
              <ScrollTrigger onEnter={()=>setCounter(true)} onExit={()=>setCounter(false)} >
                {counter && (
                  <div className='md:grid md:grid-cols-2 lg:grid-cols-4 gap-1 pt-12'>
                    <div className="">
                      <div className='lg:text-center mb-5 lg:mb-0'>
                        <h1 className='text-my-grey text-6xl font-semibold mb-3'>
                          <CountUp  start={0} end={13} suffix='+' />
                        </h1>
                      
                        <p className='text-sky-950 text-md'>YEARS OF EXPERIENCE</p>
                      </div>
                    </div>

                    <div className="">
                      <div className='lg:text-center mb-5 lg:mb-0'>
                        <h1 className='text-my-grey text-6xl font-semibold mb-3'>
                          <CountUp  start={0} end={327} suffix='+' />
                        </h1>
                        <p className='text-sky-950 text-md'>PROJECT DONE</p>
                      </div>
                    </div>

                    <div className="">
                      <div className='lg:text-center mb-5 lg:mb-0'>
                        <h1 className='text-my-grey text-6xl font-semibold mb-3'>
                          <CountUp  start={0} end={12}/>
                        </h1>
                        <p className='text-sky-950 text-md'>AWARDS WON</p>
                      </div>
                    </div>

                    <div className="">
                      <div className='lg:text-center'>
                        <h1 className='text-my-grey text-6xl font-semibold mb-3'>
                          <CountUp  start={0} end={99} suffix='%' />
                        </h1>
                        <p className='text-sky-950 text-md'>HAPPY REVIEWS</p>
                      </div>
                    </div>
                  </div>
                )}
              </ScrollTrigger>

            </div>
          </div>
        </div>
      </section>
      {/* Section Services End */}

      {/* Our Projects Start */}
      <section className='py-12 lg:py-20 px-7 lg:px-0'>
       <ProjectSection />
      </section>
      {/* Our Projects End */}

      {/* Why Us Section Start */}
      <section className='py-12 lg:py-20 bg-my-grey  px-7 lg:px-0'>
        <div className="max-w-6xl mx-auto">
          <div className="flex  gap-x-12 flex-col lg:flex-row">

            {/* Left Hand Content */}
            <div className='w-full lg:w-2/4 flex-shrink-0 mb-10 lg:mb-0 lg:px-10'>
              <div className=''>
                <div className='mb-7' data-aos="fade-up">
                  <a className='uppercase px-5 py-2 border border-my-grey-light rounded-full text-center font-medium text-white'>Why AllBright Tech</a>
                </div>

                <div className='mb-9' data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
                  <h1 className='text-[37px] lg:text-[50px] leading-[51.8px] lg:leading-[70px] font-semibold text-white'>Quality Service, The Right Way</h1>
                </div>
              </div>

              {/* About images Gallery Start */}
              <div className='text-center lg:text-left overflow-hidden'>
                <div className="flex mb-1 gap-x-1 items-cemter">
                    <div className="w-2/4 grow" data-aos="flip-left" data-aos-easing="ease-out-cubic">
                        <img src={woman} alt="" className="h-full  rounded"/>
                    </div>
                    <div className="w-[30%]" data-aos="flip-left" data-aos-easing="ease-out-cubic">
                        <img src={woman} alt="" className="h-full object-cover rounded"/>
                    </div>
                </div>
                <div className="flex mb-4 gap-x-1">
                    <div className="w-[30%]" data-aos="flip-left" data-aos-easing="ease-out-cubic">
                        <img src={woman} alt="" className="h-full object-cover rounded"/>
                    </div>
                    <div className="w-2/4 grow" data-aos="flip-left" data-aos-easing="ease-out-cubic">
                        <img src={woman} alt="" className="h-full rounded"/>
                    </div>
                </div>
              </div>
              {/* About images Gallery End */}
            </div>
           
            
            {/* Right Hand Contents */}
            <div className='w-full lg:w-2/4 flex-shrink-0 mb-10 lg:mb-0 lg:px-10'>
              <div className=''>
                <div className='flex flex-col mb-7 border-t border-t-my-grey-light border-b border-b-my-grey-light'  data-aos="fadeInUp" data-aos-delay="200">
                  <div className='py-10 flex items-center'>
                    <div className='flex-shrink-[1]'>
                      <p className='text-primary text-4xl lg:text-6xl font-semibold'>01</p>
                    </div>

                    <div className='flex flex-col flex-shrink-[1] ml-9'>
                      <h3 className='text-gray-100 text-3xl mb-5'>Professional Staffs</h3>
                      <p className='text-gray-100'>
                        Our seasoned professionals boast extensive expertise in the field of electrical and electronics, 
                        ensuring top-notch solutions tailored to your specific needs.
                      </p>
                    </div>
                  </div>
                </div>


                <div className='flex flex-col mb-7  border-b border-b-my-grey-light'  data-aos="fade-up" data-aos-delay="200">
                  <div className='py-10 flex items-center'>
                    <div className='flex-shrink-[1]'>
                      <p className='text-primary text-4xl lg:text-6xl font-semibold'>02</p>
                    </div>

                    <div className='flex flex-col flex-shrink-[1] ml-9'>
                      <h3 className='text-gray-100 text-2xl mb-5'>Reliability</h3>
                      <p className='text-gray-100'>
                        With a track record of delivering dependable services, we guarantee timely completion of projects without compromising on quality,
                        providing peace of mind to our clients.
                      </p>
                    </div>
                  </div>
                </div>


                <div className='flex flex-col mb-7  border-b border-b-my-grey-light'  data-aos="fade-up" data-aos-delay="200">
                  <div className='py-10 flex items-center'>
                    <div className='flex-shrink-[1]'>
                      <p className='text-primary text-4xl lg:text-6xl font-semibold'>03</p>
                    </div>

                    <div className='flex flex-col flex-shrink-[1] ml-9'>
                      <h3 className='text-gray-100 text-2xl mb-5'>Innovation</h3>
                      <p className='text-gray-100'>
                        Embracing the latest advancements in technology, we offer innovative solutions that optimize efficiency, reduce costs, 
                        and enhance overall performance for our clients.
                      </p>
                    </div>
                  </div>
                </div>


                <div className='flex flex-col mb-7  border-b border-b-my-grey-light'  data-aos="fade-up" data-aos-delay="200">
                  <div className='py-10 flex items-center'>
                    <div className='flex-shrink-[1]'>
                      <p className='text-primary text-4xl lg:text-6xl font-semibold'>04</p>
                    </div>

                    <div className='flex flex-col flex-shrink-[1] ml-9'>
                      <h3 className='text-gray-100 text-2xl mb-5'>Safety</h3>
                      <p className='text-gray-100'>
                        Committed to safety above all else, our company adheres to stringent safety protocols, prioritizing the well-being of our clients, employees, 
                        and the community at large in every project we undertake.
                      </p>
                    </div>
                  </div>
                </div>
              
              
              </div>
            </div>
            
          </div>
        </div>
      </section>
      {/* Why Us Section End */}

      {/* Section Appraisal Start */}
      <section className="py-12 lg:py-24  px-7 lg:px-0 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className={`rounded-xl  bg-cover bg-center h-[400px]`} data-aos="fadeIn" style={{backgroundImage:`url(${electrician})`}}></div>

          <div className="flex  gap-x-12 flex-col lg:flex-row items-center">

            {/* Left Hand Content */}
            <div className='w-full lg:w-2/4 flex-shrink-0 mb-10 lg:mb-0'>
              <div className=' bg-my-grey rounded-xl mt-5 lg:-mt-48 lg:ml-12 p-10'data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
                <div className='lg:mb-4'>
                  <a className='uppercase px-5 py-2 border border-my-grey-light rounded-full text-center font-medium text-slate-100'>Our Pride</a>
                </div>

                <div className='py-7'>
                  <h3 className='text-[28px] lg:text-4xl font-semibold text-gray-200'>Watt You Need, When You Need It</h3>
                </div>

                <div className='pt-2' data-aos="fade-up" data-aos-delay="400" data-aos-duration="500">

                  <div className='flex mb-5'>
                    <div className='flex-shrink-0 mr-5'>
                      <GrStatusGood className='text-primary text-2xl'/>
                    </div>
                    <div className='-mt-1'>
                      <h3 className='text-gray-100 text-lg font-semibold'>Certified Company</h3>
                    </div>
                  </div>

                  <div className='flex mb-5'>
                    <div className='flex-shrink-0 mr-5'>
                      <GrStatusGood className='text-primary text-2xl'/>
                    </div>
                    <div className='-mt-1'>
                      <h3 className='text-gray-100 text-lg font-semibold'>Skilled Technicians</h3>
                    </div>
                  </div>

                  <div className='flex mb-5'>
                    <div className='flex-shrink-0 mr-5'>
                      <GrStatusGood className='text-primary text-2xl'/>
                    </div>
                    <div className='-mt-1'>
                      <h3 className='text-gray-100 text-lg font-semibold'>Happy Reviews</h3>
                    </div>
                  </div>

                </div>

              </div>

              <div className='mt-4 lg:ml-12' data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
                <p className='text-my-grey-light'>
                  Pellentesque semper, libero condimentum luctus viverra, nisl massa pulvinar quam, 
                  vulputate feugiat neque arcu at ante.
                  Suspendisse faucibus sapien id felis efficitur commodo.
                </p>
              </div>
            </div>


            {/* Right Hand Contents */}
            <div className='w-full lg:w-2/4 flex-shrink-0 mb-10 lg:mb-0'>
              <div className='pt-10 lg:pt-12 lg:pl-10'>
                <div className='mb-7' data-aos="fade-up">
                  <a className='uppercase px-5 py-2 border border-primary rounded-full text-center font-medium'>Our Value</a>
                </div>

                <div className='mb-7' data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
                  <h1 className='heading-primary text-[37px] lg:text-[50px] leading-[51.8px] lg:leading-[60px] font-semibold text-[rgb(40,44,49)]'>Building Lasting Connections through Electrical Excellence</h1>
                </div>
                <div className='flex gap-x-4'>
                  <Link href="" className='inline-block text-white bg-primary rounded-full font-semibold px-4  py-2 transition-all duration-300 ease-in border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-black'>
                      Learn More &rarr;
                  </Link>
                  <Link href="report" className='inline-block  rounded-full font-semibold px-4 border-2 border-primary  py-2 transition-all duration-300 ease-in hover:border-transparent hover:bg-primary hover:text-white'>
                      Contact Us 
                  </Link>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Appraisal End */}

      {/* Section Testimonial Start */}
      <section className='py-12 lg:py-20 px-7 lg:px-0'>
        <div className="max-w-6xl mx-auto">
          <div className='text-center'>
            <div className='mb-8'>
                <a className='px-5 py-2 border border-primary rounded-full text-center font-medium uppercase'>Testimonial</a>
            </div>

            <div className='max-w-2xl mx-auto mb-16'>
              <h1 className='heading-primary text-[37px] lg:text-[50px] leading-[51.8px] lg:leading-[70px] font-semibold text-[rgb(40,44,49)]'>Hear From Our Clients</h1>
            </div>
          </div>

          <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-10'>

            <div className='flex flex-col items-center bg-white shadow-lg p-5 mb-5 lg:mb-0'>
              <div className=''>
                <img src={users1} alt="" className='h-24 w-24 rounded-full'/>
              </div>

              <div className='text-center py-5'>
               
                <p className='text-my-grey-light'>
                  This is eie soooem eoeieifeif ejfeifjiefjeif efjefjiefje ehfehfeifhef
                </p>
                <h3 className='text-my-grey font-semibold uppercase mt-2'>Moses Godwin</h3>
              </div>
            </div>


            <div className='flex flex-col items-center bg-white shadow-lg p-5 mb-5 lg:mb-0'>
              <div className=''>
                <img src={woman} alt="" className='h-24 w-24 rounded-full'/>
              </div>

              <div className='text-center py-5'>
               
                <p className='text-my-grey-light'>
                  This is eie soooem eoeieifeif ejfeifjiefjeif efjefjiefje ehfehfeifhef
                </p>
                <h3 className='text-my-grey font-semibold uppercase mt-2'>Moses Godwin</h3>
              </div>
            </div>

            <div className='flex flex-col items-center bg-white shadow-lg p-5'>
              <div className=''>
                <img src={users2} alt="" className='h-24 w-24 rounded-full'/>
              </div>

              <div className='text-center py-5'>
               
                <p className='text-my-grey-light'>
                  This is eie soooem eoeieifeif ejfeifjiefjeif efjefjiefje ehfehfeifhef
                </p>
                <h3 className='text-my-grey font-semibold uppercase mt-2'>Moses Godwin</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Testimonial End */}

      {/* Section Contact Us Start */}
      <section className='py-12 lg:py-20 bg-cover px-7 lg:px-0 bg-center' style={{backgroundImage:`url(${contact_bg})`}}>
        <div className="max-w-6xl mx-auto">
          <div className="flex  gap-x-12 flex-col lg:flex-row items-center">

            <div className='order-1 lg:order-none grow-[2] mr-3 flex items-center justify-center'>
              <div className='h-[89px] w-[89px] rounded-full bg-white bg-opacity-35 animate-pulse flex items-center justify-center'>
                <a href="" className=' h-[55px] w-[55px] rounded-full text-white relative text-xl flex justify-center items-center bg-primary'>
                  <FaBoltLightning className='text-3xl'/>
                </a>
              </div>

            </div>

            <div className='mb-10 lg:mb-0 bg-white max-w-[584px] pt-6 lg:pt-[77px] pr-8 lg:pr-[100px] pb-12 lg:pb-[120px] pl-7 lg:pl-[90px] rounded-lg w-full lg:w-auto'>
              <h4 className='contact-title text-2xl  lg:text-4xl leading-7 lg:leading-[46px] pl-9 mb-6 font-bold text-[#303442] relative'>
                Your <span className='text-primary'>Go To Option</span> <br />
                in Electrical <br />Services 24/7
              </h4>
              <p className='text-my-grey-light'>
                Our experienced electricians are highly trained in all aspects of electrical service,
                from office lighting and security systems to emergency repair.
              </p>
              <div className='mt-5'>
                <Link to="services" className='inline-block text-white bg-primary rounded-full font-semibold px-4  py-2 transition-all duration-300 ease-in border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary'>
                  Explore Our Services &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Contact Us End */}
    </div>
  )
}

export default Home