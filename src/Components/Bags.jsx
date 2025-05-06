import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addtocart } from '../Feature/Slice';
import { nanoid } from '@reduxjs/toolkit';
function Bags() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");


  const handleAddToCart = (product) => {
    dispatch(addtocart(product));
       toast.success(`${name} Added succesfully`);
  };

  const handleBuyNow = (product) => {
    dispatch(addtocart(product));
    toast.success(` ${product.name}!`);
  };
  const products = [
    { 
      id: nanoid(),
      name : "Men Puma Smashic Unisex Sneakers At Nykaa",
      price : 599.99 ,
      image : 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/16513990/2022/1/26/d8f01fca-59e2-4f82-8214-9cd61d373be41643184909272-Roadster-Men-White-Sneakers-6661643184908868-1.jpg'
    },
    { 
      id: nanoid(),
      name : "CARLO Romano Men's Lace up stylish Denim Sneaker" ,
      price : 399.99 ,
      image : 'https://m.media-amazon.com/images/I/51sDLAxmy3L._AC_UY1000_.jpg'
    } ,
    { 
      id: nanoid(),
      name : "SEN ELVIN Women's Stylish Analog Wrist Watch" ,
      price : 199.99 ,
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtG6-2oWZHp_JTlBEBZ3l2bmbBx0PZzvKqsQ&s'
    },
    { 
      id: nanoid(),
      name : "Sidhidata Women's Soft Zimmy Choo Fandy Silk Saree" ,
      price : 899.99 ,
      image : 'https://ibisfab.com/cdn/shop/files/jacquard-silk-sarees-dark-wine-colour-wedding-wear-1.jpg?v=1716026906'
    },
    { 
      id: nanoid(),
      name : "Yashika Women's Fancy Banarasi Kanjivaram Art Silk Saree" ,
      price : 799.99 ,
      image : 'https://m.media-amazon.com/images/I/614uxdVXGGL._AC_UY1100_.jpg'
    },
    { 
      id: nanoid(),
      name : "MacBook Pro M4 16-inch (2024) - 48GB RAM, 1TB SSD - Space Black-Apple" ,
      price : 120000 ,
      image : 'https://cdn.vox-cdn.com/thumbor/4FY_VHvSCm0r4R9eUxmeHfL03aA=/0x0:2040x1360/2000x1333/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/22046476/vpavic_4291_20201113_0366.0.jpg'
    },
    { 
      id: nanoid(),
      name : "Built in Oven Motorised Rotisserie Turbo Fan 78Ltr Multi-function" ,
      price : 14999.99 ,
      image : 'https://www.foodandwine.com/thmb/wtSAc8XIifwjyd8BMFZbErAOyQc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/faw-product-breville-smart-rkilgore-44-c5a16502b0084c71aca178479399f2b8.jpg'
    },
    { 
      id: nanoid(),
      name : "BENYAR Men's Chronograph Quartz Movement Watch" ,
      price :  549.99 ,
      image : 'https://images-cdn.ubuy.co.in/654b8e16333d0d5c3130b3e8-lige-mens-watches-waterproof-stainless.jpg'
    },
    { 
      id: nanoid(),
      name : "Realme Buds T300 Ear Earbuds 30dB ANC" ,
      price : 1199.99 ,
      image : 'https://m.media-amazon.com/images/I/71fYAthCwfL.jpg'
    },
    { 
      id: nanoid(),
      name : "Pigeon 2 Slice Auto Pop Up Toaster" ,
      price : 4999.99 ,
      image : 'https://dynamicdistributors.in/wp-content/uploads/2023/10/Bajaj-ATX-3-750-Watt-Pop-up-Toaster-2-Slice-Automatic-Pop-up-Toaster-Dust-Cover-Slide-Out-Crumb-Tray-6-Level-Browning-Controls-2-Year-Warranty-by-Bajaj-BlackSilver-Electric-Toaster-0.jpg'
    },
    { 
      id: nanoid(),
      name : "Banarasi Silk Bollywood Style Crushed Sarees" ,
      price : 499.99,
      image : 'https://images2.alphacoders.com/117/thumb-1920-1172003.jpg'
    },
    { 
      id: nanoid(),
      name : "Saree Mall Yellow Embellished Saree" ,
      price : 599.99 ,
      image : 'https://w0.peakpx.com/wallpaper/580/545/HD-wallpaper-vidya-beautiful-hotpic-saree-smiling.jpg'
    },
    { 
      id: nanoid(),
      name : "Rani Saahiba Red & Golden Woven Design Saree" ,
      price : 999.99 ,
      image : 'https://omsaraimages.s3.eu-west-2.amazonaws.com/wp-content/uploads/20191111150932/1037-1.jpg'
    },
    { 
      id: nanoid(),
      name : "Fastrack Men's Streetstyle Digital Dial Strap Watch" ,
      price : 449.99 ,
      image : 'https://i.redd.it/5izdtm01avbc1.png'
    },
    { 
      id: nanoid(),
      name : "Atom Men's Spring Edge Alpha 2 Mesh Basics Sneakers" ,
      price : 799.99,
      image : 'https://m.media-amazon.com/images/I/61ZpKWxNwwL.jpg'
    },
    { 
      id: nanoid(),
      name : "RedOAKMIN GAVIN  Fabric  Chair with Wood Legs " ,
      price : 999.99 ,
      image : 'https://magnoliahome.co.in/wp-content/uploads/2021/08/Jasper-Arm-Chair-1.1-1.jpg'
    }, { 
      id: nanoid(),
      name : "Home furniture Wooden Sofa Set for Living Room" ,
      price : 10000,
      image : 'https://m.media-amazon.com/images/I/61klPbpaRfL.jpg'
    },
    { 
      id: nanoid(),
      name : "The Roadster Lifestyle Co Men's Solid Sneakers" ,
      price : 499.99 ,
      image : 'https://5.imimg.com/data5/ANDROID/Default/2022/2/RD/UE/RG/73718625/product-jpeg.jpg'
    }
  ]
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>  
    <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="mb-8 flex gap-8">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg transition p-6">
            <img
              className="w-full h-48 object-cover rounded-md mb-4"
              src={product.image}
              alt={product.name}
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-800 mb-4">₹{product.price.toLocaleString("en-IN")}</p>
            <div className="flex space-x-4 gap-1">
              <button
                onClick={() => dispatch(handleAddToCart(product))}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Add to Cart
              </button>
              <button
                onClick={() => handleBuyNow(product)}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
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

export default Bags