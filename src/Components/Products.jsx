import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addtocart } from '../Feature/Slice';
import { useNavigate } from 'react-router-dom'
import { nanoid } from '@reduxjs/toolkit';
function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");


  const handleAddToCart = (product) => {
    dispatch(addtocart(product));
       toast.success(`${name} Added succesfully`);
  };

  const handleBuyNow = (product) => {
    dispatch(addtocart(product));
    toast.success(` ${product.name}!`);
    navigate('/buy');
  };


  const products = [
    { 
      id: nanoid(),
      name : "product 5" ,
      price : 64.55 ,
      image : 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/16513990/2022/1/26/d8f01fca-59e2-4f82-8214-9cd61d373be41643184909272-Roadster-Men-White-Sneakers-6661643184908868-1.jpg'
    },
    { 
      id: nanoid(),
      name : "product 6" ,
      price : 94.55 ,
      image : 'https://m.media-amazon.com/images/I/51sDLAxmy3L._AC_UY1000_.jpg'
    } ,
    { 
      id: nanoid(),
      name : "product 7" ,
      price : 34.85 ,
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtG6-2oWZHp_JTlBEBZ3l2bmbBx0PZzvKqsQ&s'
    },
    { 
      id: nanoid(),
      name : "product 8" ,
      price : 84.95 ,
      image : 'https://ibisfab.com/cdn/shop/files/jacquard-silk-sarees-dark-wine-colour-wedding-wear-1.jpg?v=1716026906'
    },
    { 
      id: nanoid(),
      name : "product 9" ,
      price : 74.67 ,
      image : 'https://m.media-amazon.com/images/I/614uxdVXGGL._AC_UY1100_.jpg'
    },
    { 
      id: nanoid(),
      name : "product 10" ,
      price : 68.51 ,
      image : 'https://cdn.vox-cdn.com/thumbor/4FY_VHvSCm0r4R9eUxmeHfL03aA=/0x0:2040x1360/2000x1333/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/22046476/vpavic_4291_20201113_0366.0.jpg'
    },
    { 
      id: nanoid(),
      name : "product 11" ,
      price : 54.45 ,
      image : 'https://www.foodandwine.com/thmb/wtSAc8XIifwjyd8BMFZbErAOyQc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/faw-product-breville-smart-rkilgore-44-c5a16502b0084c71aca178479399f2b8.jpg'
    },
    { 
      id: nanoid(),
      name : "product 12" ,
      price : 99.65 ,
      image : 'https://images-cdn.ubuy.co.in/654b8e16333d0d5c3130b3e8-lige-mens-watches-waterproof-stainless.jpg'
    },
    { 
      id: nanoid(),
      name : "product 13" ,
      price : 26.57 ,
      image : 'https://m.media-amazon.com/images/I/71fYAthCwfL.jpg'
    },
    { 
      id: nanoid(),
      name : "product 14" ,
      price : 78.89 ,
      image : 'https://dynamicdistributors.in/wp-content/uploads/2023/10/Bajaj-ATX-3-750-Watt-Pop-up-Toaster-2-Slice-Automatic-Pop-up-Toaster-Dust-Cover-Slide-Out-Crumb-Tray-6-Level-Browning-Controls-2-Year-Warranty-by-Bajaj-BlackSilver-Electric-Toaster-0.jpg'
    },
    { 
      id: nanoid(),
      name : "product 15" ,
      price : 32.51 ,
      image : 'https://images2.alphacoders.com/117/thumb-1920-1172003.jpg'
    },
    { 
      id: nanoid(),
      name : "product 16" ,
      price : 78.52 ,
      image : 'https://w0.peakpx.com/wallpaper/580/545/HD-wallpaper-vidya-beautiful-hotpic-saree-smiling.jpg'
    },
    { 
      id: nanoid(),
      name : "product 17" ,
      price : 75.34 ,
      image : 'https://omsaraimages.s3.eu-west-2.amazonaws.com/wp-content/uploads/20191111150932/1037-1.jpg'
    },
    { 
      id: nanoid(),
      name : "product 18" ,
      price : 78.69 ,
      image : 'https://i.redd.it/5izdtm01avbc1.png'
    },
    { 
      id: nanoid(),
      name : "product 19" ,
      price : 46.58 ,
      image : 'https://m.media-amazon.com/images/I/61ZpKWxNwwL.jpg'
    },
    { 
      id: nanoid(),
      name : "product 20" ,
      price : 36.55 ,
      image : 'https://magnoliahome.co.in/wp-content/uploads/2021/08/Jasper-Arm-Chair-1.1-1.jpg'
    }, { 
      id: nanoid(),
      name : "product 21" ,
      price : 78.5,
      image : 'https://m.media-amazon.com/images/I/61klPbpaRfL.jpg'
    },
    { 
      id: nanoid(),
      name : "product 22" ,
      price : 96.55 ,
      image : 'https://5.imimg.com/data5/ANDROID/Default/2022/2/RD/UE/RG/73718625/product-jpeg.jpg'
    }
  ]
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );
   
  return (
    <>  
    <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg transition p-6">
            <img
              className="w-full h-48 object-cover rounded-md mb-4"
              src={product.image}
              alt={product.name}
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">${product.price}</p>
            <div className="flex space-x-4">
              <button
                onClick={() => dispatch(handleAddToCart(product))}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Add to Cart
              </button>
              <button
                onClick={() => handleBuyNow(product)}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
    </>
  )
}

export default Products