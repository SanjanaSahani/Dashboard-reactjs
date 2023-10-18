import React from 'react'

function Main() {
  return (
    <div className='flex mt-4'>
    <div className='bg-white rounded-md mr-10'>
      <div className='flex'>
        <div className='ml-6 mr-20 mt-2'>
          <h3 className='font-bold text-xl'>Overview</h3>
          <p className='text-slate-400 text-xs'>Monthly Earning</p>
        </div>
        <div className='bg-slate-200 rounded-md h-8 m-4 ml-80'>
          <p className='text-slate-400 text-xs m-2 flex'>Quarterly <span className='w-2 h-2 m-1 ml-2'><img src="./images/down-arrow.png" alt="" /></span></p>
        </div>
      </div>

      <div className=' flex mt-2'>
        <div className='mt-14'>
          <div className='bg-purple-200 rounded-md w-8 h-20 ml-6'></div>
          <h4 className='font-bold mt-2 ml-4'>Jan</h4>
        </div>
        <div className='mt-20'>
          <div className='bg-purple-200 rounded-md w-8 h-16 ml-4'></div>
          <h4 className='font-bold ml-4 mt-1'>Feb</h4>
        </div>
        <div className='mt-2'>
          <div className='bg-purple-200 rounded-md w-8 h-32 ml-4'></div>
          <h4 className='font-bold ml-4 mt-2'>Mar</h4>
        </div>
        <div className='mt-10'>
          <div className='bg-purple-200 rounded-md w-8 h-24 ml-4'></div>
          <h4 className='font-bold ml-4 mt-2'>Apr</h4>
        </div>
        <div className='mt-7'>
          <div className='bg-purple-200 rounded-md w-8 h-28 ml-4'></div>
          <h4 className='font-bold ml-4 mt-2'>May</h4>
        </div>
        <div className='mt-20'>
          <div className='bg-purple-200 rounded-md w-8 h-16 ml-4'></div>
          <h4 className='font-bold ml-4 mt-1'>Jun</h4>
        </div>
        <div className='mt-9'>
          <div className='bg-purple-200 rounded-md w-8 h-28 ml-4'></div>
          <h4 className='font-bold ml-4 mt-1'>Jul</h4>
        </div>
        <div className='mt-0'>
          <div className='bg-purple-700 rounded-md w-8 h-36 ml-4 '></div>
          <h4 className='font-bold mt-1 ml-4'>Aug</h4>
        </div>
        <div className='mt-8'>
          <div className='bg-purple-200 rounded-md w-8 h-28 ml-4'></div>
          <h4 className='font-bold ml-4 mt-1'>Sep</h4>
        </div>
        <div className='mt-16'>
          <div className='bg-purple-200 rounded-md w-8 h-20 ml-4'></div>
          <h4 className='font-bold ml-4 mt-1'>Oct</h4>
        </div>
        <div className='mt-20'>
          <div className='bg-purple-200 rounded-md w-8 h-14 ml-4'></div>
          <h4 className='font-bold ml-4 mt-1'>Nov</h4>
        </div>
        <div className='mt-20'>
          <div className='bg-purple-200 rounded-md w-8 h-16 ml-4'></div>
          <h4 className='font-bold ml-4 mt-1'>Dec</h4>
        </div>
      </div>
    </div>



    <div className='bg-white rounded-md h-64 w-80 ml-4'>
      <div className='ml-6 mt-2'>
        <h3 className='font-bold text-xl'>Customers</h3>
        <p className='text-slate-400 text-xs'>Customers that buy products</p>
      </div>

      <div className='mt-4 ml-20'>
        <div className='bg-purple-200 rounded-full h-44 w-44'>
          <div className='bg-purple-200 rounded-full h-32 w-32 p-6 ml-4'>
            <div className='bg-pink-400 rounded-full h-28 w-28 '>
              <div className='p-6'><p className='text-xl text-black font-semibold flex'>65% <span><img className='w-4 h-6' src="./images/top-up.png" alt="" /></span></p>
                <p className='text-xs text-black '>Total New Customers</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Main