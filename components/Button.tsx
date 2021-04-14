import BtnStyle from '../styles/Button.module.scss'

interface Props {
  children: string
  green?: boolean
  red?: boolean
  blue?: boolean
}

const Button = ({ children, green, red, blue }: Props) => {
  return (
    <button
      className={`${BtnStyle.btn} 
      ${green ? BtnStyle['btn-green'] : null} 
      ${red ? BtnStyle['btn-red'] : null} 
      ${blue ? BtnStyle['btn-blue'] : null}`}
    >
      {children}
    </button>
  )
}

export default Button
