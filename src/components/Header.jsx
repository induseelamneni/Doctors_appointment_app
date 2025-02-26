import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
        {/* {leftside} */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:mb-[-30px]'>
            <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:landing-tight lg:landing-tight'>Book Appointment <br/> With Trusted Doctors</p>
            <div className='flex flex-row items-center text-white text-sm font-light'>
                <img src={assets.group_profiles} alt="group-profile" className='w-28' />
                <p>Simply browse through our extensive list of trusted doctors, <br/> schedule your appointment hassle-free.</p>
            </div>
            <a href='#speciality' className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>Book Appointment <img src={assets.arrow_icon}/></a>

        </div>
        
        <div className='md:w-1/2 relative'>
        <img src={assets.header_img} alt="header" />
        </div>
    </div>
  )
}

export default Header

