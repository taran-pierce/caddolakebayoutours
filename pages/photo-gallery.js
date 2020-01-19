import React from 'react'
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
      <div>
          <style jsx>{`
            section {
              background: #fafafa;
              padding: 1rem;
            } 
            
            .container {
              width: unset;
            }

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

            @media (min-width: 992px) {
              section {
                border-left: 1px solid #c9c9c9;
                border-right: 1px solid #c9c9c9;
              }
            }
          `}</style>
          <section>
            <div className={`container`}>
              <h1>Photo Gallery</h1>
              <p>Here are some photos of Caddo Lake and the surrounding area so you can get an idea of what it's going to be like. You get the best views of the lake while out on the guided boat tours so the views are spectacular.</p>
              <p>These photos are courtesy of some of the great photographers that have gone out and taken tours with us.</p>
              <p>Of course, like most things, it's even more beautiful in person. You don't have to take our word for it though, you can come and see for yourself. <a href={`/contact/`}>Contact us today!</a></p>
            </div>
          </section>
          <ImageGallery />
      </div>
    )
  }
}

Page.getInitialProps = async ({ req }) => {
  const canonical = '/photo-gallery/'
  const pageTitle = 'Photo Gallery - Caddo Lake Bayou Tours'
  const activeTab = 'photo-gallery'
  
  return {
    canonical,
    pageTitle,
    activeTab,
  }
}

export default Page