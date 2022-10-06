import { useState, useEffect } from 'react'
import Card from '../Card/Card'
import styles from './CardList.module.scss'

function CardList() {
  const [films, setFilms] = useState([])
  const url = 'https://run.mocky.io/v3/f41356c2-e1ee-4fe3-aad7-62e2c5bb68a4'
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url)
      const data = await response.json()
      const dataString = JSON.stringify(data.data)
      setFilms(JSON.parse(dataString))
    }

    fetchData()
  }, [])

  return (
    <div className={styles.container}>
      {films.map((film) => {
        return (
          <Card
            id={film.id}
            src={film.src}
            name={film.name}
            description={film.description}
            key={film.id}
          />
        )
      })}
    </div>
  )
}

export default CardList
