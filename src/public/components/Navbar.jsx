import Image from 'next/image';
import React from 'react';
import img from '@/public/images/image 4.png'

const Navbar = () => {
  return (
    <div className='h-14 flex '>
      <div>
        <Image src={img} className='mx-6'></Image>
      </div>
      <div className='bg-[#FABB05] w-full h-1/2 flex items-end'>
    this is upper head
      </div>
    </div>
  );
};

export default Navbar;