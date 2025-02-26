import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-row sm-grid grid-col-[3ft_1ft_1ft] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src="https://conceptincarnate.com/wp-content/uploads/2015/03/logo-final2-1600x1080.jpg" alt='logo' className='mb-5 w-40'/>
           
            <p className='w-fulll md:w-2/3 text-gray-600 landing-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

        </div>
        <div>
            <p className='text-xl font-medium mb-5'>
            COMPANY
            </p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About</li>
                <li>ContactUs</li>
                <li>PrivacyPolicy</li>
            </ul>

            
           

        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+1-213-456-8796</li>
                <li>allgood@gmail.com</li>
               
            </ul>

        </div>
        </div>
    </div>
  )
}

export default Footer