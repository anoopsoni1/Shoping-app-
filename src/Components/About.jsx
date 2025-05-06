import React from 'react'

function About() {
  return (
   <>
    <section class="py-16 px-4 bg-white">
        <div class="container mx-auto text-center">
            <h1 class="text-4xl font-bold text-gray-900 mb-6">About Shopping-cart</h1>
            <p class="text-lg text-gray-700 mb-6">Welcome to Anoop's Shopping Cart, a modern and user-friendly e-commerce experience developed by Anoop Soni, a first-year student at IIIT Bhopal.
This project showcases essential features of a professional shopping app, including:
Seamless product browsing and filtering
Smart cart functionality with real-time updates
User authentication and profile management
Order tracking and secure checkout
Wishlist and product rating system
Built with passion for coding and innovation, this shopping cart app is a part of my learning journey in web development and software engineering.
Thank you for visiting!.</p>
        </div>

        <div class="container mx-auto mt-12 grid md:grid-cols-2 gap-8 px-6">
            <div class="text-center md:text-left">
                <h2 class="text-2xl font-semibold text-gray-900 mb-4">Our Features</h2>
                <ul class="list-inside list-disc space-y-2 text-gray-700">
                    <li>Wide variety of products</li>
                    <li>Secure payment options</li>
                    <li>Fast delivery service</li>
                    <li>Customer support available 24/7</li>
                    <li>User-friendly interface</li>
                </ul>
            </div>
            <div class="text-center md:text-left">
                <h2 class="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
                <p class="text-lg text-gray-700">Our vision is to build a reliable and modern shopping cart system that simplifies online shopping by offering:
Smooth product selection and checkout
Real-time cart updates across devices
Secure and hassle-free payments
Personalized suggestions for better shopping decisions.</p>
            </div>
        </div>
    </section>

    <section class="bg-gray-800 text-white py-12">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-semibold mb-4">Get in Touch</h2>
            <p class="text-lg mb-6">Have any questions or feedback? Feel free to reach out to us!</p>
            <p class="text-lg">Email: <a href="mailto:sonianup8965@gmail.com.com" class="text-yellow-400">support@shoppingcart.com</a></p>
        </div>
    </section>
   </>
  )
}

export default About