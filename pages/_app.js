import App, { Container } from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import stylesheet from '../src/styles/index.less'
import Head from '../src/components/head'
import HeaderContainer from '../src/components/header/HeaderContainer'
import FooterContainer from '../src/components/footer/FooterContainer'

class MyApp extends App {

  render() {
    const { Component, pageProps, reduxStore } = this.props

    return (
      <Container>
        <Provider store={reduxStore}>
          <div>
            <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
            <Head>
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
            </Head>
            <HeaderContainer {...pageProps} />
            <Component {...pageProps} />
            <FooterContainer {...pageProps} />
            {/* <style global jsx>{stylesheet}</style> */}

          </div>
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)
