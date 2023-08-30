import React from 'react'
 
export default function CardList({imgSrc,title ,index}) {
    
  return (
    <>
    <div className='col-md-4'>
        <div className="portfolio-cards position-relative overflow-hidden">
            <img src={imgSrc} alt="" className='w-100 rounded' />
            
          </div>
    </div>
    
    </>
  )
}
