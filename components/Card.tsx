import cardStyle from '../styles/Card.module.scss'

interface Props {
  children: any
  big?: any
  img: string
}

const Card = ({ children, img, big }: Props) => {
  return (
    <div className={`${cardStyle.card} ${big ? cardStyle['card-big'] : null}`}>
      <div className={cardStyle['card-img']}>
        <img src={img} alt="cardimg" />
      </div>

      <div className={cardStyle['card-info']}>{children}</div>
    </div>
  )
}

export default Card
