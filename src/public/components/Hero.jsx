import HeroForm from "./HeroForm";


const Hero = () => {
  return (
    <div className="bg-[#FABB05] min-h-96 px-32 py-10 w-full flex justify-between ">
      <div className="flex flex-col justify-center gap-6 ">
        <h1 className="font-semibold text-4xl">Problems with Your Air <br />
        Conditioner?</h1>
        <p className="font-medium max-w-80">Our expert technicians can repair your cooling
        system right away!</p>
        <a className="px-6 py-3 text-white font-bold bg-[#D92C18] rounded-md w-fit" href="tel:+(321) 341-9833"> (321) 341-9833</a>
      </div>
      <div className=''>
        <HeroForm />
      </div>
    </div>
  );
};

export default Hero;