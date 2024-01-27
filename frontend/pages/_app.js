import Page from '../src/components/Page';
import { MenuStateProvider } from '../src/utils/menuState';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

// TODO  move this file or something
import '../app/global.scss';
 
export default function MyApp({ Component, pageProps }) {
  return (
    <MenuStateProvider>
      <Page>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Page>
    </MenuStateProvider>
  )
}
