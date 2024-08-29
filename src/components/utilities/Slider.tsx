"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PhotoCamera, Search } from "@mui/icons-material";

interface SliderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
  toggleMenu: () => void;
}

const Slider: React.FC<SliderProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  toggleMenu,
}) => {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [funFact, setFunFact] = useState<string>("");

  useEffect(() => {
    const fetchFunFact = async () => {
      try {
        const response = await fetch(
          "https://uselessfacts.jsph.pl/random.json?language=en"
        );
        const data = await response.json();
        setFunFact(data.text);
      } catch (error) {
        console.error("Error fetching fun fact:", error);
      }
    };

    fetchFunFact();
    const intervalID = setInterval(fetchFunFact, 10000);

    return () => clearInterval(intervalID);
  }, []);

  useEffect(() => {
    const updateTime = () => setCurrentTime(new Date());
    const intervalID = setInterval(updateTime, 1000);

    return () => clearInterval(intervalID);
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        toggleMenu();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [toggleMenu]);

  const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  const formatTime = (time: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };
    return time.toLocaleTimeString([], options);
  };

  return (
    <motion.nav
      transition={{ type: "spring", damping: 200, stiffness: 1000 }}
      initial={{ y: "-100%" }}
      animate={{ y: isMenuOpen ? "0%" : "-110%" }}
      className="fixed inset-0 bg-black h-full w-full z-50"
      onClick={(e) => {
        e.stopPropagation();
        toggleMenu();
      }}
      style={{
        background: "url(https://images.alphacoders.com/124/1248273.png)",
        backgroundSize: "cover",
      }}
    >
      <div className="relative flex flex-col justify-center h-full text-primary">
        {currentTime && (
          <div className="absolute flex flex-col items-center w-full top-32 text-white">
            <div className="text-9xl font-bold">{formatTime(currentTime)}</div>
            <div className="font-semibold text-4xl mt-5">
              {formatDate(currentTime)}
            </div>
            <div className="font-semibold text-xl mt-40 w-72 flex flex-col items-center">
              Did you know?
              <div className="mt-3">{funFact}</div>
            </div>
          </div>
        )}
        <div className="absolute top-0 flex justify-between w-full h-full py-12 px-32 text-white">
          <a
            href="https://google.com"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Google"
          >
            <Search fontSize="large" />
          </a>
          <a
            href="https://next-app-egemengulpinar.vercel.app/"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Photo"
          >
            <PhotoCamera fontSize="large" />
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Slider;
