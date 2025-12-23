// src/components/sections/AnnouncementBar.jsx
import React, { useState, useEffect } from 'react';

const AnnouncementBar = () => {
  const announcements = [
    "✨ WORLDWIDE SHIPPING AVAILABLE ✨",
    "📞 BOOK YOUR APPOINTMENT: +91 98765 43210",
    "💫 NEW BRIDAL COLLECTION NOW LIVE 💫",
    "🎁 COMPLIMENTARY STYLING CONSULTATION"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#5C0A0A] via-[#8B0000] to-[#5C0A0A] text-white py-2.5 overflow-hidden">
      <div className="flex justify-center items-center">
        <p 
          className="text-xs md:text-sm tracking-[0.2em] uppercase font-light animate-pulse"
          key={currentIndex}
        >
          {announcements[currentIndex]}
        </p>
      </div>
    </div>
  );
};

export default AnnouncementBar;
