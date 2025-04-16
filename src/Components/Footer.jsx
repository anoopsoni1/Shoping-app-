import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
    <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
       
        <div className="flex-1">
            <p>&copy; 2025 Your Company Name. All Rights Reserved.</p>
        </div>
     
        <div className="flex-1 text-center">
            <p className="mb-2">Follow Us:</p>
            <div className="flex justify-center gap-4">
                <span className="text-xl cursor-pointer hover:opacity-70">🦸‍♂️</span> 
                <span className="text-xl cursor-pointer hover:opacity-70">📸</span> 
                <span className="text-xl cursor-pointer hover:opacity-70">🐦</span> 
            </div>
        </div>

        <div className="flex-1 text-right">
            <p>Contact: info@yourcompany.com</p>
        </div>
    </div>
</footer>

  )
}

export default Footer