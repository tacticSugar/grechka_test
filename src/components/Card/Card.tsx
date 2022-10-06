import styles from './Card.module.scss'

interface CardProps {
  id: number
  src: string
  name: string
  description: string
}

function Card({ id, name, description, src }: CardProps) {
  return (
    <div className={styles.card}>
      <img className={styles.card__img} src={src} alt="cart-img" />
      <div className={styles.card__textContainer}>
        <h1 className={styles.card__title}>{name}</h1>
        <p className={styles.card__description}>{description}</p>
        <div className={styles.card__buttons}>
          <button className={styles.card__buttons_rate}>Оценить</button>
          <button className={styles.card__buttons_fav}>В избранное</button>
        </div>
      </div>
    </div>
  )
}

export default Card
