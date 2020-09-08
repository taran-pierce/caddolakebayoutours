import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang={`en`}>
        <Head>
          <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon"></link>
          <link rel="dns-prefetch" href="//fonts.googleapis.com/"></link>
          <link rel="dns-prefetch" href="//res.cloudinary.com/"></link>
          <link href="//fonts.googleapis.com/css?family=Noto+Sans+JP:300,400,700&display=swap" rel="stylesheet"></link>
          <script async defer src="https://www.googletagmanager.com/gtag/js?id=UA-107758647-2"></script>
          <script dangerouslySetInnerHTML={{ __html:
            `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)};
            gtag('js', new Date());
            gtag('config', 'UA-107758647-2');`
          }} />
          <link rel="manifest" href="/manifest.json" />
         <script async defer crossOrigin="anonymous" src="//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0"></script>
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