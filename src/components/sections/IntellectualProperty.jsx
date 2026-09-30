import { useTranslation } from "react-i18next";

const IntellectualProperty = () => {
    const { t } = useTranslation();
    const intellectualProperty = t('intellectualProperty.items', { returnObjects: true });

    return (
        <section id="ip" className="py-24 bg-base-200/50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-16" data-aos="fade-up">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Intellectual Property</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-center">{t('intellectualProperty.title')}</h3>
                    <div className="w-20 h-1.5 bg-primary rounded-full mt-6"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {intellectualProperty.map((ip, index) => (
                        <div
                            key={index}
                            className="bg-base-100 rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-base-300 group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                        >
                            {/* Decorative Background Icon */}
                            <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-48 h-48" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z" />
                                </svg>
                            </div>

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="px-5 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider">
                                        {ip.type}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full ${ip.status === 'Granted' ? 'bg-success' : 'bg-info'} animate-pulse`}></div>
                                        <span className="text-xs font-bold opacity-60 uppercase">{ip.status} • {ip.year}</span>
                                    </div>
                                </div>

                                <h4 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{ip.title}</h4>
                                <p className="text-base-content/60 leading-relaxed mb-6">
                                    {ip.description}
                                </p>

                                <div className="flex items-center gap-4 pt-6 border-t border-base-300">
                                    <div>
                                        <p className="text-[10px] font-bold text-base-content/40 uppercase tracking-[0.2em] mb-1">Registration No.</p>
                                        <p className="font-mono text-sm font-bold bg-base-200 px-3 py-1 rounded-lg">{ip.number}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IntellectualProperty;
