import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
    <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
       
        <div className="flex-1">
            <p>&copy; 2025 Anoop soni. All Rights Reserved.</p>
        </div>
     
        <div className="flex-1 text-center">
            <p className="mb-2">Follow Us:</p>
            <div className="flex justify-center gap-4">
                <span className="text-xl cursor-pointer hover:opacity-70">🦸‍♂️</span> 
                <span className="text-xl cursor-pointer hover:opacity-70">📸</span> 
                <span className="text-xl cursor-pointer hover:opacity-70">🐦</span> 
            </div>
        </div>

        <div className="flex text-right">
            <p>Contact: <a href="mailto:sonianup8965@gmail.com" class="text-yellow-400">shoppingcart.com</a></p>
        </div>
    </div>
</footer>

  )
}

export default Footer