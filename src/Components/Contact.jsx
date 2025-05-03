import React from 'react'

function Contact() {
  return (
   <>
    <section class="bg-teal-600 text-white text-center py-20">
        <h1 class="text-4xl font-extrabold">Contact Us</h1>
        <p class="mt-4 text-lg">We'd love to hear from you! Please fill out the form below.</p>
    </section>

  
    <section id="contact" class="py-20 bg-gray-100">
        <div class="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 class="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
            <form action="#" method="POST">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  
                    <div>
                        <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" id="name" name="name" class="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter your name" required />
                    </div>

                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
                        <input type="email" id="email" name="email" class="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter your email" required />
                    </div>
                </div>

                <div class="mb-6">
                    <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" name="message" rows="4" class="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter your message" required></textarea>
                </div>

            
                <div class="text-center">
                    <button type="submit" class="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600">Send Message</button>
                </div>
            </form>
        </div>
    </section>
   </>
  )
}

export default Contact