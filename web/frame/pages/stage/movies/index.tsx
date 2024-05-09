import { useEffect, useState } from 'react'
import { useFetch } from '@hooks'
interface ListItem {
  title: string
  id: number
  overview: string
  backdrop_path: string
  poster_path: string
}

const HomeWrap = () => {
  const imgUrl = 'https://image.tmdb.org/t/p/original'
  const [list, setList] = useState<ListItem[]>([])
  const [page, setPage] = useState<number>(1)
  const [total, setTotal] = useState<number>(0)
  useEffect(() => {
    fetch()
    document.getElementsByClassName('m-content')[0]?.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [page])

  const fetch = () => {
    useFetch.get('/api/tmdb/discover/movie', { params: { page, language: 'zh-CN' } }).then(({ data }) => {
      setList(data.results)
      setTotal(data.total_pages)
    })
  }
  const pageChange = (type: string) => {
    if (type === 'prev') {
      if (page !== 1) {
        setPage(page - 1)
      }
    } else {
      if (page !== total) {
        setPage(page + 1)
      }
    }
  }
  return (
    <main className="m-home">
      <div className="m-home-wrap">
        <ul className='m-movie-list'>
          {
            list.map(el => {
              return (
                <li className='m-movie-item' key={el.id}>
                  <img className='m-movie-pic' width={300} src={`${imgUrl}/${el.backdrop_path}`} alt="" />
                  <div className='m-movie-info'>
                    <p className='m-movie-title'>{el.title}</p>
                    <p className='m-movie-over'>{el.overview}</p>
                  </div>
                </li>
              )
            })
          }
        </ul>
        <div className='m-tool'>
          <button onClick={() => pageChange('prev')}>Prev</button>
          <button onClick={() => pageChange('next')}>Next</button>
        </div>
      </div>
    </main>
  )
}

export default HomeWrap
