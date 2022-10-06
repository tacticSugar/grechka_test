import { useState, useEffect } from 'react'
import Card from '../Card/Card'

function CardList() {
  const [films, setFilms] = useState([])
  const url = 'https://run.mocky.io/v3/59f47e8e-2a09-48c3-8a1d-0af8e5817f7c'
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url)
      const data = await response.json()
      console.log(JSON.parse(data))
      setFilms(JSON.parse(data))
    }

    fetchData()
  }, [])

  return (
    <>
      {films.map((film) => {
        return (
          <Card
            id={film.id}
            src={film.src}
            name={film.name}
            description={film.description}
          />
        )
      })}
    </>
  )
}

export default CardList
