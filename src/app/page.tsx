"use client";
import Image from "next/image";
import './style.css';
import { useEffect, useRef, useState } from 'react';

export default function Home() {

  const audioRef = useRef<HTMLAudioElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isHiding, setIsHiding] = useState(false);
  const [to, setTo] = useState<string | null>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const toParam = params.get('to')
    setTo(toParam)
  })

  let messages = [
    {
      sender : 'sender 1',
      message : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fugiat veritatis quibusdam non accusamus repudiandae at itaque aliquid quaerat amet iste laudantium illum reprehenderit rerum, assumenda veniam unde molestiae explicabo!'
    },
    {
      sender : 'sender 2',
      message : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fugiat veritatis quibusdam non accusamus repudiandae at itaque aliquid quaerat amet iste laudantium illum reprehenderit rerum, assumenda veniam unde molestiae explicabo!'
    },
    {
      sender : 'sender 3',
      message : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fugiat veritatis quibusdam non accusamus repudiandae at itaque aliquid quaerat amet iste laudantium illum reprehenderit rerum, assumenda veniam unde molestiae explicabo!'
    },
    {
      sender : 'sender 4',
      message : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fugiat veritatis quibusdam non accusamus repudiandae at itaque aliquid quaerat amet iste laudantium illum reprehenderit rerum, assumenda veniam unde molestiae explicabo!'
    },
    {
      sender : 'sender 5',
      message : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fugiat veritatis quibusdam non accusamus repudiandae at itaque aliquid quaerat amet iste laudantium illum reprehenderit rerum, assumenda veniam unde molestiae explicabo!'
    },
  ]

  const [showContent, setShowContent] = useState(false)
  const handleOpen = () => {
    setIsHiding(true); // mulai fade-out
    setTimeout(() => {
      setIsVisible(false); // benar-benar hilang dari DOM
      const video = videoRef.current
      if (video) {
        video.play(); // play video setelah fade-out selesai
      }
      // audioRef.current?.play(); // play audio setelah hilang
    }, 500); // waktu sama dengan transition duration
  };

  const divRef = useRef<HTMLDivElement | null>(null);
  const scrollAmount = useRef(0);

  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    let animationFrameId:number;
    function slowScroll() {
      if (!divRef.current) return;

      scrollAmount.current += 0.5; // Adjust scroll speed here
      const maxScroll = divRef.current.scrollHeight - divRef.current.clientHeight;

      if (scrollAmount.current > maxScroll) {
        scrollAmount.current = 0; // Reset to top when bottom is reached
      }

      divRef.current.scrollTop = scrollAmount.current;

      animationFrameId = requestAnimationFrame(slowScroll)
    }
     
    animationFrameId = requestAnimationFrame(slowScroll);
    return () => cancelAnimationFrame(animationFrameId);

  }, []);

  return (
    <div>
      {/* <audio ref={audioRef} src="/bg-music-2.mp3" loop autoPlay onPlay={handlePlay} className="hidden">
      </audio> */}
      {isVisible && (
        <div
          className={`fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center transition-opacity duration-500 ${
            isHiding ? "opacity-0" : "opacity-100"
          }`}
        >
          <Image
            src="/wallpaper.jpg"
            alt="Wedding Invitation"
            fill
            priority
            className="object-cover z-0"
          />

          <div className="z-10">
            <button
              onClick={handleOpen}
              className="bg-[#956850] text-white px-4 py-2 rounded hover:bg-[#F7F2EA] transition duration-300"
            >
              Buka Undangan untuk {to ? to : 'Tamu'}
            </button>
          </div>

          {/* <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <button
              onClick={handleOpen}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              Buka Undangan untuk {to ? to : 'Tamu'}
            </button>
          </div> */}
        </div>
      )}
      {/* <div
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

      </div> */}

      <div className="relative w-screen h-screen overflow-hidden">
        <video
          ref={videoRef}
          src="/wedding-video-1.mp4" // Place this in /public folder
          className="absolute w-full h-full object-cover"
          playsInline
        />
      </div>

      {/* <div className="flex flex-col items-center h-[500px] bg-gradient-to-b from-[#f8cfd8] via-[#d3d3d3] to-[#c2f0ea] px-6">
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
      </div> */}

      {/* <div className="flex flex-col items-center h-screen bg-gradient-to-b from-[#c2f0ea] via-[#d3d3d3] to-[#f8cfd8] px-6">
        <h2 className="text-3xl font-bold text-center text-white">
          Wedding Ceremony
        </h2>
        <p className="text-lg text-center mt-4 text-white mb-[50px]">
            Jl. Veteran III Gg. Saung Wira I No.17, RT.02/RW.05, Banjar Waru, Kec. Ciawi, Kabupaten Bogor, Jawa Barat 16720
        </p>
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
      </div> */}

      {/* <div className="flex flex-col items-center h-screen bg-gradient-to-b from-[#c2f0ea] via-[#d3d3d3] to-[#f8cfd8] px-6">
        <div className="bg-white h-[300px] w-[100%] mt-[20px] rounded-xl px-2 overflow-y-scroll scrollable-div no-scrollbar" ref={divRef}>
          {messages.map((message, index) => (
            <div className="w-[100%] border-b-2 py-4" key={index}>
              <div className="w-[100%]">
                <span className="text-black">
                  {message.sender}
                </span>
              </div>
              <div className="w-[100%] py-2">
                <span className="text-gray-700">
                  {message.message}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div> */}

    </div>
  );
}
