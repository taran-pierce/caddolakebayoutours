import React from 'react'
import Hero from '../components/Hero'
import SideHug from '../components/SideHug'

const sideHugData1 = {
  googleMap: '<iframe title="Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13428.266285705415!2d-94.15337171079648!3d32.7108586943788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc79227c114d5c01d!2sCaddo+Lake+Bayou+Tours!5e0!3m2!1sen!2sus!4v1528217775632" width="100%" height="460" frameBorder="0" allowFullScreen></iframe>',
  textData: [
    {
      titles: [
        '<h1>Directions</h1>',
      ],
      paragraphs: [
        'Knowing how to get somewhere is half the battle. Let me help you out because Caddo Lake is a gem that can be hard to find. Rest assured, once you make it to Caddo Lake you will find that it was well worth it.',
        'All trips take off from Shady Glade Resort at their marina.',
        'Caddo Lake is located between Marshall, Texas and Shreveport, Louisiana in Uncertain, Texas.',
        'Bayou Tours is located at Shady Glade Resort, five miles from Caddo Lake State Park. <strong>Guide Boat tours are available daily.</strong>',
      ]
    }
  ]
}

const sideHugData2 = {
  image: {
    path: 'lake-spanish-moss.jpg',
    alt: 'Spanish moss covered Cypress trees'
  },
  imageFirst: true,
  textData: [
    {
      titles: [
        '<h2>Take in the beauty</h2>',
      ],
      paragraphs: [
        'Still not convinced that Caddo Lake is worth the visit? Check out our photo gallery to get a glimpse of what awaits you.',
        '<a class="btn" href="/photo-gallery/">Photo Gallery</a>',
        'Let us make your next trip out to the lake a the most memorable one! We can take you on the best guided fishing trips, to the hidden spots for sunrises and sunsets or even just on a relaxing boat ride around the lake soaking in it\'s rich history.',
        '<a class="btn btn-info" href="/contact/">Book a Tour</a>',
      ]
    }
  ]
}

class Page extends React.Component {
  constructor( props ) {
    super( props )

    this.state = {
      activeTab: 'directions',
    }
  }

  render() {
    return (
      <div>
        <Hero
          imagePath={`lake-cypress-trees-3.jpg`}
          alt={`Caddo Lake cypress trees`}
          bottom={240}
          minHeight={{
            mobile: '281px',
            tablet: '576px',
            desktop: '487px',
          }}
        />
        <SideHug data={sideHugData1} />
        <SideHug data={sideHugData2} />
      </div>
    )
  }
}

Page.getInitialProps = async ({ req }) => {
  const canonical = '/directions/'
  const pageTitle = 'Directions - Caddo Lake Bayou Tours'
  const activeTab = 'directions'
  // const heroImage = 'https://res.cloudinary.com/tpierce36/image/upload/f_auto,g_auto,q_90/c_scale,w_375/lake-cypress-trees-3.jpg'

  return {
    canonical,
    pageTitle,
    activeTab,
    // heroImage,
  }
}

export default Page