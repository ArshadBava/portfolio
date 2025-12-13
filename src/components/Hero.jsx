import { motion } from 'framer-motion';
import { ArrowRight, Github, Mail, Linkedin, Briefcase } from 'lucide-react'; // Added Briefcase icon
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    const { name, title } = portfolioData;

    return (
        <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden" id="home">
            {/* Hero Specific Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-[#1a1a1a] to-brand-yellow/20 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                    {/* Social Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="hidden md:flex flex-col gap-6 items-center fixed left-8 lg:left-12 bottom-0 top-0 justify-center z-40"
                    >
                        <div className="w-[1px] h-24 bg-white/20"></div>
                        <a href="https://github.com/ArshadBava" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-panel text-text-secondary hover:text-brand-yellow hover:border-brand-yellow hover:-translate-y-1 transition-all duration-300 group">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/arshadbavam" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-panel text-text-secondary hover:text-brand-yellow hover:border-brand-yellow hover:-translate-y-1 transition-all duration-300">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:arshadbavam@gmail.com" className="p-3 rounded-full glass-panel text-text-secondary hover:text-brand-yellow hover:border-brand-yellow hover:-translate-y-1 transition-all duration-300">
                            <Mail size={20} />
                        </a>
                        <div className="w-[1px] h-24 bg-white/20"></div>
                    </motion.div>

                    {/* Main Content */}
                    <div className="flex-1 flex flex-col md:flex-row items-center justify-between gap-10 md:pl-16">

                        {/* Text Content */}
                        <div className="flex-1 text-center md:text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >

                                <h1 className="mt-8 text-5xl md:text-7xl font-bold text-text-primary tracking-tight leading-tight text-shadow-sm">
                                    Hi, I'm <br />
                                    <span className="text-brand-yellow">{name}</span>
                                </h1>
                                <p className="mt-6 text-xl md:text-2xl text-text-secondary max-w-lg mx-auto md:mx-0 font-light">
                                    {title}
                                </p>
                                <p className="mt-2 text-lg text-brand-yellow font-medium tracking-wide">
                                    Skilled in Django and React.Js
                                </p>

                                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                    <a
                                        href="/#hire-me"
                                        className="px-8 py-3 rounded-md bg-brand-yellow text-black font-bold hover:bg-button-primary-hover transition-all shadow-[0_4px_14px_0_rgba(255,211,0,0.39)] hover:shadow-[0_6px_20px_rgba(255,211,0,0.23)] hover:-translate-y-1 flex items-center justify-center gap-2"
                                    >
                                        Hire Me
                                        <Briefcase size={20} />
                                    </a>
                                    <a
                                        href="/#projects"
                                        className="px-8 py-3 rounded-md bg-transparent border-2 border-brand-yellow text-brand-yellow font-bold hover:bg-brand-yellow/10 transition-all flex items-center justify-center gap-2"
                                    >
                                        View Projects
                                        <ArrowRight size={20} />
                                    </a>
                                </div>
                            </motion.div>
                        </div>

                        {/* Profile Image & Mobile Socials */}
                        <div className="flex flex-col items-center gap-8">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="relative w-72 h-72 md:w-96 md:h-96 flex-shrink-0"
                            >
                                {/* Decorative shapes behind image */}
                                <div className="absolute top-0 right-0 w-full h-full border-2 border-brand-yellow/30 rounded-full translate-x-4 -translate-y-4"></div>
                                <div className="absolute bottom-0 left-0 w-full h-full border-2 border-white/10 rounded-full -translate-x-4 translate-y-4"></div>

                                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/5 shadow-2xl bg-black">
                                    <img
                                        src={profileImg}
                                        alt={name}
                                        className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300 contrast-125 grayscale hover:grayscale-0"
                                    />
                                </div>

                                {/* Floating Badge */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                    className="absolute bottom-4 right-4 glass-panel p-4 rounded-xl shadow-xl bg-black/80"
                                >
                                    <div className="flex items-center gap-2">
                                        <div className="w-2.5 h-2.5 bg-brand-yellow rounded-full animate-pulse shadow-[0_0_10px_#FFD300]"></div>
                                        <span className="text-sm font-bold text-white tracking-wide">OPEN TO WORK</span>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Mobile Social Links */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="flex md:hidden items-center gap-6"
                            >
                                <a href="https://github.com/ArshadBava" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-panel text-text-secondary hover:text-brand-yellow hover:border-brand-yellow transition-all duration-300">
                                    <Github size={24} />
                                </a>
                                <a href="https://www.linkedin.com/in/arshadbavam" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-panel text-text-secondary hover:text-brand-yellow hover:border-brand-yellow transition-all duration-300">
                                    <Linkedin size={24} />
                                </a>
                                <a href="mailto:arshadbavam@gmail.com" className="p-3 rounded-full glass-panel text-text-secondary hover:text-brand-yellow hover:border-brand-yellow transition-all duration-300">
                                    <Mail size={24} />
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
