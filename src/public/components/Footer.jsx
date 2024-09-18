import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import img1 from "@/public/images/item (1).png";
import img2 from "@/public/images/item (2).png";
import img3 from "@/public/images/item (3).png";
import img4 from "@/public/images/item (4).png";



const Footer = () => {
  return (
    <footer className=" bg-[#000000a1] text-white flex justify-between gap-5 mx-32 px-20 py-5">
     <aside className='flex flex-col gap-4'>
    <h6 className="footer-title">Contact us</h6>
    <h5 className='flex gap-3 items-center link link-hover'><CiLocationOn />
    140 1/4 Road
    Washington, California    </h5>
    <h5 className='flex gap-3 items-center link link-hover'><IoIosCall />
    <a href="tel:3213419833">
    <h4>(321) 341-9833</h4>
  </a>    </h5>
    <h5 className='flex gap-3 items-center link link-hover'><MdOutlineEmail />
    <a href="mailto:arco.repairs@gmail.com">Email Us</a> </h5>
    </aside> 
    <nav className='flex flex-col gap-4'>
      <h6 className="footer-title">BUSINESS HOURS</h6>
      <a className="link link-hover">Monday: 8:00 am - 5:00 pm</a>
      <a className="link link-hover">Tuesday: 8:00 am - 5:00 pm</a>
      <a className="link link-hover">Wednesday: 8:00 am - 5:00 pm</a>
      <a className="link link-hover">Thursday: 8:00 am - 5:00 pm</a>
      <a className="link link-hover">Thursday: 8:00 am - 5:00 pm</a>
      <a className="link link-hover">Friday: 8:00 am - 5:00 pm</a>
      <a className="link link-hover">Saturday: Closed</a>
      <a className="link link-hover">Sunday: Closed</a>
    </nav>
    <nav className='flex flex-col gap-5'>
      <h6 className="footer-title">Payment</h6>
     <h6>Checks</h6>
     <div className='flex gap-1'>
      <Image src={img1}></Image>
      <Image src={img2}></Image>
      <Image src={img3}></Image>
      <Image src={img4}></Image>
     </div>
     <div>

     </div>
     <Link href={'/'} className=' p-2 text-sm bg-[#FABB05] font-semibold flex items-center '>REQUEST AN APPOINTMENT</Link>
    </nav>
    <nav className='flex flex-col gap-5'>
      <h6 className="footer-title">Legal</h6>
      <a className="link link-hover">Terms of use</a>
      <a className="link link-hover">Privacy policy</a>
      <a className="link link-hover">Cookie policy</a>
    </nav>
  </footer>
  );
};

export default Footer;