import React from 'react'

function About() {
  return (
   <>
    <section class="py-16 px-4 bg-white">
        <div class="container mx-auto text-center">
            <h1 class="text-4xl font-bold text-gray-900 mb-6">About Shopping-cart</h1>
            <p class="text-lg text-gray-700 mb-6">Welcome to shopping-cart! We are your go-to platform for online shopping. From the latest tech gadgets to trendy fashion, we offer a wide range of products at affordable prices. Our mission is to make shopping easy, convenient, and enjoyable for everyone.</p>
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
                <p class="text-lg text-gray-700">Our goal is to revolutionize the way people shop online. We aim to provide a seamless experience where customers can find exactly what they're looking for, whether it's a gift for a loved one or something special for themselves.</p>
            </div>
        </div>
    </section>

    <section class="bg-blue-600 text-white py-12">
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