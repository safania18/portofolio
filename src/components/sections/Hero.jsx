import { useState, useRef } from "react";
import { PROFILE_DATA } from "../../utils/constants";
import { useTheme } from "../../context/ThemeContext";
import ImageWithSkeleton from "../common/ImageWithSkeleton";
import myPhoto from "../../assets/myPhoto.webp";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Hero = () => {
    const { theme } = useTheme();
    const { t } = useTranslation();
    const [tiltStyles, setTiltStyles] = useState({ transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)" });
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;

        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;

        const rotateX = (y - 0.5) * -20; // Max rotation 10 degrees
        const rotateY = (x - 0.5) * 20;

        setTiltStyles({
            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
            transition: "transform 0.1s ease-out"
        });
    };

    const handleMouseLeave = () => {
        setTiltStyles({
            transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
            transition: "transform 0.5s ease-out"
        });
    };

    return (
        <section id="hero" className="min-h-[90vh] flex flex-col items-center justify-center pt-20 px-4">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="flex-1 text-center md:text-left" data-aos="fade-right">
                    <h2 className="text-xl md:text-2xl font-medium text-primary mb-4">{t('hero.greeting')}</h2>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            {t('profile.name')}
                        </span>
                    </h1>
                    <h3 className="text-2xl md:text-3xl font-semibold text-base-content/70 mb-8">
                        {t('profile.role')}
                    </h3>
                    <p className="text-lg md:text-xl text-base-content/60 max-w-2xl leading-relaxed mb-10">
                        {t('profile.description')}
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        <a href="#projects" className="btn btn-primary btn-lg rounded-full px-8 shadow-lg shadow-primary/20">
                            {t('projects.view_project')}
                        </a>
                        <Link
                            to='cv'
                            // download
                            className="btn btn-outline btn-lg rounded-full px-8 hover:bg-primary hover:border-primary transition-all duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            {t('hero.download_cv')}
                        </Link>
                    </div>
                </div>

                <div className="flex-1 flex justify-center items-center relative" data-aos="fade-left">
                    <div
                        ref={containerRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className="relative w-64 h-[28rem] md:w-80 md:h-[32rem] flex items-end justify-center group cursor-pointer"
                        style={{ perspective: "1000px" }}
                    >
                        {/* Decorative background "Frame" */}
                        <div
                            className="absolute bottom-0 w-full h-[85%] bg-gradient-to-b from-white to-base-300 rounded-[3rem] shadow-2xl transition-all duration-500"
                            style={tiltStyles}
                        ></div>

                        {/* The Image - Peeking out of the top */}
                        <ImageWithSkeleton
                            src={myPhoto}
                            alt={`Aldan Prayogi - ${PROFILE_DATA.role}`}
                            className="relative z-10 w-full h-full transform transition-all duration-500"
                            skeletonClassName="rounded-[3rem]"
                            style={{
                                ...tiltStyles,
                                filter: theme === 'night'
                                    ? 'drop-shadow(0 0 1px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 20px rgba(255, 255, 255, 0.5))'
                                    : 'drop-shadow(0 20px 30px rgba(0, 0, 0, 0.2))'
                            }}
                        />


                        {/* Floating badges */}
                        <div className="absolute -bottom-6 -right-6 z-20 bg-base-100 p-4 rounded-2xl shadow-xl border border-base-300 hidden md:block" data-aos="zoom-in" data-aos-delay="500">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center text-success">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[10px] opacity-40 font-bold uppercase tracking-wider">Available For</p>
                                    <p className="text-sm font-bold text-base-content">New Projects</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
