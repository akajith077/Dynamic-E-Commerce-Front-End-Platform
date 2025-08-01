import React, { useEffect } from 'react'
import NavBar from './NavBar';
import useFetch from './custom-hook/useFetch';
import { LifeLine } from 'react-loading-indicators';
import techImg from '../assets/techImg.jpeg'
import MotionSlider from './MotionSlider';




// --- THE CORRECTED, FULLY RESPONSIVE HERO SECTION ---

const HeroSection = () => {
    return (
        <div className="bg-gray-100">
            {/* Reduced vertical padding on mobile for a better fit */}
            <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
                {/* 
                  KEY FIX: Using Flexbox for the main layout.
                  - flex flex-col:  Default to a single column layout (stacks items vertically) on mobile. This is our base.
                  - md:flex-row:   At the medium breakpoint (768px+), switch to a horizontal row layout.
                  - gap-8:          Provides vertical spacing on mobile.
                  - md:gap-16:      Provides horizontal spacing on desktop for a cleaner look.
                */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                    
                    {/* 
                      Text Content Wrapper:
                      - md:w-1/2:       On medium screens and up, this column takes up half the space. On mobile, it's full-width by default.
                      - text-center:    Centers the text on mobile.
                      - md:text-left:   Aligns text to the left on desktop.
                    */}
                    <div className="md:w-1/2 text-center md:text-left">
                        {/* Smoother text size transition for different screen sizes */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
                            Dot Index, <span className="text-blue-600">Unbeatable Prices.</span>
                        </h1>
                        <p className="mt-4 text-lg text-gray-600">
                            Explore the future of shopping — from premium fashion to cutting-edge electronics, we’ve got everything you need
                        </p>
                        <a
                            href="#"
                            className="mt-8 inline-block bg-blue-500 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-600 transition-transform transform hover:scale-105 shadow-lg"
                        >
                            Shop Now
                        </a>
                    </div>
                    
                    {/* 
                      Image Slider Wrapper:
                      - w-full:         Ensures the slider container takes up the full width on mobile.
                      - md:w-1/2:       On medium screens and up, it takes up the other half of the space.
                      - group:          This is still needed for the hover:pause effect on the slider.
                    */}
                    <div className="w-full md:w-1/2 group">
                        <MotionSlider />
                    </div>
                </div>
            </div>
        </div>
    );
};



const ProductCard = ({ product }) => {

    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
            
             
           
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-sm">  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" /></span>
            </div>
            <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800 truncate">{product.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{product.category}</p>
                <div className="flex justify-between items-center mt-4">
                    <span className="text-xl font-bold text-blue-500">${product.price}</span>
                    <button className="bg-blue-500 text-white text-sm font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition-colors">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

const FeaturedProducts = () => {
    let { products, isLoading } = useFetch("http://localhost:4000/products");
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Featured Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.slice(0,4).map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                <div className="text-center mt-12">
                     <a href="#" className="text-blue-500 font-semibold hover:underline">
                        View All Products →
                    </a>
                </div>
            </div>
        </section>
    );
};

const PromoBanner = () => {
    return (
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white my-16">
            <div className="container mx-auto px-4 py-12 text-center">
                <h2 className="text-3xl font-bold">Weekend Flash Sale!</h2>
                <p className="mt-2 text-lg">Get up to <span className="font-bold text-yellow-300">40% OFF</span> on selected headphones and accessories.</p>
                <a href="#" className="mt-6 inline-block bg-white text-blue-500 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors">
                    Shop the Sale
                </a>
            </div>
        </section>
    );
}

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300">
            <div className="container mx-auto px-4 py-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h4 className="font-bold text-lg mb-3 text-white">DotIndex</h4>
                        <p className="text-sm">Your ultimate destination for the newest and best multiple choice options.</p>
                    </div>
                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-3 text-white">Quick Links</h4>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:text-white">Home</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-white">Products</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-white">Contact</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-white">FAQ</a></li>
                        </ul>
                    </div>
                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-lg mb-3 text-white">Contact Us</h4>
                        <p className="text-sm">123 Peor Road, Tasvin Valley, CA</p>
                        <p className="text-sm">Email: dotindex@yahoo.com</p>
                        <p className="text-sm">Phone: (546) 456-7890</p>
                    </div>
                    {/* Newsletter */}
                    <div>
                        <h4 className="font-bold text-lg mb-3 text-white">Newsletter</h4>
                        <p className="text-sm mb-2">Subscribe for updates and deals.</p>
                        <div className="flex">
                            <input type="email" placeholder="Your Email" className="w-full rounded-l-md p-2 text-gray-800 focus:outline-none" />
                            <button className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600">Go</button>
                        </div>
                    </div>
                </div>
                <div className="text-center text-gray-500 border-t border-gray-700 mt-8 pt-4">
                    © {new Date().getFullYear()} DotIndex. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};


function App() {
    let { products, isLoading } = useFetch(
    "http://localhost:4000/products"
    );
    
    if (isLoading) {
    return (
      // <h1>Loading...</h1>
      <center>
      <LifeLine color="#32cd32" size="large" text="Loading" textColor="#17c716" />
      </center>
    )
  }
  return (
    <div className="bg-white">
       
        <main>
            <HeroSection />
            <FeaturedProducts />
            <PromoBanner /> 
        </main>
        <Footer />
    </div>
  )
}

export default App;