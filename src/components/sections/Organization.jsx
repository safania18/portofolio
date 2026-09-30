import { useTranslation } from "react-i18next";

const Organization = () => {
    const { t } = useTranslation();
    const organizations = t('organization.items', { returnObjects: true });

    if (!organizations) return null;

    return (
        <section id="organization" className="py-24 bg-base-200/50 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-16" data-aos="fade-up">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">{t('nav.organization')}</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-center">{t('organization.title')}</h3>
                    <div className="w-20 h-1.5 bg-primary rounded-full mt-6"></div>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {organizations.map((org, index) => (
                        <div
                            key={index}
                            className="bg-base-100 rounded-[2.5rem] border border-base-200 p-8 md:p-12 shadow-lg relative group transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                {/* Left Side: Period & Name */}
                                <div className="md:w-1/3 flex-shrink-0 flex flex-col items-start space-y-4">
                                    <div className="px-4 py-2 bg-secondary/10 rounded-full text-secondary text-sm font-bold tracking-wider inline-block">
                                        {org.period}
                                    </div>
                                    <h4 className="text-2xl font-bold text-base-content leading-tight">
                                        {org.name}
                                    </h4>
                                </div>

                                {/* Right Side: Role & Details */}
                                <div className="md:w-2/3 space-y-6 relative border-l-2 border-base-200 pl-8 md:pl-12 ml-4 md:ml-0">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary ring-4 ring-base-100"></div>

                                    <div>
                                        <h5 className="text-xl font-bold text-base-content mb-2">{org.role}</h5>
                                        <p className="text-base-content/70 leading-relaxed">
                                            {org.description}
                                        </p>
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

export default Organization;
