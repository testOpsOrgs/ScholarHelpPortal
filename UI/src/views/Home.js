import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState , useEffect} from 'react';
import '../views/Home.css';




export default function Home() {

  const images = ['/pic/image_1.png', '/pic/image_2.png', '/pic/image_3.png'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to change the image automatically
  const autoChangeImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    // Set up a timer to change the image every 2 seconds
    const timer = setInterval(autoChangeImage, 2000);

    // Clean up the timer when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []);


  return (
    <div>
        <Header></Header>
        <div className="main-content">
      <div className="photo-carousel">
      <img src={images[currentImageIndex]} alt="Carousel" />
      </div>
      <div className="text-box">
        <h1>Welcome to Our Website</h1>
        <p>
          This is a brief introduction to our site. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec justo eget ante aliquet suscipit.
        </p>
        <button className="get-started-button">Get Started</button>
      </div>
    </div>
        <Footer></Footer>
    </div>
  )
}
