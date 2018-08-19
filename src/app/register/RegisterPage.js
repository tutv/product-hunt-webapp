import React, {Component} from 'react'
import RegisterForm from "./RegisterForm"

class RegisterPage extends Component {
    render() {
        return (
            <div className="RegisterPage">
                <div className="container">
                    <RegisterForm/>
                </div>
            </div>
        )
    }
}

export default RegisterPage
