import React from 'react'

type Props = {}

const Trending = (props: Props) => {
  return (
    <section className='pt-3 pb-10'>
        <div className='flex items-center gap-3'>
            <div className='bg-wh-900 py-2 px-8 text-wh-10 text-sm font-bold font-opensans'>
                TRENDING
            </div>
            <p className='text-sm'>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
             standard dummy text ever since the 1500s
            </p>
        </div>
        <div className='sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px] my-3'>
            <div className='col-span-2 row-span-2 bg-wh-500'></div>
            <div className='col-span-2 row-span-1 bg-wh-500'></div>
            <div className='col-span-1 row-span-1 bg-wh-500'></div>
            <div className='col-span-1 row-span-1 bg-wh-500'></div>
        </div>
    </section>
  )
}

export default Trending