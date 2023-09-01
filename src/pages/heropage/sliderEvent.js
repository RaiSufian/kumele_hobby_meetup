import React from 'react'

const SliderEvent = ({ name }) => {
    return (
        <div className='absolute z-20 xl:top-20 lg:top-16 md:top-6 top-1/3 md:-translate-y-0 -translate-y-1/2 w-full left-1/2 -translate-x-1/2 text-white text-center '>
            <h2 className='xl:text-5xl md:text-4xl  text-3xl  font-fredoka font-semibold' >{name}</h2>
            <div className='xl:mt-8 md:mt-3 mt-1'>
                <ul >
                    <li className='inline-block xl:-mr-9 lg:-mr-7 sm:-mr-5 -mr-3 relative z-40'>
                        <img src="/img/s1-side1.png" alt="img" className="xl:w-24 lg:w-20 md:w-16 w-14" />
                        <span className="lg:text-base text-sm">James</span>
                    </li>
                    <li className='inline-block xl:-mr-9 lg:-mr-7 sm:-mr-5 -mr-3 relative z-30'>
                        <img src="/img/s1-side2.png" alt="img" className="xl:w-24 lg:w-20 md:w-16 w-14" />
                        <span className="lg:text-base text-sm">Jermy</span>
                    </li>
                    <li className='inline-block xl:-mr-9 lg:-mr-7 sm:-mr-5 -mr-3 relative z-20'>
                        <img src="/img/s1-side3.png" alt="img" className="xl:w-24 lg:w-20 md:w-16 w-14" />
                        <span className="lg:text-base text-sm">Linda</span>
                    </li>
                    <li className='inline-block xl:-mr-9 lg:-mr-7 sm:-mr-5 -mr-3 relative z-10'>
                        <div className='relative z-20'>
                            <img src="/img/s1-side4.png" alt="img" className='relative z-10 xl:w-24 lg:w-20 md:w-16 w-14' />
                            <div className='z-0 absolute bg-white top-1/2 xl:left-full md:left-2/3 left-3/4 lg:left-3/4 md:w-40 w-32 -translate-y-1/2 -translate-x-24 text-black flex justify-end px-2 md:h-10 h-8 items-center md:gap-2 rounded-full'>
                                <span className='font-semibold md:text-base text-sm '>+20 Guest</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <path d="M14.0002 10C13.7442 10 13.4883 9.902 13.2933 9.707C12.9022 9.316 12.9022 8.684 13.2933 8.293L14.0002 7.586C14.3783 7.208 14.8802 7 15.4142 7H16.0003C16.0003 5.897 16.8973 5 18.0003 5V4C18.0003 2.897 18.8973 2 20.0003 2H21.0003C21.5523 2 22.0003 2.447 22.0003 3C22.0003 3.553 21.5523 4 21.0003 4H20.0003V5C20.0003 6.103 19.1033 7 18.0003 7C18.0003 8.103 17.1033 9 16.0003 9H15.4142L14.7072 9.707C14.5122 9.902 14.2563 10 14.0002 10Z" fill={` ${styleMode ? "white": "black"}`}  />
                                    <path opacity="0.35" d="M14.6952 16.305L7.69519 9.30497C7.30419 8.91397 6.67219 8.91397 6.28119 9.30497C5.94119 9.64497 5.91519 10.161 6.16819 10.549L3.09519 18.977C2.65719 20.178 3.82219 21.343 5.02319 20.905L13.4522 17.832C13.6172 17.94 13.7992 18.012 13.9892 18.012C14.2452 18.012 14.5012 17.914 14.6962 17.719C15.0852 17.329 15.0852 16.696 14.6952 16.305Z" fill={` ${styleMode ? "white": "black"}`}  />
                                    <path d="M17.5 22C18.3284 22 19 21.3284 19 20.5C19 19.6716 18.3284 19 17.5 19C16.6716 19 16 19.6716 16 20.5C16 21.3284 16.6716 22 17.5 22Z" fill={` ${styleMode ? "white": "black"}`}  />
                                    <path d="M21.5 11C22.3284 11 23 10.3284 23 9.5C23 8.67157 22.3284 8 21.5 8C20.6716 8 20 8.67157 20 9.5C20 10.3284 20.6716 11 21.5 11Z" fill={` ${styleMode ? "white": "black"}`}  />
                                    <path d="M3.5 9C4.32843 9 5 8.32843 5 7.5C5 6.67157 4.32843 6 3.5 6C2.67157 6 2 6.67157 2 7.5C2 8.32843 2.67157 9 3.5 9Z" fill={` ${styleMode ? "white": "black"}`}  />
                                    <path d="M14.5 4C15.3284 4 16 3.32843 16 2.5C16 1.67157 15.3284 1 14.5 1C13.6716 1 13 1.67157 13 2.5C13 3.32843 13.6716 4 14.5 4Z" fill={` ${styleMode ? "white": "black"}`}  />
                                    <path d="M6.499 2C5.671 2 5 2.672 5 3.5C5 4.328 5.672 5 6.5 5H7.289C8.234 5 9 5.766 9 6.711V8C9 8.552 9.448 9 10 9C10.552 9 11 8.552 11 8V6C11 3.791 9.209 2 7 2H6.499Z" fill={` ${styleMode ? "white": "black"}`}  />
                                    <path d="M22 16.501C22 17.329 21.328 18 20.5 18C19.672 18 19 17.328 19 16.5V15.711C19 14.766 18.234 14 17.289 14H16C15.448 14 15 13.552 15 13C15 12.448 15.448 12 16 12H18C20.209 12 22 13.791 22 16V16.501Z" fill={` ${styleMode ? "white": "black"}`}  />
                                </svg>
                            </div>
                            <div className='w-40'></div>
                        </div>
                        <p className="text-left px-2 md:px-3 lg:px-6 xl:px-8 lg:text-base text-sm">Olivia</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SliderEvent;