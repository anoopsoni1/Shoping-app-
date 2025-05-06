import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removefromcart } from '../Feature/Slice';
import { toast } from 'react-toastify';

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartitem);

  const handleRemove = (id) => {
    dispatch(removefromcart(id));
    toast.success(`${name} removed from cart!`);
  };
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-8 max-w-5xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                  <div>
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-gray-600">₹{item.price} × {item.quantity}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 text-right">
            <h2 className="text-2xl font-bold">Total: ₹{(total.toFixed(2))}</h2>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
