import { useTranslation } from "react-i18next";

const Skills = () => {
    const { t } = useTranslation();
    const hardSkills = t('skills.hard', { returnObjects: true });
    const softSkills = t('skills.soft', { returnObjects: true });

    return (
        <section id="skills" className="py-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-16" data-aos="fade-up">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">{t('skills.title')}</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-center">Technical Proficiency</h3>
                    <div className="w-20 h-1.5 bg-primary rounded-full mt-6"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Hard Skills */}
                    <div data-aos="fade-right">
                        <h4 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                            </span>
                            Technical Skills
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                            {hardSkills.map((skill, index) => (
                                <div key={index} className="bg-base-100 p-4 rounded-xl border border-base-300 shadow-sm hover:border-primary/30 transition-all flex items-center gap-3 group">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-transform"></div>
                                    <span className="text-sm font-medium">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Soft Skills */}
                    <div data-aos="fade-left">
                        <h4 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            </span>
                            Soft Skills
                        </h4>
                        <div className="grid grid-cols-1 gap-4">
                            {softSkills.map((skill, index) => (
                                <div key={index} className="flex items-center gap-4 bg-base-100 p-4 rounded-2xl border border-base-300 shadow-sm hover:border-secondary/30 transition-all group">
                                    <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="font-bold text-base-content/80 group-hover:text-base-content transition-colors">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
