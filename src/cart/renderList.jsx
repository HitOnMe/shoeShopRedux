import React from 'react';

export default function RenderList({ cart = [], removeFromCart }) {
  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + (product.price * product.quantity), 0).toFixed(2);
  };

  return (
    <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" aria-modal="true" role="dialog">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasExampleLabel"></h5>
        <h1>Your Cart</h1>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div className="offcanvas-body">
        <div className="mt-3">
          <h4>Total Price: ${calculateTotalPrice()}</h4>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Image</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td><img src={product.image} alt={product.name} style={{ width: '50px' }} /></td>
                <td>${product.price}</td>
                <td>{product.quantity}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => removeFromCart(product.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}