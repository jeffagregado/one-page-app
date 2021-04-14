import cardStyle from '../styles/Card.module.scss'

interface Props {
  children: any
  big?: any
  small?: any
  xl?: any
  img: string
}

const Card = ({ children, img, big, small, xl }: Props) => {
  return (
    <div
      className={`${cardStyle.card} 
    ${big ? cardStyle['card-big'] : null}
    ${small ? cardStyle['card-small'] : null}
    ${xl ? cardStyle['card-xl'] : null}`}
    >
      <div className={cardStyle['card-img']}>
        <img src={img} alt="cardimg" />
      </div>

      <div className={cardStyle['card-info']}>{children}</div>
    </div>
  )
}

export default Card
