import React,{useState} from 'react'
import contact_us_bg from '../assets/images/contact_us_bg.jpg'
import { Link } from 'react-router-dom'
import { FaArrowRightLong ,FaBoltLightning} from "react-icons/fa6";
import {FaArrowCircleDown, FaArrowCircleUp} from 'react-icons/fa';
import TimeTable from '../components/TimeTable';
import black_electrician from '../assets/images/black_electrician.jpg'
import certificate from '../assets/images/certificate.jpg'
import { faqs } from '../data/data';

const Contact = () => {
  const [ID, setID] = useState(null);

  const toggleID = ID=>setID(prevID=> prevID == null ? ID :null);

  const sendToWhatsApp = e =>{
    e.preventDefault();
    const number = '+2347042973460'
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const subject = document.getElementById('subject').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    const url = `https://wa.me/${number}?text=Name:${name} Email:${email} Phone:${phone} Subject:${subject} Service:${service} Message:${message} `;
    window.open(url, '_blank').focus();
   
  }
  return (
    <div className=''>
      {/* About Us Banner Start */}
      <div className="max-w-6xl mx-auto">
       <div className='h-[400px] rounded-3xl relative bg-cover bg-center flex flex-col justify-center' style={{backgroundImage:`linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url(${contact_us_bg})`}}>
        <div className='text-center mb-5'>
          <h2 className='text-4xl lg:text-5xl font-semibold text-white'>Contact Us</h2>
        </div>
        <div className=''>
          <ul className='flex justify-center'>
            <li className='mx-2'>
              <Link to='/' className='transition-all duration-100 text-gray-300 hover:text-gray-200'>Home</Link>
            </li>

            <li className='mx-2'>
              <Link to='/contact' className='transition-all duration-100 text-gray-300 hover:text-gray-200 flex items-center'>
                <FaArrowRightLong className='text-primary'/>
                <span className='pl-4'>Contact </span>
              </Link>
            </li>

          </ul>

        </div>
       </div>
      </div>
      {/* About Us Banner End */}
      <div>
        <TimeTable />
      </div>

       {/* Section Contact Start */}
       <section className='py-7 lg:py-20 px-7 lg:px-0 overflow-hidden'>
        <div className="max-w-6xl mx-auto">
          <div className="flex  flex-col lg:flex-row gap-x-10">
            {/* Left Hand Content */}
            <div className='w-full lg:w-2/4 flex-shrink-0 mb-10 lg:mb-0 '>
              <div className='bg-white'>
                <div className='mb-7' data-aos="fade-up">
                  <a className='uppercase text-sm lg:text-base px-5 py-2 border border-primary rounded-full text-center font-medium'>Contact Form</a>
                </div>

                <div className=''data-aos="fade-up" data-aos-delay="300"  data-aos-duration="500" >
                  <h1 className='heading-primary text-[37px] lg:text-5xl leading-[51.8px] lg:leading-[50px] font-semibold text-[rgb(40,44,49)]'>Get In Touch with Us</h1>
                </div>

                <div className='my-5 lg:my-7' data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
                  <p className='text-my-grey-light mb-5'>
                    Are you facing a challenging home wiring project or issue? Simply complete the form with the specifics of your situation,
                    and we'll be there to assist you.
                  </p>

                  <div className='h-[300px] overflow-hidden'>
                    <img src={black_electrician} alt="" className='h-full w-full object-cover'/>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Hand Contents */}
            <div className='w-full lg:w-2/4 flex-shrink-0'>
              <div className='relative' data-aos="fade-up" data-aos-delay="300">
                 {/* Contact form start here */}
            <div className='col-md-6'>
              <div data-aos="zoom-in" className='col-md-12 py-4 bg-gray-800'>
                <h2 className='uppercase text-white text-center font-semibold'>Send Us A Message</h2>
              </div>
              <div className='container'>
                <div className='row'>
                  <div data-aos="fade-up" className='py-3 px-4'>
                    <form className='' onSubmit={sendToWhatsApp}>
                      <div className="row">
                        <div className='form-group col-md-12 mb-4'>
                          <input 
                            type="text" 
                            name='fullname' 
                            id="name"
                            required 
                            placeholder='Full name'
                            className='block w-full py-2 px-3 bg-white font-normal border border-slate-300 rounded-md transition-all duration-100 focus:outline-0 focus:border-primary' 
                          />

                        </div>
                      </div>


                      <div className="row">
                        <div className='form-group grid mb-4 grid-cols-1 md:grid-cols-2 gap-4'>
                          <input 
                            type="email" 
                            name='email' 
                            id='email'
                            required 
                            placeholder='Email Address' 
                            className='block w-full py-2 px-3 bg-white font-normal border border-slate-300 rounded-md transition-all duration-100 focus:outline-0 focus:border-primary' 
                          />

                          <input 
                            type="tel" 
                            name='phone' 
                            id='phone'
                            required 
                            placeholder='Phone Number' 
                            className='block w-full py-2 px-3 bg-white font-normal border border-slate-300 rounded-md transition-all duration-100 focus:outline-0 focus:border-primary' 
                          />
                        </div>
                      </div>


                      <div className="row">
                        <div className='form-group grid mb-4 grid-cols-1 md:grid-cols-2 gap-4'>
                          <input 
                            type="text" 
                            name='subject' 
                            id='subject'
                            required 
                            placeholder='Subject'
                            className='block w-full py-2 px-3 bg-white font-normal border border-slate-300 rounded-md transition-all duration-100 focus:outline-0 focus:border-primary' 
                          />

                          <select 
                            name='service' 
                            required  
                            id='service'
                            className='block w-full py-2 px-3 bg-white font-normal border border-slate-300 rounded-md transition-all duration-100 focus:outline-0 focus:border-primary' 
                          >
                            <option value="" defaultValue="selected">- Select Service -</option>
                            <option value="Home Automation">Home Automation</option>
                            <option value="House Wiring & Maintenance">House Wiring & Maintenance</option>
                            <option value="CCTV Camera Installation/Maintenance">CCTV Camera Installation/Maintenance</option>
                            <option value="Dstv & GoTv Installation">Dstv & GoTv Installation</option>
                            <option value="Trouble Shooting">Trouble Shooting</option>
                            <option value="Digital Display Board">Digital Display Board</option>
                            <option value="Solar Installation, Repairs & Maintenance">Solar Installation, Repairs & Maintenance</option>
                            <option value="Students Project">Students Project</option>
                            <option value="None">None</option>
                          </select>
                        </div>
                      </div>

                      

                      <div className="row">
                        <div className='form-group col-md-12 mb-3'>
                          <textarea 
                            type="text" 
                            name='message' 
                            required 
                            placeholder='Message'
                            id='message'
                            rows={7}
                            className='block w-full py-2 px-3 bg-white font-normal border border-slate-300 rounded-md transition-all duration-100 focus:outline-0 focus:border-primary' 
                          />

                        </div>
                      </div>
                      <div className="row">
                        <div className='form-group col-md-12 mb-3'>
                           
                        <button className='inline-block text-white bg-primary rounded-full font-semibold px-4  py-2 transition-all duration-300 ease-in border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary'>
                            Send Message!
                        </button>
                        </div>
                      </div>
                    </form>

                  </div>

                </div>

              </div>

            </div>
            {/* Contact form ends here */}
              </div>
            </div>
            </div>
          </div>
      </section>
      {/* Section Contact End */}

      {/* Section FAQs Start */}
      <section className='py-12 lg:py-20 px-7 lg:px-0 bg-gray-50'>
        <div className="max-w-6xl mx-auto">
          <div className='text-center'>
            <div className='mb-8' data-aos="fade-up">
                <a className='px-5 py-2 border border-primary rounded-full text-center font-medium uppercase'>FAQS</a>
            </div>

            <div className='max-w-2xl mx-auto mb-16' data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
              <h1 className='heading-primary text-[37px] lg:text-4xl leading-[51.8px] lg:leading-[60px] font-semibold text-[rgb(40,44,49)]'>Frequently Asked Questions</h1>
              <p className='text-my-grey-light mt-4'>
                This FAQ section aims to address common questions and concerns that our potential clients may have about our company and the services we offer.
              </p>
            </div>
          </div>

          <div className='bg-red-800 max-w-3xl mx-auto'>
          <div className='container mx-auto bg-white border-grey-light border'>
                  {faqs.map((question, i)=>(
                    
                    <div className=''>
                      <div className=''>
                        {/* Question and direction arrows start here */}
                        <div className='tab_header'>
                          <a href="#" className='tab__link p-4  uppercase text-gray-50 bg-gray-800 hover:bg-gold border-b-2 border-white flex justify-between' onClick={(e)=>(e.preventDefault(),toggleID(question.id))}>
                            <strong>{question.question}</strong>
                            {
                              (ID !== question.id)?(
                                <span className='arrow-down'><FaArrowCircleDown className='h-6'/></span>
                              ):(
                                <span className='up-arrow'><FaArrowCircleUp className='h-6'/></span>
                              )
                            }
                          </a>
                        </div>
                        {/* Questions and direction arrows end here */}

                        {/* Answer start here */}
                        <div className={`p-2 text-gray-900 normal-case ${ID== question.id ? 'block': 'hidden'}`}>
                          <p className='pb-5'>{question.ans}</p>

                        </div>
                        {/* Answer end here */}
                      </div>
                       {/* A single question and answer ends here. */}
                    </div>
                  ))}

                </div>
          </div>
        </div>
      </section>
      {/* Section FAQs End */}
    </div>
  )
}

export default Contact