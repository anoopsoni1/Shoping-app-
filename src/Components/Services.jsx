import React from 'react'

function Services() {
  return (
  <>
  
  <section class="bg-gray-800 text-white text-center py-20">
        <h1 class="text-4xl font-extrabold">Discover Our Services</h1>
        <p class="mt-4 text-lg">We offer top services to help your business grow and succeed.</p>
    </section>


    <section id="services" class="py-20">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Our Services</h2>
        
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Web Development</h3>
                    <p className="text-gray-600">We create responsive and user-friendly websites that help you establish your online presence.</p>
                </div>
      
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">SEO Optimization</h3>
                    <p className="text-gray-600">Our SEO strategies improve your website’s visibility on search engines, driving more traffic to your site.</p>
                </div>
              
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Digital Marketing</h3>
                    <p className="text-gray-600">Our digital marketing services help you reach a wider audience and grow your brand.</p>
                </div>
            </div>
    </section>


    <section id="contact" class="bg-gray-100 py-20">
        <div class="max-w-7xl mx-auto text-center">
            <h2 class="text-3xl font-bold mb-8">Get In Touch</h2>
            <p class="text-lg text-gray-600 mb-6">Have any questions or want to work with us? Feel free to reach out!</p>
            <a href="mailto:sonianup8965@gmail.com.com" class="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-500">Contact Us</a>
        </div>
    </section>
      </>
  )
}

export default Services
