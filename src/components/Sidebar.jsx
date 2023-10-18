import React from 'react'

function Sidebar() {
  return (
    <aside className='h-screen'>
    <nav className='h-full flex flex-col bg-blue-900 border-r shadow-sm'>
      <div className='p-4 pb-2 flex mb-4 items-center  hover:text-grey-100 '>
        <img className='w-8 text-white' src="./images/setting.png" alt="" />
        <h1 className='p-1 text-2xl text-white'> Dashboard </h1>
      </div>

      <ul>
        <li className='bg-blue-800 rounded-lg ml-2 mr-2 h-12'>
          <div className='p-2 pb-2 flex items-center '>
            <img className='w-6 text-white' src="./images/innovation.png" alt="" />
            <h1 className='text-xl ml-2 text-white'> Dashboard </h1>
          </div>
        </li>
        <li className=' hover:bg-blue-800 hover:rounded-lg hover:ml-2 hover:mr-2 hover:mt-1 hover:h-12'>
          <div className='p-4 pb-2 flex items-center  '>
            <img className='w-6 text-white' src="./images/supply-chain.png" alt="" />
            <h1 className='text-xl ml-2 text-white flex'> Product <span className='ml-24'><img className='w-4 h-4 ml-9 mt-2' src="./images/right-arrow.png" alt="" /></span> </h1>
          </div>
        </li>
        <li className=' hover:bg-blue-800 hover:rounded-lg hover:ml-2 hover:mr-2 hover:mt-1 hover:h-12'>
          <div className='p-4 pb-2 flex items-center  hover:text-gray-100 '>
            <img className='w-6 text-white' src="./images/user.png" alt="" />
            <h1 className='text-xl ml-2 text-white flex'> Customers<span className='ml-24'><img className='w-4 h-4 ml-3 mt-2' src="./images/right-arrow.png" alt="" /></span> </h1>
          </div>
        </li>
        <li className=' hover:bg-blue-800 hover:rounded-lg hover:ml-2 hover:mr-2 hover:mt-1 hover:h-12'>
          <div className='p-4 pb-2 flex items-center  hover:text-gray-100 '>
            <img className='w-6 text-white' src="./images/profits.png" alt="" />
            <h1 className='text-xl ml-2 text-white flex'> Income <span className='ml-24'><img className='w-4 h-4 ml-10 mt-2' src="./images/right-arrow.png" alt="" /></span></h1>
          </div>
        </li>
        <li className=' hover:bg-blue-800 hover:rounded-lg hover:ml-2 hover:mr-2 hover:mt-1 hover:h-12'>
          <div className='p-4 pb-2 flex items-center  hover:text-gray-100 '>
            <img className='w-6 text-white' src="./images/promotions.png" alt="" />
            <h1 className='text-xl ml-2 text-white flex'> Promote <span className='ml-24'><img className='w-4 h-4 ml-7 mt-2' src="./images/right-arrow.png" alt="" /></span></h1>
          </div>
        </li>
        <li className=' hover:bg-blue-800 hover:rounded-lg hover:ml-2 hover:mr-2 hover:mt-1 hover:h-12'>
          <div className='p-4 pb-2 mb-8 flex items-center  hover:text-gray-100 '>
            <img className='w-6 text-white' src="./images/help.png" alt="" />
            <h1 className='text-xl ml-2 text-white flex' > Help<span className='ml-24'><img className='w-4 h-4 ml-16 mt-2' src="./images/right-arrow.png" alt="" /></span> </h1>
          </div>
        </li>
      </ul>

      <div className=' flex p-3 mt-32'>
        <div className='bg-blue-800 rounded-lg h-12 flex'>
          <img className='w-12 h-12 rounded-md p-2' src="./images/Rectangle 3 (2).png" alt="" />
          <div className={`flex justify-between items-center w-52 ml-3`}>
            <div className='leading-4 '>
              <h4 className='font-semibold text-white'>Evano</h4>
              <p className='text-white-100 text-sm flex '>Project Manager<span><img className='w-4 h-4 ml-16' src="./images/down-arrow.png" alt="" /></span></p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </aside>
  )
}

export default Sidebar