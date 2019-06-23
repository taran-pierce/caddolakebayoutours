import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import ImageGallery from '../components/ImageGallery'
import Link from 'next/link'

class Page extends React.Component {

  render() {
    return (
      <div className={`layout`}>
        <div className={'main-container'}>
          <Header 
            pageTitle={'Photo Gallery | Caddo Lake Bayou Tours'} 
            canonical={'/photo-gallery'} 
            activeTab={'photo-gallery'}
          />
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
          <section className="side-hug with-padding">
            <h1>Photo Gallery</h1>
            <p>Here are some photos of Caddo Lake and the surrounding area so you can get an idea of what it's going to be like. You get the best views of the lake while out on the guided boat tours so the views are spectacular.</p>
            <p>Of course, like most things, it's even more beautiful in person. You don't have to take our word for it though, you can come and see for yourself. <Link href={`/contact`}><a>Call us today!</a></Link></p>
            <ImageGallery />
          </section>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Page