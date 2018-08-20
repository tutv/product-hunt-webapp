import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import withAuthentication from "../shared/withAuthentication"
import getHistory from "../../store/getHistory"

const history = getHistory()

class ProductItem extends Component {
    _handleClickVote = (e) => {
        e.preventDefault()

        if (!this.props.isAuthenticated) {
            return history.push('/login')
        }

        const {voted, id} = this.props.product
        if (voted) return

        this.props.onVote(id)
    }

    render() {
        const {id, title, description, category, thumbnail, votes, website, voted} = this.props.product

        return (
            <div className="ProductItem" id={`Product-Item-${id}`}>
                <a className="Inner">
                    <div className="Left">
                        <div className="Thumbnail">
                            <img src={thumbnail} alt="thumb"/>
                        </div>
                    </div>

                    <div className="Right">
                        <div className="Content">
                            <h2 className="Title">{title}</h2>
                            <h3 className="Description">{description}</h3>
                        </div>

                        <div className="Meta">
                            <div className="Categories">
                                <span className="Category">{category}</span>
                            </div>

                            <div className="Actions">
                                <div className="InnerActions">
                                    <div className="Action Link">
                                        <a href={website} target="_blank">
                                            <i className="Icon typcn typcn-link"/>
                                        </a>
                                    </div>

                                    <button onClick={this._handleClickVote}
                                            className={classNames("Action Vote", {voted})}>
                                        <div className="Icon">
                                            <i className="typcn typcn-arrow-sorted-up"/>
                                        </div>
                                        <div className="Number">{votes}</div>
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

ProductItem.propTypes = {
    product: PropTypes.object.isRequired,
    onVote: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
}

export default withAuthentication(ProductItem)
