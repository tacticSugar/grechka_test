import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import CardList from '../../components/CardList/CardList'
import Nav from '../../components/Nav/Nav'
import { getFilms } from '../../redux/filmsSlice'
import { AppDispatch, useAppSelector } from '../../redux/store'
import styles from './Rated.module.scss'

function Rated() {
  const { films, status, error } = useAppSelector((state) => state.films)

  const { rate } = useAppSelector((state) => state.rate)
  const rateIds = rate.map((item) => item.id)

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    if (status === 'none') {
      dispatch(getFilms())
    }
  }, [status, dispatch])

  if (error) {
    return (
      <div className={styles.error}>
        Возникла ошибка... {error.message}
        <div>{error.stack}</div>
      </div>
    )
  }
  if (status === 'pending' || status === 'none')
    return <div className={styles.loader}>Загрузка...</div>

  const filtredFilms = films.filter((film) => rateIds.includes(film.id))
  return (
    <div>
      <Nav />
      <CardList films={filtredFilms} />
    </div>
  )
}
export default Rated
