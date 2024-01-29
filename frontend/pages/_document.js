import { Html, Head, Main, NextScript } from 'next/document';
 
export default function Document() {
  return (
    <Html lang="en-US">
      <Head>
        <script async defer crossOrigin="anonymous" src="//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0" />
        <script async src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}&callback=console.debug&libraries=maps,marker&v=beta`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
};
