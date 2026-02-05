import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';

const CookiePolicy: React.FC = () => {
    return (
        <div className="bg-transparent text-white pt-32 pb-24 min-h-screen">
            <Helmet>
                <title>Cookie Policy | Artraid</title>
                <meta name="description" content="Artraid Cookie Policy - Understand how we use cookies to improve your experience." />
            </Helmet>

            <div className="px-6 md:px-12 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Link
                        to="/"
                        className="inline-flex items-center space-x-2 text-zinc-500 hover:text-orange-600 transition-colors mb-12 group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-xs font-black uppercase tracking-widest">Back to Home</span>
                    </Link>

                    <span className="text-orange-600 text-xs font-black uppercase tracking-[0.4em] mb-4 block">
                        Legal
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-12 text-white">
                        COOKIE POLICY
                    </h1>
                    <p className="text-zinc-500 mb-12 italic">Last updated: Feb 03, 2026</p>

                    <div className="space-y-12 text-zinc-400 leading-relaxed text-lg">
                        <section>
                            <p>
                                At ARTRAID, we believe in transparency when it comes to how we collect and use data. This Cookie Policy explains what cookies are, how we use them, and your choices regarding their use.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">1. What Are Cookies?</h2>
                            <p>
                                Cookies are small text files stored on your device when you visit a website. They help us remember your preferences, understand how you interact with our Services, and improve your overall experience.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">2. Types of Cookies We Use</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-white font-bold mb-2">Essential Cookies:</h3>
                                    <p>Required for basic website functionality, such as security, authentication, and session management.</p>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-2">Performance Cookies:</h3>
                                    <p>Help us understand how visitors use our website so we can improve performance and reliability. These cookies collect information in an aggregated and anonymous manner.</p>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-2">Functionality Cookies:</h3>
                                    <p>Remember your preferences (such as language or region) to provide a more personalized experience.</p>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-2">Analytics Cookies:</h3>
                                    <p>Used to measure and analyze user interactions with our website and applications (for example, through tools like Google Analytics).</p>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-2">Advertising Cookies:</h3>
                                    <p>Used to deliver relevant advertisements based on your interests. These are often set by third-party advertising partners.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">3. How We Use Cookies</h2>
                            <p className="mb-4">We use cookies to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Ensure our website and applications function properly</li>
                                <li>Analyze traffic and usage patterns</li>
                                <li>Improve gameplay experiences and features</li>
                                <li>Deliver personalized content and advertising where permitted</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">4. Third-Party Cookies</h2>
                            <p>
                                We may allow trusted third-party service providers (such as analytics or advertising networks) to place cookies on your device through our Services. These third parties operate under their own privacy and cookie policies, which we encourage you to review.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">5. Managing Your Cookie Preferences</h2>
                            <p className="mb-6">You can control or disable cookies at any time:</p>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-white font-bold mb-2">Browser Settings:</h3>
                                    <p>Most browsers allow you to manage or delete cookies through their settings.</p>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-2">Cookie Consent Banner:</h3>
                                    <p>When visiting our website, you may be presented with a cookie consent banner allowing you to accept or reject certain categories of cookies.</p>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-2">Advertising Opt-Out Tools:</h3>
                                    <p>You can opt out of interest-based advertising through industry tools such as Your Online Choices or the Network Advertising Initiative.</p>
                                </div>
                            </div>
                            <p className="mt-6 italic">Please note that disabling some cookies may impact the functionality or performance of our Services.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">6. Changes to This Policy</h2>
                            <p>
                                We may update this Cookie Policy periodically. Any changes will be reflected by updating the "Last updated" date above. Significant changes may be communicated via our website or applications.
                            </p>
                        </section>

                        <section id="contact" className="p-12 bg-zinc-900/40 backdrop-blur-md border border-zinc-800 rounded-sm mt-12">
                            <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">Contact Us</h2>
                            <div className="space-y-4 text-zinc-400">
                                <div className="flex items-center space-x-3">
                                    <p className="font-bold text-white uppercase tracking-widest text-sm">📧 Email:</p>
                                    <a href="mailto:adminraid@artraid.in" className="text-orange-600 hover:text-white transition-colors">adminraid@artraid.in</a>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <p className="font-bold text-white uppercase tracking-widest text-sm">🌐 Website:</p>
                                    <a href="http://www.artraid.in" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-white transition-colors">www.artraid.in</a>
                                </div>
                            </div>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default CookiePolicy;
