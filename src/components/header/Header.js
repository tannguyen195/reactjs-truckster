import React, { Component } from 'react';
import { Button, Icon, Dropdown, Menu } from 'antd';
import MediaQuery from 'react-responsive'
import SearchBar from '../common/searchBar/SearchBar'

import moment from 'moment'
import stylesheet from './_header.less'
import { Link } from 'routes'
const locationIcon = ('/static/images/location-icon.png')
const unknownUserIcon = ('/static/images/unknown-user-icon.png')
const logo = ('/static/images/logo-horizontal.png')
const logoDevice = ('/static/images/logo.png')

const menu = ({ logOut }) => (
    <Menu>
        <Menu.Item>
            <Link to="/user/profile" className=" Body-1MediumBlackLeft" >
                My profile
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/user/edit" className=" Body-1MediumBlackLeft" >
                Account Settings
        </Link>
        </Menu.Item>
        <Menu.Item>
            <a onClick={logOut} className=" Body-1MediumBlackLeft" >
                Log Out</a>
        </Menu.Item>
    </Menu>
);
class Header extends Component {

    render() {

        const {
            toggleSignInModal,

            history,
            toggleSignUpModal,
            isLoggedIn,
            userData,
            isLoadingGetUser,
            logOut,
            handleOpenMenu,
            visibleDrawer,
            match,

            result,
            onSearchValueChange,
            searchValue
        } = this.props
        return (
            <header className="header-container" >
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                <div style={{ width: visibleDrawer ? '100%' : 0 }} className="menu-drawer">
                    <div className="menu-drawer-wrapper">
                        <div className="menu-drawer-user">

                            {
                                isLoggedIn ?
                                    !isLoadingGetUser && userData ?
                                        <Link to="/user/profile" onClick={handleOpenMenu} className="item Body-1MediumBlackLeft" >
                                            <img alt="avatar"
                                                src={userData.avatar ? userData.avatar : unknownUserIcon} />
                                            <div className="user-info">
                                                <div className="Display-3BlackLeft">
                                                    {userData.name}</div>
                                                <div className='Body-1RegularGrayLeft'>
                                                    Member Since: {moment(userData.create_at).format("MMMM DD,YYYY")}</div>
                                            </div>

                                        </Link> :
                                        <a className="item Body-1MediumBlackLeft" >
                                            <Icon type="loading" />
                                        </a>
                                    :
                                    <div className="menu-drawer-head">
                                        <Button onClick={toggleSignUpModal} className="button-container ButtonWhiteCenter" type="primary" >SIGN UP</Button>
                                        <Button onClick={toggleSignInModal} className="button-container button-container-login ButtonBlackCenter">LOGIN</Button>
                                    </div>
                            }
                        </div>
                        <hr />
                        <Link to="/" className="menu-drawer-city">
                            <div >
                                <img src={locationIcon} alt="city" />
                                <span className="city-name">Denver</span>
                            </div>
                        </Link>
                        <hr />
                        <div className="menu-drawer-body">
                            <div className="menu-drawer-item-group">
                                <Link onClick={handleOpenMenu} className="item Body-2LeftGrey" to="/nearby">
                                    Explore </Link>
                                <Link onClick={handleOpenMenu} className="item Body-2LeftGrey" to="/brewery">
                                    Brewery </Link>
                                <Link onClick={handleOpenMenu} className="item Body-2LeftGrey" to="/truck/cuisine">
                                    Cuisine </Link>
                                <Link onClick={handleOpenMenu} className="item Body-2LeftGrey" to="/help">
                                    Help    </Link>

                            </div>
                            <div className="menu-drawer-item-group">

                                <Link onClick={handleOpenMenu} className="item Body-2LeftGrey" to='/about'>About us</Link>
                                <Link onClick={handleOpenMenu} className="item Body-2LeftGrey" to='/privacy'>Privacy & Terms</Link>
                            </div>
                            {
                                isLoggedIn && <div className="menu-drawer-item-group">
                                    <a onClick={logOut} className="item Body-2LeftGrey" >
                                        Log Out</a>
                                </div>
                            }


                        </div>
                        <div className="menu-drawer-footer CaptionGreyLeft">2018 © Truckster Inc.</div>
                    </div>


                </div>

                <Link to="/">
                    <div className="logo">
                        <MediaQuery maxWidth={768}>
                            {(matches) => {
                                if (matches) {
                                    return <img className="logo-device" alt="truckster logo" src={logoDevice} />
                                } else {
                                    return <img alt="truckster logo" src={logo} />
                                }
                            }}
                        </MediaQuery>

                    </div>
                </Link>
                <Link to="/city">
                    <span className="city">
                        <img src={locationIcon} alt="city" />
                        <span className="Body-1MediumBlackLeft city-name">Denver</span>
                    </span>
                </Link>
                <div className="left">
                    <SearchBar
                        match={match}
                        isHeader={true}
                        history={history}
                        searchValue={searchValue}
                        onSearchValueChange={onSearchValueChange}
                        result={result}
                    />

                    <MediaQuery maxWidth={768}>
                        <div id="media" className="media-header">
                            <div onClick={handleOpenMenu} id={visibleDrawer ? "burger-container-open" : "burger-container"}>
                                <div id="burger">
                                    <span> &nbsp;</span>
                                    <span> &nbsp;</span>
                                    <span> &nbsp;</span>
                                    <span> &nbsp;</span>
                                </div>
                            </div>

                        </div>
                    </MediaQuery>

                    <div className="option">
                        <Link to="/nearby">
                            <div className="item Body-1MediumGreyCenter">Explore</div>
                        </Link>
                        <Link to="/brewery">
                            <div className="item Body-1MediumGreyCenter">Brewery</div>

                        </Link>
                        <Link to="/truck/cuisine">
                            <div className="item Body-1MediumGreyCenter">Cuisine</div>
                        </Link>

                        {
                            isLoggedIn ?
                                !isLoadingGetUser && userData ?
                                    <Dropdown
                                        getPopupContainer={() => document.getElementById('area')}
                                        overlay={menu({ logOut })}>
                                        <span className="dropdown-container">
                                            <a id="area" className="item Body-1MediumBlackLeft" >
                                                {userData.name}
                                                <img alt="avatar"
                                                    className="user-avatar"
                                                    src={userData.avatar ? userData.avatar : unknownUserIcon} />
                                            </a>
                                        </span>
                                    </Dropdown> :
                                    <a className="item Body-1MediumBlackLeft" >
                                        <Icon type="loading" />
                                    </a>

                                : <div className="auth-button">
                                    <Button onClick={toggleSignInModal} className="button-container button-container-login ButtonBlackCenter">LOGIN</Button>
                                    <Button onClick={toggleSignUpModal} className="button-container ButtonWhiteCenter" type="primary" >SIGN UP</Button>
                                </div>
                        }

                    </div>
                </div>

            </header>
        )
    }
}

export default Header;
