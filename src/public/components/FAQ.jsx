import React from 'react';

const FAQ = () => {
  return (
    <div className='my-5'>
      <h3 className='font-bold text-2xl my-2'>How to Know When It's Time for AC Service</h3>
      <div className='flex flex-col gap-3'>
      <div className="collapse collapse-plus bg-[#FABB05] rounded-sm">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title text-xl font-medium"> How often should I replace my air filters?</div>
  <div className="collapse-content">
    <p>Air filters should typically be replaced every 1 to 3 months, depending on usage and the type of filter. Regular replacement improves efficiency and air quality.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-[#FABB05] rounded-sm">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title text-xl font-medium">How do ducts and airflow affect my air conditioning system?</div>
  <div className="collapse-content">
    <p>Properly sealed and clean ducts ensure efficient airflow throughout your home, maximizing cooling and energy efficiency. Poor ductwork can result in uneven cooling, increased energy bills, and unnecessary strain on the AC unit.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-[#FABB05] rounded-sm">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title text-xl font-medium">How can I set the thermostat for optimal cooling?</div>
  <div className="collapse-content">
    <p>Set your thermostat to a comfortable temperature (typically between 72-78°F or 22-26°C). Using a programmable or smart thermostat can optimize cooling, saving energy when you're away from home.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-[#FABB05] rounded-sm">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title text-xl font-medium">What does the outdoor unit of my air conditioner do?</div>
  <div className="collapse-content">
    <p>The outdoor unit releases heat absorbed from inside your home. It houses the compressor, condenser coils, and a fan, which work together to expel hot air and ensure proper cooling inside.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-[#FABB05] rounded-sm">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title text-xl font-medium">How often should I maintain my air conditioning system?</div>
  <div className="collapse-content">
    <p>Regular maintenance should be performed at least once a year, ideally before the cooling season begins. This includes checking refrigerant levels, cleaning filters, inspecting the thermostat, and ensuring proper airflow.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-[#FABB05] rounded-sm">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title text-xl font-medium">When should I call for emergency AC service?</div>
  <div className="collapse-content">
    <p>Call for emergency service if your AC stops working during extreme heat, you notice unusual noises, leaks, or poor airflow, or if the system won't turn on. These can signal serious issues that require immediate attention</p>
  </div>
</div>
      </div>
    </div>
  );
};

export default FAQ;