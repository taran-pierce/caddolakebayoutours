import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import SideHug from '../components/SideHug'
import Footer from '../components/Footer'

const sideHug1 = {
  googleMap: '<iframe title="Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13428.266285705415!2d-94.15337171079648!3d32.7108586943788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc79227c114d5c01d!2sCaddo+Lake+Bayou+Tours!5e0!3m2!1sen!2sus!4v1528217775632" width="100%" height="900" frameBorder="0" allowFullScreen></iframe>',
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
    path: '/static/images/sunset/lake-sunset-xl.jpg',
    alt: 'Caddo Lake, rich with history',
  },
  imageSide: 'left',
  textData: [
    {
      titles: [
        '<h2>Take in the beauty</h2>',
      ],
      paragraphs: [
        'Still not convinced that Caddo Lake is worth the visit? Check out our photo gallery to get a glimpse of what awaits you.',
        '<a class="btn" href="/photo-gallery">Photo Gallery</a>',
        'Let us make your next trip out to the lake a the most memorable one! We can take you on the best guided fishing trips, to the hidden spots for sunrises and sunsets or even just on a relaxing boat ride around the lake soaking in it\'s rich history.',
        '<a class="btn btn-info" href="/contact">Book a Tour</a>',
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
            pageTitle={'Directions | Caddo Lake Bayou Tours'} 
            canonical={'/directions'} 
            activeTab={'directions'}
          />
          <Hero 
            imagePath={'/static/images/medium/IMG_0302.jpg'} 
            altText={'Cypress trees at Caddo Lake'} 
            imageHeight={'300px'}
            imageBottomAdjustment={'190px'} 
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