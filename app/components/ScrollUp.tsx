import { useEffect, useState, useRef } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";

export default function ScrollUp({ scrollContainerRef }) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollThreshold = 300;
      setShowButton(container.scrollTop > scrollThreshold);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    scrollContainerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div ref={scrollContainerRef}>
        {showButton && (
          <div className="fixed bottom-5 right-5 z-50">
            <span onClick={scrollToTop} className="cursor-pointer">
              <FaCircleArrowUp
                size={40}
                className="text-gray-neutro/50 hover:text-yellow-mustard transition-colors duration-300"
              />
            </span>
          </div>
        )}
      </div>
    </>
  );
}
