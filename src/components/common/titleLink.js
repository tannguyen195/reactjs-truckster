import React, { Component } from 'react'
import { Link } from 'routes'

function changeTitleAddress(title) {
    title = title.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    title = title.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    title = title.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    title = title.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    title = title.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    title = title.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    title = title.replace(/đ/g, "d");
    title = title.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    title = title.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    title = title.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    title = title.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    title = title.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    title = title.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    title = title.replace(/'/g, "");
    title = title.replace(/Đ/g, "D");
    title = title.replace(/-/g, "");
    title = title.replace(/ {2}/g, "");
    return title.toLowerCase().replace(/ /g, "-");
}

class TitleLink extends Component {

    render() {

        const { title, url, id, children } = this.props

        return (
            <div>
                {
                    title && <Link to={url + changeTitleAddress(title) + "--" + id}>
                        <a>
                            {children}
                        </a>
                    </Link>
                }


            </div>
        )
    }
}

export default TitleLink;
