import { useEffect } from "react";

const Hero = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.pageYOffset;
            const heroContent = document.querySelector('.hero-content');
      
            if (heroContent) {
                heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
        };
    

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className='hero'>
            <div className="water-drop"></div>
            <div className="water-drop"></div>
            <div className="water-drop"></div>
            <div className="water-drop"></div>

            <div className="hero-content">
            <h1>Welcome to AquaHaul Solutions</h1>
            <p className="subtitle">Your Trusted Partner for Bulk Water Delivery Services</p>
            <h3 className="tagline">Reliable. Efficient. Timely.</h3>
            </div>
        </section>
    );
};

export default Hero;