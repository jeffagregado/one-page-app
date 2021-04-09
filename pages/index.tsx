import Card from '../components/Card'
import parallaxStyle from '../styles/Parallax.module.scss'
import sectionStyle from '../styles/Section.module.scss'

export default function Home() {
  return (
    <>
      <section id="home" className={parallaxStyle.parallax}>
        <div className={`${sectionStyle.sectionOne}`}>
          <h1 className="">CONQUER</h1>
          <h2 className="">Simple Bootstrap Template</h2>
        </div>
      </section>

      <section id="about" className={sectionStyle.sectionAbout}>
        <div className={sectionStyle['sectionAbout-top']}>
          <Card img="/img/1-1.jpg">
            <h1>
              <span style={{ color: '#178A27' }}>Bootstrap v3.3.6</span>
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, voluptas. Rerum tempora perferendis atque explicabo
              pariatur molestias ipsam porro veniam!
            </p>
          </Card>
          <Card img="/img/1-2.jpg">
            <h1>
              <span style={{ color: '#1686C1' }}>Responsive design</span>
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, voluptas. Rerum tempora perferendis atque explicabo
              pariatur molestias ipsam porro veniam!
            </p>
          </Card>
          <Card img="/img/1-3.jpg">
            <h1>
              <span style={{ color: '#666666' }}>Parallax Layout</span>
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, voluptas. Rerum tempora perferendis atque explicabo
              pariatur molestias ipsam porro veniam!
            </p>
          </Card>
        </div>
        <div className={sectionStyle['sectionAbout-bottom']}>
          <Card img="/img/2-1.jpg" big>
            <h1>Two Column Left Side</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              aliquam facere nihil harum, delectus enim quam debitis veniam,
              dignissimos doloremque at earum illo commodi placeat magnam sint
              ut cupiditate esse.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              aliquam facere nihil harum, delectus enim quam debitis veniam,
              dignissimos doloremque at earum illo commodi placeat magnam sint
              ut cupiditate esse.
            </p>
          </Card>

          <Card img="/img/2-2.jpg" big>
            <h1>Two Column Right Side</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              aliquam facere nihil harum, delectus enim quam debitis veniam,
              dignissimos doloremque at earum illo commodi placeat magnam sint
              ut cupiditate esse.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              aliquam facere nihil harum, delectus enim quam debitis veniam,
              dignissimos doloremque at earum illo commodi placeat magnam sint
              ut cupiditate esse.
            </p>
          </Card>
        </div>
      </section>
    </>
  )
}
