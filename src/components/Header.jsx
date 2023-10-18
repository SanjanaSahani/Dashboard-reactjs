import React from 'react'

function Header() {
  return (
    <div className='flex mt-2 ml-1'>
            <h4 className='text-black font-semibold text-xl mr-80 flex'>Hello Sanjna<span><img className='w-6 h-6' src="./images/wave.png" alt="" /></span>,</h4>

            <div className='flex ml-80 h-8 rounded-md bg-white'>
              <img className='w-6 h-6' src="./images/search-icon.png" alt="" />
              <input className='pl-1 rounded-md' type="text" placeholder='Search' />
            </div>
          </div>
  )
}

export default Header