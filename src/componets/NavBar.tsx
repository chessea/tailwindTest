
import { useState } from 'react'
import { FiAlignRight, FiXCircle} from 'react-icons/fi'



export const NavBar = () => {

  const [nav, setNav] = useState<boolean>(false)

  const changeNav = () =>{
    setNav(!nav)
  }


  const [navColor, setNavColor] = useState<boolean>(false)

  const changeNavBarColor = ( )=> {
      if(window.screenY >= 10){
          setNavColor(true)

      }else{

        setNavColor(false)
      }
  }

  window.addEventListener("scroll", changeNavBarColor)

  return (
    <nav className={`fixed w-full flex justify-between items-center px-5 z-50 py-3 transition-colors duration-500 ${navColor && "bg-orange-100/80 shadow-md"}`}>
        {/* LOGO */}
      <a href="#" className='font-bold italic text-gray-600 text-xl z-20'>Franco Rojas</a>
      {/* Navigation */}
     <div className={`cursor-pointer flex gap-x-7 text-xs font-medium text-gray-600 sm:top-0 sm:left-0 sm:h-screen sm:w-full sm:bg-orange-100/95 sm:flex-col sm:items-center sm:justify-center sm:text-3xl z-10 ${nav ? "sm:fixed" : "sm:hidden"}`}>
        <a href="#" className='hover:underline'>
          Home
        </a>
        <a href="#" className='hover:underline'>
          About</a>
        <a href="#" className='hover:underline'>
          Skills</a>
        <a href="#" className='hover:underline'>
          Proyect</a>
        <a href="#" className='hover:underline'>
          Contact</a>
      
      </div>
      <div className="hidden sm:block cursor-pointer text-gray-600 text-2xl z-20"
        onClick={ changeNav}
      >
      { nav ? <FiXCircle/>: <FiAlignRight/> }  
      </div>

    </nav>
  )
}
