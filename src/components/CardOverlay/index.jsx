import React from 'react'
import Heading from '../Heading'
import './index.css'
export default function CardOverlay({ imgSrc, title ,index}) {
    return (
        <>
            <div className='portfolio-overlay rounded  d-flex justify-content-center align-items-center'>
                <div>
                <i type="button" className="fa-solid fa-plus text-white fa-5x" data-bs-toggle="modal" data-bs-target={"#exampleModal"+index+1}></i>
                    <div className="modal fade " id={"exampleModal"+index+1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-xl">
                        <div className="modal-content">
                            <div className="d-flex justify-content-between">
                                <div></div>
                                <i type="button" className="fa-solid fa-xmark m-2 fa-3x text-danger p-2" data-bs-dismiss="modal" aria-label="Close"></i>
                            </div>
                            <div className="modal-body py-4 text-center">
                                <div className="w-50 m-auto">
                                    <Heading title={title}/>
                                    <div className='my-3'><img src={imgSrc} alt="" className='w-100 rounded' /></div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro accusamus in maxime, voluptate dignissimos vitae vero sit earum assumenda delectus amet consequuntur rerum excepturi autem! Aut nemo fugiat perspiciatis recusandae!</p>
                                </div>
                                <button type="button" className="btn bg-green text-white fs-4" data-bs-dismiss="modal">Close</button>

                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
