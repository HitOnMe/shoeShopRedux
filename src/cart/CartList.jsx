import React from 'react'
import data from '../data/data.json'
export default function CartList({setSelectedProduct}) {
    const renderShoe = () => {
        return (
            data.map((product,index) => {
                return (
                <div className="col-md-4 mb-3" key={index}>
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
                     onClick = {() =>{setSelectedProduct(product)}}
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
        return (
            <div className = 'row container mx-auto'>
                {renderShoe()}
            </div>
        )      
      }
