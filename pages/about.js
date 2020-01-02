import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import SideHug from '../components/SideHug'

const sideHugData1 = {
  image: {
    path: 'lake-sunset.jpg',
    alt: 'Caddo Lake, rich with history',
  },
  textData: [
    {
      titles: [
        '<h3>About Caddo Lake Bayou Tours</h3>',
      ],
      paragraphs: [
        'We can take you out on a variety of tours on Caddo Lake so that you can relax and enjoy your time knowing you are in the hands of a well trained guide while on the lake.',
        'No matter what you are looking for, so long as you are wanting to have a good time, there are plenty of things to do on Caddo Lake.',
        '<a class="btn btn-info" href="/contact">Contact us today</a>',
      ],
      lists: [
        {
          'type': 'ul',
          'items': [
            {
              'title': 'Fishing Trips',
              'paragraphs': [
                'There are plenty of great fishing spots across the lake. Come take a guided fishing trip for all your fishing needs.'
              ]
            },
            {
              'title': 'Sightseeing',
              'paragraphs': [
                'Enjoy the beautiful lake, lots of wildlife and the overall mystique of Caddo Lake.',
                'Visit historic Jefferson, Texas and enjoy all that it has to offer.',
              ]
            },
            {
              'title': 'Sunrise and sunset tours',
              'paragraphs': [
                'Caddo Lake is always a beautiful sight to behold, but the sunrises and sunsets out on the lake are among some of the most gorgeous ones in the South.',
                'Contact us today to find out about the availability of tours and to check on seasonal prices.',
              ]
            },
          ]
        }
      ]
    }
  ]
}

const sideHugData2 = {
  image: {
    path: 'lake-spanish-moss.jpg',
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
  imageFirst: true,
}

const sideHugData3 = {
  image: {
    path: 'lake-spanish-moss.jpg',
    alt: 'Caddo Lake, rich with history',
  },
  textData: [
    {
      titles: [
        '<h2>Photography Tours</h2>',
      ],
      paragraphs: [
        'Looking to get some great pictures of the beautiful Bald Cypress trees covered in Spanish moss? Schedule a guided tour and go on an adventure to get all the images you need to complete your photography collection.',
        'Whether you want to go on a wildlife photography tour with a group or with the peace and quiet of being alone to get those perfect shots, we can accommodate.',
      ],
    }
  ]
}

class Page extends React.Component {
  constructor( props ) {
    super( props )
  
    this.state = {
      activeTab: 'about',
    }
  }
  
  render() {
    return (
      <Layout pageTitle={`About - Caddo Lake Bayou Tours`} canonical={`/about/`}>
        <Hero imagePath={`lake-sunset-2.jpg`} />
        <SideHug data={sideHugData1} />
        <SideHug data={sideHugData2} />
        <SideHug data={sideHugData3} />
      </Layout>
    )
  }
}

export default Page