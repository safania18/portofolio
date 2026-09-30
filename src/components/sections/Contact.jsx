import { useState } from "react";
import { useTranslation } from "react-i18next";
import { PROFILE_DATA } from "../../utils/constants";

const Contact = () => {
    const { t } = useTranslation();
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(PROFILE_DATA.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-24 bg-gray-50/50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-12" data-aos="fade-up">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-3">{t('contact.title')}</h2>
                    <h3 className="text-3xl md:text-5xl font-extrabold text-center text-gray-900">{t('contact.subtitle')}</h3>
                    <div className="w-20 h-1.5 bg-primary rounded-full mt-5"></div>
                </div>

                <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                    <div className="bg-white shadow-xl rounded-3xl p-8 md:p-14 border border-gray-100 text-center">
                        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                            Have a project in mind, a potential collaboration, or just want to say hi? Feel free to reach out directly via email or connect with me on social media.
                        </p>

                        {/* Direct Email Action Box */}
                        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mb-10 flex flex-col md:flex-row items-center justify-between gap-6 max-w-2xl mx-auto">
                            <div className="flex items-center gap-4 text-left">
                                <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-primary/30">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-primary font-bold uppercase tracking-widest">{t('contact.email')}</p>
                                    <a
                                        href={`mailto:${PROFILE_DATA.email}`}
                                        className="text-lg md:text-xl font-bold text-gray-900 hover:text-primary transition-colors block break-all"
                                    >
                                        {PROFILE_DATA.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 w-full md:w-auto">
                                <a
                                    href={`mailto:${PROFILE_DATA.email}`}
                                    className="btn btn-primary rounded-xl flex-1 md:flex-initial shadow-md hover:scale-[1.03] transition-all"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                    Send Email
                                </a>
                                <button
                                    onClick={handleCopyEmail}
                                    className="btn btn-outline rounded-xl"
                                    title="Copy Email"
                                >
                                    {copied ? "Copied!" : "Copy"}
                                </button>
                            </div>
                        </div>

                        {/* Location & Social Media */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                            <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl text-left border border-gray-100">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Location</p>
                                    <p className="font-bold text-gray-900">Bojonegoro, Indonesia</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-around p-5 bg-gray-50 rounded-2xl border border-gray-100">
                                {PROFILE_DATA.socials.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-11 h-11 bg-white rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 shadow-sm group"
                                        title={social.name}
                                    >
                                        <img src={social.icon} alt={social.name} className="w-5 h-5 group-hover:brightness-200 transition-all" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
