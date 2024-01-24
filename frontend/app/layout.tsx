import Header from "./components/Header"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US">
      <body>
        <Header />
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  )
};
