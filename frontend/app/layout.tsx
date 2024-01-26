'use client'

import Header from "./components/Header";
import { MenuStateProvider } from "./utils/menuState";
import Footer from "./components/Footer";

import './global.scss';

export function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US">
      <MenuStateProvider>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </MenuStateProvider>
    </html>
  )
};

export default RootLayout;
