import React, { Component } from 'react';
import Information from './Information'
import CircularJSON from 'circular-json'
import Head from '../head'
import { getPageData } from 'global.js'
import _information from './_information.less'
export default class InformationContainer extends Component {

    static async getInitialProps({ reduxStore, req, query, res }) {
        let infoPage = null, renderPage = null, title = "The Official Truckster Blog - Fun, Food & Drinks",
            queryList = []

        infoPage = (await getPageData())
        renderPage = CircularJSON.parse(infoPage).data

        if (query.slug) {
            CircularJSON.parse(infoPage).data.forEach(element => {
                queryList.push(element.slug)
                if (element.slug === query.slug) {
                    renderPage = [element]
                    title = element.title.rendered + ' - Truckter'

                }
            });
            if (!queryList.includes(query.slug)) {
                ctx.res.writeHead(301, { Location: `/info` })
                ctx.res.end()
            }
        }
        return {
            infoPage, renderPage, query, title
        }
    }


    render() {
        const { infoPage, renderPage, title } = this.props

        return (
            <div >
                {
                    infoPage && renderPage &&
                    <div>
                        <style dangerouslySetInnerHTML={{ __html: _information }} />
                        <Head
                            url="https://gotruckster.com/blog"
                            title={title}
                            description={renderPage[0].content.rendered.slice(renderPage[0].content.rendered.indexOf("<p>", 2) + 3, renderPage[0].content.rendered.indexOf(".</p>", 1))}
                            ogImage={renderPage[0].content.rendered.slice(renderPage[0].content.rendered.indexOf("https:"), renderPage[0].content.rendered.indexOf(".jpg") + 4)}

                        >
                            <meta property="og:locale" content="en_US" />
                            <meta property="og:type" content="article" /></Head>
                        <Information {...this.props} parsedInfoPage={CircularJSON.parse(infoPage)} renderPage={renderPage} />
                    </div>
                }
            </div>
        )
    }
}
