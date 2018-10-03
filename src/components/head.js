import Head from 'next/head'
import { string } from 'prop-types'
import { facebookAppID } from 'config.js'
const defaultDescription = ''
const defaultOGURL = ''
const defaultOGImage = ''

const NextHead = (props) => {
  return (
    <Head>
      <meta charset="UTF-8" />
      <title>{props.title || ''}</title>
      <meta name="description" content={props.description || defaultDescription} />


      <meta property="og:url" content={props.url || defaultOGURL} />
      <meta property="og:title" content={props.title || ''} />
      <meta property="og:description" content={props.description || defaultDescription} />
      <meta property="og:image" content={props.ogImage || defaultOGImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {props.children}


    </Head>
  )
}

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
}

export default NextHead
