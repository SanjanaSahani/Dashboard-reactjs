import React from 'react'

function Section() {
  return (
    <div className='flex mt-2 '>

    <div className='flex bg-white  rounded-lg'>
      <img className='w-18 h-16 m-2' src="./images/wages.png" alt="" />
      <div className='m-2'>
        <p className='text-slate-400 text-xs'>Earning</p>
        <h3 className='font-bold text-xl'>$198k</h3>
        <p className='text-sm font-medium flex'><span><img className='w-4 h-4' src="./images/top-up.png" alt="" /></span><span className='text-green-500'>37.8%</span> this month</p>
      </div>
    </div>

    <div className='flex bg-white rounded-lg ml-14'>
      <img className='w-18 h-16 m-2' src="./images/planning.png" alt="" />
      <div className='m-2'>
        <p className='text-slate-400 text-xs'>Orders</p>
        <h3 className='font-bold text-xl'>$2.4k</h3>
        <p className='text-sm font-medium flex'><span><img className='w-4 h-4' src="./images/down.png" alt="" /></span><span className='text-red-700'>2%</span> this month</p>
      </div>
    </div>

    <div className='flex bg-white rounded-lg ml-14'>
      <img className='w-18 h-16 m-2' src="./images/wallet.png" alt="" />
      <div className='m-2'>
        <p className='text-slate-400 text-xs'>Balance</p>
        <h3 className='font-bold text-xl'>$2.4k</h3>
        <p className='text-sm font-medium flex'><span><img className='w-4 h-4' src="./images/down.png" alt="" /></span><span className='text-red-700'>2%</span> this month</p>
      </div>
    </div>

    <div className='flex bg-white rounded-lg ml-14'>
      <img className='w-18 h-16 m-2' src="./images/sale.png" alt="" />
      <div className='m-2'>
        <p className='text-slate-400 text-xs'>Total Sales</p>
        <h3 className='font-bold text-xl'>$89k</h3>
        <p className='text-sm font-medium flex'><span><img className='w-4 h-4' src="./images/top-up.png" alt="" /></span><span className='text-green-500'>11%</span> this month</p>
      </div>
    </div>

  </div>
  )
}

export default Section