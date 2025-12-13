import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { FaJs, FaReact, FaPython, FaDatabase } from 'react-icons/fa';
import { SiDjango, SiCplusplus, SiTailwindcss, SiR } from 'react-icons/si';

// Helper to get icon based on skill name w/ Consistent Yellow Theme where applicable or keeping brand colors but subdued
const getSkillIcon = (skillName) => {
    const normalize = skillName.toLowerCase();
    // Using original colors for recognition, but could force monochrome yellow if requested. 
    // Keeping some color for better UX, but wrapping in dark containers.
    if (normalize.includes('java')) return <FaJs className="text-brand-yellow" size={32} />;
    if (normalize.includes('react')) return <FaReact className="text-[#61DAFB]" size={32} />;
    if (normalize.includes('python')) return <FaPython className="text-[#3776AB]" size={32} />;
    if (normalize.includes('django')) return <SiDjango className="text-[#092E20]" size={32} />;
    if (normalize.includes('c++')) return <SiCplusplus className="text-[#00599C]" size={32} />;
    if (normalize.includes('sql')) return <FaDatabase className="text-gray-400" size={32} />;
    if (normalize.includes('tailwind')) return <SiTailwindcss className="text-[#38B2AC]" size={32} />;
    if (normalize.includes('r')) return <SiR className="text-[#276DC3]" size={32} />;
    return <div className="w-8 h-8 rounded-full bg-gray-700" />;
};

const Skills = () => {
    const { skills } = portfolioData;

    return (
        <section className="py-20 bg-background-main" id="skills">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold text-white mb-16 text-center">
                        Technical Skills
                        <div className="w-16 h-1 bg-brand-yellow mx-auto mt-2" />
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-[#0A0A0A] border border-white/10 flex flex-col items-center justify-center p-6 rounded-sm hover:border-brand-yellow/50 hover:shadow-[0_0_15px_rgba(255,211,0,0.15)] transition-all group cursor-default"
                            >
                                <div className="mb-4 opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0">
                                    {getSkillIcon(skill)}
                                </div>
                                <span className="text-sm font-semibold text-text-secondary group-hover:text-brand-yellow transition-colors text-center uppercase tracking-wide">
                                    {skill}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
