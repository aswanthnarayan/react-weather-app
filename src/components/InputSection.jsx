import React from 'react'
import { BiSearch } from "react-icons/bi"
import { MdGpsFixed } from "react-icons/md"

const InputSection = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between text-white mb-3'>
      <div className='flex items-center gap-2 md:gap-4 mb-3 md:mb-0'>
        <input className='p-2 rounded-md focus:outline-none text-gray-500 w-full md:w-auto' type="text" placeholder='Search by city...' />
        <BiSearch size={30} color='white' className='hover:scale-110' />
      </div>
      <div className='flex items-center gap-8'>
        <MdGpsFixed size={30} color='white' className='hover:scale-110' />
        <div className='flex justify-around text-2xl'>
          <p>C</p>
          <p className='mx-4'>|</p>
          <p>F</p>
        </div>
      </div>
    </div>
  )
}

export default InputSection
