import Image from "next/image";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Create a board",
      description: "Start with a blank canvas or choose from our templates to get started quickly.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=700&h=500"
    },
    {
      number: "02",
      title: "Invite your team",
      description: "Share a link with your teammates to start collaborating in real-time.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=700&h=500"
    },
    {
      number: "03",
      title: "Draw together",
      description: "Use our intuitive tools to sketch, diagram, and visualize your ideas together.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=700&h=500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How DrawTogether Works
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Get started in minutes with our simple 3-step process.
          </p>
        </div>
        
        <div className="space-y-16 md:space-y-24">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 md:gap-12 items-center`}
            >
              <div className="flex-1">
                <div className="mb-4 flex items-center">
                  <span className="text-4xl font-bold text-blue-600/20 dark:text-blue-500/30 mr-3">
                    {step.number}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold">{step.title}</h3>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{step.description}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  Learn more 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
              
              <div className="flex-1">
                <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg">
                  <div className="aspect-[4/3] relative">
                    <Image 
                      src={step.image} 
                      alt={step.title}
                      className="object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}