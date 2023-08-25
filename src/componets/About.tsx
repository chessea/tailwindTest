
import myPic from '../assets/myPic.jpg'
import cv from '../assets/nick-cv.pdf'
import { FiFileText } from 'react-icons/fi'



export const About = () => {



    return (
        <div className='flex justify-around gap-x-5 py-20 md:flex-col md:items-center md:gap-y-10'>
            {/* Designer Image */}
            <img src={myPic} alt="Designer" className='w-[300px] rounded-md sm:w-[270px]'></img>
            {/* About Me */}
            <div className="w-1/2 flex flex-col justify-between md:gap-y-8">
                <div className="">
                    <h2 className='text-2xl font-bold uppercase mb-3'> I am UX/UI Designer</h2>
                    <p className='text-xs leading-5 first-letter:ml-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore possimus at beatae quod quos earum facere voluptates veritatis tenetur. Fuga expedita reiciendis suscipit mollitia architecto quae, sit dicta neque distinctio! Iusto magnam quos beatae adipisci necessitatibus possimus repellat incidunt odit dicta. Itaque, unde temporibus iure, saepe porro exercitationem esse quasi modi non maiores aut hic numquam animi, dolor corporis laboriosam.</p>
                </div>
                {/* Download */}
                <a
                    href={cv}
                    download=""
                    className='w-[160px] h-[30px] bg-slate-300 flex justify-around items-center rounded-sm'
                >
                    <span>Download cv</span>
                    <FiFileText />
                </a>
                {/* INFO */}
                <div className="flex justify-between text-sm sm:flex-col sm:gap-x-3">
                    <ul className='font-semibold uppercase'>
                        <li>Name:</li>
                        <li>age:</li>
                      
                    </ul>
                    <ul>
                        <li>Franco Rojas</li>
                        <li>32</li>
                  
                    </ul>
                    <ul className='font-semibold uppercase'>
                        <li>Email: </li>
                        <li>Address: </li>
                  
                    </ul>
                    <ul>
                        <li>franco@mail.com </li>
                        <li>Chile, Maipu </li>
                  
                    </ul>
                </div>

            </div>
        </div>

    )
}
