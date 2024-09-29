import React, { useState } from 'react';
import swal from 'sweetalert';

export default function Modal({ state, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type) => {
    if (type === 'increment') {
      setQuantity(prevQuantity => prevQuantity + 1);
    } else if (type === 'decrement' && quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

 const showOption = () => {
  swal({
    title: "Are you sure to buy this product?",
    text: "Once confirmed, this product will be added to your cart!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willAdd) => {
    if (willAdd) {
      addToCart({ ...state, quantity }); // Sử dụng quantity từ modal
      swal("Product added to your cart", {
        icon: "success",
      });
    } else {
      swal("See you again later");
    }
  });
};

  if (!state) return null;

  return (
    <div className="modal fade" id="productModal" tabIndex={-1} aria-labelledby="productModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="productModalLabel">{state.name}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-5">
                <img src={state.image} alt="Product" className="img-fluid" />
              </div>
              <div className="col-md-7">
                <h4>{state.name}</h4>
                <p>{state.shortDescription}</p>
                <div className="d-flex align-items-center">
                  <span>Số lượng:</span>
                  <div className="input-group ms-3" style={{ width: 120 }}>
                    <button className="btn btn-outline-secondary" type="button" onClick={() => handleQuantityChange('decrement')}>-</button>
                    <input type="text" className="form-control text-center" value={quantity} readOnly />
                    <button className="btn btn-outline-secondary" type="button" onClick={() => handleQuantityChange('increment')}>+</button>
                  </div>
                </div>
                <div>Tổng giá: <strong>{(state.price * quantity).toFixed(2)}$</strong></div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
            <button type="button" className="btn btn-primary" onClick={showOption}>Thêm vào giỏ hàng</button>
          </div>
        </div>
      </div>
    </div>
  );
}