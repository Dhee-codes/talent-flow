export function AboutHero() {
  return (
    <div 
      className="relative w-full overflow-hidden bg-cover bg-center min-h-[500px] flex items-center justify-center text-white text-center px-4"
      style={{ backgroundImage: "url('/about-hero-bg.png')" }}
    >
      {/* Blue overlay */}
      <div className="absolute inset-0 bg-[#2956A6]/80 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-[#4271C8]/60"></div>
      
      <div className="relative z-10 max-w-[900px] mx-auto flex flex-col items-center py-24">
        <h1 className="text-[44px] font-bold mb-6 tracking-wide drop-shadow-md">About US</h1>
        <div className="w-[100px] h-1.5 bg-white mb-10 rounded-full"></div>
        
        <p className="text-lg md:text-[17px] leading-loose mb-8 font-medium">
          TalentFlow is a modern learning platform built to empower individuals with the practical skills needed to thrive in today's fast-evolving world. It serves as a guided pathway for anyone eager to grow in entrepreneurial, managerial and digital disciplines whether they're just starting out or looking to advance their expertise.
        </p>
        <p className="text-lg md:text-[17px] leading-loose font-medium">
          Driven by a vision to make learning more impact and accessible, TalentFlow focuses on delivering knowledge through structured, bite sized experiences that encourage active participation. By combining clear guidance with hands-on exercises, the platform helps learners build real competence, not just consume information.
        </p>
      </div>
    </div>
  );
}
