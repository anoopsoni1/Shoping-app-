import React, { useState } from 'react'


function Products() {

  return (
    <>
    
    <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      
   
      <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-6">
        <img className="w-full h-48 object-cover rounded-md mb-4" src="https://img.drz.lazcdn.com/static/lk/p/bbaa6c6345a63d367273ac23a80a837f.jpg_720x720q80.jpg" alt="Product 1" />
        <h2 className="text-xl font-semibold mb-2">Product Name 1</h2>
        <p className="text-gray-600 mb-4">$29.99</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Add to Cart</button>
      </div>

 
      <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-6">
        <img className="w-full h-48 object-cover rounded-md mb-4" src="https://omsaraimages.s3.eu-west-2.amazonaws.com/wp-content/uploads/20191111150932/1037-1.jpg" alt="Product 2" />
        <h2 className="text-xl font-semibold mb-2">Product Name 2</h2>
        <p className="text-gray-600 mb-4">$39.99</p>
        <button  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Add to Cart</button>
      </div>

      <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-6">
        <img className="w-full h-48 object-cover rounded-md mb-4" src="https://wholetex.sgp1.cdn.digitaloceanspaces.com/full/gajani-dola-silk-wedding-saree-collection-2347.jpg" alt="Product 3" />
        <h2 className="text-xl font-semibold mb-2">Product Name 3</h2>
        <p className="text-gray-600 mb-4">$49.99</p>
        <button  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Add to Cart</button>
      </div>

      <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-6">
        <img className="w-full h-48 object-cover rounded-md mb-4" src="https://cdn.vox-cdn.com/thumbor/4FY_VHvSCm0r4R9eUxmeHfL03aA=/0x0:2040x1360/2000x1333/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/22046476/vpavic_4291_20201113_0366.0.jpg" alt="Product 3" />
        <h2 className="text-xl font-semibold mb-2">Product Name 3</h2>
        <p className="text-gray-600 mb-4">$49.99</p>
        <button  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Add to Cart</button>
      </div>

      <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-6">
        <img className="w-full h-48 object-cover rounded-md mb-4" src="https://i.imgur.com/Ex5x3IU.jpg" alt="Product 3" />
        <h2 className="text-xl font-semibold mb-2">Product Name 3</h2>
        <p className="text-gray-600 mb-4">$49.99</p>
        <button  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Add to Cart</button>
      </div>

      <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-6">
        <img className="w-full h-48 object-cover rounded-md mb-4" src="https://i.imgur.com/AzAY4Ed.jpeg" alt="Product 3" />
        <h2 className="text-xl font-semibold mb-2">Product Name 3</h2>
        <p className="text-gray-600 mb-4">$49.99</p>
        <button  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Add to Cart</button>
      </div>

      <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-6">
        <img className="w-full h-48 object-cover rounded-md mb-4" src="https://i.imgur.com/3oXNBst.jpeg" alt="Product 3" />
        <h2 className="text-xl font-semibold mb-2">Product Name 3</h2>
        <p className="text-gray-600 mb-4">$49.99</p>
        <button  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Add to Cart</button>
      </div>

      <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-6">
        <img className="w-full h-48 object-cover rounded-md mb-4" src="https://i.imgur.com/DMQHGA0.jpeg" alt="Product 3" />
        <h2 className="text-xl font-semibold mb-2">Product Name 3</h2>
        <p className="text-gray-600 mb-4">$49.99</p>
        <button  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Add to Cart</button>
      </div>


      <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-6">
        <img className="w-full h-48 object-cover rounded-md mb-4" src="https://i.imgur.com/YaSqa06.jpeg" alt="Product 3" />
        <h2 className="text-xl font-semibold mb-2">Product Name 3</h2>
        <p className="text-gray-600 mb-4">$49.99</p>
        <button  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Add to Cart</button>
      </div>


      <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-6">
        <img className="w-full h-48 object-cover rounded-md mb-4" src="https://i.imgur.com/OKn1KFI.jpeg" alt="Product 3" />
        <h2 className="text-xl font-semibold mb-2">Product Name 3</h2>
        <p className="text-gray-600 mb-4">$49.99</p>
        <button  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Add to Cart</button>
      </div>

      <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-6">
        <img className="w-full h-48 object-cover rounded-md mb-4" src="https://i.imgur.com/SolkFEB.jpeg" alt="Product 3" />
        <h2 className="text-xl font-semibold mb-2">Product Name 3</h2>
        <p className="text-gray-600 mb-4">$49.99</p>
        <button  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Add to Cart</button>
      </div>

      <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-6">
        <img className="w-full h-48 object-cover rounded-md mb-4" src="https://i.imgur.com/9DqEOV5.jpeg" alt="Product 3" />
        <h2 className="text-xl font-semibold mb-2">Product Name 3</h2>
        <p className="text-gray-600 mb-4">$49.99</p>
        <button  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Add to Cart</button>
      </div>

      <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-6">
        <img className="w-full h-48 object-cover rounded-md mb-4" src="https://i.imgur.com/eGOUveI.jpeg" alt="Product 3" />
        <h2 className="text-xl font-semibold mb-2">Product Name 3</h2>
        <p className="text-gray-600 mb-4">$49.99</p>
        <button  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Add to Cart</button>
      </div>


      <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-6">
        <img className="w-full h-48 object-cover rounded-md mb-4" src="https://i.imgur.com/cBuLvBi.jpeg" alt="Product 3" />
        <h2 className="text-xl font-semibold mb-2">Product Name 3</h2>
        <p className="text-gray-600 mb-4">$49.99</p>
        <button  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Add to Cart</button>
      </div>

      <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-6">
        <img className="w-full h-48 object-cover rounded-md mb-4" src="https://i.imgur.com/LGk9Jn2.jpeg" alt="Product 3" />
        <h2 className="text-xl font-semibold mb-2">Product Name 3</h2>
        <p className="text-gray-600 mb-4">$49.99</p>
        <button   className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Add to Cart</button>
      </div>
        
    </div>
  </main>    </>
  )
}

export default Products