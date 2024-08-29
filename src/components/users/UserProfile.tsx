"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface UserProfileProps {
  name: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ name }) => {
  const [userInitials, setUserInitials] = useState<string>("");

  useEffect(() => {
    if (name) {
      setUserInitials(generateInitials(name));
    }
  }, [name]);

  return (
    <div className="flex items-center justify-center w-36 h-full bg-black rounded-full text-white text-2xl font-bold select-none">
      {name ? (
        <div className="text-white text-4xl font-normal">{userInitials}</div>
      ) : (
        <div className="avatar">
          <div className="w-24 rounded-full">
            <Image
              src="https://giffiles.alphacoders.com/208/208006.gif"
              alt="Profile"
              width={500}
              height={500}
            />
          </div>
        </div>
      )}
    </div>
  );
};

function generateInitials(name: string): string {
  const words = name.split(" ");
  const initials = words
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();
  return initials;
}

export { UserProfile, generateInitials };
