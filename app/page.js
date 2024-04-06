import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col bg-black">
        <div className="flex flex-col justify-center">
          <img src="/innod_logo.png" width={500} height={500}></img>
          <div className="flex flex-col self-center">
            <div>Hex</div>
            <div>Hone & Explore</div>
            <div>April 20-21</div>
          </div>
        </div>
        <div className="flex flex-row">
          <img src="/angel.png" width={300} height={300}></img>
          <div className="flex flex-col">
            <div>About</div>
            <div>Placeholder Text</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div>Schedule</div>
          <div className="flex flex-row">
            <div>Sat. April 20</div>
            <div>Sun. April 21</div>
          </div>
        </div>
      </div>
    </main>
  );
}
