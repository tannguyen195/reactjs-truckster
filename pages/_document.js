import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta name="google-site-verification" content="W204RWXwNhuLH3zXanF_pqetzYMSwaH62yOO4evoSyw" />
                    <script dangerouslySetInnerHTML={{
                        __html: `(function (w, d, s, l, i) {
          w[l] = w[l] || []; w[l].push({
            'gtm.start':
          new Date().getTime(), event: 'gtm.js'
      }); var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
          'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', 'GTM-5VKZ6ZK');`}} />

                    <noscript dangerouslySetInnerHTML={{ __html: `  <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5VKZ6ZK" height="0" width="0" style="display:none;visibility:hidden"></iframe>` }} />
                    <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,500,700,800,900" rel="stylesheet" />
                    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}