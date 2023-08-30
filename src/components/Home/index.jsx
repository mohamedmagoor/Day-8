import React from 'react'
import Heading from '../Heading'
import './index.css'

export default function Home() {
  return (
        <>
            <section className='vh-100 bg-green'>
                <div className='h-100 d-flex justify-content-center align-items-center'>
                  <div className='text-center'>
                  <img src="images/avataaars.svg" alt="" className='w-50' />
                  <Heading title='Portfolio' bgColor='bg-white' textColor='text-white'/>
                    <div>
                            <p className="p-main text-white fw-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
                    </div>
                  </div>
                </div>
            </section>
        </>
  )
}
