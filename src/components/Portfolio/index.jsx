import React from 'react'
import './index.css'
import Heading from '../Heading'
import CardList from '../CardList'


export default function Portfolio() {
    let cardDetails = [
        {
        title:'LOG CABIN',
        imgSrc:'images/cabin.png'},
        {
        title:'TASTY CAKE',
        imgSrc:'images/cake.png'},
        {
        title:'CIRCUS TENT',
        imgSrc:'images/circus.png'},
        {
        title:'CONTROLLER',
        imgSrc:'images/game.png'},
        {
        title:'LOCKED SAFE',
        imgSrc:'images/safe.png'},
        {
        title:'SUBMARINE',
        imgSrc:'images/submarine.png'},]
    return (<>
        <section className='h-100 py-5'>
            <div className='container'>
               <Heading title='Portfolio'/>
                <div className="row gy-3">
                 {cardDetails.map((cardDetail,index)=>(
                   <CardList key={index+1} imgSrc={cardDetail.imgSrc} title={cardDetail.title}  index={index}/>
                   ))}

                </div>
            </div>
        </section>
    </>
    )
}
