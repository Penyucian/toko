import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Head>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet" />  
    </Head>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
