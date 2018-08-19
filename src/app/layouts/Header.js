import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
    Collapse, DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand, NavbarToggler,
    NavItem,
    NavLink,
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

    render() {
        const {isAuthenticated} = this.props

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
                                        <NavItem>
                                            <NavLink tag={Link} to="/login">Login</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink tag={Link} to="/register">Register</NavLink>
                                        </NavItem>
                                    </Fragment>
                                }

                                {
                                    !!isAuthenticated &&
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>
                                            Options
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem>
                                                Option 1
                                            </DropdownItem>
                                            <DropdownItem>
                                                Option 2
                                            </DropdownItem>
                                            <DropdownItem divider/>
                                            <DropdownItem>
                                                Reset
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
}

export default withAuthentication(Header)
