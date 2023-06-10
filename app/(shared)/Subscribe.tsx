import React from 'react'

const Subscribe = () => {
  return (
    <div className='text-center bg-wh-10 px-5 py-10'>
        <h4 className='font-semibold '>Subscribe to our Newsletter</h4>
        <p className='text-wh-500 my-3 w-5/6 mx-auto'>
            Enter email addres to get top news and great 
        </p>
        <input
            className='text-center w-5/6 min-w-[100px] px-5 py-2 bordeer-2'
            placeholder='Enter Email Addres'
        />
        <button className='bg-accent-red text-wh-10 font-smibold w-5/6 min-width-[100px] py-2 px-5 mt-3 '>
            SUBSCRIBE
        </button>
    </div>
  )
}

export default Subscribe