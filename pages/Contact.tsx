
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowRight, Check, Loader2, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'GAME INQUIRY',
    message: ''
  });

  useEffect(() => {
    const subject = searchParams.get('subject');
    if (subject) {
      setFormData(prev => ({ ...prev, subject }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Constructing Mailto Link
      const recipient = 'adminraid@artraid.in';
      const subject = encodeURIComponent(`[ARTRAID INQUIRY] ${formData.subject} - from ${formData.name}`);
      const body = encodeURIComponent(
        `Hi Artraid Team,\n\nI have the following inquiry:\n\n` +
        `----------------------------------------\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Subject: ${formData.subject}\n` +
        `----------------------------------------\n\n` +
        `Message:\n${formData.message}\n\n` +
        `Sent via Artraid Contact Form`
      );

      // open the user's default email client
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

      // Simulate a small delay for better user feedback
      setTimeout(() => {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: 'GAME INQUIRY', message: '' });
        setLoading(false);
        // Success UI auto-resets after 8 seconds
        setTimeout(() => setSubmitted(false), 8000);
      }, 500);

    } catch (err) {
      console.error('Mailto Error:', err);
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-transparent text-white pt-32 pb-24">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

          {/* Info Side */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-orange-600 text-xs font-black uppercase tracking-[0.4em] mb-4 block"
            >
              Get In Touch
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black tracking-tighter mb-12 text-white"
            >
              LET'S TALK.
            </motion.h1>

            <div className="space-y-12">
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-zinc-900 text-orange-600 rounded-full">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-white mb-2">Email Us</h4>
                  <p className="text-zinc-400 text-lg hover:text-white transition-colors cursor-pointer">adminraid@artraid.in</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="p-4 bg-zinc-900 text-orange-600 rounded-full">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-white mb-2">Location</h4>
                  <p className="text-zinc-400 text-lg">Worldwide / Remote Studio</p>
                  <p className="text-zinc-600 text-sm italic mt-1">Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="relative">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-12 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800"
              >
                <div className="w-20 h-20 bg-orange-600 text-white rounded-full flex items-center justify-center mb-8">
                  <Check size={40} />
                </div>
                <h2 className="text-4xl font-black tracking-tighter mb-4">MESSAGE SENT!</h2>
                <p className="text-zinc-400">Our team will reach you as soon as possible</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-xs font-black uppercase tracking-widest border-b border-white pb-1"
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {error && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="p-4 bg-red-900/20 border border-red-900/50 text-red-500 text-xs flex items-center space-x-3"
                  >
                    <AlertCircle size={16} />
                    <span>{error}</span>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-zinc-800 py-4 focus:border-orange-600 outline-none transition-colors text-white"
                      placeholder="YOUR NAME"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Email</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-zinc-800 py-4 focus:border-orange-600 outline-none transition-colors text-white"
                      placeholder="EMAIL ADDRESS"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-zinc-800 py-4 focus:border-orange-600 outline-none transition-colors text-white appearance-none"
                  >
                    <option className="bg-zinc-900 text-white">GAME INQUIRY</option>
                    <option className="bg-zinc-900 text-white">GAME PURCHASE</option>
                    <option className="bg-zinc-900 text-white">GAME FEEDBACK</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Message</label>
                  <textarea
                    required
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-zinc-800 py-4 focus:border-orange-600 outline-none transition-colors text-white resize-none"
                    placeholder="TELL US ABOUT IT..."
                  />
                </div>

                <button
                  disabled={loading}
                  type="submit"
                  className="w-full py-6 bg-orange-600 text-white font-black uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
                >
                  {loading && <Loader2 className="animate-spin" size={20} />}
                  <span>{loading ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
