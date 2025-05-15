import React, { useState, useEffect, useRef } from "react";
import { carouselItems } from "../data/projectsData";
import SideNavigation from "./SideNav";

const Carousel = () => {
  const [items, setItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const carouselRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  // Initialize items
  useEffect(() => {
    setItems(carouselItems);
  }, []);

  // Handle scroll events
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const scrollLeft = carousel.scrollLeft;
      const itemWidth = carousel.firstChild?.clientWidth || 691;
      const newIndex = Math.round(scrollLeft / itemWidth);
      setActiveIndex(newIndex);

      // Show scroll indicator
      setShowScrollIndicator(true);

      // Hide after delay
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setShowScrollIndicator(false);
      }, 1000);
    };

    carousel.addEventListener("scroll", handleScroll);
    return () => {
      carousel.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const handleItemClick = (id) => {
    setSelectedItemId(id);
  };

  const closeSideNav = () => {
    setSelectedItemId(null);
  };

  return (
<div className="w-full overflow-hidden relative bg-white mb-8 pt-0">
{/* Side Navigation */}
      {selectedItemId && (
        <SideNavigation
          itemId={selectedItemId}
          onClose={closeSideNav}
          items={items}
        />
      )}

      {/* Carousel Items */}
      <ul
        ref={carouselRef}
        className="p-0 m-0 list-none relative flex w-full h-full items-center overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth"
        style={{
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {items.map((item, index) => (
  <li
  key={item.id}
  className="flex-shrink-0 w-[45%] md:w-[691px] h-[400px] md:h-[877px] relative cursor-pointer snap-start"
  onClick={() => handleItemClick(item.id)}
>
  <CarouselItem
    item={item}
    isActive={index === activeIndex}
    showScrollIndicator={showScrollIndicator}
    totalItems={items.length}
    activeIndex={activeIndex}
  />
</li>
        ))}
      </ul>
    </div>
  );
};

const CarouselItem = ({
  item,
}) => {
  const { image, mediaType, video, title, description, logo, objectPosition } =
    item;

  return (
<div className="w-full h-full flex flex-col">
  {/* Media Section */}
  <div className="flex-grow h-0 overflow-hidden relative">
    {mediaType === "image" && (
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
        style={{ objectPosition: objectPosition || "center center" }}
      />
    )}
    {mediaType === "video" && (
      <video
        src={video}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
    )}
  </div>

  {/* Info Section */}
  <div className="bg-white px-3 md:px-10 py-5 md:py-5 lg:py-5 text-black flex items-center gap-2 md:gap-2 h-[90px]">
    {/* Logo */}
    <div className="w-10 h-10 flex-shrink-0 flex justify-center items-center bg-white rounded-md overflow-hidden">
      <img
        src={logo}
        alt={`${title} logo`}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Text Info */}
    <div className="flex flex-col overflow-hidden">
      <span className="lg:text-sm md:md:text-sm text-xs leading-tight truncate">{title}</span>
      <span className="lg:text-sm md:text-sm text-xs text-[#9c9c9c] leading-3.5 break-all">
        {description}
      </span>
    </div>
  </div>
</div>


  );
};

export default Carousel;
