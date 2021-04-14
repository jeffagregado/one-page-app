import Button from '../components/Button'
import Card from '../components/Card'
import Parallax from '../components/Parallax'
import parallaxStyle from '../styles/Parallax.module.scss'
import sectionStyle from '../styles/Section.module.scss'

export default function Home() {
  return (
    <>
      <section id="home" className={parallaxStyle.parallax}>
        <div className={`${sectionStyle.sectionOne}`}>
          <h1>CONQUER</h1>
          <h2>Simple Bootstrap Template</h2>
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
            <div style={{ textAlign: 'center', margin: '2rem 0 1rem' }}>
              <Button green>Button Green</Button>
            </div>
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
            <div style={{ textAlign: 'center', margin: '2rem 0 1rem' }}>
              <Button blue>Button Blue</Button>
            </div>
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
            <div style={{ textAlign: 'center', margin: '2rem 0 1rem' }}>
              <Button red>Button Red</Button>
            </div>
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
            <div style={{ textAlign: 'right', margin: '1rem 5rem 1rem 0' }}>
              <Button>Read More</Button>
            </div>
          </Card>
        </div>
      </section>

      <section id="services" className={sectionStyle.sectionServices}>
        <Parallax bg2>
          <div className={sectionStyle['services-banner']}>
            <h1>Our Services</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, illum neque. Sunt dolore veritatis ex minus quam
              ipsam voluptate fuga?
            </p>
          </div>
        </Parallax>
        <div className={sectionStyle['services-content']}>
          <div className={sectionStyle['services-content-top']}>
            <Card img="/img/4-1.jpg" small>
              <h1>Column One</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                harum natus. Dolorem, deleniti, porro possimus maxime eius
                exercitationem aperiam voluptatibus voluptatem, libero provident
                in? Magni.
              </p>
            </Card>
            <Card img="/img/4-2.jpg" small>
              <h1>Column Two</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                harum natus. Dolorem, deleniti, porro possimus maxime eius
                exercitationem aperiam voluptatibus voluptatem, libero provident
                in? Magni.
              </p>
              <div style={{ textAlign: 'center' }}>
                <Button>Read It</Button>
              </div>
            </Card>
            <Card img="/img/4-3.jpg" small>
              <h1>Column Three</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                harum natus. Dolorem, deleniti, porro possimus maxime eius
                exercitationem aperiam voluptatibus voluptatem, libero provident
                in? Magni.
              </p>
            </Card>
            <Card img="/img/4-4.jpg" small>
              <h1>Column Four</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                harum natus. Dolorem, deleniti, porro possimus maxime eius
                exercitationem aperiam voluptatibus voluptatem, libero provident
                in? Magni.
              </p>
              <div style={{ textAlign: 'center' }}>
                <Button>Details</Button>
              </div>
            </Card>
          </div>
          <div className={sectionStyle['services-content-bottom']}>
            <Card img="/img/4-5.jpg" xl>
              <h1>One Big Column</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                tempor eros eget eros maximus, ut cursus sem euismod. Donec
                iaculis tristique odio at consectetur. Nullam dignissim varius
                suscipit. Sed in leo sit amet velit finibus pretium. Vivamus
                dictum nisi ac fermentum interdum. Vestibulum vel mauris at erat
                mattis accumsan et ac lorem. Cras non venenatis orci, sed
                tincidunt massa. Duis nisl lectus, auctor eu sodales at,
                dignissim eu orci. Sed vitae venenatis magna, in blandit metus.
                Praesent volutpat cursus rhoncus. Aenean arcu diam, suscipit ac
                neque in, sollicitudin convallis orci.
              </p>
              <p>
                Fusce eu porta massa, sed tincidunt turpis. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Vivamus a urna tellus. Integer pharetra vitae nisi et
                lacinia. Morbi sagittis justo a velit placerat ullamcorper quis
                quis velit. Sed convallis at risus ullamcorper auctor. Praesent
                quis velit neque. Quisque semper porta nisi vitae suscipit. Duis
                lectus magna, ornare ac scelerisque quis, maximus eget nisi.
              </p>
              <Button>Read More</Button>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className={sectionStyle.sectionContact}>
        <Parallax bg3>
          <div className={sectionStyle['contact-content']}>
            <h1>Contact Form</h1>

            <div className={sectionStyle['contact-banner']}>
              <p>
                Nunc diam leo, fringilla vulputate elit lobortis, consectetur
                vestibulum quam. Sed id felis ligula. In euismod libero at magna
                dapibus, in rutrum velit lacinia. Etiam a mi quis arcu varius
                condimentum.
              </p>
            </div>
            <form className={sectionStyle['contact-form']}>
              <div className={sectionStyle['contact-form-info']}>
                <input type="text" id="name" name="name" placeholder="Name" />
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                />
              </div>
              <div className={sectionStyle['contact-form-msg']}>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your message here..."
                ></textarea>
                <Button inverse>Send</Button>
              </div>
            </form>
          </div>
        </Parallax>
      </section>
    </>
  )
}
