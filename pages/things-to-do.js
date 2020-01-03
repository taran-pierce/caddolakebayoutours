import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import SideHug from '../components/SideHug'

const sideHug1 = {
  image: {
    path: 'lake-cypress-trees.jpg',
  },
  textData: [
    {
      titles: [
        '<h3>Shady Glade</h3>',
      ],
      paragraphs: [
        'Shadey Glade is an amazing place that has it all. Marina, Boat Ramp, Fishing Pier, Cabins, Motel, Storage, Pavilion, RV Park & Cafe. Specializing in families, couples, fishing enthusiasts, duck hunters, bird watchers, family reunions, photographers, artists & so much more.',
        'If you come and visit Caddo Lake, you have to go to Shady Glade.',
        '<a href="http://shadygladeresort.com/" target="_blank" rel="noopener">Visit their website for more information</a>',
      ]
    }
  ]
}

const sideHug2 = {
  image: {
    path: 'johnsons-ranch.jpg',
  },
  imageFirst: true,
  textData: [
    {
      titles: [
        '<h3>Johnson\'s Ranch</h3>',
      ],
      paragraphs: [
        'Johnson\'s Ranch is a full service marina, supplying the sportsmen of today with boat fuel, live bait, artificial lures, snacks, soft drinks, beer, tee shirts and other souvenirs. Canoe, kayak and boat (with or without motors) are available.',
        '<a href="http://johnsonsranch.net/index.htm" target="_blank" rel="noopener">Visit their website for more information</a>',
      ]
    }
  ]
}

const sideHug3 = {
  image: {
    path: 'aerial-lake.jpg',
  },
  textData: [
    {
      titles: [
        '<h3>Jefferson Texas</h3>',
      ],
      paragraphs: [
        'Visit historic Jefferson Texas for shopping, entertainment and dining options. From train rides, horse drawn carriage rides, riverboat rides, kayak or canoe rental and even golf cart rentals in Jefferson Texas, Caddo Lake and Lake O the Pines you will find many historic things to do.',
        'For the shopper in you we have more antique shops than any other town in the Piney Woods. Plus so many great new boutique shops have opened up in the past few years, you will be delighted with the array of items they have to offer.',
        '<a href="https://www.jefferson-texas.com/" target="_blank" rel="noopener">Visit their website for more information</a>'
      ]
    }
  ]
}

const sideHug4 = {
  image: {
    path: 'lake-cypress-trees-3.jpg',
  },
  imageFirst: true,
  textData: [
    {
      titles: [
        '<h3>Hodge Podge Cottages</h3>',
      ],
      paragraphs: [
        'Come and feel time slow down in this busy world and experience everything this area has to offer. If all your questions are not answered on our website, please feel free to contact us and we will be happy to assist you.',
        'For the shopper in you we have more antique shops than any other town in the Piney Woods. Plus so many great new boutique shops have opened up in the past few years, you will be delighted with the array of items they have to offer.',
        '<a href="http://www.hodgepodgecottages.com/" target="_blank" rel="noopener">Visit their website for more information</a>',
      ]
    }
  ]
}

const sideHug5 = {
  image: {
    path: 'caddo-lake-swamp.jpg',
  },
  textData: [
    {
      titles: [
        '<h3>Caddo Lake State Park</h3>',
      ],
      paragraphs: [
        'Be sure to check out Caddo Lake State Park with it\'s Bald cypress trees draped with Span­ish moss tower over the maze of bayous, sloughs and ponds of Caddo Lake. Paddle these waterways, stay in a historic cabin, or try your luck fishing. Discover an East Texas treasure!',
        '<a href="https://tpwd.texas.gov/state-parks/caddo-lake" target="_blank" rel="noopener">Visit their website for more information</a>',
      ]
    }
  ]
}

class Page extends React.Component {
  constructor( props ) {
    super( props )

    this.state = {
      activeTab: 'things-to-do'
    }
  }
  
  render() {
    return (
      <Layout pageTitle={`Things to do - Caddo Lake Bayou Tours`} canonical={`/things-to-do/`}>
        <Hero imagePath={'caddo-lake-swamp.jpg'} />
        <section>
          <div className={`container`}>
            <h1>Things to do in Caddo Lake</h1>
            <p>There are plenty of things to do in Caddo Lake if you are looking for something interesting and fun.</p>
            <p>Here are a few of the great places to visit while you are in Caddo Lake. Whether you are looking to book lodging for your travel so you can have a place to stay, looking for access to the lake, a place to refuel your boat, a place to get some food and drinks, or just some places to check out to have a good time. These are a few of the local attractions in the Uncertain, Texas area of Caddo Lake.</p>
          </div>
        </section>
        <section>
          <div className={`container`}>
            <h2>Trying to plan your next vacation?</h2>
            <p>Texas has a lot to offer and not all of it is here on Caddo Lake. Let us give you some ideas and places to look over for your next family vacation or personal getaway.</p>
            <h2>The Graytripper</h2>
            <p>A travel blog for those of us who have the beautilful natural patina of age and are still ready for the road!</p>
            <p>Check out the variaous trips and get some ideas for your next trip!</p>
            <p>
              <a href="http://thegraytripper.com/blog_East_Texas.html" target="_blank" rel="noopener">Check out their blog</a>
            </p>
          </div>
        </section>
        <SideHug data={sideHug1} />
        <SideHug data={sideHug2} />
        <SideHug data={sideHug3} />
        <SideHug data={sideHug4} />
        <SideHug data={sideHug5} /> 
      </Layout>
    )
  }
}

export default Page