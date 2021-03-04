import parallaxStyle from '../styles/Parallax.module.scss'
import sectionStyle from '../styles/Section.module.scss'

export default function Home() {
  return (
    <>
      <section id="Section1" className={parallaxStyle.parallax}>
        <div className={`${sectionStyle.sectionOne}`}>
          <h1 className="">CONQUER</h1>
          <h2 className="">Simple Bootstrap Template</h2>
        </div>
      </section>
    </>
  )
}
