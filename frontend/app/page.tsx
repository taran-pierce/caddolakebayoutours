'use client'

import Hero from './components/Hero';
import SplitContent from './components/SplitContent';

// TODO move this to Contentful so its not in the repo
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
};

export default function Page() {
  return (
    <main>
      <Hero
        imagePath="gallery/caddo-lake-32"
        alt="Caddo Lake sunrise"
      />
      <SplitContent 
        image={sideHugData1.image}
        textData={sideHugData1.textData}
        imageFirst={false}
      />
      <SplitContent 
        image={sideHugData1.image}
        textData={sideHugData1.textData}
        imageFirst={true}
      />
    </main>
    );
};