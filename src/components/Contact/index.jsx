import React, { useState } from 'react'
import Heading from '../Heading';


export default function Contact() {
   
    const [nValid ,setNValid] = useState(true);
    const [eValid ,setEValid] = useState(true);
    const [pValid ,setPValid] = useState(true);
    function emailValidation (e) {
        let Regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (Regex.test(e.target.value)==true) {
            setEValid(true)
        }
        else {
            setEValid(false)
        }
    }
    function nameValidation (e) {
        let regex = /^[a-zA-Z ]+$/;
        if (regex.test(e.target.value)==true)
        {
          setNValid(true)  
        }
        else {
            setNValid(false)  
        }
    }
    function phoneValidation (e) {
        let Regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        if (Regex.test(e.target.value)==true) {
            setPValid(true)
        }
        else {
            setPValid(false)
        }
    }

  return (
    <>
        <section className='py-4 my-3 vh-100 d-flex justify-content-center align-items-center'>
                
            <div className="container">
                <Heading title='CONTACT ME'/>
                    
                       
                <div className='w-50 mx-auto my-3'>
                    <input type="text" className='form-control border-0 rounded-0 border-bottom p-3 fs-4 my-3' onInput = {nameValidation} placeholder='Name'/>
                    {nValid?null:<li className='text-danger text-start my-2'>Name is not Valid</li>}
                    <input type="text" className='form-control border-0 rounded-0 border-bottom p-3 fs-4 my-3' onInput = {emailValidation} placeholder='Email Address'/>
                    {eValid?null:<li className='text-danger text-start my-2'>Email is not valid</li>}
                    <input type="tel" className='form-control border-0 rounded-0 border-bottom p-3 fs-4 my-3' onInput = {phoneValidation} placeholder='Phone'/>
                     {pValid?null:<li className='text-danger text-start my-2'>Phone is not valid</li>}
                    <textarea className='form-control rounded-0 border-0 border-bottom p-3 fs-4 my-3' placeholder='Message' rows={3}></textarea>
                     <button className='btn bg-green text-white fs-4'>Send</button>
                    <ul className='alert'>
                     </ul>
                </div>

            </div>
        </section>
    
    </>
  )
}
