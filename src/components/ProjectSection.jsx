import React from 'react'
import users1 from '../assets/images/delivery_agent.jpg'
import users2 from '../assets/images/banner_bg.jpg'
import users3 from '../assets/images/investor-1.jpg'
import woman from '../assets/images/home_bg_1.jpg';
import { Link, useSearchParams } from 'react-router-dom';
import { categories, projects } from '../data/data';


const ProjectSection = () => {

    const[searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("category");

    const displayProjects = typeFilter ? projects.filter(project => project.type == typeFilter) : projects; 
    
  return (
    <div className="max-w-6xl mx-auto">
    <div className='text-center lg:text-left'>
      <div className='mb-5' data-aos="fade-up">
        <a className='uppercase px-5 py-2 border border-primary rounded-full text-center font-medium'>Our Projects</a>
      </div>

      <div className='mb-7 max-w-2xl mx-auto lg:max-w-none'data-aos="fade-up" data-aos-delay="300"  data-aos-duration="500" >
        <h1 className='heading-primary ext-[37px] lg:text-[50px] leading-[51.8px] lg:leading-[70px] font-semibold text-[rgb(40,44,49)]'>High Quality Projects Experts</h1>
      </div>

        <div className="categories mb-8 lg:mt-0  rounded border border-slate-100 bg-slate-100 overflow-hidden ">
            <ul className="flex flex-wrap">
                <li >
                    <Link to='..'
                        className={`inline-block py-2 px-3 font-semibold uppercase transition-all duration-100 hover:bg-primary-light hover:text-white text-[10px] ${typeFilter == null ? 'bg-primary text-white': null}`}>
                        All
                    </Link>
                </li>
                {
                categories.map(category =>(
                    <li key={category.cat_id}>
                        <button 
                            onClick={()=>setSearchParams({category: category.cat_title})} 
                            className={`inline-block py-2 px-3 font-semibold uppercase transition-all duration-100 hover:bg-primary-light hover:text-white text-[10px] ${typeFilter == category.cat_title ? 'bg-primary text-white' : null}  `}>
                            {category.cat_title}
                        </button>
                    </li>
                ))
                }
            </ul>
        </div>
    </div>

    <div className='md:grid md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-5'>
        {
            (displayProjects.length > 0)?(
                displayProjects.map(project=>(
                    <div  key={project.id}>
                        <img src={project.image} alt="" className='w-full'/>
                    </div>
                ))
            ):<h1 className="text-2xl mb-4 font-bold">No Project(s) for this category at the moment. Please check back later.</h1>
        }
    </div>

    {/* <div className='md:grid md:grid-cols-2 lg:grid-cols-2 gap-x-16 gap-y-10'>
      <div className="" >
        <div className='h-[300px] overflow-hidden rounded-xl relative mb-7' data-aos="fade-up" data-aos-delay="500">
          <img src={users1} alt="" className='w-full'/>
          <div className='absolute top-0 flex flex-col justify-end pl-12 pb-10 bg-black bg-opacity-30 w-full h-full'>
            <span className='inline-block text-white bg-primary self-start rounded-full font-semibold px-4  py-2 transition-all duration-300 ease-in border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-gold'>
              Student Project
            </span>
            <h3 className='text-white font-semibold text-2xl mt-4'>Solar Inverter Construction</h3>
          </div>
        </div>

        <div className='h-[300px] overflow-hidden rounded-xl relative' data-aos="fade-up" data-aos-delay="500">
          <img src={users2} alt="" className='w-full'/>
          <div className='absolute top-0 flex flex-col justify-end pl-12 pb-10 bg-black bg-opacity-30 w-full h-full'>
            <span className='inline-block text-white bg-primary self-start rounded-full font-semibold px-4  py-2 transition-all duration-300 ease-in border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-gold'>
              Residential
            </span>
            <h3 className='text-white font-semibold text-2xl mt-4'>Solar Inverter Construction</h3>
          </div>
        </div>
      </div>

      <div className="">
        <div className='h-full'>
          <div className='h-full overflow-hidden rounded-xl relative' data-aos="fade-up" data-aos-delay="500">
            <img src={users1} alt="" className='w-full h-full object-cover'/>
            <div className='absolute top-0 flex flex-col justify-end pl-12 pb-10 bg-black bg-opacity-30 w-full h-full'>
            <span className='inline-block text-white bg-primary self-start rounded-full font-semibold px-4  py-2 transition-all duration-300 ease-in border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-gold'>
              Residential
            </span>
            <h3 className='text-white font-semibold text-2xl mt-4'>Solar Inverter Construction</h3>
          </div>
          </div>
        </div>
      </div>



      <div className="">
        <div className='h-full'>
          <div className='h-full overflow-hidden rounded-xl relative'  data-aos="fade-up" data-aos-delay="400">
            <img src={woman} alt="" className='w-full h-full object-cover'/>
            <div className='absolute top-0 flex flex-col justify-end pl-12 pb-10 bg-black bg-opacity-30 w-full h-full'>
            <span className='inline-block text-white bg-primary self-start rounded-full font-semibold px-4  py-2 transition-all duration-300 ease-in border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-gold'>
              Student Project
            </span>
            <h3 className='text-white font-semibold text-2xl mt-4'>Solar Inverter Construction</h3>
          </div>
          </div>
        </div>
      </div>
      
      <div className="">

        <div className='h-[300px] overflow-hidden rounded-xl relative mb-7' data-aos="fade-up" data-aos-delay="500">
          <img src={users2} alt="" className='w-full'/>
          <div className='absolute top-0 flex flex-col justify-end pl-12 pb-10 bg-black bg-opacity-30 w-full h-full'>
            <span className='inline-block text-white bg-primary self-start rounded-full font-semibold px-4  py-2 transition-all duration-300 ease-in border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-gold'>
              Student Project
            </span>
            <h3 className='text-white font-semibold text-2xl mt-4'>Solar Inverter Construction</h3>
          </div>
        </div>

        <div className='h-[300px] overflow-hidden rounded-xl relative'  data-aos="fade-up" data-aos-delay="600">
          <img src={users1} alt="" className='w-full'/>
          <div className='absolute top-0 flex flex-col justify-end pl-12 pb-10 bg-black bg-opacity-30 w-full h-full'>
            <span className='inline-block text-white bg-primary self-start rounded-full font-semibold px-4  py-2 transition-all duration-300 ease-in border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-gold'>
              Student Project
            </span>
            <h3 className='text-white font-semibold text-2xl mt-4'>Solar Inverter Construction</h3>
          </div>
        </div>
      </div>
    </div> */}
  </div>
  )
}

export default ProjectSection