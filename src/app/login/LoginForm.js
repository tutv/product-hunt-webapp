import React, {Component} from 'react'
import {login} from "../../services/FakeAPIServices"
import * as AuthServices from "../../services/AuthServices"
import getHistory from "../../store/getHistory"


class LoginForm extends Component {
    state = {
        email: '',
        password: ''
    }

    _handleChangeInput = field => e => {
        const {value} = e.target

        this.setState({
            [field]: value
        })
    }

    _handleSubmitForm = (e) => {
        e.preventDefault()

        const {email, password} = this.state

        login({email, password})
            .then(response => {
                const {success, data} = response

                if (success) {
                    const {profile, accessToken} = data
                    AuthServices.setUserData(profile)
                    AuthServices.setAccessToken(accessToken)

                    const history = getHistory()
                    history.push('/')
                }
            })
            .catch(error => {
                const message = error.message || ''

                window.alert(message)
            })
    }

    render() {
        const {email, password} = this.state

        return (
            <div className="LoginForm">
                <div className="Top">
                    <div className="Logo">
                        <img src="/assets/images/kitty.webp" alt="Kitty"/>
                    </div>
                    <h1 className="Title">Login to Product Hunt</h1>
                    <div className="Description">We're a community of product people here to geek out and discover new,
                        interesting products.
                    </div>
                </div>

                <form className="Form"
                      onSubmit={this._handleSubmitForm}>
                    <div className="form-group">
                        <input
                            placeholder="Your email"
                            onChange={this._handleChangeInput('email')}
                            value={email}
                            type="email" className="form-control"/>
                    </div>

                    <div className="form-group">
                        <input
                            placeholder="Your password"
                            onChange={this._handleChangeInput('password')}
                            value={password}
                            type="password" className="form-control"/>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginForm