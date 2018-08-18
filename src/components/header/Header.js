import React, { Component } from 'react';
import { Button, Icon, Dropdown, Menu } from 'antd';
import MediaQuery from 'react-responsive'
import SearchBar from '../common/searchBar/SearchBar'

import moment from 'moment'

import { Link } from 'routes'
const locationIcon = ('/static/images/location-icon.png')
const unknownUserIcon = ('/static/images/unknown-user-icon.png')
const logo = ('/static/images/logo-horizontal.png')
const logoDevice = ('/static/images/logo.png')

const menu = ({ logOut }) => (
    <Menu>
        <Menu.Item>
            <Link to="/user">
                <a className=" Body-1MediumBlackLeft">My profile</a>

            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/edit"  >
                <a className=" Body-1MediumBlackLeft">Account Settings   </a>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <a onClick={logOut} className=" Body-1MediumBlackLeft" >
                Log Out</a>
        </Menu.Item>
    </Menu>
);
const menuCity = () => (
    <Menu>

        <Menu.Item>
            <Link to="/food-truck/co/denver"  >
                <a className=" Body-1MediumBlackLeft">Denver </a>
            </Link>
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

                <div style={{ width: visibleDrawer ? '100%' : 0 }} className="menu-drawer">
                    <div className="menu-drawer-wrapper">
                        <div className="menu-drawer-user">

                            {
                                isLoggedIn ?
                                    !isLoadingGetUser && userData ?
                                        <Link to="/user"  >
                                            <a onClick={handleOpenMenu} className="item Body-1MediumBlackLeft">
                                                <img alt="avatar"
                                                    src={userData.avatar ? userData.avatar : unknownUserIcon} />
                                                <div className="user-info">
                                                    <div className="Display-3BlackLeft">
                                                        {userData.name}</div>
                                                    <div className='Body-1RegularGrayLeft'>
                                                        Member Since: {moment(userData.create_at).format("MMMM DD,YYYY")}</div>
                                                </div>
                                            </a>


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

                        <Dropdown
                            getPopupContainer={() => document.getElementById('area1')}
                            overlay={menuCity()}>
                            <span className="dropdown-container">
                                <Link to="/co" >
                                    <a id="area1" className="menu-drawer-city">
                                        <img src={locationIcon} alt="city" />
                                        <span className="city-name">All cities</span>
                                    </a>
                                </Link>
                            </span>
                        </Dropdown>



                        <hr />
                        <div className="menu-drawer-body">
                            <div className="menu-drawer-item-group">
                                <Link to="/nearby">
                                    <a onClick={handleOpenMenu} className="item Body-2LeftGrey">
                                        Explore  </a>
                                </Link>
                                <Link to="/brewery/co/denver">
                                    <a onClick={handleOpenMenu} className="item Body-2LeftGrey">
                                        Brewery  </a>
                                </Link>
                                <Link to="/food-truck/co/denver/all">
                                    <a onClick={handleOpenMenu} className="item Body-2LeftGrey">
                                        Food Truck  </a>
                                </Link>
                                <Link to="/help">
                                    <a onClick={handleOpenMenu} className="item Body-2LeftGrey">
                                        Help  </a>
                                </Link>

                            </div>
                            <div className="menu-drawer-item-group">

                                <Link to='/about'>
                                    <a onClick={handleOpenMenu} className="item Body-2LeftGrey">
                                        About us </a>
                                </Link>
                                <Link to='/privacy'>
                                    <a onClick={handleOpenMenu} className="item Body-2LeftGrey">
                                        Privacy & Terms </a></Link>
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

                    <MediaQuery maxWidth={768}>
                        <img width={50} className="logo-device" alt="truckster logo" src={logoDevice} />
                    </MediaQuery>


                </Link>

                <Link to="/">
                    <a className="logo">
                        <MediaQuery maxWidth={768}>
                            {(matches) => {
                                if (!matches) {
                                    return <img alt="truckster logo" src={logo} />
                                }
                                return null
                            }}
                        </MediaQuery>

                    </a>
                </Link>
                <Dropdown
                    getPopupContainer={() => document.getElementById('area2')}
                    overlay={menuCity()}>
                    <span className="dropdown-container">
                        <Link to="/co" >
                            <a id="area2" className="city">
                                <img src={locationIcon} alt="city" />
                                <span className="Body-1MediumBlackLeft city-name">All cities</span>
                            </a>
                        </Link>
                    </span>
                </Dropdown>


                <div className="left">
                    <SearchBar
                        match={match}
                        isHeader={true}
                        history={history}
                        searchValue={searchValue}
                        onSearchValueChange={onSearchValueChange}
                        result={result}
                    />


                    <div className="media-header">
                        <div onClick={handleOpenMenu} id={visibleDrawer ? "burger-container-open" : "burger-container"}>
                            <div id="burger">
                                <span> &nbsp;</span>
                                <span> &nbsp;</span>
                                <span> &nbsp;</span>
                                <span> &nbsp;</span>
                            </div>
                        </div>
                    </div>



                    <div className="option-header">
                        <Link to="/nearby">
                            <a className="item Body-1MediumGreyCenter">Explore</a>
                        </Link>
                        <Link to="/brewery/co/denver">
                            <a className="item Body-1MediumGreyCenter">Brewery</a>

                        </Link>
                        <Link to="/food-truck/co/denver/all">
                            <a className="item Body-1MediumGreyCenter">Food truck</a>
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
