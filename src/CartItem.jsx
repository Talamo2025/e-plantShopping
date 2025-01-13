import React {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './CartItem.css';
import { addItem, removeItem, updateQuantity, clearCart } from './CartSlice';
import TotalCost from "./TotalCost";

const CartItem = ({ onContinueShopping }) => {
  const [showItems, setShowItems] = useState(false);
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

   const handleToggleItems = () => {
       console.log("handleToggleItems called");
       setShowItems(!showItems);
   };

   const handleAddToCart = (index) => {
       if (venueItems[index].name === "Auditorium Hall (Capacity:200)" && venueItems[index].quantity >= 3) {
         return;
       }
       dispatch(incrementQuantity(index));
     };

  removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);

    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
       itemToUpdate.quantity = quantity;
}
  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
 
  };

  const handleContinueShopping = (e) => {
   
  };



  const handleIncrement = (item) => {
     dispatch(incrementAvQuantity(index));

  };

  const handleDecrement = (item) => {
    dispatch(decrementitemQuantity(index));

  };

  const handleRemove = (item) => {
     if (venueItems[index].quantity > 0) {
         dispatch(decrementQuantity(index));
      }
  };

  // Calculate total cost based on quantity for an item
 
    const calculateTotalCost = (item) => {
     let totalCost = 0;
       if (section === "venue") {
           venueItems.forEach((item) => {
               totalCost += item.cost * item.quantity;
           });
       } else if (section === "av") {
           avItems.forEach((item) => {
               totalCost += item.cost * item.quantity;
           });
       } else if (section === "meals") {
           mealsItems.forEach((item) => {
               if (item.selected) {
                 totalCost += item.cost * numberOfPeople;
               }
             });
       }
   return totalCost;
  };
   const venueTotalCost = calculateTotalCost("venue");
const avTotalCost = calculateTotalCost("av");
const mealsTotalCost = calculateTotalCost("meals");
   const navigateToProducts = (idType) => {
       if (idType == '#venue' || idType == '#addons' || idType == '#meals') {
         if (showItems) { // Check if showItems is false
           setShowItems(!showItems); // Toggle showItems to true only if it's currently false
         }
       }
     }
     const totalCosts = {
       venue: venueTotalCost,
       av: avTotalCost,
       meals: mealsTotalCost,
   };

  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1">Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


