import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import ImageGallery from '../components/ImageGallery'

class Page extends React.Component {
  constructor( props ) {
    super( props )
  
    this.state = {
      activeTab: 'photo-gallery',
    }
  }

  render() {
    return (
      <Layout pageTitle={`Photography Gallery - Caddo Lake Bayou Tours`} canonical={`/photo-gallery`}>
        <Hero imagePath={'caddo-lake-swamp.jpg'} />
          <style jsx>{`  
            ul {
              list-style-type: none;
              padding: 0;
              margin: 0 0 1rem 0;
            } 

            @media(min-width: 768px) {
              .flex {
                display: flex;
              }

              .item {
                width: 50%;
              }

              img {
                display: block;
                margin: 0 auto;
              }
            }
          `}</style>
          <section>
            <div className={`container`}>
              <h1>Photo Gallery</h1>
              <p>Here are some photos of Caddo Lake and the surrounding area so you can get an idea of what it's going to be like. You get the best views of the lake while out on the guided boat tours so the views are spectacular.</p>
              <p>Of course, like most things, it's even more beautiful in person. You don't have to take our word for it though, you can come and see for yourself. <a href={`/contact/`}>Call us today!</a></p>
              <ImageGallery />
            </div>
          </section>
      </Layout>
    )
  }
}

export default Page