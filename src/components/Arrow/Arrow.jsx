import { useState, useEffect } from 'react';
import { UpButton } from './styles';
import { FaArrowAltCircleUp } from 'react-icons/fa';

export default function Arrow() {
  const [showArrow, setShowArrow] = useState(false);

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <UpButton>
      <FaArrowAltCircleUp
        onClick={handleScrollUp}
        className={`arrow-icon ${showArrow ? 'show' : ''}`}
        size={110}
      />
    </UpButton>
  );
}
