"use client";
import Image from "next/image";
import './style.css';
import { useEffect, useRef, useState } from 'react';

export default function Home() {

  const audioRef = useRef<HTMLAudioElement>(null);
  let isPlaying = false;
  const [isVisible, setIsVisible] = useState(true);
  const [isHiding, setIsHiding] = useState(false);

  const handleOpen = () => {
    setIsHiding(true); // mulai fade-out
    setTimeout(() => {
      setIsVisible(false); // benar-benar hilang dari DOM
      audioRef.current?.play(); // play audio setelah hilang
    }, 500); // waktu sama dengan transition duration

    setTimeout(() => {
      scrollVerySlowlyToBottom(); // scroll ke bawah setelah fade-out selesai
    }
    , 1000); // tunggu 1 detik sebelum scroll
  };

  const handlePlay = () => {
    audioRef.current?.play();
  };

  const scrollVerySlowlyToBottom = () => {
    const target = document.body.scrollHeight;
    const step = 0.4; // pixels per frame — smaller = slower
  
    let scroll = window.scrollY;
  
    const animate = () => {
      if (scroll < target) {
        scroll += step;
        window.scrollTo(0, scroll);
        requestAnimationFrame(animate);
      }
    };
  
    animate();
  };

  return (
    <div>
      <audio ref={audioRef} src="/bg-music-2.mp3" loop autoPlay onPlay={handlePlay} className="hidden">
      </audio>
      {isVisible && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-[#c2f0ea] z-50 flex items-center justify-center transition-opacity duration-500 ${
            isHiding ? "opacity-0" : "opacity-50"
          }`}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <button
              onClick={handleOpen}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              Buka Undangan
            </button>
          </div>
        </div>
      )}
      <div
        className="bg-[url('/bg.jpg')] h-screen w-screen bg-cover bg-no-repeat bg-center flex justify-center relative"
      >
        <h2 style={{fontSize: '20px', color: 'white'}} className="text-center absolute top-10">
          The Wedding Of
        </h2>
        <div>
          <h1 style={{ fontFamily: 'Parisienne', fontSize: '50px', color: 'white', fontWeight: 'bold' }} className="text-center mt-[100px]">
            Kharisma
          </h1>
          <h1 style={{ fontFamily: 'Parisienne', fontSize: '50px', color: 'white', fontWeight: 'bold' }} className="text-center">
              &
          </h1>
          <h1 style={{ fontFamily: 'Parisienne', fontSize: '50px', color: 'white', fontWeight: 'bold' }} className="text-center">
            Febry Lasena
          </h1>
        </div>

        <div className="container_mouse absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <span className="mouse-btn">
                <span className="mouse-scroll"></span>
            </span>
            <span className="text-white text-sm">Scroll Down</span>
        </div>

      </div>

      <div className="flex flex-col items-center h-[500px] bg-gradient-to-b from-[#f8cfd8] via-[#d3d3d3] to-[#c2f0ea] px-6">
          <p className="text-white mt-[100px]">
            Allah's blessings message يَتَفَكَّرُونَ 
          </p>
          <br />
          <p className="italic text-white">
            Meaning: "And among the signs of His power is that He created for you wives of your own kind, so that you would be inclined and feel at ease with them, and He made among you a feeling of love and affection. Indeed, in that there are truly signs for a person who thinks." 
          </p>

          <p className="text-white mt-4">
            (Quran Surah Ar-Rum: 21)
          </p>

      </div>

      <div className="flex flex-col items-center h-screen bg-gradient-to-b from-[#c2f0ea] via-[#d3d3d3] to-[#f8cfd8] px-6">

        <h2 className="text-3xl font-bold text-center text-white">
          Wedding Ceremony
        </h2>
        <p className="text-lg text-center mt-4 text-white mb-[50px]">
            Jl. Veteran III Gg. Saung Wira I No.17, RT.02/RW.05, Banjar Waru, Kec. Ciawi, Kabupaten Bogor, Jawa Barat 16720
        </p>

        {/* button to see location */}

        <a
          href="https://maps.app.goo.gl/bUTohvdAVu8pBTqV8"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-6 py-3 rounded-full shadow-md hover:bg-gray-200 transition duration-300 mb-4"
        >
          See Location
        </a>

        <iframe
          src="https://www.google.com/maps?q=-6.67021390060297,106.85740402698511&z=15&output=embed"
          width="600"
          height="300"
          style={{ border: 0, width: '100%', height: '300px' }}
          loading="lazy">
        </iframe>

      </div>
      
    </div>
  );
}
