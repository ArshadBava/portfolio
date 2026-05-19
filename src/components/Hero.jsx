import { motion } from 'framer-motion';
import { ArrowRight, Github, Mail, Linkedin, Briefcase, Download, MapPin, Code2, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import profileImg from '../assets/profile.jpg';
import { useEffect, useState } from 'react';

const ROLES = [
    'Full Stack Developer',
    'Python Engineer',
    'API Architect',
    'React Developer',
];

const TypewriterText = ({ texts }) => {
    const [displayed, setDisplayed] = useState('');
    const [idx, setIdx] = useState(0);
    const [charIdx, setCharIdx] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = texts[idx];
        let timeout;

        if (!deleting && charIdx <= current.length) {
            timeout = setTimeout(() => {
                setDisplayed(current.slice(0, charIdx));
                setCharIdx(c => c + 1);
            }, 65);
        } else if (!deleting && charIdx > current.length) {
            timeout = setTimeout(() => setDeleting(true), 1800);
        } else if (deleting && charIdx > 0) {
            timeout = setTimeout(() => {
                setDisplayed(current.slice(0, charIdx - 1));
                setCharIdx(c => c - 1);
            }, 35);
        } else {
            setDeleting(false);
            setIdx(i => (i + 1) % texts.length);
        }

        return () => clearTimeout(timeout);
    }, [charIdx, deleting, idx, texts]);

    return (
        <span className="text-brand-yellow">
            {displayed}
            <span className="animate-pulse">|</span>
        </span>
    );
};

