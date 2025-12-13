import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

const CertificatesPage = () => {
    const { certificates } = portfolioData;

    return (
        <>
            <ScrollToTop />
            <div className="bg-black min-h-screen pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="mb-12">
                        <Link to="/" className="inline-flex items-center gap-2 text-text-secondary hover:text-brand-yellow transition-colors mb-8 group">
                            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Home
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Professional <span className="text-brand-yellow">Certifications</span>
                        </h1>
                        <p className="text-text-secondary text-lg max-w-2xl font-light leading-relaxed">
                            A showcase of my continuous learning journey, featuring credentials from top institutions and platforms.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {certificates.map((cert) => (
                            <motion.div
                                key={cert.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="bg-[#0A0A0A] border border-white/10 rounded-sm overflow-hidden group hover:border-brand-yellow/40 transition-all hover:shadow-[0_0_20px_rgba(255,211,0,0.15)] flex flex-col"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={cert.image}
                                        alt={cert.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />

                                    <div className="absolute bottom-4 left-4 right-4">
                                        {cert.issuer && (
                                            <div className="inline-block px-2 py-0.5 rounded-sm bg-brand-yellow text-black text-[10px] font-bold uppercase tracking-wider mb-2">
                                                {cert.issuer}
                                            </div>
                                        )}
                                        <h3 className="text-lg font-bold text-white leading-tight group-hover:text-brand-yellow transition-colors">
                                            {cert.name}
                                        </h3>
                                    </div>
                                </div>
                                <div className="p-6 flex-grow bg-[#0A0A0A] border-t border-white/5">
                                    <div className="flex flex-wrap gap-2">
                                        {cert.skillsGained.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 text-xs font-medium text-text-secondary bg-white/5 border border-white/10 rounded-sm"
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
            </div>
        </>
    );
};

export default CertificatesPage;
