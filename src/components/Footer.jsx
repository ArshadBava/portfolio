import { Github, Linkedin, Mail, Instagram, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-black pt-16 pb-8 overflow-hidden border-t border-white/10">
            {/* Top Yellow Gradient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-brand-yellow/50 to-transparent blur-sm"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Column 1: Logo & Brand */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="text-3xl font-bold text-brand-yellow tracking-tighter hover:text-white transition-colors cursor-pointer">
                                AB
                            </span>
                        </div>
                    </div>

                    {/* Column 2: Contact Details */}
                    <div className="flex flex-col items-center md:items-center text-center space-y-4">
                        <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-text-secondary group hover:text-brand-yellow transition-colors cursor-default">
                                <MapPin size={18} className="group-hover:text-brand-yellow transition-colors" />
                                <span>Malappuram, Kerala</span>
                            </li>
                            <li>
                                <a href="mailto:arshadbavam@gmail.com" className="flex items-center gap-3 text-text-secondary hover:text-brand-yellow transition-colors group">
                                    <Mail size={18} className="group-hover:text-brand-yellow transition-colors" />
                                    <span>arshadbavam@gmail.com</span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+917356376969" className="flex items-center gap-3 text-text-secondary hover:text-brand-yellow transition-colors group">
                                    <Phone size={18} className="group-hover:text-brand-yellow transition-colors" />
                                    <span>+91 7356376969</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Socials & Links */}
                    <div className="flex flex-col items-center md:items-end space-y-6">
                        <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide hidden md:block">Connect</h3>
                        <div className="flex space-x-4">
                            <SocialIcon href="https://github.com/ArshadBava" icon={<Github size={20} />} label="GitHub" />
                            <SocialIcon href="https://www.linkedin.com/in/arshadbavam" icon={<Linkedin size={20} />} label="LinkedIn" />
                            <SocialIcon href="https://www.instagram.com/_arzd_/" icon={<Instagram size={20} />} label="Instagram" />
                            <SocialIcon href="mailto:arshadbavam@gmail.com" icon={<Mail size={20} />} label="Email" />
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/10 mb-8"></div>

                {/* Copyright */}
                <div className="text-center">
                    <p className="text-text-muted text-sm">
                        &copy; {currentYear} <span className="text-brand-yellow font-medium">Arshad Bava M</span>. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

// Helper Component for consistent social icons
const SocialIcon = ({ href, icon, label }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="p-3 rounded-full bg-white/5 text-white hover:bg-brand-yellow hover:text-black transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,211,0,0.4)]"
    >
        {icon}
    </a>
);

export default Footer;
