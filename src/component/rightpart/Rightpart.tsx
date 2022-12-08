/**
 * @file RightPart.tsx
 * @author Mohamed El Hadjaoui
 * @brief 
 * @version 0.1
 * @date 2022-12-8
 * 
 * @copyright Copyright (c) 2022
 * 
 */



import React from 'react'

import { BanknotesIcon, CreditCardIcon } from '@heroicons/react/24/outline';

type WidgerProps =
  {
    icon: JSX.Element,
    title: string,
    price: string

  }

function Rightpart() {
  return (
    <div className='col-span-3 flex  items-start justify-start w-full pt-6 pb-6 px-6 '>
      {/*Top Section */}
      <div className='md:flex  items-center justify-center w-full lg:space-y-0  space-y-4
       lg:space-x-8 px-6'>
        <Widget title='On Time' price='120.05' icon={<BanknotesIcon className='widget-icon' />} />
        <Widget title='On Hold' price='897.05' icon={<CreditCardIcon className='widget-icon' />} />
        <Card />
      </div>
      {/*Chart*/}
      <div>
        
      </div>
    </div>
  )
}


const Widget = ({ icon, title, price }: WidgerProps) => {
  return (
    <div className='flex flex-col items-center justify-center space-y-6 w-full '>
      <span className='rounded-full shadow-lg py-4 px-4 shadow-gray-300 flex items-center justify-center'>
        {icon}
      </span>
      <span className='items-center justify-center flex flex-col'>
        <h3 >{title}</h3>
        <h1 className='font-bold text-lg w-full'>$ {price}</h1>
      </span>
    </div>
  )
}


export const Card = () => {
  return (
    <div className=' justify-between items-center pt-6  flex flex-col w-full'>
      <span className='flex flex-col items-center justify-center py-6  bg-[#BFFA00] w-full '>
        <h3 className='text-center'>Mohamed El Hadjaoui</h3>
        <h1 className='text-lg 2xl:text-3xl text-black font-bold py-5'>$900,985,044</h1>
      </span>
      <div className='bg-black w-full items-center justify-center flex shadow-2xl py-3 text-white shadow-[#BFFA00]'>
          <h1 >Withdraw Earnings</h1>
      </div>
    </div>
  )
}



export default Rightpart