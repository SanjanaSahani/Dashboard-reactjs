import React from 'react'

function Footer() {
  return (
   
    <div className='bg-white h-52 rounded-md'>
    <div className='flex mt-4'>
      <h4 className='text-black font-semibold text-xl m-2 mr-40  flex '>Product sell</h4>

      <div className='flex ml-96 m-2 rounded-md bg-slate-200'>
        <img className='w-6 h-6' src="./images/search-icon.png" alt="" />
        <input className='pl-1 rounded-md bg-slate-200 text-slate-400' type="text" placeholder='Search' />
      </div>
      <div className='bg-slate-200 m-2 rounded-md ml-4 '>
        <p className='text-slate-400 text-xs m-2 flex'>Quarterly <span className='w-2 h-2 m-1 ml-2'><img src="./images/down-arrow.png" alt="" /></span></p>
      </div>
    </div>

    <div className='flex text-slate-400 text-xs ml-4'>
      <h6 className='mr-96'>Product Name</h6>
      <p className='ml-48'>Stock</p>
      <p className='ml-28'>Price</p>
      <p className='ml-20'>Total Sales</p>
    </div>
    <hr className='text-slate-400 h-54' />
    <div className='flex'>
      <div className='h-18 w-28 m-4 '><img className='rounded-md' src="./images/3d-abstract.jpg" alt="" /></div>
      <div className='m-4'>
        <h3 className='text-black font-semibold text-s'>Abstract 3D</h3>
        <p className='text-slate-400 text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <p className='ml-48 mt-4  text-black text-xs font-semibold'> 32 in Stock</p>
      <p className='ml-20 mt-4  text-black text-xs font-bold'>$ 45.99</p>
      <p className='ml-20 mt-4  text-slate-400 text-xs font-semibold' >20</p>
    </div>

    <div className='flex'>
      <div className=' ml-4 '><img className='h-10 w-28 rounded-md' src="./images/space.jpg" alt="" /></div>
      <div className='ml-8'>
        <h3 className='text-black font-semibold text-s'>Sarphens Illustration</h3>
        <p className='text-slate-400 text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <p className='ml-52 mt-4  text-black text-xs font-semibold'> 32 in Stock</p>
      <p className='ml-20 mt-4  text-black text-xs font-bold'>$ 45.99</p>
      <p className='ml-20 mt-4  text-slate-400 text-xs font-semibold' >20</p>
    </div> 
  </div>
  )
}

export default Footer