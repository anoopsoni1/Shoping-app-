import React from "react";

const Cart = ({ cartAllProduct, setCartAllProduct }) => {
  console.log("cartAllProduct", cartAllProduct);

  const handleIncrement = (id) => {
    setCartAllProduct((prevCart) =>
      prevCart.map((item) =>
        item?.id === id ? { ...item, count: item?.count + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCartAllProduct((prevCart) =>
      prevCart.map((item) =>
        item?.id === id && item.count > 1
          ? { ...item, count: item?.count - 1 }
          : item
      )
    );
  };

  const handleDeleteItem = (id) => {
    const filteredItem = cartAllProduct?.filter((item) => item?.id !== id);
    setCartAllProduct(filteredItem);
  };

  return (
    <div className="w-full px-4">
      <div className="flex flex-col gap-4 mt-4">
        {cartAllProduct?.map((product) => (
          <div
            className="flex flex-col md:flex-row items-start md:items-center border rounded-lg p-4 gap-4"
            key={product?.id}
          >
            <div>
              <img
                src={product?.img}
                alt={product?.model}
                className="w-28 h-28 object-cover rounded-md"
              />
            </div>

            <div className="flex flex-col md:flex-row justify-between w-full gap-4">
              <div className="flex-1 space-y-1">
                <h3 className="text-lg font-semibold truncate">
                  {product?.model?.toUpperCase()}
                </h3>
                <p className="text-base font-medium text-gray-800">
                  ₹ {product?.price}
                </p>
                <p className="text-sm text-gray-600 font-semibold">{product?.space}</p>
                <p className="text-sm text-gray-600 font-semibold">{product?.camera}</p>
                <p className="text-sm text-gray-700">
                  Total: ₹{product?.price * product?.count}
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <button
                    className={`px-2 py-1 border rounded ${
                      product?.count <= 1
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-gray-200"
                    }`}
                    onClick={() => handleDecrement(product?.id)}
                    disabled={product?.count <= 1}
                  >
                    -
                  </button>
                  <span>{product?.count}</span>
                  <button
                    className="px-2 py-1 border rounded hover:bg-gray-200"
                    onClick={() => handleIncrement(product?.id)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-between items-end text-right">
                <p className="text-sm text-gray-700">{product?.description}</p>
                <button
                  className="mt-2 text-red-600 hover:text-red-800"
                  onClick={() => handleDeleteItem(product?.id)}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        ))}

        {cartAllProduct?.length === 0 && (
          <div className="w-full text-center py-8">
            <h1 className="text-xl font-medium">No Products Available in Cart</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
