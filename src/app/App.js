import React, {Component} from 'react'
import Header from "./layouts/Header"

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <h1 style={{textAlign: 'center'}}>Product Hunt</h1>
            </div>
        )
    }
}

export default App
