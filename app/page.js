import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col bg-black">
        <div className="flex flex-col items-center justify-center">
          <a href="https://www.innovativedesign.club/" class="inline-block bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 hover:from-green-500 hover:via-yellow-500 hover:to-red-500 text-black font-bold py-2 px-4 rounded-full text-center w-56 text-xl">
            INNOD WEBSITE
          </a>
          <img src="/innod_logo.png" width={340} height={340}></img>
          <div className="flex flex-col items-center self-center">
            <p class="text-8xl font-bold  inline-block bg-gradient-to-r from-gray-600 to-pink-200 text-transparent bg-clip-text mb-2">HEX</p>
            <p class="text-4xl font-bold  inline-block bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text mb-2">HONE &amp; EXPLORE</p>
            <p class="text-2xl font-bold text-white">APRIL 20-21</p>
          </div>
        </div>
        <div className="flex flex-row gap-24 ml-16 mr-16">
          <img src="/angel.png" width={360} height={360}></img>
          <div className="flex flex-col">
            <p class="text-6xl font-bold  inline-block bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text mt-32 mb-12">ABOUT</p>
            <p class="text-lg font-bold text-white mb-8">Innovative Design presents HEX: Hone & Explore, a weekend of free graphic design, photography, and website design workshops where students can learn various creative skills!</p>
            <p class="text-lg font-bold text-white mb-8">The event is open to all students, alumni, friends, and family - with no experience necessary.</p>
            <p class="text-lg font-bold text-white mb-8">Workshops are 1-hour long, running from 12:00 PM - 6:00 PM PST on Saturday, April 20 and Sunday, April 21 in Social Sciences 20.</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p class="text-6xl font-bold  inline-block bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text mt-24 mb-12">SCHEDULE</p>
          <div className="flex flex-row gap-24">
          <div className="flex flex-col">
              <p class="text-4xl font-bold  inline-block bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text mb-12">SAT, APRIL 20</p>
              <div className="flex flex-col mb-12">
                <p class="text-2xl font-bold  inline-block bg-gradient-to-r from-gray-400 to-pink-200 text-transparent bg-clip-text mb-1">WORKSHOP NAME 1</p>
                <p class="text-xl font-bold text-white mb-1">00:00 - 00:00</p>
                <p class="text-xl font-bold text-white mb-1">INSTRUCTOR NAME</p>
                <p class="text-xl text-white mb-2">MATERIALS NEEDED: Material</p>
              </div>
              <div className="flex flex-col mb-12">
                <p class="text-2xl font-bold  inline-block bg-gradient-to-r from-gray-400 to-pink-200 text-transparent bg-clip-text mb-1">WORKSHOP NAME 2</p>
                <p class="text-xl font-bold text-white mb-1">00:00 - 00:00</p>
                <p class="text-xl font-bold text-white mb-1">INSTRUCTOR NAME</p>
                <p class="text-xl text-white mb-2">MATERIALS NEEDED: Material</p>
              </div>
              <div className="flex flex-col mb-12">
                <p class="text-2xl font-bold  inline-block bg-gradient-to-r from-gray-400 to-pink-200 text-transparent bg-clip-text mb-1">WORKSHOP NAME 3</p>
                <p class="text-xl font-bold text-white mb-1">00:00 - 00:00</p>
                <p class="text-xl font-bold text-white mb-1">INSTRUCTOR NAME</p>
                <p class="text-xl text-white mb-2">MATERIALS NEEDED: Material</p>
              </div>
              <div className="flex flex-col mb-12">
                <p class="text-2xl font-bold  inline-block bg-gradient-to-r from-gray-400 to-pink-200 text-transparent bg-clip-text mb-1">WORKSHOP NAME 4</p>
                <p class="text-xl font-bold text-white mb-1">00:00 - 00:00</p>
                <p class="text-xl font-bold text-white mb-1">INSTRUCTOR NAME</p>
                <p class="text-xl text-white mb-2">MATERIALS NEEDED: Material</p>
              </div>
              <div className="flex flex-col mb-12">
                <p class="text-2xl font-bold  inline-block bg-gradient-to-r from-gray-400 to-pink-200 text-transparent bg-clip-text mb-1">WORKSHOP NAME 5</p>
                <p class="text-xl font-bold text-white mb-1">00:00 - 00:00</p>
                <p class="text-xl font-bold text-white mb-1">INSTRUCTOR NAME</p>
                <p class="text-xl text-white mb-2">MATERIALS NEEDED: Material</p>
              </div>
              <div className="flex flex-col mb-12">
                <p class="text-2xl font-bold  inline-block bg-gradient-to-r from-gray-400 to-pink-200 text-transparent bg-clip-text mb-1">WORKSHOP NAME 6</p>
                <p class="text-xl font-bold text-white mb-1">00:00 - 00:00</p>
                <p class="text-xl font-bold text-white mb-1">INSTRUCTOR NAME</p>
                <p class="text-xl text-white mb-2">MATERIALS NEEDED: Material</p>
              </div>
              
            </div>
            
            <div className="flex flex-col">
              <p class="text-4xl font-bold  inline-block bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text mb-12">SUN, APRIL 21</p>
              <div className="flex flex-col mb-12">
                <p class="text-2xl font-bold  inline-block bg-gradient-to-r from-gray-400 to-pink-200 text-transparent bg-clip-text mb-1">WORKSHOP NAME 7</p>
                <p class="text-xl font-bold text-white mb-1">00:00 - 00:00</p>
                <p class="text-xl font-bold text-white mb-1">INSTRUCTOR NAME</p>
                <p class="text-xl text-white mb-2">MATERIALS NEEDED: Material</p>
              </div>
              <div className="flex flex-col mb-12">
                <p class="text-2xl font-bold  inline-block bg-gradient-to-r from-gray-400 to-pink-200 text-transparent bg-clip-text mb-1">WORKSHOP NAME 8</p>
                <p class="text-xl font-bold text-white mb-1">00:00 - 00:00</p>
                <p class="text-xl font-bold text-white mb-1">INSTRUCTOR NAME</p>
                <p class="text-xl text-white mb-2">MATERIALS NEEDED: Material</p>
              </div>
              <div className="flex flex-col mb-12">
                <p class="text-2xl font-bold  inline-block bg-gradient-to-r from-gray-400 to-pink-200 text-transparent bg-clip-text mb-1">WORKSHOP NAME 9</p>
                <p class="text-xl font-bold text-white mb-1">00:00 - 00:00</p>
                <p class="text-xl font-bold text-white mb-1">INSTRUCTOR NAME</p>
                <p class="text-xl text-white mb-2">MATERIALS NEEDED: Material</p>
              </div>
              <div className="flex flex-col mb-12">
                <p class="text-2xl font-bold  inline-block bg-gradient-to-r from-gray-400 to-pink-200 text-transparent bg-clip-text mb-1">WORKSHOP NAME 10</p>
                <p class="text-xl font-bold text-white mb-1">00:00 - 00:00</p>
                <p class="text-xl font-bold text-white mb-1">INSTRUCTOR NAME</p>
                <p class="text-xl text-white mb-2">MATERIALS NEEDED: Material</p>
              </div>
              <div className="flex flex-col mb-12">
                <p class="text-2xl font-bold  inline-block bg-gradient-to-r from-gray-400 to-pink-200 text-transparent bg-clip-text mb-1">WORKSHOP NAME 11</p>
                <p class="text-xl font-bold text-white mb-1">00:00 - 00:00</p>
                <p class="text-xl font-bold text-white mb-1">INSTRUCTOR NAME</p>
                <p class="text-xl text-white mb-2">MATERIALS NEEDED: Material</p>
              </div>
              <div className="flex flex-col mb-12">
                <p class="text-2xl font-bold  inline-block bg-gradient-to-r from-gray-400 to-pink-200 text-transparent bg-clip-text mb-1">WORKSHOP NAME 12</p>
                <p class="text-xl font-bold text-white mb-1">00:00 - 00:00</p>
                <p class="text-xl font-bold text-white mb-1">INSTRUCTOR NAME</p>
                <p class="text-xl text-white mb-2">MATERIALS NEEDED: Material</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
