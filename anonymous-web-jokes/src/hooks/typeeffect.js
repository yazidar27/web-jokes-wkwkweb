import { useState, useEffect } from "react";

export const useTypewriter = (text, speed = 30) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setDisplayText(""); // Reset saat text berubah
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return displayText;
};
