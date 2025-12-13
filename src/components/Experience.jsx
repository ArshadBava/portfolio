import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { ExternalLink } from 'lucide-react';

const Experience = () => {
    const { experience } = portfolioData;

    return (
        <section className="py-20 bg-background-main" id="experience">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-text-primary mb-4 relative inline-block">
                        Experience
                        <span className="absolute -bottom-2 left-0 right-0 h-1 bg-brand-yellow transform scale-x-50"></span>
                    </h2>
                    <p className="text-text-secondary mt-4">My professional journey and work history.</p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="relative border-l-2 border-white/10 ml-3 md:ml-6 space-y-12">
                        {experience.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative pl-8 md:pl-12"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute -left-[9px] top-0 p-1.5 bg-black border border-brand-yellow rounded-full shadow-[0_0_10px_rgba(255,211,0,0.5)]">
                                    <div className="w-1.5 h-1.5 bg-brand-yellow rounded-full" />
                                </div>

                                <div className="glass-card p-8 rounded-sm hover:-translate-y-1 transition-all duration-300">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                        <h3 className="text-xl font-bold text-white items-center flex gap-2">
                                            {exp.role}
                                        </h3>
                                        <div className="flex flex-col items-end">
                                            <span className="text-xs font-bold text-brand-black bg-brand-yellow px-3 py-1 rounded-sm uppercase tracking-wider mb-1">
                                                {exp.period}
                                            </span>
                                            {exp.location && (
                                                <span className="text-xs text-text-secondary font-light">
                                                    {exp.location}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <a
                                            href={exp.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`group inline-flex items-center gap-3 text-lg font-medium text-text-secondary hover:text-brand-yellow transition-colors ${!exp.link ? 'pointer-events-none' : ''}`}
                                        >
                                            {exp.logo && (
                                                <img
                                                    src={exp.logo}
                                                    alt={exp.company}
                                                    className="w-10 h-10 rounded-full object-cover border border-white/20 group-hover:border-brand-yellow transition-colors grayscale group-hover:grayscale-0"
                                                />
                                            )}
                                            {exp.company}
                                            {exp.link && <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-yellow" />}
                                        </a>
                                    </div>

                                    <p className="text-text-secondary leading-relaxed font-light whitespace-pre-line mb-6">
                                        {exp.description}
                                    </p>

                                    {exp.skills && (
                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills.map((skill, i) => (
                                                <span key={i} className="text-xs px-2 py-1 rounded-sm bg-white/5 text-text-secondary border border-white/10">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
