import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
   <>
      
      <section className="bg-gray-800 text-white text-center py-20">
    <h1 className="text-4xl font-semibold mb-4">Discover Your Perfect Style</h1>
    <p className="text-lg mb-6">Find the best deals and the latest trends all in one place.</p>
    <Link to="/products" className="bg-yellow-500 text-black py-2 px-6 rounded-full text-lg font-semibold hover:bg-yellow-400">Shop Now</Link>
</section>

<section className="py-16 px-4">
    <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold">Featured Products</h2>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="https://image.hm.com/assets/hm/0f/b2/0fb232d5c255fe7627ee2ba51ca16cf61505785b.jpg?imwidth=564" alt="Product 1" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">Product 1</h3>
            <p className="text-gray-600 mb-4">$49.99</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-500">Add to Cart</button>
        </div>
     
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="https://th.bing.com/th/id/OIP.G_zoDUylCvMk3OJzvCgaswHaLF?rs=1&pid=ImgDetMain" alt="Product 2" class="w-full h-48 object-cover rounded-md mb-4 " />
            <h3 class="text-xl font-semibold mb-2">Product 2</h3>
            <p class="text-gray-600 mb-4">$89.99</p>
            <button class="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-500">Add to Cart</button>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-lg">
            <img src="https://image.hm.com/assets/hm/60/46/6046444722aee90aafedb9c2b7ef666fb9730732.jpg?imwidth=564" alt="Product 3" class="w-full h-48 object-cover rounded-md mb-4" />
            <h3 class="text-xl font-semibold mb-2">Product 3</h3>
            <p class="text-gray-600 mb-4">$129.99</p>
            <button  class="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-500">Add to Cart</button>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-lg">
            <img src="https://image.hm.com/assets/hm/48/02/48023efda4d844898f8b6cde33cc3c4cc0db2db8.jpg?imwidth=564" alt="Product 4" class="w-full h-48 object-cover rounded-md mb-4" />
            <h3 class="text-xl font-semibold mb-2">Product 4</h3>
            <p class="text-gray-600 mb-4">$199.99</p>
            <button class="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-500">Add to Cart</button>
        </div>
    </div>
</section>
<section class="bg-gray-800 text-white text-center py-20">
        <h1 class="text-4xl font-semibold mb-4">Discover Your Perfect Style</h1>
        <p class="text-lg mb-6">Find the best deals and the latest trends all in one place.</p>
        <Link to='/products' class="bg-yellow-500 text-black py-2 px-6 rounded-full text-lg font-semibold hover:bg-yellow-400">
            Shop Now</Link>
    </section>

    <section class="py-16 px-4">
        <div class="max-w-7xl mx-auto text-center mb-12">
            <h2 class="text-3xl font-bold">Featured Products</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <img src="https://image.hm.com/assets/hm/f8/d5/f8d5f4ed835363a3ff1d325f004cca3eac0aeb91.jpg?imwidth=564" alt="Product 1" class="w-full h-48 object-cover rounded-md mb-4" />
                <h3 class="text-xl font-semibold mb-2">Product 1</h3>
                <p class="text-gray-600 mb-4">$49.99</p>
                <button  class="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-500">Add to Cart</button>
            </div>
     
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <img src="https://image.hm.com/assets/hm/69/91/69916a6f653484852243fe6d48fdd69104a3bd4e.jpg?imwidth=564" alt="Product 2" class="w-full h-48 object-cover rounded-md mb-4" />
                <h3 class="text-xl font-semibold mb-2">Product 2</h3>
                <p class="text-gray-600 mb-4">$89.99</p>
                <button   class="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-500">Add to Cart</button>
            </div>
       
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <img src="https://image.hm.com/assets/hm/8b/ea/8bea8bac07ed75596e5597f6d2997f07cfd81fac.jpg?imwidth=564" alt="Product 3" class="w-full h-48 object-cover rounded-md mb-4" />
                <h3 class="text-xl font-semibold mb-2">Product 3</h3>
                <p class="text-gray-600 mb-4">$129.99</p>
                <button  class="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-500">Add to Cart</button>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <img src="https://image.hm.com/assets/hm/27/37/27371510657af76474658acf192817bd8632ae8c.jpg?imwidth=564" alt="Product 4" class="w-full h-48 object-cover rounded-md mb-4" />
                <h3 class="text-xl font-semibold mb-2">Product 4</h3>
                <p class="text-gray-600 mb-4">$199.99</p>
                <button  class="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-500">Add to Cart</button>
            </div>
        </div>
    </section>
   </>
  )
}

export default Home