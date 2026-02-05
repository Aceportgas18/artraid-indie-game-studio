import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="bg-transparent text-white pt-32 pb-24 min-h-screen">
            <Helmet>
                <title>Privacy Policy | Artraid</title>
                <meta name="description" content="Artraid Privacy Policy - Learn how we collect, use, and protect your information." />
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
                        PRIVACY POLICY
                    </h1>

                    <div className="space-y-12 text-zinc-400 leading-relaxed text-lg">
                        <section>
                            <p>
                                ARTRAID values your privacy. This Privacy Policy explains how we collect, use, disclose, and protect information when you use our mobile applications ("Apps") and related services. By downloading, installing, or using our Apps, you agree to this Policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">Information We Collect</h2>
                            <div className="space-y-4">
                                <p>
                                    <strong className="text-white">Personal Information (only if you share it):</strong> Name, email address, or other contact details you provide via in-app forms or when contacting support.
                                </p>
                                <p>
                                    <strong className="text-white">Device & Usage Data:</strong> Device model, OS version, language, IP region/country, app version, gameplay events, performance metrics, crash logs.
                                </p>
                                <p>
                                    <strong className="text-white">Advertising Identifiers:</strong> Mobile advertising IDs (e.g., IDFA/AAID) for ad delivery and measurement.
                                </p>
                                <p>
                                    <strong className="text-white">Purchase Data:</strong> Non-card purchase metadata from the app store (e.g., product ID, timestamp, status) to fulfill purchases and restore entitlements.
                                </p>
                                <p>
                                    <strong className="text-white">Cookies/Similar Tech:</strong> SDKs in our Apps may store or read data to provide features, analytics, and ads. We do not intentionally collect sensitive categories of personal data.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">Why We Process Your Data</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Operate and improve the Apps, features, performance, and stability.</li>
                                <li>Provide customer support and respond to requests.</li>
                                <li>Deliver non-personalized or personalized ads where allowed.</li>
                                <li>Prevent fraud, enforce terms, and maintain safety.</li>
                                <li>Perform analytics (e.g., gameplay balance, bug diagnosis).</li>
                            </ul>
                            <p className="mt-4">
                                Legal bases (EEA/UK users): performance of a contract, legitimate interests, and consent where required.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">Sharing Your Information</h2>
                            <p className="mb-4">We do not sell your personal information.</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong className="text-white">Service Providers & Partners:</strong> analytics, crash reporting, cloud hosting, ads, and payment verification.</li>
                                <li><strong className="text-white">Authorities:</strong> when required by law, legal process, or to protect rights/safety.</li>
                                <li><strong className="text-white">Corporate Transactions:</strong> in a merger, acquisition, or asset sale, subject to safeguards.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">Advertising & Analytics Partners</h2>
                            <p>
                                Our Apps may use third-party SDKs (Google AdMob/Ad Manager, Unity Ads/IronSource LevelPlay, Firebase, AppLovin/Max, etc.). These partners may process device identifiers and region info to deliver and measure ads, prevent fraud, and provide analytics. You can limit ad tracking in your device settings and manage consent via in-app tools.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">Children's Privacy</h2>
                            <p>
                                Our Apps are for a general audience. We comply with COPPA and similar laws. We do not knowingly collect personal data from children under the local legal age without parental consent. If you believe a child provided information, contact us and we will delete it.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">Data Retention</h2>
                            <p>
                                We retain information only as long as necessary for the purposes described, then delete or anonymize it.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">Your Rights & Choices</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Access, correct, or delete personal information we hold about you.</li>
                                <li>Object to or restrict certain processing.</li>
                                <li>Withdraw consent (where applicable).</li>
                                <li>Opt out of personalized advertising via device settings or in-app consent tools.</li>
                            </ul>
                            <p className="mt-4">
                                Requests: Email <a href="mailto:adminraid@artraid.in" className="text-orange-600 hover:text-white transition-colors">adminraid@artraid.in</a> with your country/region and the App name.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">International Transfers</h2>
                            <p>
                                We may process and store data outside your country with appropriate safeguards (e.g., contractual clauses).
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">Security</h2>
                            <p>
                                We implement reasonable technical and organizational measures to protect information. No method is 100% secure.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">Third-Party Links</h2>
                            <p>
                                Our Apps may link to third-party sites or services not controlled by us. Their policies apply.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">Changes to This Policy</h2>
                            <p>
                                We may update this Policy with an updated Effective Date. Continued use after changes means acceptance.
                            </p>
                        </section>

                        <section id="contact" className="p-12 bg-zinc-900/40 backdrop-blur-md border border-zinc-800 rounded-sm mt-12">
                            <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">Contact Us</h2>
                            <div className="space-y-2 text-zinc-400">
                                <p className="font-bold text-white uppercase tracking-widest text-sm">ARTRAID</p>
                                <p>Email: <a href="mailto:adminraid@artraid.in" className="text-orange-600 hover:text-white transition-colors">adminraid@artraid.in</a></p>
                                <p>Website: <a href="http://www.artraid.in" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-white transition-colors">www.artraid.in</a></p>
                            </div>

                            <div className="mt-8 pt-8 border-t border-zinc-800">
                                <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">Data Deletion Instructions</h3>
                                <p className="text-sm">
                                    To request deletion of personal data, email <a href="mailto:adminraid@artraid.in" className="text-orange-600 hover:text-white transition-colors">adminraid@artraid.in</a> with the subject 'Data Deletion Request – [App Name]' and include your device type/OS and any relevant purchase IDs. We will confirm deletion or explain if retention is required by law.
                                </p>
                            </div>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
