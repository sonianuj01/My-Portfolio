import React from 'react';
import arunoday from '/arunoday.png';
import youtube from '/youtube.png';
import portfolio from '/portfolio.png';

import { ArrowRight, ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Youtube-Backend",
        description: "Built a YouTube-like platform with MERN stack, enabling video uploads, interactions, and secure user management.",
        image: youtube,
        tags: ["JavaScript", "MongoDB", "Express"],
        githubUrl: "https://github.com/sonianuj01/backend_project1",
        demoUrl: "#"
    },
    {
        id: 2,
        title: "Arunoday-Club-Website",
        description: "Developed a dynamic club website showcasing events, members, and activities with React and Context API.",
        image: arunoday,
        tags: ["ReactJs", "TailwindCSS"],
        githubUrl: "https://github.com/sonianuj01/arunoday-website",
        demoUrl: "https://arunoday-website-two.vercel.app/"
    },
    {
        id: 3,
        title: "PortFolio",
        description: "Built a responsive personal portfolio with React and TailwindCSS to showcase projects and skills.",
        image: portfolio,
        tags: ["ReactJs", "TailwindCSS"],
        githubUrl: "https://github.com/sonianuj01/My-Portfolio",
        demoUrl: "#"
    }
]
const ProjectSection = () => {
    return (
        <section id='projects' className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>Featured <span className='text-primary'>Projects</span></h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully
                    crafted with attention to detail, performance and user experience.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'
                        >

                            <div className='h-48 overflow-hidden'>
                                <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ' />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className='px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground'>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
                                <p className='text-muted-foreground text-sm mb-4'>{project.description}</p>
                                <div className='flex justify-between items-center'>
                                    <div className="flex space-x-3">
                                        <a href={project.demoUrl} target='_blank' className='text-foreground/80 hover:text-primary transition-colors duration-300'> <ExternalLink size={20} /> </a>
                                        <a href={project.githubUrl} target='_blank' className='text-foreground/80 hover:text-primary transition-colors duration-300'> <Github size={20} /> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://github.com/sonianuj01" className='cosmic-button w-fit flex items-center mx-auto gap-2' target='_blank'>
                        Check My GitHub <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default ProjectSection;
