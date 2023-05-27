import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className='bg-wh-900 text-wh-50 py-10 px-10'>
            <div className='justify-between mx-auto gap-16 sm:flex '>
                {/*First Column */}

                <div className='mt-16 basis-1/2 sm:mt-0'>
                    <h4 className='font-bold'>THE AI BLOG</h4>
                    <p className='my-5'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500
                    </p>
                    <p>The AI blog All Rights Reserved</p>
                </div>
                {/* Second Column */}

                <div className='mt-16 basis-1/4 sm:mt-0'>
                    <h4 className='font-bold'>Links</h4>
                    <p className='my-5'>Virtute Spiritus</p>
                    <p className='my-5'>Virtute Spiritus</p>
                    <p >Virtute Spiritus</p>
                </div>

                {/*Third Column */}

                <div className='mt-16 basis-1/4 sm:mt-0'>
                    <h4 className='font-bold'>Contacts Us</h4>
                    <p className='my-5'>- 1808 -</p>
                    <p className='my-5'>- 1808 -</p>
                    <p>- 1808 -</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer