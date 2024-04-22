import React,{useState} from 'react'
import electricians_1 from '../assets/images/electricians_1.jpg';
import electrician_2 from '../assets/images/electrician_2.jpg'
import highTension from '../assets/images/high_tension.jpg';
import black_electrician from '../assets/images/black_electrician.jpg'
import certificate from '../assets/images/certificate.jpg'
import { Link } from 'react-router-dom';
import { FaArrowRightLong ,FaBoltLightning} from "react-icons/fa6";
import { BsBank2 } from "react-icons/bs";
import { FaCalculator } from "react-icons/fa";
import { GiClockwork } from "react-icons/gi";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import contact_bg from '../assets/images/contact_bg.jpg'

const About = () => {
  const[counter, setCounter] = useState(false);
  return (
    <div className=''>
      {/* About Us Banner Start */}
      <div className="max-w-6xl mx-auto">
       <div className='h-[400px] rounded-3xl relative bg-cover bg-center flex flex-col justify-center' style={{backgroundImage:`linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url(${electricians_1})`}}>
          <div className='text-center mb-5'>
            <h2 className='text-4xl lg:text-5xl font-semibold text-white'>About Us</h2>
          </div>
          <div className=''>
            <ul className='flex justify-center'>
             <li className='mx-2'>
                <Link to='/' className='transition-all duration-100 text-gray-300 hover:text-gray-200'>Home</Link>
             </li>

             <li className='mx-2'>
                <Link to='/about' className='transition-all duration-100 text-gray-300 hover:text-gray-200 flex items-center'>
                  <FaArrowRightLong className='text-primary'/>
                  <span className='pl-4'>About</span>
                </Link>
             </li>

            </ul>

          </div>
       </div>
      </div>
      {/* About Us Banner End */}


      {/* Section About Start */}
       <section className='py-12 lg:py-20 px-7 lg:px-0'>
        <div className="max-w-6xl mx-auto">
          <div className="flex  gap-x-12 flex-col lg:flex-row items-center">

            {/* Left Hand Contents */}
            <div className='w-full lg:w-2/4 flex-shrink-0 order-1 lg:order-none'>
              {/* About images Gallery Start */}

              <div className='relative pb-32'>
                <img src={electrician_2} alt="" className='h-full rounded-xl image-outline'/>
                <img src={highTension} alt="" className='w-2/3 -mt-20 absolute right-5 rounded-xl image-outline'/>
              </div>
              {/* About images Gallery End */}
            </div>

            {/* Right Hand Content */}
            <div className='w-full lg:w-2/4 flex-shrink-0 mb-10 lg:mb-0'>
              <div className=''>
                <div className='mb-7' data-aos="fade-up">
                  <a className='uppercase text-sm lg:text-base px-5 py-2 border border-primary rounded-full text-center font-medium'>More than 10 years of expertise</a>
                </div>

                <div className=''data-aos="fade-up" data-aos-delay="300"  data-aos-duration="500" >
                  <h1 className='heading-primary text-[37px] lg:text-5xl leading-[51.8px] lg:leading-[50px] font-semibold text-[rgb(40,44,49)]'>Experienced and dependable electrical professionals</h1>
                </div>

                <div className='my-5 lg:my-7' data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
                  <p className='text-my-grey-light'>
                  Established in 2002, we have proudly served our community as a locally owned and operated business for over two decades. 
                  This local ownership lends a personal touch to our services, ensuring they are carried out in a relaxed and friendly 
                  manner by our team of skilled technicians. 
                  </p>

                  <p className='text-my-grey-light mt-7'>
                    Our mission revolves around delivering exceptional customer experiences, 
                    achieved through the expertise and professionalism of our staff. 
                    Each technician undergoes rigorous training to guarantee that they are 
                    not only skilled but also courteous and reliable, 
                    ensuring that every interaction with our clients is met with trust and satisfaction.
                  </p>
                </div>

                <div className='flex gap-x-3  lg:gap-x-10 mt-4' data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
                  <div className='h-auto lg:h-20  text-center p-2 bg-white rounded shadow-md'>
                    <h1 className='text-3xl text-primary font-bold'>20</h1>
                    <span className='font-medium'>Skilled Technicians</span>
                  </div>

                  <div className='h-auto lg:h-20  text-center p-2 bg-white rounded shadow-md'>
                    <h1 className='text-3xl text-primary font-bold'>100%</h1>
                    <span className='font-medium'>Satisfaction</span>
                  </div>

                  <div className='h-auto lg:h-20  text-center p-2 bg-white rounded shadow-md'>
                    <h1 className='text-3xl text-primary font-bold'>300</h1>
                    <span className='font-medium'>Happy Clients</span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      {/* Section About End */}

      {/* Our Statistics Start */}
      <section className='py-10 lg:py-16 px-7 lg:px-0 bg-gray-50 mt-5'>
        <div className='max-w-6xl mx-auto'>
          <div className='border-t border-t-my-grey-light'> 
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
      {/* Our Statistics End */}

      {/* Section Certification Start */}
      <section className='py-7 lg:py-20 px-7 lg:px-0 overflow-hidden'>
        <div className="">
          <div className="flex  flex-col lg:flex-row">

            {/* Left Hand Content */}
              <div className='w-full lg:w-2/4 flex-shrink-0 mb-10 lg:mb-0 '>
              <div className='bg-white top-4 py-7 lg:pl-7 lg:relative -right-20 z-10'>
                <div className='mb-7' data-aos="fade-up">
                  <a className='uppercase text-sm lg:text-base px-5 py-2 border border-primary rounded-full text-center font-medium'>Certificates</a>
                </div>

                <div className=''data-aos="fade-up" data-aos-delay="300"  data-aos-duration="500" >
                  <h1 className='heading-primary text-[37px] lg:text-5xl leading-[51.8px] lg:leading-[50px] font-semibold text-[rgb(40,44,49)]'>We are Qualified & Certified Electrical Firm</h1>
                </div>

                <div className='my-5 lg:my-7' data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
                  <p className='text-my-grey-light'>
                    Presently, we have a staff comprising fully qualified electrical technicians alongside 
                    a group of apprentices. Being registered with CAC, Our objective is to maintain
                    top-notch service standards while ensuring our prices remain highly competitive.
                  </p>

                
                </div>

                <div className='flex gap-x-3  lg:gap-x-10 mt-4' data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
                  <div className='shadow-md' >
                    <img src={certificate} alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Hand Contents */}
            <div className='w-full lg:w-2/4 flex-shrink-0'>
              <div className='relative' data-aos="fade-up" data-aos-delay="300">
                <img src={black_electrician} alt="" className='h-full'/>
              </div>
            </div>
            </div>
          </div>
      </section>
      {/* Section Certification End */}

      {/* Section Our Team Start */}
      <section className='py-10 lg:py-16 px-7 lg:px-0 bg-gray-50'>
        <div className="max-w-6xl mx-auto">
          <div className='text-center'>
            <div className='mb-8' data-aos="fade-up">
                <a className='px-5 py-2 border border-primary rounded-full text-center font-medium uppercase'>Our Team</a>
            </div>

            <div className='max-w-2xl mx-auto mb-16' data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
              <h1 className='heading-primary text-[37px] lg:text-5xl leading-[51.8px] lg:leading-[60px] font-semibold text-[rgb(40,44,49)]'>Introducing Our Team of Skilled Electrical Experts</h1>
            </div>
          </div>

          <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-10'>
            <div className='h-[400px]  relative mb-7 lg:mb-0' data-aos="fade-up" data-aos-delay='400'>
              <div className='h-full'>
                <img src={black_electrician} alt="" className='h-full object-cover rounded-2xl'/>
              </div>
              <div className='bg-white rounded-2xl p-2 absolute w-3/4 mx-auto bottom-7 left-6'>
                <div className=''>
                    <h2 className='text-xl lg:text-2xl font-semibold text-primary mb-1'>Mega Bright</h2>
                    <p className='text-sm'>Chief Executive Officer</p>
                </div>
              </div>
            </div>

            <div className='h-[400px]  relative mb-7 lg:mb-0' data-aos="fade-up" data-aos-delay='400'>
              <div className='h-full'>
                <img src={black_electrician} alt="" className='h-full object-cover rounded-2xl'/>
              </div>
              <div className='bg-white rounded-2xl p-2 absolute w-3/4 mx-auto bottom-7 left-6'>
                <div className=''>
                    <h2 className='text-xl lg:text-2xl font-semibold text-primary mb-1'>Ifeanyi Uche</h2>
                    <p className='text-sm'>Chief Technician</p>
                </div>
              </div>
            </div>

            <div className='h-[400px]  relative' data-aos="fade-up" data-aos-delay='400'>
              <div className='h-full'>
                <img src={black_electrician} alt="" className='h-full object-cover rounded-2xl'/>
              </div>
              <div className='bg-white rounded-2xl p-2 absolute w-3/4 mx-auto bottom-7 left-6'>
                <div className=''>
                    <h2 className='text-xl lg:text-2xl font-semibold text-primary mb-1'>Peter Ibrahim</h2>
                    <p className='text-sm'>HOD, Marketing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Our Team End */}

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
                  In Need of  assistance with<span className='text-primary'>  electrical maintenance?</span>
                </h4>
                <p className='text-my-grey-light'>
                  We take pride in providing electrical repair and service solutions to our clients. 
                  Contact us today to arrange a complimentary service estimate!
                </p>
                <div className='flex gap-x-4 mt-5' data-aos="fade-up" data-aos-delay="800" data-aos-duration="500">
                  <Link to="contact" className='inline-block text-white bg-primary rounded-full font-semibold px-4  py-2 transition-all duration-300 ease-in border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary'>
                      Contact Us Now!
                  </Link>
                  <Link to="services" className='inline-block text-primary  rounded-full font-semibold px-4 border-2 border-primary  py-2 transition-all duration-300 ease-in hover:border-transparent hover:bg-primary hover:text-white'>
                      See Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
      </section>
      {/* Section Contact Us End */}

      {/* Our Advantages Start  */}
      <section className='py-10 lg:py-20 px-7 lg:px-0 bg-gray-50'>
        <div className="max-w-6xl mx-auto">
          <div className='text-center'>
            <div className='mb-8' data-aos="fade-up">
                <a className='px-5 py-2 border border-primary rounded-full text-center font-medium uppercase'>The Benefits We Offer</a>
            </div>

            <div className='max-w-2xl mx-auto mb-16' data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
              <h1 className='heading-primary text-[37px] lg:text-4xl leading-[51.8px] lg:leading-[60px] font-semibold text-[rgb(40,44,49)]'>Why You Should Reach Out to Us</h1>
              <p className='text-my-grey-light mt-4'>
                Our electrician provides a comprehensive selection of top-notch electrical services, 
                covering everything from design and 
                construction to engineering and upkeep, all in one place.
              </p>
            </div>
          </div>

          <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-10'>

            <div className='bg-white shadow-lg p-3 rounded mb-7 lg:mb-0' data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
              <div className='pb-3 rounded-lg border-b-[2px] border-b-primary flex flex-col items-center text-center'>
                <div className='w-12 h-12 rounded-full bg-white  flex items-center justify-center'>
                    <GiClockwork className='text-3xl text-primary' />
                </div>
                <div>
                  <h2 className='font-semibold text-lg uppercase  mt-2'>Round-the-clock Emergency Assistance</h2>
                  <p className='mt-2'>
                    A team of reliable emergency electricians available 24/7.
                  </p>
                </div>
              </div>
            </div>


            <div className='bg-white shadow-lg p-3 rounded mb-7' data-aos="fade-up" data-aos-delay="300" data-aos-duration="500">
              <div className='pb-3 rounded-lg border-b-[2px] border-b-primary flex flex-col items-center text-center'>
                <div className='w-12 h-12 rounded-full bg-white  flex items-center justify-center'>
                    <FaCalculator className='text-3xl text-primary' />
                </div>
                <div>
                  <h2 className='font-semibold text-lg uppercase  mt-2'>Complimentary Quotations</h2>
                  <p className='mt-2'>
                    Certainly, we provide complimentary estimates for new electrical installations or replacements.
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-white shadow-lg p-3 rounded'  data-aos="fade-up" data-aos-delay="400" data-aos-duration="500">
              <div className='pb-3 rounded-lg border-b-[2px] border-b-primary flex flex-col items-center text-center'>
                <div className='w-12 h-12 rounded-full bg-white  flex items-center justify-center'>
                    <BsBank2 className='text-3xl text-primary' />
                </div>
                <div>
                  <h2 className='font-semibold text-lg uppercase  mt-2'>Budget-Friendly Price</h2>
                  <p className='mt-2'>
                  We ensure that our prices are budget-friendly, making our services accessible to all.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Advantages End  */}
    </div>
  )
}

export default About