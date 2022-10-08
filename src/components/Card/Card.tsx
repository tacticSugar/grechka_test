import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addFavorite } from '../../redux/favoriteSlice'
import { useAppSelector } from '../../redux/store'
import { Film } from '../CardList/CardList'
import ModalRate from '../ModalRate/ModalRate'
import Stars from '../ModalRate/Stars'
import styles from './Card.module.scss'

interface CardProps {
  film: Film
}

function Card({ film }: CardProps) {
  const { rate } = useAppSelector((state) => state.rate)
  const currentRate = rate.find((item) => item?.id === film.id)
  const [showModal, setShowModal] = useState(false)
  const { favorite } = useAppSelector((state) => state.favorite)

  const { id, name, description, src } = film
  const isFav = favorite.includes(id)
  const favBtnText = isFav ? 'Убрать из избранного' : 'В избранное'

  function handleClickRate() {
    setShowModal(true)
  }

  function handleClose() {
    setShowModal(false)
  }

  const dispatch = useDispatch()
  function handleClickFav() {
    dispatch(addFavorite(id))
  }

  const rateBtnText = !!currentRate ? 'Изменить' : 'Оценить'

  let rating
  if (currentRate) {
    rating = Math.round(
      (currentRate.plot + currentRate.camera + currentRate.actor) / 3
    )
  }
  console.log(rating, film.name)

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <img className={styles.card__image} src={src} alt="cart-img" />
        <div className={styles.card__content}>
          <h1 className={styles.card__title}>{name}</h1>
          {rating !== undefined && (
            <div className={styles.card__rate}>
              <div className={styles.card__fixhehe}>Ваша оценка: </div>
              <Stars value={rating} key={rating} />
            </div>
          )}
          <p className={styles.card__description}>{description}</p>
          <div className={styles.card__buttons}>
            <button
              className={styles.card__buttons_rate}
              onClick={handleClickRate}
            >
              {rateBtnText}
            </button>

            <button
              className={styles.card__buttons_fav}
              onClick={handleClickFav}
            >
              {favBtnText}
            </button>
          </div>
        </div>
        {showModal && <ModalRate id={id} onClose={handleClose} />}
      </div>
    </div>
  )
}

export default Card
