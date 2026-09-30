import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('i18nextLng', lng);
    };

    useEffect(() => {
        const storedLng = localStorage.getItem('i18nextLng');
        if (storedLng) {
            i18n.changeLanguage(storedLng);
        }
    }, [i18n]);

    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'active' : ''}>English</a></li>
                <li><a onClick={() => changeLanguage('id')} className={i18n.language === 'id' ? 'active' : ''}>Indonesia</a></li>
            </ul>
        </div>
    );
};

export default LanguageSwitcher;
