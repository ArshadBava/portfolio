import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "How do I start a project with you?",
        answer: "First, you can reach out to me through the contact form or email. We'll schedule an initial meeting to discuss your needs, scope, and plan the project together."
    },
    {
        question: "What services do you offer?",
        answer: "I specialize in Full Stack Development, specifically utilizing the Python/Django and React.Js and tailwind CSS. I build responsive websites, web applications, and manageable backends."
    },
    {
        question: "Do you work with international clients?",
        answer: "Yes! I am available for remote work and have experience collaborating with teams across different time zones using tools like Slack, Zoom, and Git."
    },
    {
        question: "What is your typical timeline for a project?",
        answer: "Timelines vary depending on the project's complexity. A simple portfolio or landing page might take 1-2 weeks, while a full-featured web application could take 4-8 weeks or more. We can define this during our initial chat."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-20 bg-black border-t border-white/10" id="faq">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-16">
                    {/* Left Side: Title */}
                    <div className="md:w-1/3">
                        <span className="text-brand-yellow font-bold tracking-widest uppercase text-sm mb-4 block">
                            • FAQ
                        </span>
                        <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                            QUICK <br />
                            <span className="text-text-secondary">ANSWERS</span>
                        </h2>
                    </div>

                    {/* Right Side: Accordion */}
                    <div className="md:w-2/3">
                        <div className="space-y-6">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border-b border-white/10 pb-6"
                                    onMouseEnter={() => setActiveIndex(index)}
                                >
                                    <button
                                        className="w-full flex items-center justify-between text-left focus:outline-none group"
                                    >
                                        <span className={`text-xl font-bold transition-colors ${activeIndex === index ? 'text-brand-yellow' : 'text-white group-hover:text-brand-yellow'}`}>
                                            {faq.question}
                                        </span>
                                        <span className={`ml-4 p-1 rounded-full border transition-all ${activeIndex === index ? 'border-brand-yellow text-brand-yellow rotate-180' : 'border-white/30 text-white group-hover:border-brand-yellow group-hover:text-brand-yellow'}`}>
                                            {activeIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                                        </span>
                                    </button>
                                    <AnimatePresence>
                                        {activeIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="mt-4 text-text-secondary leading-relaxed font-light text-lg">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
