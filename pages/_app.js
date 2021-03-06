import App, { Container } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import { initializeStore } from '../store'
import withRedux from "next-redux-wrapper";
import HeaderContainer from '../src/components/header/HeaderContainer'
import FooterContainer from '../src/components/footer/FooterContainer'

import stylesheet from '../src/styles/index.less'
import _categoryCard from '../src/components/common/categoryCard/_categoryCard.less'
import _eventCard from '../src/components/common/eventCard/_eventCard.less'
import _truckCard from '../src/components/common/truckCard/_truckCard.less'
import _truckNewCard from '../src/components/common/truckNewCard/_truckNewCard.less'
import _pairingCard from '../src/components/common/pairingCard/_pairingCard.less'
import _section from '../src/components/common/section/_section.less'
import _placeholder from '../src/components/common/placeholder/_placeholder.less'
import _announceModal from '../src/components/common/announceModal/_announceModal.less'
import _searchBar from '../src/components/common/searchBar/_searchBar.less'
import _customCarousel from '../src/components/common/CustomCarousel/_customCarousel.less'
import _calendar from '../src/components/common/calendar/_calendar.less'
import _shareModal from '../src/components/common/shareModal/_shareModal.less'
import _userReview from '../src/components/common/userReview/_userReview.less'
import _renderContainer from '../src/components/common/renderContainer/_renderContainer.less'
import _reviewModify from '../src/components/common/reviewModify/_reviewModify.less'
import _reviewSummary from '../src/components/common/reviewSummary/_reviewSummary.less'


class MyApp extends App {

  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps };
  }
  render() {
    const { Component, pageProps, store } = this.props

    return (
      <Container>
        <Provider store={store}>
          <div>
            <style dangerouslySetInnerHTML={{
              __html: stylesheet +
                _eventCard +
                _truckCard +
                _truckNewCard +
                _pairingCard +
                _section +
                _placeholder +
                _announceModal +
                _searchBar +
                _categoryCard +
                _customCarousel +
                _calendar +
                _userReview +
                _renderContainer +
                _reviewModify +
                _reviewSummary +
                _shareModal
            }} />
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

export default withRedux(initializeStore)(MyApp)
