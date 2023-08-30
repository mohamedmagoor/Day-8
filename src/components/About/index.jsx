import React from 'react'
import Heading from '../Heading'
import './index.css'
export default function About() {
 

  return (
    <>
    <section className='py-5 bg-green vh-100'>
                <div className="h-100 d-flex justify-content-center align-items-center">
                <div className=''>
                  <div>
                  <Heading title='About' bgColor='bg-white' textColor='text-white'/>
                  </div>
                  <div className="container">
                    <div className="row text-start" >
                      <div className="col-lg  ">
                        <div className="about-p ms-auto text-white">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi inventore tempora velit quaerat consequuntur dolor esse quo voluptate dolorem blanditiis recusandae nobis alias voluptatem assumenda, unde quam saepe provident itaque.</p>
                        </div>
                      </div>
                      <div className="col-lg  ">
                        <div className="about-p me-auto text-white">
                       <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta voluptates delectus vero cumque eveniet, exercitationem eius deserunt omnis quod, perferendis repellendus repudiandae nesciunt velit at, molestiae architecto dolorum. Itaque, iusto!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
            </section>

    </>
  )
}
