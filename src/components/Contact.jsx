import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('idle');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        emailjs.sendForm('service_o4g9vvm', 'template_hg4oryk', form.current, 'v8yM7qNxsN70APJsF')
            .then(() => {
                setStatus('success');
                form.current.reset();
                setTimeout(() => setStatus('idle'), 5000);
            }, () => {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            });
    };

    return (
        <section className="py-24 bg-black" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Left Side: Info */}
                    <div className="lg:w-1/2 flex flex-col justify-between">
                        <div>
                            <span className="text-brand-yellow font-bold tracking-widest uppercase text-sm mb-4 block">
                                • CONTACT
                            </span>
                            <h2 className="text-6xl md:text-7xl font-bold text-white leading-none mb-12">
                                GET IN <br />
                                <span className="text-text-secondary">TOUCH</span>
                            </h2>

                            <div className="space-y-8">
                                <a href="mailto:arshadbavam@gmail.com" className="flex items-center gap-4 text-white hover:text-brand-yellow transition-colors group">
                                    <div className="p-3 rounded-full border border-white/20 group-hover:border-brand-yellow group-hover:bg-brand-yellow/10 transition-all">
                                        <Mail size={20} />
                                    </div>
                                    <span className="text-lg font-light">arshadbavam@gmail.com</span>
                                </a>
                                <a href="tel:+917356376969" className="flex items-center gap-4 text-white hover:text-brand-yellow transition-colors group">
                                    <div className="p-3 rounded-full border border-white/20 group-hover:border-brand-yellow group-hover:bg-brand-yellow/10 transition-all">
                                        <Phone size={20} />
                                    </div>
                                    <span className="text-lg font-light">+91 7356376969</span>
                                </a>
                                <div className="flex items-center gap-4 text-white group cursor-default">
                                    <div className="p-3 rounded-full border border-white/20 group-hover:border-brand-yellow group-hover:bg-brand-yellow/10 transition-all">
                                        <MapPin size={20} />
                                    </div>
                                    <span className="text-lg font-light">Malappuram, Kerala</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form (Compact) */}
                    <div className="lg:w-1/2 flex lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-[#0A0A0A] p-6 md:p-8 rounded-sm border border-white/5 shadow-2xl w-full max-w-lg"
                        >
                            <h3 className="text-xl font-bold text-white mb-6">Send Message</h3>
                            <form ref={form} onSubmit={sendEmail} className="space-y-4">
                                <div>
                                    <label htmlFor="user_name" className="block text-xs font-medium text-text-secondary mb-1">Name</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        required
                                        className="w-full px-4 py-3 rounded-sm bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="user_email" className="block text-xs font-medium text-text-secondary mb-1">Email</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        required
                                        className="w-full px-4 py-3 rounded-sm bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-xs font-medium text-text-secondary mb-1">Message</label>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        required
                                        className="w-full px-4 py-3 rounded-sm bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all resize-none"
                                        placeholder="Type Your Message"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className={`w-full py-3 px-6 rounded-sm font-bold text-sm text-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1
                                        ${status === 'sending' ? 'bg-gray-600 cursor-not-allowed' : 'bg-brand-yellow hover:bg-[#E5C000]'}`}
                                >
                                    {status === 'sending' ? (
                                        'Sending...'
                                    ) : (
                                        <>
                                            Send Message
                                            <Send size={18} />
                                        </>
                                    )}
                                </button>

                                {status === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-3 rounded-sm bg-brand-yellow/10 border border-brand-yellow/30 flex items-center gap-3 text-brand-yellow text-sm"
                                    >
                                        <CheckCircle size={18} />
                                        <span>Message sent!</span>
                                    </motion.div>
                                )}
                                {status === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-3 rounded-sm bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-400 text-sm"
                                    >
                                        <AlertCircle size={18} />
                                        <span>Failed to send.</span>
                                    </motion.div>
                                )}
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
