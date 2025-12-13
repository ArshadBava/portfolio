import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Certificates = () => {
    const { certificates } = portfolioData;

    return (
        <section className="py-20 bg-background-main" id="certificates">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4 relative inline-block">
                        Certifications
                        <span className="absolute -bottom-2 left-0 right-0 h-1 bg-brand-yellow transform scale-x-50"></span>
                    </h2>
                    <p className="text-text-secondary font-light mt-4">Professional certifications and achievements.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert) => (
                        <motion.div
                            key={cert.id}
                            whileHover={{ y: -5 }}
                            className="bg-[#0A0A0A] border border-white/10 rounded-sm overflow-hidden group hover:border-brand-yellow/40 transition-all hover:shadow-[0_0_20px_rgba(255,211,0,0.15)] flex flex-col"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={cert.image}
                                    alt={cert.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    {cert.issuer && (
                                        <div className="text-brand-yellow text-xs font-bold uppercase tracking-wider mb-1">
                                            {cert.issuer}
                                        </div>
                                    )}
                                    <h3 className="text-lg font-bold text-white leading-tight group-hover:text-brand-yellow transition-colors">
                                        {cert.name}
                                    </h3>
                                </div>
                            </div>
                            <div className="p-6 flex-grow bg-[#0A0A0A]">
                                <div className="flex flex-wrap gap-2">
                                    {cert.skillsGained.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 text-xs font-bold text-text-secondary bg-white/5 border border-white/5 rounded-sm"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
