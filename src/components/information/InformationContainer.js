import React, { Component } from 'react';
import Information from './Information'
import CircularJSON from 'circular-json'
import Head from '../head'
import { getPageData } from 'global.js'
import _information from './_information.less'
export default class InformationContainer extends Component {

    static async getInitialProps({ reduxStore, req, query }) {
        let infoPage = null, renderPage = null, title = "The Official Truckster Blog - Fun, Food & Drinks"

        infoPage = (await getPageData())
        renderPage = CircularJSON.parse(infoPage).data[0]

        if (query.slug) {
            CircularJSON.parse(infoPage).data.forEach(element => {
                if (element.slug == query.slug) {
                    renderPage = element
                    title = element.title.rendered + ' - Truckter'
                }
            });

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
                            url="https://gotruckster.com/"
                            title={title}
                            description={renderPage.content.rendered.slice(renderPage.content.rendered.indexOf("<p>", 2) + 3, renderPage.content.rendered.indexOf(".</p>", 1))}
                            ogImage={renderPage.content.rendered.slice(renderPage.content.rendered.indexOf("https:"), renderPage.content.rendered.indexOf(".jpg") + 4)}

                        >
                            <meta property="og:locale" content="en_US" />
                            <meta property="og:type" content="article" /></Head>
                        <Information parsedInfoPage={CircularJSON.parse(infoPage)} renderPage={renderPage} />
                    </div>
                }
            </div>
        )
    }
}
