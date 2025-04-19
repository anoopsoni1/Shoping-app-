import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addtocart } from '../Feature/Slice';
import { toast } from 'react-toastify';
function Home() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addtocart(product));
       toast.success(`${name} Added succesfully`);
  };

  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 49.99,
      image: 'https://image.hm.com/assets/hm/0f/b2/0fb232d5c255fe7627ee2ba51ca16cf61505785b.jpg?imwidth=564',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 89.99,
      image: 'https://th.bing.com/th/id/OIP.G_zoDUylCvMk3OJzvCgaswHaLF?rs=1&pid=ImgDetMain',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 129.99,
      image: 'https://image.hm.com/assets/hm/60/46/6046444722aee90aafedb9c2b7ef666fb9730732.jpg?imwidth=564',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 199.99,
      image: 'https://image.hm.com/assets/hm/48/02/48023efda4d844898f8b6cde33cc3c4cc0db2db8.jpg?imwidth=564',
    },
  ];

  return (
    <>
      <section className="bg-gray-800 text-white text-center py-20">
        <h1 className="text-4xl font-semibold mb-4">Discover Your Perfect Style</h1>
        <p className="text-lg mb-6">Find the best deals and the latest trends all in one place.</p>
        <Link
          to="/products"
          className="bg-yellow-500 text-black py-2 px-6 rounded-full text-lg font-semibold hover:bg-yellow-400"
        >
          Shop Now
        </Link>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Featured Products</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">${product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-500"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
