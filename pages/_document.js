import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        {/* <link rel="icon" href="../public/favicon.ico"/> */}
      {/* <!-- Meta Pixel Code --> */}
      <script dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '7044360862293046');
          fbq('track', 'PageView');`}} />

        <noscript dangerouslySetInnerHTML={{ __html: `<img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=7044360862293046&ev=PageView&noscript=1"
        />`}}/>
        {/* <!-- End Meta Pixel Code --> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
