const projects = [
    {
      cover: 'https://cdn.prod.website-files.com/615f5935af74848be6f33e1f/6356f474040e32fada16cadd_image1.png',
      title: 'Aceternity',
      description: 'A design and development studio that focuses on building quality apps.',
      stack: ['NextJs', 'TailwindCSS'],
    },
    {
      cover: 'https://cdn.prod.website-files.com/615f5935af74848be6f33e1f/6356f474040e32fada16cadd_image1.png',
      title: 'Algochurn',
      description: 'Practice for technical interviews with hands-on coding challenges.',
      stack: ['NextJs', 'TailwindCSS'],
    },
    {
      cover: 'https://admin.mridul.tech/wp-content/uploads/2023/05/E-commerce-Website-1024x538.webp',
      title: 'Moonbeam',
      description: 'Never write from scratch again with Moonbeam, your AI-first writing tool.',
      stack: ['NextJs', 'TailwindCSS'],
    },
  ];

const Projects = () => {
    return (
      <section className="w-full p-10 mt-5">




        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              {/* Project Image */}
              <img
                src={project.cover}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-5">
                {/* Title */}
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                {/* Description */}
                <p className="text-gray-500 mb-4">{project.description}</p>
                {/* Tech Stack */}
                <div className="flex space-x-2 items-center justify-center">
                  {project.stack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full hover:bg-gray-300 hover:text-gray-800 hover:"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  