import { useState } from 'react'
import globalContext from './context/context'
import Main from './components/main/Main'
import Header from './components/header/Header'

function App() {

  const api_key = '2975762f0c91d8d64c2e7882335dc0ea'

  const [filmList, setFilmList] = useState([])
  const [seriesList, setSeriesList] = useState([])
  const [query, setQuery] = useState('')

  function fetchData() {
    axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key,
        query
      }
    })
      .then(res => {
        console.log(res.data)
        setFilmList(res.data, result)
      }).catch(err => {
        console.error(err)
        setFilmList([])
      })

    axios.get('https://api.themoviedb.org/3/search/tv', {
      params: {
        api_key,
        query
      }
    })
      .then(res => {
        console.log(res.data)
        setSeriesList(res.data, result)
      }).catch(err => {
        console.error(err)
        setSeriesList([])
      })
  }

  <globalContext.Provider value={filmList, seriesList, query, setQuery, fetchData}>
    <Header />
    <Main />
  </globalContext.Provider>

}

export default App
