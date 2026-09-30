import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { PROFILE_DATA } from "../utils/constants";

const CV = () => {
    const { t } = useTranslation();
    const [isDownloading, setIsDownloading] = useState(false);

    // Get all items and filter only those with showInCV === true (or undefined for backward compatibility)
    const experiences = t('experience.items', { returnObjects: true }).filter(item => item.showInCV !== false);
    const education = t('education.items', { returnObjects: true });
    const organizations = t('organization.items', { returnObjects: true }).filter(item => item.showInCV !== false);
    const hardSkills = t('skills.hard', { returnObjects: true });
    const softSkills = t('skills.soft', { returnObjects: true });
    const projects = t('projects.items', { returnObjects: true }).filter(item => item.showInCV !== false);
    const certifications = t('certifications.items', { returnObjects: true }).filter(item => item.showInCV !== false);

    const handleDownloadPDF = () => {
        setIsDownloading(true);
        const element = document.getElementById('cv-content');
        const filename = `CV_${PROFILE_DATA.name.replace(/\s+/g, '_')}.pdf`;

        const opt = {
            margin: [8, 8, 8, 8],
            filename: filename,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true, logging: false },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        const triggerSave = () => {
            if (window.html2pdf) {
                window.html2pdf().set(opt).from(element).save().then(() => {
                    setIsDownloading(false);
                }).catch(() => {
                    setIsDownloading(false);
                    window.print();
                });
            } else {
                setIsDownloading(false);
                window.print();
            }
        };

        if (window.html2pdf) {
            triggerSave();
        } else {
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
            script.onload = triggerSave;
            script.onerror = () => {
                setIsDownloading(false);
                window.print();
            };
            document.body.appendChild(script);
        }
    };

    return (
        <div className="bg-white min-h-screen text-black font-serif p-4 md:p-8 print:p-0 leading-snug">
            <Helmet>
                <title>CV | {t('profile.name')}</title>
                <style>{`
                    @media print {
                        @page {
                            size: A4 portrait;
                            margin: 8mm 10mm 8mm 10mm;
                        }
                        body {
                            background: #fff !important;
                            color: #000 !important;
                            font-size: 10.5pt;
                        }
                        .print-compact {
                            font-size: 10pt !important;
                            line-height: 1.25 !important;
                        }
                    }
                `}</style>
            </Helmet>

            {/* Floating Action Bar - Hidden when printing */}
            <div className="fixed bottom-8 right-8 print:hidden z-50 flex items-center gap-3">
                <button
                    onClick={() => window.print()}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 shadow-md rounded-full px-4 py-2.5 flex items-center gap-2 text-xs font-sans font-medium transition-all"
                    title="Print preview"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                    Print
                </button>
                <button
                    onClick={handleDownloadPDF}
                    disabled={isDownloading}
                    className="bg-black text-white hover:bg-gray-800 shadow-xl rounded-full px-6 py-3 flex items-center gap-2 text-sm font-sans font-medium transition-all disabled:opacity-50"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    {isDownloading ? "Downloading PDF..." : "Download PDF"}
                </button>
            </div>

            <div id="cv-content" className="max-w-4xl mx-auto bg-white print:max-w-none print:w-full print-compact">
                {/* Harvard Header */}
                <header className="text-center pb-3 mb-3 border-b border-black">
                    <h1 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-black mb-1 font-serif">
                        {t('profile.name')}
                    </h1>
                    <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 text-xs text-gray-800 font-serif">
                        <span>{PROFILE_DATA.email}</span>
                        {PROFILE_DATA.socials.map((social, index) => (
                            <span key={index} className="inline-flex items-center gap-2">
                                <span className="text-gray-400">|</span>
                                <a
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline text-gray-900"
                                >
                                    {social.name}
                                </a>
                            </span>
                        ))}
                    </div>
                </header>

                {/* Summary / Profile Description */}
                <section className="mb-3.5">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-1.5 font-serif">
                        {t('cv.summary')}
                    </h2>
                    <p className="text-xs text-gray-900 leading-normal text-justify font-serif">
                        {t('profile.description')}
                    </p>
                </section>

                {/* Education */}
                {education && education.length > 0 && (
                    <section className="mb-3.5">
                        <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-1.5 font-serif">
                            {t('cv.education')}
                        </h2>
                        <div className="space-y-2">
                            {education.map((edu, index) => (
                                <div key={index} style={{ pageBreakInside: 'avoid' }}>
                                    <div className="flex justify-between items-baseline">
                                        <h3 className="font-bold text-xs text-black">{edu.school}</h3>
                                        <span className="text-xs font-bold text-black whitespace-nowrap ml-4">{edu.period}</span>
                                    </div>
                                    <div className="flex justify-between items-baseline text-xs text-gray-900 italic mb-0.5">
                                        <span>{edu.degree}</span>
                                        {edu.gpa && <span className="not-italic font-semibold ml-2">GPA: {edu.gpa}</span>}
                                    </div>
                                    {edu.description && (
                                        <p className="text-xs text-gray-800 leading-normal">
                                            {edu.description}
                                        </p>
                                    )}
                                    {edu.achievements && edu.achievements.length > 0 && (
                                        <ul className="list-disc pl-4 text-xs text-gray-800 space-y-0.5 mt-0.5">
                                            {edu.achievements.map((ach, i) => (
                                                <li key={i}>{ach}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Experience */}
                {experiences.length > 0 && (
                    <section className="mb-3.5">
                        <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-1.5 font-serif">
                            {t('cv.experience')}
                        </h2>
                        <div className="space-y-2.5">
                            {experiences.map((exp, index) => (
                                <div key={index} style={{ pageBreakInside: 'avoid' }}>
                                    <div className="flex justify-between items-baseline">
                                        <h3 className="font-bold text-xs text-black">{exp.company}</h3>
                                        <span className="text-xs font-bold text-black whitespace-nowrap ml-4">{exp.period}</span>
                                    </div>
                                    <div className="text-xs text-gray-900 italic mb-0.5 font-medium">
                                        {exp.role}
                                    </div>
                                    {Array.isArray(exp.description) ? (
                                        <ul className="list-disc pl-4 text-xs text-gray-900 space-y-0.5 leading-normal">
                                            {exp.description.map((desc, i) => (
                                                <li key={i}>{desc}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-xs text-gray-900 leading-normal whitespace-pre-line">
                                            {exp.description}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Projects */}
                {projects.length > 0 && (
                    <section className="mb-3.5" style={{ pageBreakInside: 'avoid' }}>
                        <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-1.5 font-serif">
                            {t('cv.projects')}
                        </h2>
                        <div className="space-y-2">
                            {projects.slice(0, 4).map((project, index) => (
                                <div key={index} style={{ pageBreakInside: 'avoid' }}>
                                    <div className="flex justify-between items-baseline">
                                        <h3 className="font-bold text-xs text-black">
                                            {project.title}
                                        </h3>
                                        {project.year && (
                                            <span className="text-xs font-bold text-black whitespace-nowrap ml-4">
                                                {project.year}
                                            </span>
                                        )}
                                    </div>
                                    {project.tags && project.tags.length > 0 && (
                                        <div className="text-[11px] text-gray-700 italic mb-0.5">
                                            Technologies: {project.tags.join(", ")}
                                        </div>
                                    )}
                                    {Array.isArray(project.description) ? (
                                        <ul className="list-disc pl-4 text-xs text-gray-900 space-y-0.5">
                                            {project.description.map((desc, i) => (
                                                <li key={i}>{desc}</li>
                                            ))}
                                        </ul>
                                    ) : project.description ? (
                                        <p className="text-xs text-gray-900 leading-normal">
                                            {project.description}
                                        </p>
                                    ) : null}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Organization Experience */}
                {organizations && organizations.length > 0 && (
                    <section className="mb-3.5" style={{ pageBreakInside: 'avoid' }}>
                        <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-1.5 font-serif">
                            {t('cv.organization')}
                        </h2>
                        <div className="space-y-2">
                            {organizations.map((org, index) => (
                                <div key={index} style={{ pageBreakInside: 'avoid' }}>
                                    <div className="flex justify-between items-baseline">
                                        <h3 className="font-bold text-xs text-black">{org.name}</h3>
                                        <span className="text-xs font-bold text-black whitespace-nowrap ml-4">{org.period}</span>
                                    </div>
                                    <div className="text-xs text-gray-900 italic mb-0.5 font-medium">{org.role}</div>
                                    {Array.isArray(org.description) ? (
                                        <ul className="list-disc pl-4 text-xs text-gray-900 space-y-0.5">
                                            {org.description.map((desc, i) => (
                                                <li key={i}>{desc}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-xs text-gray-900 leading-normal">
                                            {org.description}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Certifications */}
                {certifications && certifications.length > 0 && (
                    <section className="mb-3.5" style={{ pageBreakInside: 'avoid' }}>
                        <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-1.5 font-serif">
                            {t('cv.certifications')}
                        </h2>
                        <ul className="list-disc pl-4 text-xs text-gray-900 space-y-0.5">
                            {certifications.map((cert, index) => (
                                <li key={index}>
                                    {cert.link && cert.link !== "#" ? (
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-bold text-gray-900 hover:text-blue-800 underline"
                                        >
                                            {cert.title}
                                        </a>
                                    ) : (
                                        <span className="font-bold">{cert.title}</span>
                                    )} — {cert.issuer} ({cert.year})
                                    {cert.link && cert.link !== "#" && (
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="ml-2 text-xs text-blue-800 underline"
                                        >
                                            [Credential]
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Skills */}
                <section className="mb-3.5" style={{ pageBreakInside: 'avoid' }}>
                    <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-1.5 font-serif">
                        {t('cv.skills')}
                    </h2>
                    <div className="space-y-0.5 text-xs text-gray-900">
                        {hardSkills && hardSkills.length > 0 && (
                            <div>
                                <span className="font-bold">{t('cv.skills_hard')}: </span>
                                <span>{hardSkills.join(", ")}</span>
                            </div>
                        )}
                        {softSkills && softSkills.length > 0 && (
                            <div>
                                <span className="font-bold">{t('cv.skills_soft')}: </span>
                                <span>{softSkills.join(", ")}</span>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CV;


