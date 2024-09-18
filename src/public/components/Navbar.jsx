import Image from 'next/image';
import React from 'react';
import img from '@/public/images/image 4.png'
import Link from 'next/link';
import { FaFacebook, FaLinkedin  } from "react-icons/fa";
import { FaXTwitter, FaInstagram  } from "react-icons/fa6";
import { GrMapLocation } from "react-icons/gr";


const navbar = [
  
  {
    route:"Home",
    path:"/"
  },
  {
    route:"Services",
    path:"/services"
  },
  {
    route:"About Us",
    path:"/about"
  },
  {
    route:"Contact",
    path:"/contact"
  },
  {
    route:"Login",
    path:"/login"
  },
  {
    route:"Sign Up",
    path:"/signup"
  },
  
]
const Navbar = () => {
  return (
    <div className='h-[150px] flex '>
      <div className='mx-6 flex justify-center items-center'>
        <Image src={img} ></Image>
      </div>
      <div className=' w-full'>
      <div className='bg-[#FABB05] h-1/3 flex items-center justify-between  pr-6'>
    <p className='font-semibold px-6 flex items-center gap-4'> <GrMapLocation className='text-lg'/>
     Serving Washington, California & Surrounding Areas</p>
    <div>
    <ul className='flex space-x-4'>
      <li>
        <Link href="https://www.facebook.com" target="_blank">
          <FaFacebook  />
        </Link>
      </li>
      <li>
        <Link href="https://www.linkedin.com" target="_blank">
          <FaLinkedin />
        </Link>
      </li>
      <li>
        <Link href="https://twitter.com" target="_blank">
          <FaXTwitter/>
        </Link>
      </li>
      <li>
        <Link href="https://www.instagram.com" target="_blank">
          <FaInstagram />
        </Link>
      </li>
    </ul>
    </div>
      </div>
      <div className='h-2/3 flex items-center justify-between'>
        <div>
        {
          navbar.map(nav=> <Link key={nav.route} href={nav?.path} className='pr-4 hover:text-[#FABB05] hover:underline hover:text-bold duration-300'>{nav.route}</Link>)
        }
        </div>
        <div className='flex'>
          <Link href={'/'} className='py-2 px-4 bg-[#FABB05] font-semibold flex items-center rounded-full'>REQUEST AN APPOINTMENT</Link>
          <div className='px-6'>
  <h5>Call Today:</h5>
  <a href="tel:3213419833">
    <h4 className='text-3xl underline'>(321) 341-9833</h4>
  </a>
</div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;