import React, {Component} from 'react'
import ProductItem from "./ProductItem"

class ListProducts extends Component {
    render() {
        return (
            <div className="ListProducts">
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </div>
        )
    }
}

export default ListProducts
