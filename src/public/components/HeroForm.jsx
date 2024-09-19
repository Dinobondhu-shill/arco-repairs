"use client"
import React, { useState } from 'react';

const HeroForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
  }
  return (
    <div className='bg-white p-4 rounded-md w-full'>
      <h3 className='text-xl font-bold'>Book Online</h3>
      <form onSubmit={handleSubmit}>
       <div className='flex gap-6 mt-5'>
       <div className='flex flex-col'>
       <label>
          Full Name
          </label>
          <input className='border border-black rounded-md'
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        
       </div>
       <div className='flex flex-col'>
       <label>
         Phone Number
          </label>
          <input className='border border-black rounded-md'
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        
       </div>
       </div>
        <div className='flex gap-6'>
       <div className='flex flex-col'>
       <label>
       Email
          </label>
          <input className='border border-black rounded-md'
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        
       </div>
       <div className='flex flex-col'>
       <label>
          Select
          </label>
          <select
  className="border border-black rounded-md"
  name="name"
  value={formData.name}
  onChange={handleChange}
>
  <option value="" disabled>What do you need?</option>
  <option value="AC Installation">AC Installation</option>
  <option value="AC Gas Refill">AC Gas Refill</option>
  <option value="AC Maintenance">AC Maintenance</option>
  <option value="AC Repair">AC Repair</option>
  <option value="Genuine Parts">Genuine Parts</option>
  <option value="AC Cleaning">AC Cleaning</option>
  <option value="AC Filter Replacement">AC Filter Replacement</option>
  <option value="AC Thermostat Repair">AC Thermostat Repair</option>
  <option value="AC Compressor Replacement">AC Compressor Replacement</option>
  <option value="AC Duct Cleaning">AC Duct Cleaning</option>
  <option value="AC Remote Repair">AC Remote Repair</option>
</select>
       </div>
       </div>
        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
};

export default HeroForm;