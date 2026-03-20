import { ArrowRight } from "lucide-react";
import codingImg from "../assets/coding.jpg";
import campusImg from "../assets/campus.jpg";
import projectImg from "../assets/project.png";

const galleryItems = [
  {
    id: 1,
    title: "My Coding Journey",
    description: "Exploring the world of programming and technology.",
    image: codingImg,
  },
  {
    id: 2,
    title: "Campus Life",
    description: "Daily life at OMSC-Mamburao Campus.",
    image: campusImg,
  },
  {
    id: 3,
    title: "Project Work",
    description: "Working on academic projects and assignments.",
    image: projectImg,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          My <span className="text-primary"> Gallery </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A glimpse into my student life and passion for technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1"> {item.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="#contact"
          >
            Get In Touch <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
