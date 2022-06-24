import { 
  useState,
  useEffect,
 } from 'react';
import Hero from '../components/Hero';
import SideHug from '../components/SideHug';
import Form from '../components/Form';
import 'isomorphic-fetch';

const sideHugData1 = {
  image: {
    path: 'lake-with-pier.jpg',
    alt: 'A pier on Caddo Lake'
  },
  imageFirst: true,
  textData: [
    {
      titles: [
        '<h1>Contact Caddo Lake Bayou Tours</h1>',
        '<h2>Questions about tours?</h2>'
      ],
      paragraphs: [
        'If you have any questions please give us a call or you can contact us via email and we will get back to you as soon as possible. We will answer any questions you may have about what kind of guided boat tours we have available, what you can expect to encounter while on the tour and of course what you can and can not do on while on the tour of the lake.',
        'Come and enjoy the wonderful experience that is Caddo Lake. We can\'t wait to share it with you and don\'t forgot to like us on our <a href="https://www.facebook.com/caddotours/" target="_blank">FaceBook page</a>!',
        '<strong>Rich McFarland <strong>Tour Guide</strong> <a href="tel:1-903-570-2169">903-570-2169</a></strong>',
        'U.S. Coast Guard Merchant Marine Captain License',
      ],
      lists: [
        {
          'type': 'ul',
          'items': [
            {
              'title': 'Where does the tour start?',
              'paragraphs': [
                'All tours start and end at the Shady Glade Marina.'
              ]
            },
            {
              'paragraphs': [
                '<strong>Address</strong>',
                '449 Cypress Drive',
                'Uncertain TX 75661',
                '<strong>Phone:</strong> <a href="tel:1-903-570-2169">903-570-2169</a>',
              ]
            }
          ]
        }
      ]
    }
  ]
}

const sideHugData2 = {
  image: {
    path: 'lake-trees-in-fall.jpg',
    alt: 'Caddo Lake with Cypress trees in the Fall'
  },
  textData: [
    {
      titles: [
        '<h2>Types of Tours for Caddo Lake</h2>'
      ],
      lists: [
        {
          'type': 'ul',
          'items': [
            {
              'title': 'Guided photography tour',
              'paragraphs': [
                'Whether you are looking to take some photography of the abundant wildlife here at Caddo Lake or some of the breath taking nature, we can show you all the best places on the lake amidst the maze of bayous and Bald Cypress trees.'
              ]
            },
            {
              'title': 'Sunrise or sunset tours',
              'paragraphs': [
                'Who can resist seeing a gorgeous sunset or sunrise over a lake? Caddo Lake is picturesque in every way, shape and form. Book a tour today and find out for yourself!'
              ]
            },
            {
              'title': 'Fishing trips',
              'paragraphs': [
                'With vast amounts of experience and knowledge of Caddo Lake, we can take you to all the best fishing spots to ensure you will have a great time and a great catch.'
              ]
            },
            {
              'title': 'Sightseeing trips',
              'paragraphs': [
                'If taking pictures isn\'t quite your thing then just taking a relaxing ride on Caddo Lake and getting to see the bayous and how they all intertwine first hand is worth the experience alone. Come and check out the wonders of Caddo Lake today!'
              ]
            },
            {
              'title': 'and more!',
              'paragraphs': [
                'There are so many things available to do and see on the lake that we couldn\'t list them all. If you think of something that you would like to do or see and you wonder if we can accommodate those plans, just send us a message and let us know! We will get back to you as soon as possible to let you know if we can help out.'
              ]
            },
          ]
        }
      ]
    }
  ]
}

const formData = {
  image: {
    path: 'lake-cypress-trees.jpg',
    alt: 'Caddo Lake with Cypress trees',
  },
  textData: [
    {
      titles: [
        '<h1>Contact Caddo Lake Bayou Tours</h1>',
        '<h4>Rich McFarland <strong>Tour Guide</strong> <a href="tel:1-903-570-2169">903-570-2169</a></h4>',
      ],
      paragraphs: [
        'Tours available 7 days a week, any time from sunrise to sunset. Boat tours last approximately one hour.',
        'Book a bout tour today or ask about boat tour reservations, photography tour, fishing trips, availability of dates or times, or any other general questions.',
      ],
    }
  ]
}

function Contact({
  buttonText,
  activeTab,
}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const onLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const onMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let data = {
      name: `${firstName} ${lastName}`,
      email: email,
      message: message
    };

    setLoading(true);

    fetch('//caddo-email-server.herokuapp.com/send/mail', {
      mode: 'no-cors',
      method: 'post',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify(data)
    }).then( ( res ) => {
      setSent(true);
      setLoading(false);
      resetForm();
    })
  }

  return (
    <>
      <Hero
        imagePath={`mike-moir-2.jpg`}
        alt={`Caddo Lake bench`}
        bottom={1}
        minHeight={{
          mobile: '250px',
          tablet: '513px',
          desktop: '646px',
        }}
      />
      {/* TODO comment out until it is fixed */}
      {/* <Form
        data={formData}
        onFirstNameChange={onFirstNameChange}
        onLastNameChange={onLastNameChange}
        onMessageChange={onMessageChange}
        onEmailChange={onEmailChange}
        onSubmit={onSubmit}
        state={{
          firstName,
          lastName,
          email,
          message,
          sent,
          loading,
        }}
        buttonText={`Submit`}
      /> */}
      <SideHug data={sideHugData1} />
      <SideHug data={sideHugData2} />
    </>
  );
}

export async function getStaticProps(context) {
  const canonical = 'https://www.caddolakebayoutours.com/contact/';
  const pageTitle = 'Contact - Caddo Lake Bayou Tours';
  const activeTab = 'contact';

  return {
    props: {
      canonical,
      pageTitle,
      activeTab,
    }
  }
}

export default Contact;
