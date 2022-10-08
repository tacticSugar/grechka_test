import ReactStars from 'react-rating-stars-component'

type StarProps = {
  onChange: (rate: number) => void
  value: number
}

function Stars(props: StarProps) {
  return (
    <ReactStars
      count={5}
      value={props.value}
      onChange={props.onChange}
      size={24}
      isHalf={false}
      emptyIcon={<i className="far fa-star" />}
      halfIcon={<i className="fa fa-star-half-alt" />}
      fullIcon={<i className="fa fa-star" />}
      activeColor="#ffd700"
    />
  )
}
export default Stars
