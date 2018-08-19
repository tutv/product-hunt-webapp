import React, {Component} from 'react'
import * as AuthServices from "../../services/AuthServices"

export default WrappedComponent => class WithAuthentication extends Component {
    static displayName = 'withAuthentication(' + (WrappedComponent.displayName || WrappedComponent.name) + ')'

    state = {
        isAuthenticated: AuthServices.isAuthenticatedUser(),
        user: AuthServices.getUserData()
    }

    componentDidMount() {
        AuthServices.subscribe(this._handleOnChangeAuth)
    }

    componentWillUnmount() {
        AuthServices.unsubscribe(this._handleOnChangeAuth)
    }

    _handleOnChangeAuth = () => {
        this.setState({
            isAuthenticated: AuthServices.isAuthenticatedUser(),
            user: AuthServices.getUserData()
        })
    }

    render() {
        return <WrappedComponent logout={AuthServices.logout} {...this.state}/>
    }
}
