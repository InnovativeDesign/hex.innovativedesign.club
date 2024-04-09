import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-between">
      <div className="flex flex-col bg-black">
        <div className="flex flex-row justify-between">
          <img src="/track_shape.png" width={340} height={340}></img>
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
          <div className="flex flex-col justify-between">
            <Image className="" src="/horiz_track_1.png" width={340} height={340} alt="track"></Image>
            <Image src="/barcode_head.png" width={340} height={340} alt="barcode"></Image>
          </div>
          
        </div>
          <div className="flex flex-row gap-24 ml-16 mr-16">
            <img src="/angel.png" width={360} height={360}></img>
            <div className="flex flex-col">
              <div className="flex flex-row justify-between">
                <p class="text-6xl font-bold  inline-block bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text mt-32 mb-12">ABOUT</p>
                <Image className="justify-end" src="/clover.png" width={150} height={150} alt="clover"></Image>
              </div>
              <p class="text-lg font-bold text-white mb-8">Innovative Design presents HEX: Hone & Explore, a weekend of free graphic design, photography, and website design workshops where students can learn various creative skills!</p>
              <p class="text-lg font-bold text-white mb-8">The event is open to all students, alumni, friends, and family - with no experience necessary.</p>
              <p class="text-lg font-bold text-white mb-8">Workshops are 1-hour long, running from 12:00 PM - 6:00 PM PST on Saturday, April 20 and Sunday, April 21 in Social Sciences 20.</p>
            </div>
          </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row space-x-56">
            <img src="/checker.png" width={200} height={200}></img>
            <p class="text-6xl font-bold  inline-block bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text mt-24 mb-12">SCHEDULE</p>
          </div>
          <div className="flex flex-row">
            <img src="vert_track.png" width={180} height={60}></img>
            <div className="flex flex-row gap-24">
              <div className="flex flex-col">
                <p class="text-4xl font-bold  inline-block bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text mb-12">SAT, APRIL 20</p>
                <div className="flex flex-col mb-12">
                  <p class="text-2xl font-bold  inline-block bg-gradient-to-r from-gray-400 to-pink-200 text-transparent bg-clip-text mb-1">Intro to Figma</p>
                  <p class="text-xl font-bold text-white mb-1">1:00 - 2:00</p>
                  <p class="text-xl font-bold text-white mb-1">August O, Katy N, Rachel L</p>
                  <p class="text-xl text-white mb-2">MATERIALS NEEDED: Laptop & Figma</p>
                </div>
                <div className="flex flex-col mb-12">
                  <p class="text-2xl font-bold  inline-block bg-gradient-to-r from-gray-400 to-pink-200 text-transparent bg-clip-text mb-1">Lightroom Workshop: Masking</p>
                  <p class="text-xl font-bold text-white mb-1">2:00 - 3:00</p>
                  <p class="text-xl font-bold text-white mb-1">Eric Y & Matt S</p>
                  <p class="text-xl text-white mb-2">MATERIALS NEEDED: Laptop & Lightroom</p>
                </div>
                <div className="flex flex-col mb-12">
                  <p class="text-2xl font-bold  inline-block bg-gradient-to-r from-gray-400 to-pink-200 text-transparent bg-clip-text mb-1">Branding and Mockups 101</p>
                  <p class="text-xl font-bold text-white mb-1">3:00 - 4:00</p>
                  <p class="text-xl font-bold text-white mb-1">Patricia S</p>
                  <p class="text-xl text-white mb-2">MATERIALS NEEDED: Adobe Illustrator & Photoshop</p>
                </div>
                <div className="flex flex-col mb-12">
                  <p class="text-2xl font-bold  inline-block bg-gradient-to-r from-gray-400 to-pink-200 text-transparent bg-clip-text mb-1">Illuminate Your Creativity</p>
                  <p class="text-xl font-bold text-white mb-1">4:00 - 5:00</p>
                  <p class="text-xl font-bold text-white mb-1">James N</p>
                  <p class="text-xl text-white mb-2">MATERIALS NEEDED: Camera & Light Source</p>
                </div>
                <div className="flex flex-col mb-12">
                  <p class="text-2xl font-bold  inline-block bg-gradient-to-r from-gray-400 to-pink-200 text-transparent bg-clip-text mb-1">Intro to Film Photography</p>
                  <p class="text-xl font-bold text-white mb-1">5:00 - 6:00</p>
                  <p class="text-xl font-bold text-white mb-1">Lucio Y</p>
                  <p class="text-xl text-white mb-2">MATERIALS NEEDED: None</p>
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
                  <p class="text-2xl font-bold  inline-block bg-gradient-to-r from-gray-400 to-pink-200 text-transparent bg-clip-text mb-1">Collaborative Zine Making</p>
                  <p class="text-xl font-bold text-white mb-1">12:00 - 1:00</p>
                  <p class="text-xl font-bold text-white mb-1">Paloma B</p>
                  <p class="text-xl text-white mb-2">MATERIALS NEEDED: Markers, Magazines, Scissors & Glue</p>
                </div>
                <div className="flex flex-col mb-12">
                  <p class="text-2xl font-bold  inline-block bg-gradient-to-r from-gray-400 to-pink-200 text-transparent bg-clip-text mb-1">Intro to 3D Modeling: Maya!</p>
                  <p class="text-xl font-bold text-white mb-1">1:00 - 2:00</p>
                  <p class="text-xl font-bold text-white mb-1">Linda Z</p>
                  <p class="text-xl text-white mb-2">MATERIALS NEEDED: Maya, Adobe Photoshop</p>
                </div>
                <div className="flex flex-col mb-12">
                  <p class="text-2xl font-bold  inline-block bg-gradient-to-r from-gray-400 to-pink-200 text-transparent bg-clip-text mb-1">Unlocking Your Artistic Potential</p>
                  <p class="text-xl font-bold text-white mb-1">2:00 - 3:00</p>
                  <p class="text-xl font-bold text-white mb-1">Arahan L & Kaitlyn E-S</p>
                  <p class="text-xl text-white mb-2">MATERIALS NEEDED: Laptop</p>
                </div>
                <div className="flex flex-col mb-12">
                  <p class="text-2xl font-bold  inline-block bg-gradient-to-r from-gray-400 to-pink-200 text-transparent bg-clip-text mb-1">Intro to Adobe After Effects</p>
                  <p class="text-xl font-bold text-white mb-1">3:00 - 40:00</p>
                  <p class="text-xl font-bold text-white mb-1">Linda L & Megan A</p>
                  <p class="text-xl text-white mb-2">MATERIALS NEEDED: Laptop & Adobe After Effects</p>
                </div>
                <div className="flex flex-col mb-12">
                  <p class="text-2xl font-bold  inline-block bg-gradient-to-r from-gray-400 to-pink-200 text-transparent bg-clip-text mb-1">The Photography Storytelling Workshop</p>
                  <p class="text-xl font-bold text-white mb-1">4:00 - 5:00</p>
                  <p class="text-xl font-bold text-white mb-1">Elena H & Kyle GT</p>
                  <p class="text-xl text-white mb-2">MATERIALS NEEDED: N/A</p>
                </div>
                <div className="flex flex-col mb-12">
                  <p class="text-2xl font-bold  inline-block bg-gradient-to-r from-gray-400 to-pink-200 text-transparent bg-clip-text mb-1">Fix it in Post: Basics of Premiere Pro</p>
                  <p class="text-xl font-bold text-white mb-1">5:00 - 6:00</p>
                  <p class="text-xl font-bold text-white mb-1">Daniel L & Gerry R</p>
                  <p class="text-xl text-white mb-2">MATERIALS NEEDED: Adobe Premiere Pro</p>
                </div>
              </div>
              <div className="flex flex-col space-y-64">
                <img src="web.png" width={250} height={250}></img>
                <img src="globe_chain.png" width={250} height={250}></img>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <img src="car.png" width={500} height={500}></img>
            <Image src="/hazard_texture.png" width={300} height={100} alt="hazard"></Image>
          </div>
        </div>
      </div>
    </main>
  );
}
