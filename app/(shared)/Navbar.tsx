import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <header className='mb-5'>
        <nav className='flex justify-between items-center w-full bg-wh-900  text-wh-10 px-10 py-3'>
            <div className='hidden sm:block'>
                social links
            </div>
        </nav>
    </header>
  )
}

export default Navbar