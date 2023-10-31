import '../styles/globals.css'
import Script from 'next/script'
function MyApp({ Component, pageProps }) {
  return (
    <>


      <Script src="https://www.googletagmanager.com/gtag/js?id=G-YSET7HPTTL" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-YSET7HPTTL');
      `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
