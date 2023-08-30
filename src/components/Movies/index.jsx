import React from 'react'
import Axios from 'axios'
import { useEffect, useState } from 'react'
import MovieCards from '../MovieCards';
import Loading from '../Loading/Loading';

export default function Movies() {
  let [trendingMovies, setTrendingMovies] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  let apikey = 'f1aca93e54807386df3f6972a5c33b50';
  async function apiReceive(pageNumber) {
    let { data } = await Axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&page=${pageNumber}`)
    data = data.results
    setTrendingMovies(data)
    setIsLoading(false)
  }

  useEffect(() => {
    apiReceive(1)
  }, [])
  const paginate = new Array(10).fill('iti').map((ele,i)=>i+1);
  function pagination(page){
    apiReceive(page)
  }
  return (
    <>
      <section className='bg-green mt-5 py-5'>
        <div className="container">
          <div className="row gy-3">
            {isLoading == false ? trendingMovies.map((trendingMovie, index) => <MovieCards title={trendingMovie.title} imgSrc={trendingMovie.poster_path} id={trendingMovie.id} key={index} />) : <Loading />}
          </div>
          <nav aria-label="Page navigation example" className='d-flex justify-content-center pt-5'>
                        <ul className="pagination">
                            {paginate.map((ele)=>(
                              <li className="page-item"key={ele} onClick={()=>pagination(ele)} ><a className="page-link">{ele}</a></li>
                            ))}
                        </ul>
          </nav>
        </div>
      </section>



    </>
  )
}
