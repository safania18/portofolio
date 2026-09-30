import { useTranslation } from "react-i18next";
import ImageWithSkeleton from "../common/ImageWithSkeleton";

const Certifications = () => {
    const { t } = useTranslation();
    const certifications = t('certifications.items', { returnObjects: true });

    return (
        <section id="certifications" className="py-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-16" data-aos="fade-up">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Credentials</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-center">{t('certifications.title')}</h3>
                    <div className="w-20 h-1.5 bg-primary rounded-full mt-6"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="bg-base-100 rounded-3xl border border-base-300 shadow-xl overflow-hidden group hover:-translate-y-2 transition-all duration-300"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="relative h-48 overflow-hidden">
                                <ImageWithSkeleton src={cert.image} alt={`${cert.title} Certification - ${cert.issuer}`} className="w-full h-full group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute top-4 right-4 bg-base-100/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
                                    <span className="text-xs font-bold text-primary">{cert.year}</span>
                                </div>
                            </div>
                            <div className="p-8">
                                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">{cert.issuer}</p>
                                <h4 className="text-xl font-bold mb-4 line-clamp-2">{cert.title}</h4>
                                <p className="text-sm text-base-content/60 leading-relaxed mb-6 italic">
                                    "{cert.description}"
                                </p>
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline btn-sm btn-primary w-full rounded-xl hover:bg-primary hover:text-white transition-colors"
                                >
                                    View Credential
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
