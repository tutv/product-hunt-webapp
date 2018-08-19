import React, {Component, Fragment} from 'react'
import {Link, NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
    Collapse, DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand, NavbarToggler,
    NavItem,
    UncontrolledDropdown
} from "reactstrap"
import withAuthentication from "../shared/withAuthentication"

class Header extends Component {
    state = {
        isOpen: false
    }

    _toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    _handleClickLogout = e => {
        e.preventDefault()
        this.props.logout()
    }

    render() {
        const {isAuthenticated, user} = this.props

        return (
            <div className='Header'>
                <Navbar expand="md">
                    <div className="container">
                        <NavbarBrand tag={Link} to="/">
                            <img src="/assets/images/logo.png" alt="Logo"/>
                        </NavbarBrand>
                        <NavbarToggler onClick={this._toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                {
                                    !isAuthenticated &&
                                    <Fragment>
                                        <NavItem className="ButtonNav">
                                            <NavLink activeClassName="active" className="nav-link" to="/login">Login</NavLink>
                                        </NavItem>
                                        <NavItem className="ButtonNav">
                                            <NavLink activeClassName="active" className="nav-link" to="/register">Register</NavLink>
                                        </NavItem>
                                    </Fragment>
                                }

                                {
                                    !!isAuthenticated &&
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>
                                            <img className="Avatar" src={user.avatar} alt={user.name}/>
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem>
                                                Settings
                                            </DropdownItem>
                                            <DropdownItem divider/>
                                            <DropdownItem onClick={this._handleClickLogout}>
                                                Logout
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                }
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        )
    }
}

Header.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
}

export default withAuthentication(Header)
