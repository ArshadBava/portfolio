import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Education = () => {
    const { education } = portfolioData;

    return (
        <section className="py-20 bg-black" id="education">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">
                        Education
                        <div className="w-12 h-1 bg-brand-yellow mx-auto mt-2" />
                    </h2>

                    <div className="space-y-12">
                        {education.map((edu, index) => (
                            <div key={index} className="relative pl-8 border-l border-white/10 group">
                                <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-black border border-brand-yellow group-hover:bg-brand-yellow transition-colors" />
                                <span className="text-xs font-bold text-brand-yellow tracking-widest uppercase bg-brand-yellow/5 px-3 py-1 rounded-sm border border-brand-yellow/20">
                                    {edu.year}
                                </span>
                                <div className="mt-4 p-6 rounded-sm border border-white/5 bg-[#0A0A0A] hover:border-brand-yellow/30 hover:shadow-[0_0_15px_rgba(255,211,0,0.1)] transition-all">
                                    <div className="flex flex-col md:flex-row gap-6 items-start">
                                        {/* Logo Section */}
                                        {edu.logo && (
                                            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white p-2 flex items-center justify-center overflow-hidden border border-white/10 group-hover:border-brand-yellow/50 transition-colors">
                                                <img
                                                    src={edu.logo}
                                                    alt={`${edu.institution} logo`}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                        )}

                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                                            <p className="text-lg text-brand-yellow mt-1 font-medium">{edu.institution}</p>

                                            {edu.description && (
                                                <p className="text-text-secondary mt-4 text-sm leading-relaxed font-light border-t border-white/5 pt-4">
                                                    {edu.description}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
