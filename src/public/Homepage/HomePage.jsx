import React from 'react';
import Hero from '../components/Hero';
import FAQ from '../components/FAQ';

const HomePage = () => {
  return (
   <div>
     <Hero />
     <div className='px-32'>
     <FAQ />
     </div>
   </div>
  );
};

export default HomePage;