import { useTranslation } from "react-i18next";

const Education = () => {
    const { t } = useTranslation();
    const education = t('education.items', { returnObjects: true });

    return (
        <section id="education" className="py-24 bg-base-100 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-16" data-aos="fade-up">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">{t('education_section.subtitle')}</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-center">{t('education.title')}</h3>
                    <div className="w-20 h-1.5 bg-primary rounded-full mt-6"></div>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            className="bg-base-100 rounded-[2.5rem] border border-base-200 p-8 md:p-12 shadow-lg relative group transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                {/* Left Side: Period & Logo Placeholder */}
                                <div className="md:w-1/3 flex-shrink-0 flex flex-col items-start space-y-4">
                                    <div className="px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-bold tracking-wider inline-block">
                                        {edu.period}
                                    </div>
                                    <h4 className="text-2xl font-bold text-base-content leading-tight">
                                        {edu.school}
                                    </h4>
                                    <div className="text-primary font-bold text-lg">
                                        GPA: {edu.gpa}
                                    </div>
                                </div>

                                {/* Right Side: Details */}
                                <div className="md:w-2/3 space-y-6 relative border-l-2 border-base-200 pl-8 md:pl-12 ml-4 md:ml-0">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-base-100"></div>

                                    <div>
                                        <h5 className="text-xl font-bold text-base-content mb-2">{edu.degree}</h5>
                                        <p className="text-base-content/70 leading-relaxed">
                                            {edu.description}
                                        </p>
                                    </div>

                                    {edu.achievements && (
                                        <div>
                                            <h6 className="text-sm font-bold text-base-content/80 uppercase tracking-widest mb-4">{t('education_section.key_achievements')}</h6>
                                            <ul className="grid gap-3">
                                                {edu.achievements.map((achievement, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 text-base-content/70 text-sm">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        <span>{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
