import { Html, Head, Main, NextScript } from 'next/document';
 
export default function Document() {
  return (
    <Html lang="en-US">
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Taran Pierce" />
        <meta name="description" content="Caddo Lake Bayou Tours offers a guided tour of the beautiful Caddo Lake at any time from sunrise to sunset. Whether you are looking for a guided fishing tour, observe some of nature's wildlife, catch a jaw-dropping sunrise or sunset, take in some of the historic Caddo Lake culture or just enjoy some relaxing sight-seeing you are in for quite a treat. Book a boat tour with Caddo Lake Bayou Tours and experience the wonder for yourself." />
        <meta name="keywords" content="caddo, caddo lake, caddo lake boat tours, caddo lake tours, Caddo Lake boat tours, caddo lake boat tours jefferson texas, photography tours, site seeing tours, bayou tours, caddo lake tour, tours of Caddo Lake, caddo lake photos, guided fishing trip, cypress lake, caddo lake history, jefferson texas boat tours, alligator bayou tours, lake bayou, fishing trip, fishing tour, fishing guide tours, river tours, Caddo Lake, caddo lake bayou tours, caddo lake tour guide, fishing guide, travel agency, sunrise tours, sunset tours, swamp tours, caddo lake swamp, boat tours, personal tours, backwater, wildlife tours, gator, alligator, lake guide, caddo, lake, texas lake, natural lake, Louisiana lake, boats, bird watching, sightseeing, Caddo businesses, Texas, caddo lake information, uncertain texas, swamp tour, swamp adventure, caddo indians, spanish moss, fishing, caddo lake history" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="google-site-verification" content="B2p1pPmxNrh11r3HKQ5EfPlheeORHUacKHqpcLin5g8" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//res.cloudinary.com" />
        <link rel="preconnect" href="//res.cloudinary.com" />
        <link rel="manifest" href="/manifest.json" />
        <script async defer crossOrigin="anonymous" src="//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0" />
        <script async src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}&callback=console.debug&libraries=maps,marker&v=beta`} />
      </Head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N9HT2T6"
            height="0"
            width="0"
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
};