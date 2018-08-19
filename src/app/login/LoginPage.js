import React, {Component} from 'react'
import LoginForm from "./LoginForm"

class LoginPage extends Component {
    render() {
        return (
            <div className="LoginPage">
                <div className="container">
                    <LoginForm/>
                </div>
            </div>
        )
    }
}

export default LoginPage