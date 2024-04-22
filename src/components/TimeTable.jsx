import React from 'react'
import {IoIosHeadset} from 'react-icons/io';
import {FcAlarmClock} from 'react-icons/fc';
import {BsFillBookmarkPlusFill, BsMapFill} from 'react-icons/bs'
import {Link } from 'react-router-dom';

const TimeTable = () => {
  return (
    <div className=''>
        <div className='max-w-6xl py-6 mx-auto  divide-x gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
           
            <div data-aos="zoom-in" className='py-2 flex'>
                    <h2 className='font-bold cols-span-1 text-center pl-4'>
                        <IoIosHeadset className='mt-3  text-primary text-4xl' />
                    </h2>
                    
                    <div className='ml-3'>
                        <span className='font-bold text-xl'>
                            Call Center
                        </span>
                        <p className='text-sm'>
                            Feel free to give us a call on
                        </p>
                        <Link to="tel:+ 1 562 452 3270" className=''>08144098649 </Link>
                    </div>
            </div>

            <div data-aos="zoom-in" className='py-2 flex  '>
                <h2 className='font-bold cols-span-1 text-center pl-4'>
                    <FcAlarmClock className='mt-3  text-primary text-4xl'/>
                </h2>
                
                <div className='ml-3'>
                    <span className='font-bold text-xl'>
                        Working Hours
                    </span>
                    <p className='text-sm'>
                        Mon - Fri: 7AM-5PM <br /> Sat: 9AM-3PM
                    </p>
                </div>
            </div>

            <div data-aos="zoom-in" className='py-2 flex'>
                <h2 className='font-bold cols-span-1 text-center pl-4'>
                    <BsMapFill className='mt-3  text-primary text-3xl' />
                </h2>
                
                <div className='ml-3'>
                    <span className='font-bold text-xl'>
                        Our Locations
                    </span>
                    <p className='text-sm'>
                        Opposite Salvation Ministry, Nekede, Owerri 
                    </p>
                </div>
            </div>

            <div data-aos="zoom-in" className='py-2  flex w-full'>
                <h2 className='font-bold cols-span-1 text-center pl-4'>
                    <BsFillBookmarkPlusFill  className='mt-3  text-primary text-4xl' />
                </h2>
                
                <div className='ml-3'>
                    <span className='font-bold text-xl'>
                        Request Quote
                    </span>
                    <p className='text-sm'>
                    Get a Quote for any preferred logistics service.
                    </p>
                    {/* <Link to="tel:+ 1 562 452 3270" className=''>+ 1 562 452 3270</Link> */}
                </div>
            </div>

            
        </div>

     



        
    </div>
  )
}

export default TimeTable