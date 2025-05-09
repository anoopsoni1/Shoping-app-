import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { removefrombuy } from '../Feature/Slice';

const Buy = () => {

  const cartItems = useSelector((state) => state.cart.cartitem);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

    const handleRemove = (id) => {
      dispatch(removefrombuy(id));
      toast.success(`${name} removed from cart!`);
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.address || total==0 ) {
      toast.error('Please Checks  all the thing');
      return;
    }
    toast.success('Order placed successfully!');
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">Billing Information</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Shipping Address</label>
              <input
                name="address"
                value={form.address}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold"
            >
              Place Order
            </button>
          </form>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
          <ul className="divide-y divide-gray-200 mb-4">
            {cartItems.map((item, index) => (
              <li key={index} className="py-3 flex justify-between items-center">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-gray-600">₹{(item.price)} × {item.quantity}</p>
                </div>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                 <button
                  onClick={() => handleRemove(item.id)}
                  className="bg-red-500 text-white py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between text-lg font-semibold border-t pt-4">
            <span>Total:</span>
            <span>₹{total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
