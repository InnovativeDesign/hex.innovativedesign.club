import Image from "next/image";

export default function Home() {
  return (
    <main className="flex bg-[#141414] min-h-screen flex-row justify-between relative">
    <div className="min-h-full bg-[#141414]">
      <div className="flex flex-col absolute inset-0 z-10">
        <div className="flex flex-col items-center justify-center">
          <a href="https://www.innovativedesign.club/" class="font-druk inline-block bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 hover:from-green-500 hover:via-yellow-500 hover:to-red-500 text-black font-bold py-2 px-4 rounded-full text-center w-56 text-base mt-16">
            INNOD WEBSITE
          </a>
          <img src="/innod_logo.png" width={340} height={340}></img>
          <div className="flex flex-col items-center self-center">
            <p class="text-8xl font-bold font-druk inline-block bg-gradient-to-r from-gray-600 to-pink-200 text-transparent bg-clip-text mb-2">HEX</p>
            <p class="text-4xl font-bold font-druk inline-block bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text mb-2">HONE &amp; EXPLORE</p>
            <p class="text-2xl font-bold font-druk text-white pb-32">APRIL 20-21</p>
          </div>
        </div>
          
        <div className="flex flex-row items-center gap-24 min-w-screen bg-[#141414]">
          <img hidden className="lg:inline-block" src="/angel.png" width={360} height={360}></img>
          <div className="flex flex-col p-8">
            <div className="flex flex-row justify-between items-center">
              <p class="text-6xl font-bold font-druk inline-block bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text mt-32 mb-12">ABOUT</p>
              <Image className="mt-12" src="/clover.png" width={100} height={100} alt="clover"></Image>
            </div>
            <p class="text-lg font-druk font-bold text-white mb-8">Innovative Design presents HEX: Hone & Explore, a weekend of free graphic design, photography, and website design workshops where students can learn various creative skills!</p>
            <p class="text-lg font-druk font-bold text-white mb-8">The event is open to all students, alumni, friends, and family - with no experience necessary.</p>
            <p class="text-lg font-druk font-bold text-white">Workshops are 1-hour long, running from 12:00 PM - 6:00 PM PST on Saturday, April 20 and Sunday, April 21 in Social Sciences 20.</p>
            <img src="/spikey line.png" width={120} height={120}></img>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center bg-[#141414]">
          <p class="text-5xl lg:text-6xl font-druk font-bold bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text mt-24 mb-20">SCHEDULE</p>
          <div className="flex flex-col items-center place-self-center lg:flex-row">
            <div className="flex flex-col lg:flex-row lg:gap-16">
              <div className="flex flex-col w-96 z-10">
                <p class="text-4xl font-druk font-bold inline-block bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text mb-12">SAT, APRIL 20</p>
                <div className="flex flex-col mb-12">
                  <p class="text-xl font-druk font-bold inline-block bg-gradient-to-r from-gray-400 to-pink-200 text-transparent bg-clip-text">INTRO TO FIGMA</p>
                  <p class="text-base font-druk text-white">1:00 - 2:00</p>
                  <p class="text-base font-druk text-white">August O, Katy N, Rachel L</p>
                  <p class="text-base font-vivaldi text-white mb-2">Materials: Laptop & Figma</p>
                </div>
                <div className="flex font-druk flex-col mb-12">
                  <p class="text-xl font-druk font-bold inline-block bg-gradient-to-r from-gray-400 to-pink-200 text-transparent bg-clip-text">LIGHTROOM WORKSHOP: MASKING</p>
                  <p class="text-base font-druk text-white">2:00 - 3:00</p>
                  <p class="text-base font-druk text-white">Eric Y & Matt S</p>
                  <p class="text-base font-vivaldi text-white mb-2">Materials: Laptop & Lightroom</p>
                </div>
                <div className="flex flex-col mb-12">
                  <p class="text-xl font-druk font-bold  inline-block bg-gradient-to-r from-gray-400 to-pink-200 text-transparent bg-clip-text">BRANDING AND MOCKUPS 101</p>
                  <p class="text-base font-druk text-white">3:00 - 4:00</p>
                  <p class="text-base font-druk text-white">Patricia S</p>
                  <p class="text-base font-vivaldi text-white mb-2">Materials: Adobe Illustrator & Photoshop</p>
                </div>
                <div className="flex flex-col mb-12">
                  <p class="text-xl font-druk font-bold  inline-block bg-gradient-to-r from-gray-400 to-pink-200 text-transparent bg-clip-text">ILLUMINATE YOUR CREATIVITY</p>
                  <p class="text-base font-druk text-white">4:00 - 5:00</p>
                  <p class="text-base font-druk text-white">James N</p>
                  <p class="text-base font-vivaldi text-white mb-2">Materials: Camera & Light Source</p>
                </div>
                <div className="flex flex-col mb-12">
                  <p class="text-xl font-druk font-bold  inline-block bg-gradient-to-r from-gray-400 to-pink-200 text-transparent bg-clip-text">INTRO TO FILM PHOTOGRAPHY</p>
                  <p class="text-base font-druk text-white">5:00 - 6:00</p>
                  <p class="text-base font-druk text-white">Lucio Y</p>
                  <p class="text-base font-vivaldi text-white mb-16">Materials: N/A</p>
                </div>
              </div>
              
              <div className="flex flex-row z-10">
                <div className="flex flex-col w-96">
                  <p class="text-4xl font-druk font-bold inline-block bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text mb-12">SUN, APRIL 21</p>
                  <div className="flex flex-col mb-12">
                    <p class="text-lg font-druk font-bold  inline-block bg-gradient-to-r from-gray-400 to-pink-200 text-transparent bg-clip-text">COLLABORATIVE ZINE MAKING</p>
                    <p class="text-base font-druk font-bold text-white">12:00 - 1:00</p>
                    <p class="text-base font-druk font-bold text-white">Paloma B</p>
                    <p class="text-base font-vivaldi text-white mb-2">Materials: Markers, Magazines, Scissors & Glue</p>
                  </div>
                  <div className="flex flex-col mb-12">
                    <p class="text-lg font-druk font-bold  inline-block bg-gradient-to-r from-gray-400 to-pink-200 text-transparent bg-clip-text">INTRO TO 3D MODELING: MAYA!</p>
                    <p class="text-base font-druk font-bold text-white">1:00 - 2:00</p>
                    <p class="text-base font-druk font-bold text-white">Linda Z</p>
                    <p class="text-base font-vivaldi text-white mb-2">Materials: Maya, Adobe Photoshop</p>
                  </div>
                  <div className="flex flex-col mb-12">
                    <p class="text-lg font-druk font-bold  inline-block bg-gradient-to-r from-gray-400 to-pink-200 text-transparent bg-clip-text">UNLOCKING YOUR ARTISTIC POTENTIAL</p>
                    <p class="text-base font-druk font-bold text-white">2:00 - 3:00</p>
                    <p class="text-base font-druk font-bold text-white">Arahan L & Kaitlyn E-S</p>
                    <p class="text-base font-vivaldi text-white mb-2">Materials: Laptop</p>
                  </div>
                  <div className="flex flex-col mb-12">
                    <p class="text-lg font-druk font-bold  inline-block bg-gradient-to-r from-gray-400 to-pink-200 text-transparent bg-clip-text">INTRO TO ADOBE AFTER EFFECTS</p>
                    <p class="text-base font-druk font-bold text-white mb-1">3:00 - 4:00</p>
                    <p class="text-base font-druk font-bold text-white mb-1">Linda L & Megan A</p>
                    <p class="text-base font-vivaldi text-white mb-2">Materials: Laptop & Adobe After Effects</p>
                  </div>
                  <div className="flex flex-col mb-12">
                    <p class="text-lg font-druk font-bold  inline-block bg-gradient-to-r from-gray-400 to-pink-200 text-transparent bg-clip-text">THE PHOTOGRAPHY STORYTELLING WORKSHOP</p>
                    <p class="text-base font-druk font-bold text-white">4:00 - 5:00</p>
                    <p class="text-base font-druk font-bold text-white">Elena H & Kyle GT</p>
                    <p class="text-base font-vivaldi text-white mb-2">Materials: N/A</p>
                  </div>
                  <div className="flex flex-col">
                    <p class="text-lg font-druk font-bold  inline-block bg-gradient-to-r from-gray-400 to-pink-200 text-transparent bg-clip-text">FIX IT IN POST: BASICS OF PREMIERE PRO</p>
                    <p class="text-base font-druk font-bold text-white">5:00 - 6:00</p>
                    <p class="text-base font-druk font-bold text-white">Daniel L & Gerry R</p>
                    <p class="text-base font-vivaldi text-white mb-2">Materials: Adobe Premiere Pro</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          
          <div className="flex flex-row justify-center absolute items-center z-0 space-x-96">
            <img className="pb-80 hidden lg:inline-flex mt-14" src="vert_track.png" width={120} height={10}></img>
            <img className="pt-80 mt-80" src="globe_chain.png" width={250} height={250}></img>
            <img className="pb-80 mb-96" src="web.png" width={250} height={250}></img>
          </div>

          <div className="flex flex-row items-center space-x-96">
            <Image src="/car.png" width={500} height={500}></Image>
            <Image src="/hazard_texture.png" width={500} height={100} alt="hazard"></Image>
          </div>
        </div>
        
      </div>

      <div className="flex flex-row justify-between absolute items-center inset-0 z-0">
        <img className="mt-16 ml-16" src="/track_shape.png" width={280} height={280}></img>
        <div className="flex flex-col justify-between items-center">
          <Image className="" src="/horiz_track_1.png" width={340} height={340} alt="track"></Image>
          <Image src="/barcode_head.png" width={500} height={500} alt="barcode"></Image>
        </div>
        
      </div>
      

    </div>
    </main>
  );
}
