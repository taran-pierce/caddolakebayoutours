import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import SideHug from '../components/SideHug'
import Footer from '../components/Footer'

const sideHug1 = {
  image: {
    path: '/static/images/large/IMG_0286.jpg',
    alt: 'Caddo Lake Sunset',
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
    path: '/static/images/medium/IMG_0268.jpg',
    alt: 'Caddo Lake, rich with history',
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
          <style jsx global>{`
            body {
              background-repeat: repeat;
              background-position: top left;
              background-image: url('/static/images/topography.png');
              color: #402f1d;
              margin: 0;
              padding: 0;
            }
            h1, h2, h3, h4, h5, h6 {
              font-family: 'Do Hyeon',Helvetica,sans-serif;
              margin-top: 0;
            }
            html {
              font-family: 'Noto Sans', sans-serif;
            }
            p {
              line-height: 1.8;
            }
            p:last-child {
              margin-bottom: 0;
            }

            .main-container {
              margin-left: auto;
              margin-right: auto;
              overflow: hidden;
            }

            .btn {
              display: inline-block;
              margin-bottom: 0;
              font-weight: 400;
              text-align: center;
              vertical-align: middle;
              touch-action: manipulation;
              cursor: pointer;
              background-image: none;
              border: 1px solid transparent;
              white-space: nowrap;
              padding: 6px 12px;
              font-size: 16px;
              line-height: 1.6;
              border-radius: 4px;
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
              color: #fff;
              background-color: #9b932a;
              border-color: #5f5a1a;
              text-decoration: none;
              transition: all .25s ease-in-out;
            }
            .btn:hover {
              box-shadow: 0 2px 2px rgba(0,0,0,.4);
            }

            @media( min-width: 768px) {
            }

            @media( min-width: 992px) {
              .main-container {
                width: 970px;
              }
            }

            @media( min-width: 1170px) {
              .main-container {
                width: 1170px;
              }
            }
          `}</style>
          <Header 
            pageTitle={'About | Caddo Lake Bayou Tours'} 
            canonical={'/about'} 
            activeTab={'about'}
          />
          <Hero 
            imagePath={'/static/images/lake-mirror-1-banner.jpg'} 
            altText={'Cypress trees at Caddo Lake'} 
            imageHeight={'194px'}
            imageBottomAdjustment={'0'} 
          />
          <SideHug data={sideHug1} />
          <SideHug data={sideHug2} />
          <Footer />
        </div>
      </div>
    )
  }
}

export default Page