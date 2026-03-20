import { ArrowDown } from "lucide-react";
import profileImage from "../assets/Profile.jpg";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-5xl mx-auto z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 text-center md:text-left">
          <div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary shadow-lg bg-white">
            <img
              src={profileImage}
              alt="Sofia Bianca profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}
                Sofia Bianca
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                {" "}
                Cera
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
              I am a college student in OMSC-Mamburao Campus taking up Information Technology. I am passionate about learning how technology can be used to solve real-world problems through system development and web applications.
              I enjoy exploring different programming tools and improving my technical skills through academic projects. 
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                View My Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
