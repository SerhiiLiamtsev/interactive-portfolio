import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col items-center p-40 space-y-10 max-w-[1440px] mx-auto animate-in slide-in-from-top-96 duration-1000">
      <h1 className="text-center text-5xl font-bold text-[#0A2540] leading-[60px] mb-5">KATERINA <br/> JOANNIDES</h1>
      <h1 className="text-center text-4xl font-bold text-[#0A2540]">Welcome to my digital portfolio!</h1>
      <h3 className="text-lg leading-[30px] text-center text-black">I've put together a little something to make viewing more fun.<br /> You also get to see a bit of my skills in visual storytelling.</h3>
      <Link href="/portfolio" className="bg-[#635BFF] rounded-xl text-white px-7 py-2 text-md transition-all duration-200 hover:bg-[#0A2540]">Start</Link>
    </main>
  );
} 
