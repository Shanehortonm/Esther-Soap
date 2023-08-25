import React, {useState} from 'react'
import {RiMenu5Fill} from 'react-icons/ri'
export const Nav = () => {

  const [nav, setNav] = useState(false);

  const showNav = () => {
    setNav(!nav);
    if(!nav){
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'scroll'
    };
    
  };

  return (
    <div>
        <div className='absolute w-full flex justify-between p-4 items-center'>
          <h1 className='text-white font-bold text-2xl z-20'>Esther Soap</h1>
          <RiMenu5Fill onClick={showNav} className='z-20 text-white cursor-pointer' size={25}/>
          <div className={ 
            nav 
            ? 'ease-in duration-500 fixed text-gray-300 left-0 top-0 w-full h-full bg-black/90 px-4 py-7 flex-col z-10'
            : 'absolute top-0 h-screen left-[-100%] ease-in duration-300 z-10'}
            >
            <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
              <li className='font-bold text-3xl p-8 cursor-pointer'>Home</li>
              <li className='font-bold text-3xl p-8 cursor-pointer'>Products</li>
              <li className='font-bold text-3xl p-8 cursor-pointer'>Contact</li>
            </ul>
          </div> 
        </div>
    </div>
  )
}