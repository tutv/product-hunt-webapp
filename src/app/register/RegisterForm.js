import React, {Component} from 'react'
import {register} from "../../services/FakeAPIServices"
import getHistory from "../../store/getHistory"

class RegisterForm extends Component {
    state = {
        email: '',
        password: '',
        confirmPassword: ''
    }

    _handleSubmitForm = e => {
        e.preventDefault()

        const {email, password} = this.state;

        register({email, password})
            .then(response => {
                const {success} = response

                if (success) {
                    const history = getHistory()
                    history.push('/')
                }
            })
            .catch(error => {
                const message = error.message || ''
                window.alert(message)
            })
    }

    _handleChangeInput = field => e => {
        const {value} = e.target

        this.setState({
            [field]: value
        })
    }

    render() {
        const {email, password, confirmPassword} = this.state

        return (
            <div className="RegisterForm">
                <div className="Top">
                    <div className="Logo">
                        <img src="/assets/images/kitty.webp" alt="Kitty"/>
                    </div>
                    <h1 className="Title">Register to Product Hunt</h1>
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
                        <input
                            placeholder="Confirm password"
                            onChange={this._handleChangeInput('confirmPassword')}
                            value={confirmPassword}
                            type="password" className="form-control"/>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default RegisterForm
