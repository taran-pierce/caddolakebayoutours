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
        'We offer a variety of boat tours on Caddo Lake and a well trained guide can take you on a photography tour so you will have an opportunity to take some excellent photos out on the lake.',
        'If you are looking to experience a one of a kind fishing trip, we know all the good spots.',
      ],
      lists: [
        {
          'type': 'ul',
          'items': [
            {
              'title': 'Photography Tours',
              'paragraphs': [
                'Fantastic landscape photography and abundant wildlife makes it a great destination for being able to take some great shots.'
              ]
            },
            {
              'title': 'Fishing Trips',
              'paragraphs': [
                'There are plenty of great fishing spots across the lake. Come take a guided fishing trip for all your fishing needs.'
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
        '<h2>More tour types</h2>',
      ],
      paragraphs: [
        'Maybe you are just wanting to have a nice relaxing time out on one of the most beautiful lakes in all of Texas. Come take a nice boat tour and get ready to have a fantastic time out on the lake.',
        'Caddo Lake is a unique place to get to see a beautiful sunrise, with a gorgeous view of the Cypress trees outlining the water.',
      ],
      lists: [
        {
          'type': 'ul',
          items: [
            {
              'title': 'Sightseeing',
              'paragraphs': [
                'Enjoy the beautiful lake, lots of wildlife and the overall mystique of Caddo Lake. Visit historic Jefferson, Texas and enjoy all that it has to offer.',
              ]
            },
            {
              'title': 'Sunrise and sunset tours',
              'paragraphs': [
                'Caddo Lake is always a beautiful sight to behold, but the sunrises and sunsets out on the lake are among some of the most gorgeous ones in the South.',
                'Contact us today to find out about the availability of tours and to check on seasonal prices.',
              ]
            },
          ],
        }
      ],
      cta: '<a class="btn" href="/contact/">Book a tour</a>'
    }
  ],
  imageFirst: true,
}

const sideHugData3 = {
  image: {
    path: 'lake-spanish-moss.jpg',
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
        <Hero imagePath={`lake-sunset-2.jpg`} alt={`Caddo Lake sunset`}/>
        <SideHug data={sideHugData1} />
        <SideHug data={sideHugData2} />
        <SideHug data={sideHugData3} />
      </Layout>
    )
  }
}

export default Page