import React from 'react'
import { connect } from 'react-redux'
import { startClock, serverRenderClock } from '../store'
import AboutTruckster from '../components/staticPage/AboutTruckster'

class Index extends React.Component {
  static getInitialProps({ reduxStore, req }) {
    const isServer = !!req
    reduxStore.dispatch(serverRenderClock(isServer))

    return {}
  }

  componentDidMount() {
    const { dispatch } = this.props
    this.timer = startClock(dispatch)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <AboutTruckster />
    )
  }
}

export default connect()(Index)