const StatCard = ({ icon: Icon, value, label, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-3 hover:border-brand-yellow/40 hover:bg-white/8 transition-all duration-300 group"
    >
        <div className="w-9 h-9 rounded-md bg-brand-yellow/10 flex items-center justify-center group-hover:bg-brand-yellow/20 transition-colors">
            <Icon size={18} className="text-brand-yellow" />
        </div>
        <div>
            <p className="text-white font-bold text-base leading-none">{value}</p>
            <p className="text-text-secondary text-xs mt-0.5">{label}</p>
        </div>
    </motion.div>
);

const Hero = () => {
    const { name } = portfolioData;

    return (
        <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-[#060608]" id="home">

            {/* Animated grid background */}
            <div className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,211,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,211,0,0.04) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(255,211,0,0.07) 0%, transparent 65%)' }}
            />

            {/* Top-right accent blob */}
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none opacity-30"
                style={{ background: 'radial-gradient(circle, rgba(255,211,0,0.15) 0%, transparent 70%)' }}
            />

            {/* Social Sidebar */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="hidden lg:flex flex-col gap-4 items-center fixed left-8 bottom-0 top-0 justify-center z-40"
            >
                <div className="w-px h-20 bg-gradient-to-b from-transparent to-white/20" />
                {[
                    { href: 'https://github.com/ArshadBava', icon: Github, label: 'GitHub' },
                    { href: 'https://www.linkedin.com/in/arshadbavam', icon: Linkedin, label: 'LinkedIn' },
                    { href: 'mailto:arshadbavam@gmail.com', icon: Mail, label: 'Email' },
                ].map(({ href, icon: Icon, label }) => (
                    <a
                        key={label}
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="p-2.5 rounded-lg border border-white/10 bg-white/5 text-text-secondary hover:text-brand-yellow hover:border-brand-yellow/50 hover:bg-brand-yellow/10 hover:-translate-y-1 transition-all duration-300"
                    >
                        <Icon size={18} />
                    </a>
                ))}
                <div className="w-px h-20 bg-gradient-to-t from-transparent to-white/20" />
            </motion.div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 lg:pl-24">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-16">

                    {/* ── Left: Text Content ── */}
                    <div className="flex-1 text-center md:text-left max-w-xl">

                        {/* Availability badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            Open to Opportunities
                        </motion.div>

                        {/* Greeting */}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.4 }}
                            className="text-text-secondary text-lg font-light tracking-widest uppercase mb-2"
                        >
                            Hello, I'm
                        </motion.p>

                        {/* Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none mb-4"
                        >
                            {name.split(' ').map((word, i) => (
                                <span key={i} className={i === 1 ? 'text-brand-yellow block' : 'block'}>
                                    {word}
                                </span>
                            ))}
                        </motion.h1>

                        {/* Typewriter role */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.4 }}
                            className="text-xl md:text-2xl font-light text-text-secondary mb-3 h-8"
                        >
                            <TypewriterText texts={ROLES} />
                        </motion.div>

                        {/* Location */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex items-center gap-1.5 justify-center md:justify-start text-text-secondary text-sm mb-8"
                        >
                            <MapPin size={14} className="text-brand-yellow" />
                            Kerala, India
                        </motion.div>

                        {/* Divider */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="w-16 h-0.5 bg-brand-yellow mb-8 mx-auto md:mx-0 origin-left"
                        />

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.55, duration: 0.5 }}
                            className="text-text-secondary text-base leading-relaxed font-light mb-10 max-w-md mx-auto md:mx-0"
                        >
                            MCA graduate passionate about building production-ready APIs, full-stack web apps, and solving complex problems with clean, maintainable code.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.65, duration: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-10"
                        >
                            <a
                                href="/#hire-me"
                                id="hero-hire-me-btn"
                                className="group px-7 py-3.5 rounded-lg bg-brand-yellow text-black font-bold hover:bg-yellow-300 transition-all shadow-[0_4px_20px_rgba(255,211,0,0.35)] hover:shadow-[0_6px_28px_rgba(255,211,0,0.5)] hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                            >
                                <Briefcase size={17} />
                                Hire Me
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="/#projects"
                                id="hero-projects-btn"
                                className="px-7 py-3.5 rounded-lg bg-transparent border border-white/20 text-white font-semibold hover:border-brand-yellow/60 hover:text-brand-yellow hover:bg-brand-yellow/5 transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                            >
                                View Projects
                                <ArrowRight size={16} />
                            </a>
                        </motion.div>

                        {/* Stat mini-cards */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.75 }}
                            className="flex flex-wrap gap-3 justify-center md:justify-start"
                        >
                            <StatCard icon={Code2}  value="5+"  label="Projects Built"   delay={0.80} />
                            <StatCard icon={Layers} value="116" label="Tests Written"    delay={0.85} />
                            <StatCard icon={Github} value="100%" label="Test Pass Rate"  delay={0.90} />
                        </motion.div>
                    </div>

                    {/* ── Right: Profile Image ── */}
                    <div className="flex flex-col items-center gap-6 flex-shrink-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.85 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            {/* Outer ring spin */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                className="absolute inset-0 rounded-full"
                                style={{
                                    background: 'conic-gradient(from 0deg, rgba(255,211,0,0.5) 0%, transparent 40%, transparent 60%, rgba(255,211,0,0.5) 100%)',
                                    padding: '2px',
                                    borderRadius: '50%',
                                }}
                            >
                                <div className="w-full h-full rounded-full bg-[#060608]" />
                            </motion.div>

                            {/* Glow ring */}
                            <div className="absolute -inset-3 rounded-full opacity-30"
                                style={{ background: 'radial-gradient(circle, rgba(255,211,0,0.3) 0%, transparent 70%)' }}
                            />

                            {/* Image container */}
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl bg-black z-10">
                                <img
                                    src={profileImg}
                                    alt={`${portfolioData.name} – Software Developer`}
                                    className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-500 contrast-110"
                                />
                            </div>

                            {/* Floating badge – top right */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
                                className="absolute -top-2 -right-4 z-20 bg-[#0f0f0f] border border-brand-yellow/50 rounded-xl px-3 py-2 shadow-lg shadow-brand-yellow/10"
                            >
                                <p className="text-brand-yellow text-xs font-bold">MCA Graduate</p>
                                <p className="text-text-secondary text-[10px]">Pondicherry Univ.</p>
                            </motion.div>

                            {/* Floating badge – bottom left */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.0, type: 'spring', stiffness: 200 }}
                                className="absolute -bottom-2 -left-6 z-20 bg-[#0f0f0f] border border-white/20 rounded-xl px-3 py-2 shadow-lg flex items-center gap-2"
                            >
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                <div>
                                    <p className="text-white text-xs font-bold">FastAPI · Django</p>
                                    <p className="text-text-secondary text-[10px]">React · PostgreSQL</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Mobile social row */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                            className="flex lg:hidden items-center gap-4"
                        >
                            {[
                                { href: 'https://github.com/ArshadBava', icon: Github },
                                { href: 'https://www.linkedin.com/in/arshadbavam', icon: Linkedin },
                                { href: 'mailto:arshadbavam@gmail.com', icon: Mail },
                            ].map(({ href, icon: Icon }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    target={href.startsWith('http') ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                    className="p-2.5 rounded-lg border border-white/10 bg-white/5 text-text-secondary hover:text-brand-yellow hover:border-brand-yellow/50 transition-all duration-300"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
