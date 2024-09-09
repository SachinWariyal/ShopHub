import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotal, removeFromCart, clearCart } from '../redux/cartSlice'; 
import './Cart.css'; 

const Cart = () => {
  const { cartItems, totalPrice } = useSelector((state) => state.cart); 
  const dispatch = useDispatch();
  const [popupMessage, setPopupMessage] = useState(''); 
  const [popupVisible, setPopupVisible] = useState(false);

  // Show popup notification
  const showPopup = (message) => {
    setPopupMessage(message);
    setPopupVisible(true);
    setTimeout(() => setPopupVisible(false), 3000);
  };

  // Handle remove item from cart
  const handleDelete = (id) => {
    dispatch(removeFromCart(id)); 
    showPopup('Item removed from cart!');
  };

  // Handle checkout
  const handleCheckout = () => {
    dispatch(clearCart());
    showPopup('Checkout successful!');
  };

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems, dispatch]);

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-details">
                <img src={item.images[0]} alt={item.title} />
                <div>
                  <h2>{item.title}</h2>
                  <p>${item.price}</p>
                </div>
              </div>
              <button
                className="delete-button"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="cart-summary">
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button className="checkout-button" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      )}

      {popupVisible && <div className="popup">{popupMessage}</div>}
    </div>
  );
};

export default Cart;
