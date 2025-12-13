import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Award } from 'lucide-react';

const CertificatesCTA = () => {
    return (
        <section className="py-20 bg-black relative border-t border-white/5" id="certificates-cta">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-sm border border-white/10 bg-[#0A0A0A] p-8 md:p-12 lg:p-16 text-center">

                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-yellow/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-brand-yellow/10 flex items-center justify-center mb-6 border border-brand-yellow/20">
                            <Award className="text-brand-yellow w-8 h-8" />
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Certifications & <span className="text-brand-yellow">Achievements</span>
                        </h2>

                        <p className="text-text-secondary text-lg max-w-xl mx-auto mb-8 font-light">
                            Explore my professional certifications, badges, and learning milestones from top tech platforms.
                        </p>

                        <Link
                            to="/certificates"
                            className="inline-flex items-center gap-2 px-8 py-3 rounded-md bg-brand-yellow text-black font-bold hover:bg-[#E6BE00] transition-all transform hover:-translate-y-1 shadow-[0_4px_14px_0_rgba(255,211,0,0.39)]"
                        >
                            View All Certificates
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CertificatesCTA;
