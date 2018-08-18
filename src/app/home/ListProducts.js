import React, {Component} from 'react'
import ProductItem from "./ProductItem"
import {getProducts, voteProduct} from "../../services/FakeAPIServices"

class ListProducts extends Component {
    state = {
        products: [],
        loading: false
    }

    componentDidMount() {
        this._fetchListProducts()
    }

    _fetchListProducts = () => {
        this.setState({
            loading: true
        })

        getProducts()
            .then(response => {
                const {success, data} = response

                const updateState = {loading: false}
                if (success) {
                    updateState.products = data
                }

                this.setState(updateState)
            })
            .catch(error => {
                const message = error.message || 'Something went wrong!'
                window.alert(message)

                this.setState({loading: false})
            })
    }

    _handleVoteProduct = (id) => {
        voteProduct(id)
            .then(() => {
                this.setState(({products}) => ({
                    products: products.map(product => {
                        if (product.id !== id) return product

                        return {
                            ...product,
                            votes: product.votes + 1,
                            voted: true
                        }
                    })
                }))
            })
            .catch(error => {
                const message = error.message || 'Something went wrong!'
                window.alert(message)
            })
    }

    render() {
        return (
            <div className="ListProducts">
                {
                    this.state.products.map(product => {
                        return <ProductItem
                            onVote={this._handleVoteProduct}
                            product={product} key={product.id}/>
                    })
                }
            </div>
        )
    }
}

export default ListProducts
