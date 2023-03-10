import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import useInterval from "../hooks/useInterval";
import { NextSlider, PrevSlider } from "./Icons";
import { Card } from "./Card";

interface CardSlider {
  src: string;
  name: string;
}

const CardSlider: React.FC<{ images: CardSlider[] }> = ({ images }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const [scrollIndex, setScrollIndex] = useState(0);
  const [numCards, setNumCards] = useState(cardsRef.current.length);
  const [sliderWidth, setSliderWidth] = useState(
    sliderRef.current?.clientWidth
  );
  const [cardWidth, setCardWidth] = useState(cardsRef.current[0]?.clientWidth);

  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);

  useEffect(() => {
    setNumCards(cardsRef.current.length);
    setSliderWidth(sliderRef.current?.clientWidth);
    setCardWidth(cardsRef.current[0]?.clientWidth);
    setShowScrollButtons(true);

    gsap.to(sliderRef.current, {
      x: -(scrollIndex * (cardWidth || 0)),
      duration: 0.2,
      ease: "none",
    });
  }, [cardWidth, scrollIndex]);

  const handlePrevClick = () => {
    setAutoScrollEnabled(false);
    if (scrollIndex === 0) {
      setScrollIndex(numCards - 1);
    } else {
      setScrollIndex(scrollIndex - 1);
    }
  };

  const handleNextClick = () => {
    setAutoScrollEnabled(false);
    if (scrollIndex === numCards - 1) {
      setScrollIndex(0);
    } else {
      setScrollIndex(scrollIndex + 1);
    }
  };

  useInterval(() => {
    if (autoScrollEnabled) handleNextClick();
  }, 4000);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex items-center justify-center">
        {showScrollButtons && (
          <>
            <button
              className="absolute left-0 top-1/3 z-10"
              onClick={handlePrevClick}
            >
              <PrevSlider width={25} stroke="#a1a5b7" />
            </button>
            <button
              className="absolute right-0 top-1/3 z-10"
              onClick={handleNextClick}
            >
              <NextSlider width={25} stroke="#a1a5b7" />
            </button>
          </>
        )}
      </div>
      <div
        ref={sliderRef}
        className="relative flex w-full items-center justify-start overflow-visible"
      >
        {images.map((image, index) => (
          <div
            key={index}
            ref={(item: HTMLDivElement) => (cardsRef.current[index] = item)}
            className="flex-shrink-0"
          >
            <Card
              style={{ "--slider-width": `${sliderWidth}px` }}
              src={image.src}
              name={image.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
