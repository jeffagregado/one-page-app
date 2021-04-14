import BtnStyle from '../styles/Button.module.scss'

interface Props {
  children: string
  green?: boolean
  red?: boolean
  blue?: boolean
  inverse?: boolean
}

const Button = ({ children, green, red, blue, inverse }: Props) => {
  return (
    <button
      className={`${BtnStyle.btn} 
      ${green ? BtnStyle['btn-green'] : null} 
      ${red ? BtnStyle['btn-red'] : null} 
      ${blue ? BtnStyle['btn-blue'] : null}
      ${inverse ? BtnStyle['btn-inverse'] : null}`}
    >
      {children}
    </button>
  )
}

export default Button
