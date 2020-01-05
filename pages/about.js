import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import SideHug from '../components/SideHug'

const sideHugData1 = {
  image: {
    path: 'lake-trees-fog.jpg',
    alt: 'Caddo Lake, shrouded with fog',
  },
  textData: [
    {
      titles: [
        '<h1>About Caddo Lake Bayou Tours</h1>',
      ],
      paragraphs: [
        'We can take you out on a variety of tours on Caddo Lake so that you can relax and enjoy your time knowing you are in the hands of a well trained guide while on the lake.',
        'No matter what you are looking for, so long as you are wanting to have a good time, there are plenty of things to do on Caddo Lake.',
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
      ],
      cta: '<a class="btn btn-info" href="/contact/">Contact us today</a>',
    }
  ]
}

const sideHugData2 = {
  image: {
    path: 'lake-sunset-3.jpg',
    alt: 'Caddo Lake sunset',
  },
  textData: [
    {
      titles: [
        '<h2>About Caddo Lake</h2>',
      ],
      paragraphs: [
        'Caddo Lake is steeped in history dating back to the early 1800\'s. The history which includes the Caddo Indian tribes that inhabited the area and the steamboat navigational trade from New Orleans, Louisiana to Jefferson, Texas are just some of the lake\'s rich history.',
        'Check out some of our photos from around various spots of Caddo Lake.',
        '<a class="btn btn-info" href="/photo-gallery/">View Photos</a>',
        'A recent study shows 216 types of birds, 90 different species of fish and reptiles and 47 different types of mammals.',
        'Here are just a few examples of the wildlife you can expect to see:',
      ],
      lists: [
        {
          'type': 'ul',
          items: [
            {
              'title': 'Alligators',
              'paragraphs': [
                'A member of the crocodile family, the American alligator is a living fossil from the Age of Reptiles, having survived on earth for 200 million years.',
                '<a href="https://www.fws.gov/refuge/Caddo_Lake/wildlife/alligator.html" target="_blank" rel="noopener">More info here.</a>',
              ]
            },
            {
              'title': 'Paddlefish',
              'paragraphs': [
                'The American paddlefish is a species of basal ray-finned fish closely related to sturgeons in the order Acipenseriformes.',
                '<a href="https://www.fws.gov/refuge/caddo_lake/wildlife/paddlefish.html" target="_blank" rel="noopener">More info here.</a>',
              ]
            },
          ]
        }
      ]
    }
  ],
  imageFirst: true,
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
      </Layout>
    )
  }
}

export default Page