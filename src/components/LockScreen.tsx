"use client";
import React, { useState, useCallback } from "react";
import Login from "./users/Login";
import Slider from "./utilities/Slider";
import MobileDetection from "./utilities/MobileDetection";

const LockScreen: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Use useCallback to memoize the function and avoid unnecessary re-renders
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  // Callback for mobile detection
  const handleMobileDetection = useCallback((mobile: boolean) => {
    setIsMobile(mobile);
  }, []);

  // Conditional rendering for mobile detection
  if (isMobile) {
    return (
      <div className="bg-black w-full h-screen text-center text-3xl px-7 overflow-hidden flex flex-col justify-center items-center">
        😔
        <br />
        Sorry, this app is not supported on mobile devices{" "}
        <div className="font-bold">YET.</div> 🙏
      </div>
    );
  }

  return (
    <>
      {!isMobile && <MobileDetection onDetectMobile={handleMobileDetection} />}

      <div
        className="absolute bg-black h-screen w-full blur-sm"
        style={{
          background:
            "url(https://images.alphacoders.com/124/1248273.png) no-repeat center center",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="absolute left-0 top-0 h-screen w-full flex flex-col items-center z-10">
        <Login />
      </div>

      <Slider
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        toggleMenu={toggleMenu}
      />
    </>
  );
};

export default LockScreen;
