import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addtocart } from '../Feature/Slice';
import { nanoid } from '@reduxjs/toolkit';

function Products() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState(0);
const [maxPrice, setMaxPrice] = useState(Infinity); 

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleAddToCart = (product) => {
    dispatch(addtocart(product));
    toast.success(`${product.name} added successfully`);
  };

  const handleBuyNow = (product) => {
    dispatch(addtocart(product));
    toast.success(`${product.name} purchased successfully`);
  };

  const categories = [
    "All",
    "Shoes",
    "Watches",
    "Sarees",
    "Electronics",
    "Furniture",
    "Kitchen",
    "Earbuds",
    "Laptops",
  ];
  
  const products = [
    { 
      id: nanoid(),
      name : "Men Puma Smashic Unisex Sneakers At Nykaa",
      price : 599.99 ,
      image : 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/16513990/2022/1/26/d8f01fca-59e2-4f82-8214-9cd61d373be41643184909272-Roadster-Men-White-Sneakers-6661643184908868-1.jpg',
      category : "Sneakers",
    },
    { 
      id: nanoid(),
      name : "CARLO Romano Men's Lace up stylish Denim Sneaker" ,
      price : 399.99 ,
      image : 'https://m.media-amazon.com/images/I/51sDLAxmy3L._AC_UY1000_.jpg',
      category : "Sneakers"
    } ,
    { 
      id: nanoid(),
      name : "SEN ELVIN Women's Stylish Analog Wrist Watch" ,
      price : 199.99 ,
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtG6-2oWZHp_JTlBEBZ3l2bmbBx0PZzvKqsQ&s',
      category : "Watches"
    },
    { 
      id: nanoid(),
      name : "Sidhidata Women's Soft Zimmy Choo Fandy Silk Saree" ,
      price : 899.99 ,
      image : 'https://ibisfab.com/cdn/shop/files/jacquard-silk-sarees-dark-wine-colour-wedding-wear-1.jpg?v=1716026906',
      category : "Sarees"
    },
    { 
      id: nanoid(),
      name : "Yashika Women's Fancy Banarasi Silk Saree" ,
      price : 799.99 ,
      image : 'https://m.media-amazon.com/images/I/614uxdVXGGL._AC_UY1100_.jpg',
      category : "Sarees"
    },
    { 
      id: nanoid(),
      name : "MacBook Pro M4 16-inch- 48GB RAM,1TB SSD - Space Black-Apple" ,
      price : 120000 ,
      image : 'https://cdn.vox-cdn.com/thumbor/4FY_VHvSCm0r4R9eUxmeHfL03aA=/0x0:2040x1360/2000x1333/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/22046476/vpavic_4291_20201113_0366.0.jpg',
      category : "Laptops"
    },
    { 
      id: nanoid(),
      name : "Built in Oven Motorised Rotisserie Turbo Fan 78Ltr Multi-function" ,
      price : 14999.99 ,
      image : 'https://www.foodandwine.com/thmb/wtSAc8XIifwjyd8BMFZbErAOyQc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/faw-product-breville-smart-rkilgore-44-c5a16502b0084c71aca178479399f2b8.jpg',
      category : "Kitchen"
    },
    { 
      id: nanoid(),
      name : "BENYAR Men's Chronograph Quartz Movement cool Watches" ,
      price :  549.99 ,
      image : 'https://images-cdn.ubuy.co.in/654b8e16333d0d5c3130b3e8-lige-mens-watches-waterproof-stainless.jpg',
      category : "Watches"
    },
    { 
      id: nanoid(),
      name : "Realme Buds T300 Ear Earbuds 30dB ANC" ,
      price : 1199.99 ,
      image : 'https://m.media-amazon.com/images/I/71fYAthCwfL.jpg',
      category : "Earbuds"
    },
    { 
      id: nanoid(),
      name : "Pigeon 2 Slice Auto Pop Up Toaster" ,
      price : 4999.99 ,
      image : 'https://dynamicdistributors.in/wp-content/uploads/2023/10/Bajaj-ATX-3-750-Watt-Pop-up-Toaster-2-Slice-Automatic-Pop-up-Toaster-Dust-Cover-Slide-Out-Crumb-Tray-6-Level-Browning-Controls-2-Year-Warranty-by-Bajaj-BlackSilver-Electric-Toaster-0.jpg',
      category : "Electronics"
    },
    { 
      id: nanoid(),
      name : "Banarasi Silk Bollywood Style Crushed Sarees" ,
      price : 499.99,
      image : 'https://images2.alphacoders.com/117/thumb-1920-1172003.jpg',
      category : "Sarees"
    },
    { 
      id: nanoid(),
      name : "Saree Mall Yellow Embellished Saree" ,
      price : 599.99 ,
      image : 'https://w0.peakpx.com/wallpaper/580/545/HD-wallpaper-vidya-beautiful-hotpic-saree-smiling.jpg',
      category : "Sarees"
    },
    { 
      id: nanoid(),
      name : "Rani Saahiba Red & Golden Woven Design Saree" ,
      price : 999.99 ,
      image : 'https://omsaraimages.s3.eu-west-2.amazonaws.com/wp-content/uploads/20191111150932/1037-1.jpg',
      category : "Sarees"
    },
    { 
      id: nanoid(),
      name : "Fastrack Men's Streetstyle Digital Dial Strap Watch" ,
      price : 449.99 ,
      image : 'https://i.redd.it/5izdtm01avbc1.png',
      category : "Watches"
    },
    { 
      id: nanoid(),
      name : "Atom Men's Spring Edge Alpha 2 Mesh Basics Sneakers" ,
      price : 799.99,
      image : 'https://m.media-amazon.com/images/I/61ZpKWxNwwL.jpg',
      category : "Sneakers"
    },
    { 
      id: nanoid(),
      name : "RedOAKMIN GAVIN  Fabric  Chair with Wood Legs " ,
      price : 999.99 ,
      image : 'https://magnoliahome.co.in/wp-content/uploads/2021/08/Jasper-Arm-Chair-1.1-1.jpg',
      category : "Furniture"
    }, { 
      id: nanoid(),
      name : "Home furniture Wooden Sofa Set for Living Room" ,
      price : 10000,
      image : 'https://m.media-amazon.com/images/I/61klPbpaRfL.jpg',
      category : "Furniture"
    },
    { 
      id: nanoid(),
      name : "The Roadster Lifestyle Co Men's Solid Sneakers" ,
      price : 499.99 ,
      image : 'https://5.imimg.com/data5/ANDROID/Default/2022/2/RD/UE/RG/73718625/product-jpeg.jpg',
      category : "Sneakers"
    },
     { 
      id: nanoid(),
      name : "Campus Men's North Plus Running Shoes",
      price : 1085 ,
      image : 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSchn9Py6BlOe05c6njfBdY2goP6wXi02CDRWVH-MqLbv6a1o1fB6bNHky3hSs0YC8EivUCpRmT9jvqiyu-y3MVUUTAeff8uZYwy6CAzFZvz2p6iI-Zd8UtZQ',
      category : "Shoes",
    },
    { 
      id: nanoid(),
      name : "Inithi Embellished Sequinned Georgette Saree " ,
      price : 1599.99 ,
      image : 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQCyKlzRq0Po94-cdLrNpkvImNuIvyBLdPTwa9dxGRZXxWVVTPdtt2KfhRle3ZTglmTAd7Y7M8BwlqI_yLEXeS9Lp2HoyqCc0GMLa37mgaF',
      category : "Saree"
    } ,
    { 
      id: nanoid(),
      name : "FORSINING Men's Mechanical Watch" ,
      price : 4095 ,
      image : 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSL5mpKGs3mIM9ADUCe5I_acF4lJWWvMVwxeed_1SWq8VcN0uxB72u5l2KSenwzOchtWOSdB-tkTUciK2zOcD_OQv5GxPfl3yu2BBdt-SNZ',
      category : "Watches"
    },
    { 
      id: nanoid(),
      name : "Indya Red Aari Embroidered Georgette Saree Set" ,
      price : 1250.99 ,
      image : 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcScL8XD36KuDW09qcHcHhEOXjRkWbpiSBgrP6MWv6W0XNVEToNJtZunk4t1Ek2inmBx42aSHt2Bpc7gWdnHK_yaCxk0YcCGXrzKqwaL7XN50aCsEJ9TAtAEgw',
      category : "Sarees"
    },
    { 
      id: nanoid(),
      name : "Converse Unisex Chuck 70 Canvas Top Sneakers" ,
      price : 999.99 ,
      image : 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTDYsDVR_VSlVe7CabuPXhp6J9jNC2Sd7QiRmcC8hfI5WfpPe003BwmRyqVnfB_m2Jpb2vd2MVKP5OEDFHjZf_mp1SBANiuCDLc73qS9wgiOwYUmJ7fJFuH',
      category : "Shoes"
    },
    { 
      id: nanoid(),
      name : "HP Victus Gaming Laptop 16-GB RAM 512-GB Storage" ,
      price : 60000 ,
      image : 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ4jIMFJmOjY8QVowvH6fPoR-rbr7ayxveYBjGpL66PyYFumDqv36zKSljVA96qd_OUfyc-1IlvcRbhleYnlIWaievyJC5ySgCon44N2HTUwYSMuF1mryzCMA',
      category : "Laptops"
    },
    { 
      id: nanoid(),
      name : "LG 80 cm HD Ready Smart LED TV latest model" ,
      price : 13590.68 ,
      image : 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRo8DODUmHKvD6VdmNIExR-JaMM8udQnfDv8Tlztkp5x3YxdvXa05_aqoThVgoVGO_mdRxkc26nmRrly6cKM7zeQ6WW10e4ww3Bma2QHndik-u5ptpAlr8lMw',
      category : "Electronics"
    },
    { 
      id: nanoid(),
      name : "DressBerry Women Mauve Analogue Watch " ,
      price :  699.99 ,
      image : 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSEQ4vM32C7kXo2uUcnlG3g_csGsZxTK805g_PFP4MWr7geodfce9dVfSBtSUB6yXKEaNmkZUFj30v6KI0s6ZeSc9Hf-6-zwWvXMReYqDweMly4u8gBX6gefQ',
      category : "Watches"
    },
    { 
      id: nanoid(),
      name : "Boult Audio Mustang Torq 50Hrs Battery App Support" ,
      price : 1599.99 ,
      image : 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTmMVtsoXzPNQ-KuukreD763HJ-b6JEvSv-j10q_-8lqtowdClfqIsV6ijsNjw45B0FrcRKN-yyWyhDHwa4z4mFnYWUuivPIE4UOgZK5_Ub4Ii6FpAkcHr-',
      category : "Earbuds"
    },
    { 
      id: nanoid(),
      name : "zebronics Zeb Basso 100 Home Theater Speaker" ,
      price : 2999.99 ,
      image : 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS1-QeNC1kAaLYfJdnf-OLJa9396VklvuSZB7x2x7LmNiwLlXN5uoKToK8ZD8gC6a54qE9TfksOB6fTE0pnSknhtpIyILInOt8djU1ShQyqEm2ioAXfrCEwWg',
      category : "Electronics"
    },
    { 
      id: nanoid(),
      name : "Chianti Rangoli Silk Bollywood Style Sarees" ,
      price : 699.99,
      image : 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ4g_jwCS_CMROS4KMsUZ4ZHrO3T0qK7Vv-rPZxESnaLem0g-VEYEVHtCk0_O_bSQs_68q-dEdmay9iVVcdp1Be1v3-5B3FkVsAj-rfKHg3z7NRNUS0SOWmYQ',
      category : "Sarees"
    },
    { 
      id: nanoid(),
      name : "Saree Mall Yellow Embellished You Satin Designer Saree" ,
      price : 899.99 ,
      image : 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTrV-t3HhXYk_TSDlDE8J3i4eM_qrYzylgkY4V7I19FuhhKg02EqT4zcPYILJhmuG7JidihmLt5BWwbmDg7L-xjHKgQKi4wzqPuXbcxrcw',
      category : "Sarees"
    },
    { 
      id: nanoid(),
      name : "ASUS TUF Gaming A15 Gaming Laptop RAM-16GB " ,
      price : 65000,
      image : 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRatcsvkJPipyVVGjucK_00nN6tJ2DZlzPyVDHndpMqmB_qmg_lvcqqNmbq5C6Gr4lAITHRODsXJgk5bee0oQytzmShDbvkJRoREwObH3YJOPjvwH6N6NrCyQ',
      category : "Laptops"
    },
    { 
      id: nanoid(),
      name : "boAt Lunar Vista with 1.52 HD Display Smartwatch" ,
      price : 2249.99 ,
      image : 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRuXf6mLFn3Hu-w10xQEhIfk9ywxQlBgrkbcDL-EfSgL8pkCmqUSdsNWrc9EC8nrNjG0v_D07gF45ofTzIDUeF7xkDyoFiujG73mKgMoLTAYp6j_d4abmkuvw',
      category : "Watches"
    },
    { 
      id: nanoid(),
      name : "HRX by Hrithik Roshan Men's Running Shoes" ,
      price : 999.99,
      image : 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTAax05sgNj9NMdDqiME5Ge95MKS1iIsAFSErDj22WRYPS3L9gWSMKUHKdAxgNd-7GcsWS_y25LQVe6OyXVyB0ae0lKTu-u819N3IPQlKbJ',
      category : "Shoes"
    },
    { 
      id: nanoid(),
      name : "Wakefit Mars Engineered Wood Bed king Size " ,
      price : 12372.99 ,
      image : 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTXOoLHscnmhybq9cN4QeZ1rK9uDfXoIdNxj_S5iTJPMfuez3lvMJe_HXZzqxGfGsHQUfkN0SDSY3HDBQhrQwsRyrYLMDGPEQvoEYC2-GI',
      category : "Furniture"
    }, { 
      id: nanoid(),
      name : "Artise Fabric 3+2 Seater Recliner Set" ,
      price : 65650,
      image : 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRUmJa8OQyciNBn8O1NeCeQePmPaq-xVk3flHCcJ5PN2vFu-4yFXljVz4ZeErPfiV95A85EzuTf6rTjDwdrrpgyAuNW4_2HloKcXHTlrGwk',
      category : "Furniture"
    },
    { 
      id: nanoid(),
      name : "HRX by Hrithik Roshan Men's Memory Foam Mesh shoes" ,
      price : 1200.99 ,
      image : 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS4zdRa9IcZfM_Jg_u-dzGz8Gj6Z5XDoFQU4UznKVD_sSD65cw3ugOFyCkgShQJCVdzQddAF9W0JGU0x04FefSo6_JfD4Q22l0ebQI91ZY',
      category : "Shoes"
    },
  ]

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory &&  product.price >= minPrice && product.price <= maxPrice
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="max-w-8xl mx-auto py-5 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
    <div className="flex gap-6">
      <aside className="w-28 sticky top-1 h-fit bg-white shadow rounded p-4">
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
        <ul className="space-y-2">
          {categories.map((cat, index) => (
            <li key={index}>
              <button
                onClick={() => setSelectedCategory(cat)}
                className={`w-full text-left px-3 py-2 rounded-md ${
                  selectedCategory === cat ? 'bg-blue-500 text-white' : 'hover:bg-blue-100'
                }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </aside>
      <div className="flex">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg transition p-6">
              <img
                className="w-full h-48 object-cover rounded-md mb-4"
                src={product.image}
                alt={product.name}
              />
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-800 mb-4">₹{product.price.toLocaleString("en-IN")}</p>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <button
                  onClick={() => handleAddToCart(product)}
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
      </div>
    </div>
  </main>  
  );
}

export default Products;
