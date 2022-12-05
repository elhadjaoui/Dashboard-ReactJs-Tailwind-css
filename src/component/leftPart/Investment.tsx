import React from 'react'

type InvestmentProps = {
    item :{
        id:number,
        title: string,
        desc: string,
        price: string,
        upOrDown: string,
        percent: string,
        icon: JSX.Element,
    }
}

function Investment({item}: InvestmentProps) {
  return (
    <div className=' flex items-center justify-between py-2 px-2' >
        {/* Icon + Text*/}
        <div className='flex items-center justify-center space-x-4 w-full'>
            <div className='bg-[#DBEEF4] rounded-full'>
            <span> {item.icon}</span>
            </div>
            <div className='w-full space-y-1'>
                <h1 className='font-bold'>{item.title}</h1>
                <h3 className='text-sm'>{item.desc}</h3>
            </div>
        </div>
        {/* Price + Percent*/}
        <div className=' w-full flex flex-col items-end justify-end py-4 '>
                <h1 className='font-bold'> ${item.price}</h1>
                <h1 className={`${item.upOrDown === 'up' ? 'text-red-600' : 'text-green-600'}`}>{item.percent}</h1>
            </div>
    </div>
  )
}

export default Investment