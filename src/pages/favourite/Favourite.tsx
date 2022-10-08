import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import CardList from '../../components/CardList/CardList'
import ModalRate from '../../components/ModalRate/ModalRate'
import Nav from '../../components/Nav/Nav'
import { getFilms } from '../../redux/filmsSlice'
import { AppDispatch, useAppSelector } from '../../redux/store'
import styles from './Favourite.module.scss'

function Favourite() {
  const { films, status, error } = useAppSelector((state) => state.films)
  const { favorite } = useAppSelector((state) => state.favorite)

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

  const filtredFilms = films.filter((film) => favorite.includes(film.id))
  return (
    <div>
      <Nav />
      <CardList films={filtredFilms} />
    </div>
  )
}
export default Favourite
