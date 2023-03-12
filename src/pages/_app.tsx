import { Montserrat } from '@next/font/google'
import '../styles/globals.css'

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700', '800'],
  subsets: ['latin'],
})

function MyApp({ Component, pageProps }) {
  return (
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
