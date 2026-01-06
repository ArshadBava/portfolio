import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Download } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Experience', href: '/#experience', type: 'hash' },
        { name: 'Projects', href: '/#projects', type: 'hash' },
        { name: 'Education', href: '/#education', type: 'hash' },
        { name: 'Certificates', href: '/certificates', type: 'route' },
    ];

    const isHome = location.pathname === '/';

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-0' : 'py-2'}`}>
            <div className="max-w-5xl mx-auto px-4">
                <div className={`glass-nav rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md shadow-lg border-white/10' : 'bg-transparent border-transparent'}`}>

                    {/* Logo */}
                    <a href="/#home" className="text-xl font-bold tracking-tight text-white hover:text-brand-yellow transition-colors">
                        AB<span className="text-brand-yellow">.</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            link.type === 'route' ? (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-white transition-colors relative group"
                                >
                                    {link.name}
                                    <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-1/2 ${location.pathname === link.href ? 'w-1/2' : ''}`}></span>
                                </Link>
                            ) : (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-white transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-1/2"></span>
                                </a>
                            )
                        ))}
                    </div>

                    {/* Right Side: Download CV & Mobile Menu */}
                    <div className="flex items-center gap-4">
                        <a
                            href="/ARSHADBAVAMRESUME.pdf"
                            download
                            className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-2 rounded-full bg-brand-yellow text-black text-xs md:text-sm font-bold hover:bg-[#E5C000] transition-all transform hover:-translate-y-0.5 shadow-[0_0_15px_rgba(255,211,0,0.3)] hover:shadow-[0_0_20px_rgba(255,211,0,0.5)]"
                        >
                            <span>Download CV</span>
                            <Download size={16} />
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 text-white hover:text-brand-yellow transition-colors focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        validation={{ duration: 0.2 }}
                        className="absolute top-20 left-4 right-4 md:hidden"
                    >
                        <div className="glass-panel rounded-2xl p-6 flex flex-col gap-4 border border-white/10 shadow-2xl bg-black/95 backdrop-blur-xl">
                            {navLinks.map((link) => (
                                link.type === 'route' ? (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        onClick={handleLinkClick}
                                        className="text-lg font-medium text-white hover:text-brand-yellow transition-colors py-2 border-b border-white/5"
                                    >
                                        {link.name}
                                    </Link>
                                ) : (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={handleLinkClick}
                                        className="text-lg font-medium text-white hover:text-brand-yellow transition-colors py-2 border-b border-white/5"
                                    >
                                        {link.name}
                                    </a>
                                )
                            ))}
                            <a
                                href="/resume.pdf"
                                download
                                onClick={handleLinkClick}
                                className="mt-2 w-full py-3 rounded-lg bg-brand-yellow text-black font-bold text-center hover:bg-[#E5C000] transition-colors flex items-center justify-center gap-2"
                            >
                                <span>Download CV</span>
                                <Download size={18} />
                            </a>

                            <div className="flex justify-center gap-6 mt-4 pt-4 border-t border-white/10">
                                <a href="https://github.com/ArshadBava" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-brand-yellow transition-colors">
                                    <Github size={20} />
                                </a>
                                <a href="https://www.linkedin.com/in/arshadbavam" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-brand-yellow transition-colors">
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
