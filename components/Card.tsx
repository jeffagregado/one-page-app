import cardStyle from '../styles/Card.module.scss'

interface Props {
  children: any
  img: string
}

const Card = ({ children, img }: Props) => {
  return (
    <div className={cardStyle.card}>
      <div className={cardStyle['card-img']}>
        <img src={img} alt="cardimg" />
      </div>

      <div className={cardStyle['card-info']}>{children}</div>
    </div>
  )
}

export default Card
