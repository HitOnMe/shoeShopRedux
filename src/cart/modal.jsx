import React, { Component } from 'react'
import {connect} from 'react-redux';
class Modal extends Component {
  render() {
    return (
        <div className = 'row container mx-auto'>
            {this.renderShoe()}
        </div>
    )
   
  }
  renderShoe = () => {
    const {cart} = this.props;
    return (
        cart.map((product,index) => {
            return (
       /*  <div className = 'col-3' key = {index}>
            <div>name: {product.name}</div>
            <div>alias: {product.alias}</div>
            <div>price</div>
            <div>description</div>
            <div>shortDescription</div>
            <div>quantity</div>
            <div><img src = {product.image}></img></div>
        </div> */
          /*   <div className="card col-4" style={{width: '18rem'}}>
                <img src={product.image}className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.shortDescription}</p>
                    <a href="#" className="btn btn-success">Add to cart</a>
                </div>
            </div> */
            <div className="col-md-4 mb-3">
            <div className="card">
              <img 
                src={product.image}
                className="card-img-top" 
                alt={product.alias} 
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">
                  {product.shortDescription}
                </p>
                <p className="card-text text-danger">
                  Quantity: <strong>{product.quantity}</strong>
                </p>
                <p className="card-text text-success">
                  Price: <strong>{product.price}</strong>
                </p>
                <button 
                  type="button" 
                  className="btn btn-primary" 
                  data-bs-toggle="modal" 
                  data-bs-target="#productModal"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

            )
        })
      
    )
  }
}
const mapStatetoProps = (state) => {
    return {
        cart: state.CartReducer.cart
    }
}
export default connect(mapStatetoProps, null)(Modal)
