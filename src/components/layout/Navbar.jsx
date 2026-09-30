import { Link } from "react-router-dom";
import { PROFILE_DATA } from "../../utils/constants";
import { useTheme } from "../../context/ThemeContext";
import { useTranslation } from 'react-i18next';

import LanguageSwitcher from "../common/LanguageSwitcher";

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const { t } = useTranslation();

    const navLinks = [
        { name: t('nav.home'), href: "#hero" },
        { name: t('nav.about'), href: "#about" },
        { name: t('nav.education'), href: "#education" },
        { name: t('nav.organization'), href: "#organization" },
        { name: t('nav.skills'), href: "#skills" },
        { name: t('nav.projects'), href: "#projects" },
        { name: t('nav.ip'), href: "#ip" },
        { name: t('nav.certifications'), href: "#certifications" },
    ];

    return (
        <div className="navbar bg-base-100/80 backdrop-blur-md sticky top-0 z-50 px-4 md:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks.map((link, index) => (
                            <li key={index}><a href={link.href}>{link.name}</a></li>
                        ))}
                        <li><Link to="/cv" className="font-bold text-primary">{t('nav.resume')}</Link></li>
                        <li><a href="#contact">{t('nav.contact')}</a></li>
                    </ul>
                </div>
                <a className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent cursor-pointer">
                    {PROFILE_DATA.name}
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks.map((link, index) => (
                        <li key={index}><a href={link.href} className="hover:text-primary transition-colors">{link.name}</a></li>
                    ))}
                    <li><Link to="/cv" className="hover:text-primary transition-colors font-bold">{t('nav.resume')}</Link></li>
                    <li><a href="#contact" className="hover:text-primary transition-colors">{t('nav.contact')}</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <LanguageSwitcher />
                {/* Theme Toggle Button */}
                <button
                    onClick={toggleTheme}
                    className="btn btn-ghost btn-circle"
                    aria-label="Toggle Theme"
                >
                    {theme === 'winter' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.95 16.95l.707.707M7.05 7.05l.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    )}
                </button>
                <a href="#contact" className="btn btn-primary btn-sm md:btn-md rounded-full px-6">{t('nav.hire_me')}</a>
            </div>
        </div>
    );
};

export default Navbar;
