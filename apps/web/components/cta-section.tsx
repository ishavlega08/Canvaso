import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 md:p-12">
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-white"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-white"></div>
          </div>
            
          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform How Your Team Collaborates?
            </h2>
            <p className="text-white/80 text-lg mb-8 md:text-xl max-w-2xl mx-auto">
              Join thousands of teams already using DrawTogether to bring their ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href={"/signin"}
                className="bg-white text-blue-600 hover:bg-white/90 transition-colors text-lg px-8 py-3 rounded-md font-medium flex items-center justify-center"
              >
                Get Started for Free
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}