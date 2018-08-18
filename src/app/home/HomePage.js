import React, {Component} from 'react'
import ListProducts from "./ListProducts"

class HomePage extends Component {
    render() {
        return (
            <div className="HomePage">
                <div className="container">
                    <ListProducts/>
                </div>
            </div>
        )
    }
}

export default HomePage