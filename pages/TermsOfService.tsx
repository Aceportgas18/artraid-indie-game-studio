import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';

const TermsOfService: React.FC = () => {
    return (
        <div className="bg-transparent text-white pt-32 pb-24 min-h-screen">
            <Helmet>
                <title>Terms of Service | Artraid</title>
                <meta name="description" content="Artraid Terms of Service - Review the terms governing your use of our games and services." />
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
                        TERMS OF USE
                    </h1>

                    <div className="space-y-12 text-zinc-400 leading-relaxed text-lg">
                        <section>
                            <p>
                                Welcome to ARTRAID! These Terms of Use ("Terms") govern your access to and use of our games, websites, mobile applications, and related services ("Services"). By accessing or using our Services, you agree to these Terms. If you do not agree, please do not use our Services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">1. Who We Are</h2>
                            <p>
                                ARTRAID is a digital products and game development company creating engaging experiences for mobile, PC, and other platforms. Our goal is to deliver reliable, enjoyable, and well-crafted services and applications.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">2. Eligibility</h2>
                            <p>
                                To use our Services, you must be at least 13 years old (or the minimum legal age in your country) or have the consent of a parent or legal guardian. By using our Services, you confirm that you meet these requirements.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">3. Use of Our Services</h2>
                            <p className="mb-4">You agree to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Use the Services for personal, non-commercial purposes only.</li>
                                <li>Not use cheats, exploits, automation, bots, or unauthorized third-party software.</li>
                                <li>Not attempt to disrupt, damage, or interfere with the normal operation of our Services or servers.</li>
                                <li>Respect other users and refrain from harassment, hate speech, or abusive behavior.</li>
                            </ul>
                            <p className="mt-4">
                                We reserve the right to suspend or terminate access to our Services if you violate these Terms or engage in conduct that harms our users, systems, or reputation.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">4. Intellectual Property</h2>
                            <p>
                                All content available through the Services—including but not limited to software, game mechanics, designs, artwork, audio, logos, and trademarks—is owned by ARTRAID or its licensors. You may not copy, modify, distribute, sell, or create derivative works without our prior written consent.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">5. User-Generated Content</h2>
                            <p>
                                Some Services may allow you to submit or display content (such as usernames, feedback, or messages). You retain ownership of your content, but you grant ARTRAID a non-exclusive, worldwide, royalty-free license to use, store, display, reproduce, and modify such content for operating and improving the Services.
                            </p>
                            <p className="mt-4">
                                We reserve the right to remove or restrict content that violates these Terms or applicable laws.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">6. In-App Purchases</h2>
                            <p>
                                Our Services may include optional in-app purchases. These transactions are handled by third-party platform providers (such as Google Play, Apple App Store, or Steam) and are subject to their terms and policies. Purchases are generally non-refundable except where required by applicable law.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">7. Privacy</h2>
                            <p>
                                Your privacy is important to us. Please review our <a href="/privacy" className="text-orange-600 hover:text-white transition-colors">Privacy Policy</a> to understand how we collect, use, and protect your personal information. Our practices are designed to comply with applicable data protection laws, including GDPR and India’s DPDP Act where applicable.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">8. Third-Party Services</h2>
                            <p>
                                The Services may integrate or link to third-party services such as advertising, analytics, or payment providers. ARTRAID is not responsible for the content, policies, or practices of third-party services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">9. Updates and Changes</h2>
                            <p>
                                We may revise these Terms from time to time. Any changes will be effective when posted or communicated through the Services. Continued use of the Services after updates constitutes acceptance of the revised Terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">10. Disclaimer of Warranties</h2>
                            <p>
                                The Services are provided on an "as is" and "as available" basis. ARTRAID makes no warranties or guarantees regarding availability, reliability, or error-free operation, to the maximum extent permitted by law.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">11. Limitation of Liability</h2>
                            <p>
                                To the fullest extent allowed by law, ARTRAID shall not be liable for any indirect, incidental, special, or consequential damages arising out of or related to your use of the Services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">12. Governing Law and Jurisdiction</h2>
                            <p>
                                These Terms are governed by the laws of India. Any disputes arising from these Terms or the Services shall be subject to the exclusive jurisdiction of the courts of Chennai, Tamil Nadu, India.
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

export default TermsOfService;
