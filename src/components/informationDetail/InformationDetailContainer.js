import React, { Component } from 'react';
import InformationDetail from './InformationDetail'
import CircularJSON from 'circular-json'
import Head from '../head'
import { getPageDetail, getPageData } from 'global.js'
import _informationDetail from './_informationDetail.less'
export default class InformationContainer extends Component {

    static async getInitialProps({ reduxStore, req, query, res }) {
        let infoPage = null, blogDetail = null,
            blogs = null, renderBlogs = null
        blogs = (await getPageData(1))
        renderBlogs = CircularJSON.parse(blogs).data

        if (query.slug) {
            infoPage = (await getPageDetail(query.slug))
        }
        blogDetail = CircularJSON.parse(infoPage).data

        return {
            renderBlogs,
            blogDetail

        }
    }


    render() {
        const { renderBlogs, blogDetail } = this.props
        return (
            <div >
                <style dangerouslySetInnerHTML={{ __html: _informationDetail }} />
                {
                    renderBlogs && blogDetail &&
                    <div>

                        <Head
                            url="https://gotruckster.com/blog"
                            title={blogDetail[0].title.rendered}
                            description={blogDetail[0].content.rendered.slice(blogDetail[0].content.rendered.indexOf("<p>", 2) + 3, blogDetail[0].content.rendered.indexOf(".</p>", 1))}
                            ogImage={blogDetail[0].content.rendered.slice(blogDetail[0].content.rendered.indexOf("https:"), blogDetail[0].content.rendered.indexOf(".jpg") + 4)}

                        >
                            <meta property="og:locale" content="en_US" />
                            <meta property="og:type" content="article" /></Head>
                        <InformationDetail {...this.props} parsedInfoPage={renderBlogs} blogDetail={blogDetail} />
                    </div>
                }
            </div>
        )
    }
}
