import Image from "next/image";
import './style.css';

export default function Home() {
  return (
    <div>

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
      
    </div>
  );
}
