import { Helmet } from "react-helmet-async";
import AOSWrapper from "../components/AOSWrapper";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import IntellectualProperty from "../components/sections/IntellectualProperty";
import Certifications from "../components/sections/Certifications";
import Contact from "../components/sections/Contact";
import Education from "../components/sections/Education";
import Organization from "../components/sections/Organization";
import { PROFILE_DATA } from "../utils/constants";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Home() {
    const { t } = useTranslation();

    return (
        <AOSWrapper>
            <div className="min-h-screen bg-base-100 font-sans text-base-content selection:bg-primary selection:text-white transition-colors duration-300">
                <Helmet>
                    <title>{t('profile.name')} | {t('profile.role')}</title>
                    <meta name="description" content={t('profile.description')} />
                    <meta name="keywords" content="Aldan Prayogi, Automation Engineer, Software Engineer, Portfolio, YOLOv8, Image Processing, ITS, Toyota Motor Manufacturing Indonesia" />

                    {/* Open Graph / Facebook */}
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://aldan.vercel.app/" />
                    <meta property="og:title" content={`${t('profile.name')} | ${t('profile.role')}`} />
                    <meta property="og:description" content={t('profile.description')} />
                    <meta property="og:image" content="https://aldan.vercel.app/og-image.png" />

                    {/* Twitter */}
                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="https://aldan.vercel.app/" />
                    <meta property="twitter:title" content={`${t('profile.name')} | ${t('profile.role')}`} />
                    <meta property="twitter:description" content={t('profile.description')} />
                    <meta property="twitter:image" content="https://aldan.vercel.app/og-image.png" />

                    <link rel="canonical" href="https://aldan.vercel.app" />

                    {/* JSON-LD Structured Data */}
                    <script type="application/ld+json">
                        {JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": PROFILE_DATA.name,
                            "url": "https://aldan.vercel.app/",
                            "jobTitle": PROFILE_DATA.role,
                            "description": PROFILE_DATA.description,
                            "sameAs": PROFILE_DATA.socials.map(social => social.url),
                            "email": PROFILE_DATA.email,
                            "image": "https://aldan.vercel.app/og-image.png"
                        })}
                    </script>
                </Helmet>

                <Navbar />

                <main>
                    <Hero />
                    <About />
                    <Education />
                    <Organization />
                    <Skills />
                    <Projects />
                    <IntellectualProperty />
                    <Certifications />
                    <Contact />
                </main>

                <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
                    <nav className="flex flex-wrap justify-center gap-4">
                        <a href="#about" className="link link-hover">{t('nav.about')}</a>
                        <a href="#education" className="link link-hover">{t('nav.education')}</a>
                        <a href="#organization" className="link link-hover">{t('nav.organization')}</a>
                        <a href="#skills" className="link link-hover">{t('nav.skills')}</a>
                        <a href="#projects" className="link link-hover">{t('nav.projects')}</a>
                        <a href="#ip" className="link link-hover">{t('nav.ip')}</a>
                        <a href="#certifications" className="link link-hover">{t('nav.certifications')}</a>
                        <a href="#contact" className="link link-hover">{t('nav.contact')}</a>
                    </nav>
                    <nav className="my-4 flex flex-row justify-center gap-4 ">
                        <a href={"/pdf-tools"} className="btn btn-primary btn-lg w-full rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all">PDF Tools</a>
                        <a href={"/labelling_tools"} className="btn btn-primary btn-lg w-full rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all">Labelling</a>
                    </nav>

                    <nav>
                        <div className="flex flex-wrap justify-center gap-4 bg-white rounded-xl p-2">
                            {PROFILE_DATA.socials.map((social, index) => (
                                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                                    <img src={social.icon} alt={social.name} className="w-6 h-6 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
                                </a>
                            ))}
                        </div>
                    </nav>
                    <aside>
                        <p className="text-sm opacity-60">Copyright © {new Date().getFullYear()} - All rights reserved by {t('profile.name')}</p>
                    </aside>
                </footer>
            </div>
        </AOSWrapper>
    );
}
