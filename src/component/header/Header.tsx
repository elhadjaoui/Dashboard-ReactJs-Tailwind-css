import React from 'react';
import { MagnifyingGlassIcon, CpuChipIcon, UserCircleIcon, BeakerIcon, BellIcon } from '@heroicons/react/24/outline';

function Header() 
{
  return (
    /*NavBar*/
    <div  className='bg-[#F0F5F5] w-full py-6 items-center justify-between flex px-12  '>
      {/*Input*/}
      <div className='w-full lg:flex hidden space-x-4 items-center justify-start py-2'>
        <MagnifyingGlassIcon className='w-4 h-4'></MagnifyingGlassIcon>
        <input type="text" placeholder='Search anything' className='bg-transparent outline-none' />
      </div>
      {/*Logo*/}
      <div className='w-full flex  space-x-4 items-center lg:justify-center py-2'> 
        <CpuChipIcon className='w-6 h-6'></CpuChipIcon>
        <h1 className='text-xl text-gray-900 font-medium'  >Dashboard</h1>
      </div>
      {/*Icons*/}
      <div className='w-full flex  space-x-4 items-center justify-end py-2'>

        {/* header-icon is a custom class*/}
        <BellIcon  className='header-icon'></BellIcon> 
        <UserCircleIcon  className='header-icon'></UserCircleIcon>
      </div>
    </div>
  )
}

export default Header



