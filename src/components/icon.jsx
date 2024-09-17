import { useState, useEffect } from 'react';
import '../index.css'

const FadeIcon = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Adjust the opacity based on scroll position (you can tweak the multiplier)
      setOpacity(Math.max(1 - scrollPosition / 300, 0));
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ opacity, transition: 'opacity 0.1s ease' }}>
      <span className='arrow'><i class='fa-solid fa-arrow-down-long text-white text-4xl mt-[10rem]'></i></span>
    </div>
  );
};

export default FadeIcon;
