import ParallaxStyle from '../styles/Parallax.module.scss'

interface Props {
  children: any
  bg2?: any
  bg3?: any
}

const Parallax = ({ children, bg2, bg3 }: Props) => {
  return (
    <div
      className={`${ParallaxStyle.parallax} ${bg2 ? ParallaxStyle.bg2 : null} ${
        bg3 ? ParallaxStyle.bg3 : null
      }`}
    >
      {children}
    </div>
  )
}

export default Parallax
