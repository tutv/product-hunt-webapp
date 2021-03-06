import React, {Component} from 'react'
import Header from "./layouts/Header"
import LoginPage from "./login/LoginPage"
import {Route} from "react-router-dom"
import HomePage from "./home/HomePage"
import RegisterPage from "./register/RegisterPage"

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>

                <div className="Main">
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/login' component={LoginPage}/>
                    <Route path='/register' component={RegisterPage}/>
                </div>
            </div>
        )
    }
}

export default App
