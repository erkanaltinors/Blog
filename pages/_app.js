import '../styles/globals.css'
import UIkit from 'uikit'
import Icons from '../uikit-custom-theme/uikit/dist/js/uikit-icons'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    UIkit.use(Icons)
  })
  return <Component {...pageProps} />
}

export default MyApp
