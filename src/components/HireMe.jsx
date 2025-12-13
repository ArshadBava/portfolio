import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const HireMe = () => {
    return (
        <section className="py-20 bg-black relative border-t border-white/5" id="hire-me">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Let's Work <span className="text-brand-yellow">Together</span>
                    </h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto font-light">
                        Turning ideas into reliable, high-performing web applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Left Column: The Pitch */}
                    <div className="flex flex-col gap-10">
                        {/* Who I Am */}
                        <div className="glass-panel p-8 rounded-xl border border-white/10 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <span className="text-6xl font-bold text-white">01</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="w-2 h-8 bg-brand-yellow rounded-full"></span>
                                Who I Am
                            </h3>
                            <p className="text-text-secondary leading-relaxed">
                                I am a passionate Software Developer with a strong foundation in building modern, reliable web applications. I enjoy turning ideas into practical solutions and continuously improving my skills through real-world projects and hands-on learning.
                            </p>
                        </div>

                        {/* What I Do */}
                        <div className="glass-panel p-8 rounded-xl border border-white/10 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <span className="text-6xl font-bold text-white">02</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="w-2 h-8 bg-brand-yellow rounded-full"></span>
                                What I Do
                            </h3>
                            <p className="text-text-secondary leading-relaxed">
                                I specialize in developing full-stack web applications using Django and React.js, focusing on clean architecture, responsive design, and efficient database-driven solutions. I build user-friendly interfaces and robust backends that work seamlessly together.
                            </p>
                        </div>

                        {/* Why Hire Me */}
                        <div className="glass-panel p-8 rounded-xl border border-white/10 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <span className="text-6xl font-bold text-white">03</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="w-2 h-8 bg-brand-yellow rounded-full"></span>
                                Why Hire Me
                            </h3>
                            <p className="text-text-secondary leading-relaxed">
                                I bring a problem-solving mindset, attention to detail, and a commitment to delivering quality work. I adapt quickly, communicate clearly, and take ownership of projects from concept to completion—making me a reliable developer you can trust.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Services & CTA */}
                    <div className="flex flex-col gap-8 lg:sticky lg:top-24">
                        <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-8 shadow-2xl relative">
                            {/* Decorative Blur */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none"></div>

                            <h3 className="text-2xl font-bold text-white mb-8 relative z-10">What I Can Help With</h3>

                            <ul className="space-y-4 mb-10 relative z-10">
                                {[
                                    "Full-stack web development (React + Django)",
                                    "Responsive UI development",
                                    "Database-driven applications",
                                    "Bug fixing and performance optimization"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-text-secondary">
                                        <CheckCircle2 className="text-brand-yellow mt-1 flex-shrink-0" size={18} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <hr className="border-white/10 mb-10" />

                            <div className="text-center relative z-10">
                                <h4 className="text-white font-bold text-lg mb-6">Ready to start?</h4>
                                <a
                                    href="/#contact"
                                    className="block w-full py-4 rounded-md bg-brand-yellow text-black font-bold text-lg hover:bg-[#E6BE00] transition-all transform hover:-translate-y-1 shadow-[0_4px_14px_0_rgba(255,211,0,0.39)] hover:shadow-[0_6px_20px_rgba(255,211,0,0.23)] flex items-center justify-center gap-2"
                                >
                                    Start a Project
                                    <ArrowRight size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HireMe;
