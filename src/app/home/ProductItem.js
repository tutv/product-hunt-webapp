import React, {Component} from 'react'

class ProductItem extends Component {
    render() {
        return (
            <div className="ProductItem">
                <a className="Inner">
                    <div className="Left">
                        <div className="Thumbnail">
                            <img src="/demo/products/1-thumb.gif" alt="thumb"/>
                        </div>
                    </div>

                    <div className="Right">
                        <div className="Content">
                            <h2 className="Title">Make my persona</h2>
                            <h3 className="Description">A free buyer persona generator</h3>
                        </div>

                        <div className="Meta">
                            <div className="Categories">
                                <a href="#" className="Category">Marketing</a>
                            </div>

                            <div className="Actions">
                                <div className="InnerActions">
                                    <div className="Action Link">
                                        <a href="#" target="_blank">
                                            <i className="Icon typcn typcn-link"/>
                                        </a>
                                    </div>

                                    <button className="Action Vote">
                                        <div className="Icon">
                                            <i className="typcn typcn-arrow-sorted-up"/>
                                        </div>
                                        <div className="Number">604</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        )
    }
}

export default ProductItem
