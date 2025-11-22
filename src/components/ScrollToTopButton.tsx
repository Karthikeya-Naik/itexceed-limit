import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

/**
 * Floating "Scroll to Top" button.
 */
const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      title="Scroll to top"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-professional-darkBlue text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all"
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTopButton;
