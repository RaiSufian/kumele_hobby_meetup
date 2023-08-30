import React from 'react'

const Slider3 = () => {
  return (
    <div className="max-w-6xl mx-auto xl:py-2 py-2">
      <div className='lg:flex xl:py-6 lg:py-2 xl:gap-20 lg:gap-5 lg:px-2'>
        <div className='lg:w-1/2 lg:px-5 px-2 mx-auto'>
          <img src="/img/slider3.png" alt="img" className="lg:max-w-lg sm:w-96 w-72 mx-auto" />
          <p className="text-sm font-plus text-theme md:mx-20">He lost his sight but not his passion for skateboarding. Be inspired and start a hobby to improve your mental and physical well-being.</p>
        </div>
        <div className='lg:w-1/2 text-start md:px-10 lg:px-0 md:py-10 px-5 lg:py-0'>
          <h2 className='xl:text-3xl text-xl font-fredoka font-medium relative z-0 after:absolute after:top-full  after:left-24 after:bg-theme after:h-3 after:w-32 after:-z-10 after:-translate-y-3'>Get Matched in 48 hours</h2>
          <p className='py-4 xl:text-xl text-lg font-fredoka font-light'>Kumele, the only hobby meetup you will ever need! Get matched in 48 hours. Click "Be a beta tester ". Give valuable feed back and get special discounts and rewards on launch. Join now, beta acceptance is limited.</p>
          <div className='text-center xl:mt-5 mt-1'>
            <h3 className='text-theme xl:text-2xl lg:text-xl font-medium'>Tinder + Meetup =  Kumele</h3>
            <p>Kumele, the only hobby meetup you will ever need! Get matched in 48 hours. Click "Be a beta tester ". Give valuable feed back and get special discounts and rewards on launch. Join now, beta acceptance is limited.</p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Slider3;