import Card from '../Card/Card'
import styles from './CardList.module.scss'

export type Film = {
  id: number
  src: string
  name: string
  description: string
}
export type Props = {
  films: Film[]
}

function CardList(props: Props) {
  return (
    <div className={styles.wrapper}>
      {props.films.map((film) => {
        return <Card film={film} key={film.id} />
      })}
    </div>
  )
}

export default CardList
