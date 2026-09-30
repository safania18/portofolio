import { PROFILE_DATA } from "../../utils/constants";
import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation();
    const experiences = t('experience.items', { returnObjects: true });
    const projects = t('projects.items', { returnObjects: true });

    return (
        <section id="about" className="py-24 bg-base-200/50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-16" data-aos="fade-up">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">{t('about_section.title')}</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-center">{t('about_section.subtitle')}</h3>
                    <div className="w-20 h-1.5 bg-primary rounded-full mt-6"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8" data-aos="fade-right">
                        <h4 className="text-2xl font-bold text-base-content/80">{t('about_section.professional_journey')}</h4>

                        <div className="space-y-8 border-l-2 border-primary/20 pl-6 ml-2">
                            {experiences.map((exp, index) => (
                                <div key={index} className="relative">
                                    <div className="absolute -left-[1.9rem] top-1.5 w-4 h-4 bg-primary rounded-full border-4 border-base-100"></div>
                                    <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{exp.period}</p>
                                    <h5 className="text-lg font-bold">{exp.role}</h5>
                                    <p className="text-sm font-medium text-base-content/60 mb-2">{exp.company}</p>
                                    {Array.isArray(exp.description) ? (
                                        <ul className="list-disc list-inside text-sm text-base-content/70 leading-relaxed space-y-1">
                                            {exp.description.map((desc, i) => (
                                                <li key={i}>{desc}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-sm text-base-content/70 leading-relaxed whitespace-pre-line">
                                            {exp.description}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div className="bg-base-100 p-10 rounded-[2.5rem] border border-base-300 shadow-xl" data-aos="fade-left">
                            <p className="text-lg text-base-content/70 leading-relaxed italic">
                                "{t('profile.description')}"
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6" data-aos="zoom-in" data-aos-delay="200">
                            <div className="bg-primary p-8 rounded-3xl text-white transform hover:-translate-y-2 transition-all duration-300 shadow-xl shadow-primary/20">
                                <p className="text-4xl font-bold mb-2">{experiences.length}+</p>
                                <p className="text-sm font-medium opacity-80 uppercase tracking-wider">{t('about_section.key_experiences')}</p>
                            </div>
                            <div className="bg-base-100 p-8 rounded-3xl text-base-content border border-base-300 transform hover:-translate-y-2 transition-all duration-300 shadow-xl">
                                <p className="text-4xl font-bold mb-2 text-primary">{projects.length}+</p>
                                <p className="text-sm font-bold opacity-60 uppercase tracking-wider">{t('about_section.projects_completed')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
