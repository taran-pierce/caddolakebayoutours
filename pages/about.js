import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import SideHug from '../components/SideHug'
import Footer from '../components/Footer'

const sideHug1 = {
  image: {
    path: 'lake-cypress-trees.jpg',
  },
  textData: [
    {
      titles: [
        '<h1>About Caddo Lake Bayou Tours</h1>',
      ],
      paragraphs: [
        'We can take you out on a variety of tours on Caddo Lake so that you can relax and enjoy your time knowing you are in the hands of a well trained guide while on the lake.',
        'No matter what you are looking for, so long as you are wanting to have a good time, there are plenty of things to do on Caddo Lake.',
      ]
    },
    {
      titles: [
        '<h3>Fishing Trips</h3>',
      ],
      paragraphs: [
        'There are plenty of great fishing spots across the lake. Come take a guided fishing trip for all your fishing needs.',
      ]
    },
    {
      titles: [
        '<h3>Sightseeing</h3>',
      ],
      paragraphs: [
        'Enjoy the beautiful lake, lots of wildlife and the overall mystique of Caddo Lake.',
        'Visit historic Jefferson, Texas and enjoy all that it has to offer.',
      ]
    },
    {
      titles: [
        '<h3>Sunrise and sunset tours</h3>',
      ],
      paragraphs: [
        'Caddo Lake is always a beautiful sight to behold, but the sunrises and sunsets out on the lake are among some of the most gorgeous ones in the South.',
      ]
    },
    {
      titles: [
        '<h3>and much more</h3>',
      ],
      paragraphs: [
        'Contact us today to find out about the availability of tours and to check on seasonal prices.',
        '<a class="btn" href="/contact">Contact us today</a>',
      ]
    }
  ]
}

const sideHug2 = {
  image: {
    path: 'lake-cypress-trees-2.jpg',
  },
  imageSide: 'left',
  textData: [
    {
      titles: [
        '<h2>About Caddo Lake</h2>',
      ],
      paragraphs: [
        'Caddo Lake is steeped in history dating back to the early 1800\'s. The history which includes the Caddo Indian tribes that inhabited the area and the steamboat navigational trade from New Orleans, Louisiana to Jefferson, Texas are just some of the lake\'s rich history.',
        'Check out some of our photos from around various spots of Caddo Lake.',
        '<a class="btn" href="/photo-gallery">View our photos</a>',
      ]
    },
    {
      titles: [
        '<h3>Wildlife in the area</h3>',
      ],
      paragraphs: [
        'A recent study shows 216 types of birds, 90 different species of fish and reptiles and 47 different types of mammals.',
        'Here are just a few examples of the wildlife you can expect to see:',
      ]
    },
    {
      titles: [
        '<h3>Alligators</h3>',
      ],
      paragraphs: [
        'A member of the crocodile family, the American alligator is a living fossil from the Age of Reptiles, having survived on earth for 200 million years.',
        '<a href="https://www.fws.gov/refuge/Caddo_Lake/wildlife/alligator.html" target="_blank" rel="noopener">More info here.</a>',
      ]
    },
    {
      titles: [
        '<h3>Paddlefish</h3>',
      ],
      paragraphs: [
        'The American paddlefish is a species of basal ray-finned fish closely related to sturgeons in the order Acipenseriformes.',
        '<a href="https://www.fws.gov/refuge/caddo_lake/wildlife/paddlefish.html" target="_blank" rel="noopener">More info here.</a>',
      ]
    }
  ]
}

class Page extends React.Component {
  constructor( props ) {
    super( props )
  }
  
  render() {
    return (
      <div className={`layout`}>
        <div className={'main-container'}>
          <Header 
            pageTitle={'About | Caddo Lake Bayou Tours'} 
            canonical={'/about'} 
            activeTab={'about'}
          />
          <Hero 
            imagePath={'lake-sunset-2.jpg'} />
          <SideHug data={sideHug1} />
          <SideHug data={sideHug2} />
          <Footer />
        </div>
      </div>
    )
  }
}

export default Page