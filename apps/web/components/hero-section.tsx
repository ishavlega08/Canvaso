import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 -right-96 w-[800px] h-[800px] rounded-full bg-blue-600/10 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-3xl"></div>
      </div>
      
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight animate-fade-in">
            Collaborate and Create in Real-Time
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 md:text-2xl max-w-2xl mx-auto">
            Draw, design, and brainstorm together on an infinite canvas with your team, no matter where they are.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={"/signin"} className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-lg flex items-center">
              Start Drawing Now
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-5 h-5 ml-2"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" 
                />
              </svg>
            </Link>
          </div>
        </div>
        
        {/* App Preview */}
        <div className="relative max-w-5xl mx-auto bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/10 dark:border-white/5 rounded-xl overflow-hidden shadow-2xl animate-[float_6s_ease-in-out_infinite]">
          <div className="bg-gray-100 dark:bg-gray-800 px-3 py-2 flex items-center space-x-2 border-b border-gray-200 dark:border-gray-700">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 flex-1 text-center">
              DrawTogether - Collaborative Canvas
            </div>
          </div>
          <div className="relative aspect-video bg-white dark:bg-gray-900 overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=2000&h=1000" 
              alt="Collaborative drawing app interface" 
              className="w-full h-full object-cover"
              width={2000}
              height={1000}
              priority
            />
            
            {/* UI Elements Overlay */}
            <div className="absolute top-4 left-4 bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/10 dark:border-white/5 rounded-lg p-2 flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">A</div>
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">B</div>
              <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">C</div>
              <div className="w-8 h-8 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-lg flex items-center justify-center text-gray-700 dark:text-gray-300 font-bold">+</div>
            </div>
            
            <div className="absolute top-4 right-4 bg-white/10 dark:bg-black/20 backdrop-blur-lg rounded-lg py-1 px-3 text-sm">
              <span className="text-green-500">●</span> 3 online
            </div>
            
            <div className="absolute bottom-4 left-4 bg-white/10 dark:bg-black/20 backdrop-blur-lg rounded-lg p-2 flex items-center space-x-2">
              <div className="w-8 h-8 rounded bg-white/20 flex items-center justify-center">✏️</div>
              <div className="w-8 h-8 rounded bg-white/20 flex items-center justify-center">🔍</div>
              <div className="w-8 h-8 rounded bg-white/20 flex items-center justify-center">🖼️</div>
              <div className="w-8 h-8 rounded bg-white/20 flex items-center justify-center">📄</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}