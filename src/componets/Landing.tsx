import { FiFacebook, FiLinkedin, FiYoutube, FiInstagram, FiStar } from 'react-icons/fi';

import Video from '../assets/bg.mp4'

export const Landing = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
        {/* BG video */}
        <video src={Video} 
        autoPlay
        loop
        muted
        className='absolute h-full top-0 object-cover z-[-1]'
        ></video>
        {/* Social Icons */}
        <div className="absolute left-3 flex-col gap-y-4 text-grey-50">
            <a href='#'><FiFacebook/></a>
            <a href='#'><FiLinkedin/></a>
            <a href='#'><FiYoutube/></a>
            <a href='#'><FiInstagram/></a>
        </div>
        {/* Hero */}
        <div className="flex flex-col items-center gap-y-4 text-gray-700">
            <h1>
                <span className='text-2xl flex items-center gap-x-3 font-normal'>Hi! <FiStar/></span>
                <span className='text-5xl font-medium uppercase sm:text-3xl'> I am a Designer</span>
                <button className='block w-24 bg-white mt-5 text-gray font-normal px-2 py-1 border border-gray-600 rounded-2xl hover:bg-gray-100 transition-colors'> Hire me!</button>
            </h1>
        </div>
    </div>
  )
}
