import NextHead from 'next/head'
import { string } from 'prop-types'
import { facebookAppID } from 'config.js'
const defaultDescription = ''
const defaultOGURL = ''
const defaultOGImage = ''

const Head = (props) => {
  return (
    <NextHead>
      <meta charset="UTF-8" />
      <title>{props.title || ''}</title>
      <meta name="description" content={props.description || defaultDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
      <link rel="apple-touch-icon" href="/static/touch-icon.png" />
      <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
      <link rel="icon" href="/static/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,500,700,800,900" rel="stylesheet" />
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

      <meta property="og:url" content={props.url || defaultOGURL} />
      <meta property="og:title" content={props.title || ''} />
      <meta property="og:description" content={props.description || defaultDescription} />
      <meta property="og:image" content={props.ogImage || defaultOGImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {props.children}
      <meta name="p:domain_verify" content="2897f8053dbcc8124a8b6e082a3e6a37" />
      <meta property={`fb:${facebookAppID}`} content="APPID" />

    </NextHead>
  )
}

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
}

export default Head
