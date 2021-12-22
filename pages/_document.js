import Document, { 
  Html, 
  Head, 
  Main, 
  NextScript,
 } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang={`en`}>
        <Head>
          <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
          <link rel="preconnect" href="//fonts.googleapis.com" />
          <link rel="dns-prefetch" href="//fonts.googleapis.com" />
          <link rel="preconnect" href="//fonts.gstatic.com" />
          <link rel="dns-prefetch" href="//fonts.gstatic.com" />
          <link rel="dns-prefetch" href="//res.cloudinary.com" />
          <link rel="preconnect" href="//res.cloudinary.com" />
          <link rel="manifest" href="/manifest.json" />
          <script async defer crossOrigin="anonymous" src="//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0" />
        </Head>
        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-N9HT2T6"
              height="0"
              width="0"
              style={{display: 'none', visibility: 'hidden'}}
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument