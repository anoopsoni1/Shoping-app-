 import React from 'react';
    const BuyPage = () => {
      const handlePayment = () => {
        alert('Redirecting to payment gateway...');
      };
    
      return (
        <div className="max-w-3xl mx-auto py-12 px-6">
          <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>
    
          <div className="bg-white shadow rounded-lg p-8">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <p className="text-gray-700 mb-6">
              Thank you for choosing our products! Please click the button below to proceed to payment.
            </p>
    
            <button
              onClick={handlePayment}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded transition"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      );
    };
    
    export default BuyPage;
    
