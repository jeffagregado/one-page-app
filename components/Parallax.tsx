import ParallaxStyle from '../styles/Parallax.module.scss'

interface Props {
    children: any
    bg2?: any
}

const Parallax = ({children, bg2} : Props) => {
    return ( 
        <div className={`${ParallaxStyle.parallax} ${bg2 ? ParallaxStyle.bg2 : null}`}>
            {children}
        </div>
     );
}
 
export default Parallax;