import React, { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';
function Category() {
    const[open ,setopen] = useState(null)
  
  const categories = [
    { id:1 , name: 'Bags', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQwZJVUhOyhkQmqUluM7yw8cOmr11w4IMk2MMOZeCaHZXAJzJJ7bOaK75Tyaxujy0qY2WrKOJdlXH-6WXrte_VhkqrpFaf-Hy6eFx_bjLQ' },
    { id:2, name: 'Shoes', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSdDJbRlOHLJFCbuJou0sp4kLHiIdTLil4s8EneoYGejrV0KXUWB35RishhKgiNSyopEhmXB1_9QFT4GpniSu0DQTxwQ90ocgudW6p1XK4RiuCVA6LAvo1YIw' },
    { id:3 , name: 'Shirts', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRwAzRBdXU0-bIGr7d2d9DXP1VwInodF26_Pib10DlT_ZCOI8T_HKH6BfhargFRwAn2Vfrre_R7v-794R_Y8d89bnxcEidRWOtFchLQjJmO-FyhACRP_br9' },
    { id:4 , name: 'Jackets', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRLYjWF66HwBYKQi7z1zn3xtHK7PGOm02SsqE27LunmHOrLiEDS272Zax-J14vZg5l-xiEqLKreARAlVwlYA237LGFT07uV8HNIswvUb7qgF0-xvKIwb53BNYM' },
    { id:5 , name: 'T-Shirts', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSxT1DtyQVisdreFOb_9plilw5v3gDMjyTBXozhw5ncVJMrCepM1uIOjMl9wHz-piHaRbdqlpZiKZbHg35m4AAtv1iDHnRQH3E6J19ql8-WHSPVkAZx9MUR3g' },
    { id:6 , name: 'Saree', image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQqUj6z-5Ny-aMw6GCzLSVNn-xxq-gpf9qS3jPMOcU7tTiLgCZCJVme_ODuk7YKPLRKY7TMGhZj2DVS-TeH7zCI5Vqxnbf-e-MQ0ZIQ6XBK' },
    { id:7 , name: 'Watches', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSEQ4vM32C7kXo2uUcnlG3g_csGsZxTK805g_PFP4MWr7geodfce9dVfSBtSUB6yXKEaNmkZUFj30v6KI0s6ZeSc9Hf-6-zwWvXMReYqDweMly4u8gBX6gefQ' },
    { id:8, name:  'Buds', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRDWoRuyaKLyw24PJMr7N3NrXTpamXrzYyF-g58dSpm-P-88vzVmF8cYmvfSgcPYoXqG-HbltcmY90qGF3pd_bBsi905g2U8WFHtfcwf9sYHgyN2CEhwnVdsA' }
  ]
   if(open==categories[0].id){
      window.location.href = "/bags"
     }
   else if(open==categories[1].id){
     window.location.href = "/shoes" 
   } 
   else if(open==categories[2].id){
    window.location.href = "/shirts" 
  }
  else if(open==categories[3].id){
    window.location.href = "/jackets" 
  } 
  else if(open==categories[4].id){
    window.location.href = "/tshirts" 
  }
  else if(open==categories[5].id){
    window.location.href = "/saree" 
  }
  else if(open==categories[6].id){
    window.location.href = "/watch" 
  }
  else if(open==categories[7].id){
    window.location.href = "/buds" 
  }
  
  return (
    
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Shop by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
            <img onClick={() => setopen(category.id)} src={category.image} alt={category.name} className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
