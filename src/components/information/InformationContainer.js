import React, { Component } from 'react';
import Information from './Information'
import CircularJSON from 'circular-json'
import Head from '../head'
import { getPageData } from 'global.js'

export default class InformationContainer extends Component {

    static async getInitialProps({ reduxStore, req, query }) {
        let infoPage = null, renderPage = null


        infoPage = (await getPageData())
        renderPage = CircularJSON.parse(infoPage).data[0]
        if (query.slug) {
            CircularJSON.parse(infoPage).data.forEach(element => {
                if (element.slug == query.slug)
                    renderPage = element
            });
        }
        return {
            infoPage, renderPage, query
        }
    }


    render() {
        const { infoPage, renderPage } = this.props

        return (
            <div >
                {
                    infoPage && renderPage &&
                    <div>
                        <Head />
                        <Information parsedInfoPage={CircularJSON.parse(infoPage)} renderPage={renderPage} />
                    </div>
                }
            </div>
        )
    }
}
