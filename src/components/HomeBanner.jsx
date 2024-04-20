import React from 'react'
import bg from '../assets/images/home_bg_1.jpg'

import { Link } from 'react-router-dom'

const HomeBanner = () => {
  return (
    <div className='h-[80vh] relative bg-cover bg-center' style={{backgroundImage:`linear-gradient(to right, rgba(0,0,255, 0.2) 20%, rgba(0,0,0,0.6) 80%),url(${bg})`}}>
        <div className='lg:absolute right-24 top-12 w-full lg:w-1/2 h-full lg:h-auto pt-16 px-5 lg:pt-5' style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4))`}}>
           
            <div className=" md:text-left mb-10">
                <aside className='' >
                    <div className='w-full rounded-full border border-primary mb-4'>
                        <p className='py-2 text-center text-white'>Allbright Tech Systems Limited</p>
                    </div>
                    <h1 className="text-3xl lg:text-5xl font-black text-white mb-4 uppercase" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
                        Delivering top-notch <span className="text-primary">electrical <span className='text-white'>&</span> electronics  services </span>
                    </h1>
                    <p className="text-sm lg:text-base mb-5 text-white" data-aos="fade-up" data-aos-delay="700" data-aos-duration="700">
                        Welcome to Allbright Tech Systems Limited! Your trusted source for top-quality electrical and electronics services. 
                        Whether you need expert installation, reliable repairs, or comprehensive maintenance,
                        our team of skilled professionals is here to meet your needs. 
                    </p>
                   <div className='flex gap-x-4' data-aos="fade-up" data-aos-delay="800" data-aos-duration="500">
                        <Link href="" className='inline-block text-white bg-primary rounded-full font-semibold px-4  py-2 transition-all duration-300 ease-in border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-gold'>
                            Learn More &rarr;
                        </Link>
                        <Link href="report" className='inline-block text-white  rounded-full font-semibold px-4 border-2 border-primary  py-2 transition-all duration-300 ease-in hover:border-transparent hover:bg-primary hover:text-white'>
                            Contact Us 
                        </Link>
                   </div>
                </aside>
            </div>

           <div className='hidden lg:block absolute top-36 right-4' data-aos="fade-in" data-aos-delay="600" data-aos-duration="900">
            <div className='h-[2px] w-72 bg-white mb-2'></div>
            <div className='h-[2px] w-[280px] bg-white mb-2 ml-2'></div>
            <div className='h-[2px] w-72 bg-white'></div>
           </div>
           
        </div>
    </div>
  )
}

export default HomeBanner