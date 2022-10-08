import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addRate } from '../../redux/rateSlice'
import { useAppSelector } from '../../redux/store'
import styles from './ModalRate.module.scss'

import Stars from './Stars'

type ModalProps = {
  id: number
  onClose: () => void
}

function ModalRate({ id, onClose }: ModalProps) {
  const { rate } = useAppSelector((state) => state.rate)
  const currentRate = rate.find((item) => item.id === id)
  const [plot, setPlot] = useState(currentRate?.plot || 0)
  const [actor, setActor] = useState(currentRate?.actor || 0)
  const [camera, setCamera] = useState(currentRate?.camera || 0)
  const dispatch = useDispatch()

  const isReady = plot && actor && camera

  function handleClick() {
    if (isReady) {
      dispatch(
        addRate({
          plot,
          actor,
          camera,
          id,
        })
      )
      onClose()
    }
  }

  function handleClickContainer(event: React.MouseEvent) {
    event.stopPropagation()
    event.preventDefault()
  }

  function handleClickModal() {
    onClose()
  }

  const btnText = !!currentRate ? 'Сохранить' : 'Оценить'

  return (
    <div className={styles.modal} onClick={handleClickModal}>
      <div className={styles.container} onClick={handleClickContainer}>
        <p>Сюжет</p>
        <Stars onChange={setPlot} value={plot} />
        <p>Игра актеров</p>
        <Stars onChange={setActor} value={actor} />
        <p>Операторская работа</p>
        <Stars onChange={setCamera} value={camera} />
        <button disabled={!isReady} onClick={handleClick}>
          {btnText}
        </button>
      </div>
    </div>
  )
}

export default ModalRate
