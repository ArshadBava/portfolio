import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const { projects } = portfolioData;

    return (
        <section className="py-20 bg-black" id="projects">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4 relative inline-block">
                        My Projects
                        <span className="absolute -bottom-2 left-0 right-0 h-1 bg-brand-yellow transform scale-x-50"></span>
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto mt-4 font-light">
                        A collection of my recent work, showcasing my skills in web development.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            layoutId={`project-${project.id}`}
                            onClick={() => setSelectedProject(project)}
                            whileHover={{ y: -10 }}
                            className="glass-card rounded-sm overflow-hidden cursor-pointer group bg-[#0A0A0A] border border-white/10"
                        >
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="text-brand-yellow font-bold border-2 border-brand-yellow px-4 py-2 rounded-sm uppercase tracking-wide">
                                        View Details
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-yellow transition-colors">{project.title}</h3>
                                <p className="text-text-secondary text-sm line-clamp-2 mb-4 font-light">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-white/5 text-brand-yellow text-xs rounded-sm font-medium border border-white/10"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Modal */}
                <AnimatePresence>
                    {selectedProject && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedProject(null)}
                                className="absolute inset-0 bg-black/95 backdrop-blur-md"
                            />
                            <motion.div
                                layoutId={`project-${selectedProject.id}`}
                                className="relative bg-[#0A0A0A] border border-brand-yellow/30 rounded-sm w-full max-w-3xl overflow-hidden shadow-[0_0_50px_rgba(255,211,0,0.1)] max-h-[90vh] overflow-y-auto"
                            >
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 p-2 bg-black/50 rounded-full z-10 hover:bg-brand-yellow hover:text-black text-white transition-colors"
                                >
                                    <X size={24} />
                                </button>
                                <div className="h-64 sm:h-80 relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        className="w-full h-full object-cover opacity-90"
                                    />
                                </div>
                                <div className="p-8 relative z-20 -mt-20">
                                    <h3 className="text-4xl font-bold text-white mb-4">{selectedProject.title}</h3>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {selectedProject.techStack.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-brand-yellow text-black rounded-sm text-sm font-bold shadow-[0_0_10px_rgba(255,211,0,0.3)]"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-text-secondary leading-relaxed mb-8 text-lg font-light border-l-2 border-brand-yellow/30 pl-4">
                                        {selectedProject.description}
                                    </p>

                                    <div className="flex gap-4">
                                        <a
                                            href={selectedProject.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-sm hover:bg-brand-yellow transition-colors font-bold uppercase tracking-wide"
                                        >
                                            <Github size={20} />
                                            View Code
                                        </a>
                                        {/* Example for live demo link if available */}
                                        {/* <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-white text-white rounded-sm hover:border-brand-yellow hover:text-brand-yellow transition-colors font-bold uppercase tracking-wide">
                                            <ExternalLink size={20} />
                                            Live Demo
                                        </a> */}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;
