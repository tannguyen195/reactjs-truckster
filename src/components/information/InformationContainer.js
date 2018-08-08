import React, { Component } from 'react';
import Information from './Information'
import axios from 'axios';
import CircularJSON from 'circular-json'
import Head from '../head'
import { getPageData } from 'global.js'

export default class InformationContainer extends Component {

    static async getInitialProps({ reduxStore, req, query }) {
        let infoPage = null, renderPage = null, parsedInfoPage = null


        infoPage = (await getPageData())

        renderPage = CircularJSON.parse(await getPageData()).data[0]
        if (query.slug) {

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
