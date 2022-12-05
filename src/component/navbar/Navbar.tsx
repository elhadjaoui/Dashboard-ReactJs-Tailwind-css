import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { ActiveTabState } from '../../atoms/ActiveTabState'
import { navLinks } from './utils/NabDB'



type NavItemPorp =
  {
    link: {
      id: number
      icon: JSX.Element
      title: string
    }

  }

const Navbar = () => {
  return (
    <nav className='col-span-2 border-r border-gray-200 min-h-[90vh]
     w-full  pt-8 px-1 flex flex-col items-start justify-between'>
      <div className='space-y-8 w-full'>
        {
          navLinks.slice(0, 4).map((link) => (
            <NavItem link={link} />
          ))
        }
        <div className='w-full border-t border-gray-200'></div>
        {
          navLinks.slice(4).map((link) => (
            <NavItem link={link} />
          ))
        }
      </div>
      <div className='lg:flex hidden flex-col items-center justify-center p-4 space-y-4'>
          <h1 className='text-xl w-full font-medium'> 
            Grow Your <br /> Saving Now
          </h1>
          <p> Pick an investement strategy that reflects your goals</p>
          <button className='w-full py-2 px-3 bg-black text-white'>Becom a Pro</button>
      </div>
    </nav>
  )
}


function NavItem({ link }: NavItemPorp) {
  const [activeNacItem, setActiveNavItem] = useRecoilState(ActiveTabState)
  console.log(activeNacItem);
  
  return (
    <div onClick={()=>
    {
      setActiveNavItem(link.id)
    }} key={link.id} className={`w-full flex items-center justify-start space-x-8 px-5 cursor-pointer
                group hover:border-gray-900 border-l-4 border-transparent ${activeNacItem === link.id && "border-gray-900"}  `}>
      <span> {link.icon} </span>
       <h1 className={`text-gray-600 group-hover:text-black  lg:flex hidden ${activeNacItem === link.id && "text-black"}`}>{link.title} </h1>
    </div>
  )
}

export default Navbar