import React from 'react'
import dynamic from 'next/dynamic'
import Hero from '../components/Hero'
import SideHug from '../components/SideHug'

const LazySideHug = dynamic(import('../components/LazySideHug'));

const sideHugData1 = {
  image: {
    path: 'mike-moir-5.jpg',
    alt: 'Sunset over Caddo Lake',
  },
  textData: [
    {
      titles: [
        '<h1>Caddo Lake Bayou Tours</h1>',
        '<h2>Book a tour today!</h2>',
        '<h3><a href="tel:903-570-2169">903-570-2169</a></h3>',
      ],
      paragraphs: [
        'Come take a boat tour on one of the most scenic and beautiful lakes in the South. Caddo Lake is approximately 26,000 acres of Bald Cypress trees, Spanish moss, abundant wildlife, and scenery that you will never forget. The lake has everything from swamps, bayous and river ways that create a one of a kind experience.',
        'Whether you are looking for a guided fishing trip, a sight seeing tour of the wildlife or just wanting to have a relaxing day or evening on the boat on Caddo Lake then look no further. Book a tour today to see some of the beauty that awaits you.',
        'Also don\'t forget to like us on our <a href="https://www.facebook.com/caddotours/" target="_blank" rel="noopener">Facebook page</a> to see weekly updates and stay in touch with us!',
        '<a class="btn" href="/contact">Book a Tour</a>',
      ]
    }
  ]
}

const sideHugData2 = {
  image: {
    path: 'lake-sunset.jpg',
    alt: 'Caddo Lake Cypress trees with fog',
  },
  textData: [
    {
      titles: [
        '<h2>A lake rich with history</h2>',
      ],
      paragraphs: [
        'Caddo Lake is steeped in history dating back to the early 1800\'s and one of the best ways to soak it in is with a guided boat tour. Sit back and relax while you take in the history which includes the Caddo Indian tribes that inhabited the area and the steamboat navigational trade from New Orleans to Jefferson, Texas are just some of the lakes rich history.',
        'The names of certain areas of the lake such as Alligator Bayou, Starr Ditch, Ames Spring Basin, Potters Point, Britts Gap and Government Ditch among others give the lake a certain mystic created by the characters from it\'s past. It creates the perfect atomosphere for fishing, relaxing or watching the sunset.',
      ],
    }
  ],
  imageFirst: true,
}

const sideHugData3 = {
  image: {
    path: 'mike-moir-6.jpg',
    alt: 'Crane in Cypress tree on Caddo Lake',
  },
  textData: [
    {
      titles: [
        '<h2>Photography Tours</h2>',
      ],
      paragraphs: [
        'Looking to get some great pictures of the beautiful Bald Cypress trees covered in Spanish moss? Schedule a guided tour and go on an adventure to get all the images you need to complete your photography collection.',
        'Whether you want to go on a wildlife photography tour with a group or with the peace and quiet of being alone to get those perfect shots, we can accommodate.',
        '<a class="btn" href="/contact/">Contact us today</a>'
      ],
    }
  ]
}

const sideHugData4 = {
  image: {
    path: 'lake-trees-fog.jpg',
    alt: 'Cypress trees with plenty of fog over the water',
  },
  textData: [
    {
      titles: [
        '<h2>Featured on TravelAwaits Article</h2>',
      ],
      paragraphs: [
        'TravelAwaits is a great blog that features destinations all over the world and gives you great tips on things to do there.',
        'We are lucky enough to have been mentioned in an article over things to do near Jefferson Texas.',
        'Caddo Lake Bayou tours is number seven on the list and click the link below if you would like to read the full article!',
        '<a class="btn" target="_blank" rel="noopener" href="https://www.travelawaits.com/2552685/outdoor-activities-near-jefferson-texas/">View Article</a>'
      ],
    }
  ],
  imageFirst: true,
}

const sideHugData5 = {
  image: {
    path: 'bald-eagle.jpg',
    alt: 'Bald Eagle',
  },
  textData: [
    {
      titles: [
        '<h2>Photos from Caddo Lake</h2>',
      ],
      paragraphs: [
        'Take a look at some of the photographs that have been taken on Caddo Lake by various talented photographers.',
        '<a class="btn" href="/photo-gallery/">Photo Gallery</a>'
      ],
    }
  ]
}

class Page extends React.Component {
  constructor( props ) {
    super( props )

    this.state = {
      activeTab: 'home',
    }
  }

  render() {
    return (
      <div>
        <Hero
          imagePath={`mike-moir-3.jpg`}
          alt={`Caddo Lake sunrise`}
          bottom={30}
          minHeight={{
            mobile: '212px',
            tablet: '434px',
            desktop: '518px',
          }}
        />
        <SideHug data={sideHugData1} />
        <LazySideHug data={sideHugData2} />
        <LazySideHug data={sideHugData3} />
        <LazySideHug data={sideHugData4} />
        <LazySideHug data={sideHugData5} />
      </div>
    )
  }
}

Page.getInitialProps = async ({ req }) => {
  const canonical = '/'
  const pageTitle = 'Caddo Lake Bayou Tours'
  const activeTab = 'home'

  return {
    activeTab,
    canonical,
    pageTitle,
  }
}

export default Page