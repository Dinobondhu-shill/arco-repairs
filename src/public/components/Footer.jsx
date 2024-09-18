import React from 'react';

const Footer = () => {
  return (
    <footer className=" bg-[#000000a1] text-white flex justify-between gap-5 mx-32 px-10 py-5">
    <aside>
    <h6 className="footer-title">Contact us</h6>
      
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
    <nav className='flex flex-col'>
      <h6 className="footer-title">Company</h6>
      <a className="link link-hover">About us</a>
      <a className="link link-hover">Contact</a>
      <a className="link link-hover">Jobs</a>
      <a className="link link-hover">Press kit</a>
    </nav>
    <nav className='flex flex-col'>
      <h6 className="footer-title">Legal</h6>
      <a className="link link-hover">Terms of use</a>
      <a className="link link-hover">Privacy policy</a>
      <a className="link link-hover">Cookie policy</a>
    </nav>
  </footer>
  );
};

export default Footer;