import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N2J6Z8N4');`}
        </Script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        {/* <link rel="icon" href="../public/favicon.ico"/> */}

      </Head>
      <body>

        <Main />
        <NextScript />
        <noscript
          dangerouslySetInnerHTML={{
            __html:`
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N2J6Z8N4"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>`
          }} />
        {/* <!-- End Google Tag Manager (noscript) */}
      </body>
    </Html>
  )
}
