import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import SideHug from '../components/SideHug'
import Footer from '../components/Footer'

const sideHugData1 = {
  image: {
    path: '/static/images/large/IMG_0286.jpg',
    alt: 'Caddo Lake Sunset',
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
        'Whether you are looking for a guided fishing trip, a sight–seeing tour of the wildlife or just wanting to have a relaxing day or evening on the boat on Caddo Lake then look no further. Book a tour today to see some of the beauty that awaits you.',
        'Also don\'t forget to like us on our <a href="https://www.facebook.com/caddotours/" target="_blank" rel="noopener">Facebook page</a> to see weekly updates and stay in touch with us!',
        '<a class="btn" href="/contact">Book a Tour</a>',
      ]
    }
  ]
}

const sideHugData2 = {
  image: {
    path: '/static/images/medium/IMG_0268.jpg',
    alt: 'Caddo Lake, rich with history',
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
  imageSide: 'left',
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
          <Header pageTitle={'Caddo Lake Bayou Tours'} canonical={'/'} />
          <Hero 
            imagePath={'/static/images/sunset/lake-sunset-xl.jpg'} 
            altText={'Cypress trees at Caddo Lake'} 
            imageHeight={'300px'}
            imageBottomAdjustment={'270px'} 
          />
          <SideHug data={sideHugData1} />
          <SideHug data={sideHugData2} />
          <Footer />
        </div>
      </div>
    )
  }
}

export default Page