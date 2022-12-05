import React from 'react'
import Investment from './Investment'
import { InvestDB } from './utils/InvestmentDB'

function Leftpart() {
  return (
    <div className='col-span-2 min-h-[90vh] border-r  items-start justify-start  flex flex-col w-full'>
      {/*Top Section*/}
      <div className='w-full justify-start items-start flex flex-col px-12 pt-12 pb-6'>
        <h1 className='font-bold text-xl xl:text-2xl pb-2'>My Card</h1>
        <p>Find all your investement information on a card </p>
        <div className='flex flex-col items-start justify-start px-6 pt-8 pb-4 bg-[#89F8B7] mt-6 w-full'>
          <h1>Mohamed El Hadjaoui</h1>
          <h1 className='text-2xl  xl:text-4xl font-bold py-6'>$900,985,044</h1>
        </div>
        <div className='bg-black py-4 px-8 w-full items-start justify-between flex shadow-2xl shadow-emerald-200'>
          <span className='flex flex-col items-start justify-start text-white'>
            <h1 >Card Number</h1>
            <h3 >**** **** **** 3711</h3>
          </span>
          <span className='flex flex-col items-start justify-start text-white'>
            <h1 >CVC</h1>
            <h3 >371</h3>
          </span>
        </div>
      </div>
      {/*Bottom Section*/}
      <div className='w-full flex items-start justify-start flex-col px-12 py-6'>
        <h1 className='font-bold text-xl xl:text-2xl pb-2'>Recent Investment</h1>
        <div className='w-full space-y-5 overflow-y-auto max-h-[400px] py-6'>
          {InvestDB.map((item) => (
            <Investment item={item}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Leftpart

