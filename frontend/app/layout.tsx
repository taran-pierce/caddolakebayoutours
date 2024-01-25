'use client'

import Header from "./components/Header";
import { MenuStateProvider } from "./utils/menuState";

import './global.scss';

export default function RootLayout({
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
          <footer>Footer</footer>
        </body>
      </MenuStateProvider>
    </html>
  )
};
