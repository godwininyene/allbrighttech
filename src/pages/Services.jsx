import React from 'react'
import electricians_1 from '../assets/images/electricians_1.jpg';
import electrician_2 from '../assets/images/black_electrician_2.jpg'
import users1 from '../assets/images/delivery_agent.jpg'
import users2 from '../assets/images/banner_bg.jpg'
import users3 from '../assets/images/investor-1.jpg'
import woman from '../assets/images/home_bg_1.jpg';
import { FaArrowRightLong ,FaBoltLightning} from "react-icons/fa6";
import {FaPhoneAlt, FaEnvelope} from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Services = () => {
  return (
    <div>
      {/* Services Us Banner Start */}
      <div className="max-w-6xl mx-auto">
       <div className='h-[400px] rounded-3xl relative bg-cover bg-center flex flex-col justify-center' style={{backgroundImage:`linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url(${electricians_1})`}}>
        <div className='text-center mb-5'>
          <h2 className='text-4xl lg:text-5xl font-semibold text-white'>Our Services</h2>
        </div>
        <div className=''>
          <ul className='flex justify-center'>
            <li className='mx-2'>
              <Link to='/' className='transition-all duration-100 text-gray-300 hover:text-gray-200'>Home</Link>
            </li>

            <li className='mx-2'>
              <Link to='/services' className='transition-all duration-100 text-gray-300 hover:text-gray-200 flex items-center'>
                <FaArrowRightLong className='text-primary'/>
                <span className='pl-4'>services</span>
              </Link>
            </li>

          </ul>

        </div>
       </div>
      </div>
      {/* Services Us Banner End */}

       {/* Section About Services Start */}
       <section className='py-12 lg:py-24 px-7 lg:px-0'>
        <div className="max-w-6xl mx-auto">
          <div className="flex  gap-x-12 flex-col lg:flex-row">

            {/* Left Hand Contents */}
            <div className='w-full lg:w-2/4 flex-shrink-0 order-1 lg:order-none'>
              {/* About images Gallery Start */}

              <div className='relative'>
                <img src={electrician_2} alt="" className='h-full rounded-xl image-outline'/>
                {/* <img src={highTension} alt="" className='w-2/3 -mt-20 absolute right-5 rounded-xl image-outline'/> */}
              </div>
              {/* About images Gallery End */}
            </div>

            {/* Right Hand Content */}
            <div className='w-full lg:w-2/4 flex-shrink-0 mb-10 lg:mb-0'>
              <div className=''>
                <div className='mb-7' data-aos="fade-up">
                  <a className='uppercase text-sm lg:text-base px-5 py-2 border border-primary rounded-full text-center font-medium'>Our Services</a>
                </div>

                <div className=''data-aos="fade-up" data-aos-delay="300"  data-aos-duration="500" >
                  <h1 className='heading-primary text-[37px] lg:text-5xl leading-[51.8px] lg:leading-[50px] font-semibold text-[rgb(40,44,49)]'>Prompt and Proficient</h1>
                </div>

                <div className='my-5 lg:my-7' data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
                  <p className='text-my-grey-light'>
                    We consistently exceed expectations on each project, delivering value through our expertise, performance, and professionalism. 
                    You can trust that we devote equal dedication to every task we undertake.
                  </p>

                  <p className='text-my-grey-light mt-7'>
                    At our electrical engineering firm, we are dedicated to providing unparalleled customer satisfaction.
                    Our mission is centered on crafting exceptional experiences for every client, achieved through the expertise and 
                    professionalism of our team. Each member of our staff undergoes rigorous training to ensure they are not only highly skilled but also courteous and reliable. We strive to cultivate an environment where every interaction with our clients is marked by trust and satisfaction.
                  </p>
                </div>

                <div className='flex gap-x-3  lg:gap-x-10 mt-5' data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
                  <div className=''>
                    <p className='font-bold'>Call us today</p>
                    <p className='text-2xl text-primary font-semibold pb-1'>
                      <a className='flex items-center gap-x-2' href="tel:+2348144098649">
                      <FaPhoneAlt className={`inline text-sm`} />
                        08144098649
                      </a>
                      
                    </p>
                    Available 24/7, round-the clock services
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      {/* Section About Services End */}


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
        </div>
      </section>
      {/* Section Services End */}
    </div>
  )
}

export default Services