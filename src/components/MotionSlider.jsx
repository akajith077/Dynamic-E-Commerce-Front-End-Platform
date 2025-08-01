import img1 from '../assets/1.jpeg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/techImg.jpeg';

// First, define your images. Make sure these are in your `public/images/` folder.
const sliderImages = [
    img1,
    img2,
    img3,
];

const MotionSlider = () => {
    // We need to duplicate the images array for the seamless scroll effect
    const duplicatedImages = [...sliderImages, ...sliderImages];

    return (
        <div className="relative w-full overflow-hidden">
            {/* The mask-image is a neat trick to fade out the edges */}
            <div className="absolute inset-0 z-10" style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
            }}></div>

            <div className="flex w-max animate-infinite-scroll group-hover:pause">
                {duplicatedImages.map((src, index) => (
                    <div key={index} className="flex-shrink-0 w-64 mx-4">
                        {/* 
                          TODO: Replace this div with your hero image.
                        */}
                        <div className="bg-gray-200 h-80 rounded-lg shadow-lg flex items-center justify-center">
                            <img src={src} alt={`Slide ${index + 1}`} className="w-auto h-670 object-contain" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MotionSlider