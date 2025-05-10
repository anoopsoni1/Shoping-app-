import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addtocart ,addtobuy } from '../Feature/Slice';
import { toast } from 'react-toastify';
import { nanoid } from '@reduxjs/toolkit';
import RotatingText from './RotatingText';

function Home() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addtocart(product));
    toast.success(`${product.name} added successfully`);
  };

  const handleBuyNow = (product) => {
    dispatch(addtobuy(product));
    toast.success(`${product.name} added successfully`);
  };

  const products = [
    {
      id: nanoid(),
      name: 'Cotton Fabric Solid Scoop Neck Sleeveless Undershirt',
      price: 149.99,
      image: 'https://image.hm.com/assets/hm/0f/b2/0fb232d5c255fe7627ee2ba51ca16cf61505785b.jpg?imwidth=564',
    },
    {
      id: nanoid(),
      name: 'Fame Forever by Lifestyle Mens Solid Full Sleeve Jacket',
      price: 589.99,
      image: 'https://th.bing.com/th/id/OIP.G_zoDUylCvMk3OJzvCgaswHaLF?rs=1&pid=ImgDetMain',
    },
    {
      id: nanoid(),
      name: 'Campus Sutra Mens Textured Polo T-Shirt',
      price: 329.99,
      image: 'https://image.hm.com/assets/hm/60/46/6046444722aee90aafedb9c2b7ef666fb9730732.jpg?imwidth=564',
    },
    {
      id: nanoid(),
      name: 'Campus Sutra Mens Textured Casual Shirt',
      price: 299.99,
      image: 'https://image.hm.com/assets/hm/48/02/48023efda4d844898f8b6cde33cc3c4cc0db2db8.jpg?imwidth=564',
    },
  ];

  return (
    <>
      <section className="bg-[url('https://t3.ftcdn.net/jpg/01/17/33/22/360_F_117332203_ekwDZkViF6M3itApEFRIH4844XjJ7zEb.jpg')] bg-cover bg-center text-white text-center py-20 px-4 sm:px-6 md:px-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Discover Your
          <RotatingText
            texts={['Trends', 'Brands', 'Choices','New Arrivals',"Top Categories" ,'Bestsellers']}
            mainClassName=" text-white text-center  flex justify-center"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </h1>
        <p className="text-md sm:text-lg font-medium mb-6">
          Find the best deals and the latest trends all in one place.
        </p>
        <Link
          to="/products"
          className="bg-yellow-500 text-black py-2 px-6 rounded-full text-lg font-semibold hover:bg-yellow-400 transition"
        >
          Shop Now
        </Link>
      </section>
      <section className="py-12 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold">Featured Products</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
              <p className="text-gray-700 font-medium mb-4">₹{product.price}</p>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-500 transition w-full"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleBuyNow(product)}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition w-full "
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
