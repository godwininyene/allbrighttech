import React from 'react'
import logo from '../assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import {AiFillHome, AiFillInfoCircle} from 'react-icons/ai';
import {FaPhoneSquareAlt,FaGlassCheers,FaUserFriends, FaMap, FaBars,FaTools} from 'react-icons/fa';
import{MdClose, MdLocationPin} from 'react-icons/md';
import {FcAlarmClock} from 'react-icons/fc';

const Navigation = () => {
    const [toggle, setToggle] = React.useState(false);
    const activeStyle={color:'#0000FF'};
  return (
    <div className=''>
        <div className='bg-black px-7 py-2'>
           <div className='hidden lg:flex items-center max-w-6xl mx-auto'>
                <div className='grow flex'>

                    <div className='flex  items-center'>
                        <div className='flex-shrink-0 mr-4'>
                           
                            <MdLocationPin className='text-primary'/>
                        </div>
                        <div className=''>
                            <p className='text-gray-400'>
                               Opposite Salvation Ministry, Nekede, Owerri
                            </p>
                        </div>
                    </div>

                    <div className='flex items-center ml-12'>
                        <div className='flex-shrink-0 mr-4'>
                            <FcAlarmClock className='text-primary'/>
                        </div>
                        <div className=''>
                           
                            <p className=' text-gray-400'>
                                Mon - Sat 08:00 AM - 05:00 PM
                            </p>
                        </div>
                    </div>
                </div>
                <div className=''>

                    <div className='flex items-center'>
                        <div className='flex-shrink-0 mr-4'>
                            <FaPhoneSquareAlt className='text-primary'/>
                        </div>
                        <div className=''>
                           
                            <p className=' text-gray-400'>
                            <a  href="tel:+2348144098649">08144098649</a> ||   <a  href="tel:+2348144098649">08144098649</a>
                             
                            </p>
                        </div>
                    </div>
                </div>
           </div>
        </div>
        <header className="sticky top-0  z-50 py-1 lg:py-4 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center">

                    <aside className="flex items-center justify-between w-full lg:w-auto">
                        <div className="flex-grow">
                            <img src={logo} alt="" className="w-36" />
                        </div>
                        <button  className="bg-white text-slate-950 p-1 px-2 rounded-md flex items-center justify-center lg:hidden relative z-50" onClick={() => setToggle((prev) => !prev)}>
                            {
                                (!toggle) ?(
                                        <FaBars className="text-3xl  inline"/>
                                    )
                                    
                                    :(
                                        <MdClose className="text-3xl  inline-block"/>
                                ) 
                            }
                        </button>
                    </aside>

                    <div className={`fixed lg:relative flex flex-col lg:flex-row bg-slate-50  lg:bg-transparent z-50 ${toggle ? 'left-0' : '-left-56 '} lg:left-auto top-0 h-full w-56 lg:w-auto transition-all duration-500 text-slate-900 dark:text-white`}>
                        
                        <div className=" py-3">
                            <section className="bg-slate-800 dark:bg-slate-950 text-center p-3 mt-1 rounded-md shadow-md lg:hidden block">
                                <img src={logo} alt="" className="w-20 inline-block" />
                            </section>
                        </div>

                        <ul className="text-sm flex-grow">
                            <li className="block lg:inline-block">
                                
                                <NavLink to="/"  className="transition-all cursor-pointer duration-100 text-black hover:text-primary flex items-center gap-1  py-2 px-4 md:py-1 md:px-3 lg:px-4" style={({isActive})=> isActive ? activeStyle : null}>
                                    <AiFillHome className='text-primary inline h-5 w-5'/>
                                    Home
                                </NavLink>
                            </li>

                            <li className="block lg:inline-block">
                            
                                <NavLink to="about" className="transition-all cursor-pointer duration-100 text-black hover:text-primary flex items-center gap-1  py-2 px-4 md:py-1 md:px-3 lg:px-4" style={({isActive})=> isActive ? activeStyle : null}>
                                    <AiFillInfoCircle className='text-primary inline h-5 w-5'/>
                                    About
                                </NavLink>
                            </li>

                            <li className="block lg:inline-block">
                            
                            <NavLink to="services" spy={true} smooth={true} offset={0} duration={1000} className="transition-all cursor-pointer duration-100 text-black hover:text-primary flex items-center gap-1  py-2 px-4 md:py-1 md:px-3 lg:px-4" style={({isActive})=> isActive ? activeStyle : null}>
                                <FaTools className='text-primary inline h-5 w-5'/>
                                Services
                            </NavLink>
                        </li>

                            <li className="block lg:inline-block">
                            
                                <NavLink to="contact" spy={true} smooth={true} offset={0} duration={1000} className="transition-all cursor-pointer duration-100 text-black hover:text-primary flex items-center gap-1  py-2 px-4 md:py-1 md:px-3 lg:px-4" style={({isActive})=> isActive ? activeStyle : null}>
                                    <FaPhoneSquareAlt className="text-primary inline h-5 w-5"/>
                                    Contact
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            
        {/*Mobile Overlay */}
        <div className={`${toggle ? 'lg:hidden block' : 'lg:hidden hidden'} fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40`} onClick={() => setToggle((prev) => !prev)}></div>
        </header>
    </div>
  )
}

export default Navigation