import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import flagEs from '../../assets/Flag_of_Spain.svg';
import flagCat from '../../assets/Flag_of_Catalonia.svg';

interface Props {
    isMobile?: boolean;
}

const LanguageSelector: React.FC<Props> = ({ isMobile = false }) => {
    const { t, i18n } = useTranslation();
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [flag, setFlag] = useState<string>(flagEs);

    const handleLanguageChange = (lang: string) => {
        i18n.changeLanguage(lang);
        setIsLangOpen(false);
    };

    useEffect(() => {
        setFlag(i18n.language === 'es' ? flagEs : flagCat);
    }, [i18n.language]);

    return (
        <div className="relative">
            <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="transition ease bg-beige hover:bg-beige-dark px-3 py-2 rounded-md flex items-center space-x-1 duration-300"
            >
                <span className="inline-flex items-center">
                    <img className="w-5 h-5 rounded-full mr-2 border-2 border-solid border-black" src={flag} alt="flag" />
                    {t('navbar.language')}
                </span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isLangOpen ? 'M6 18L18 6M6 6l12 12' : 'M19 9l-7 7-7-7'} />
                </svg>
            </button>

            {isLangOpen && (
                <div className={`absolute ${isMobile ? '' : 'right-0'} mt-2 w-32 bg-beige-light text-gray-800 rounded-md shadow-lg`}>
                    <a onClick={() => handleLanguageChange('es')} className="block px-4 py-2 rounded-md transition ease hover:bg-beige-dark cursor-pointer duration-300">Español</a>
                    <a onClick={() => handleLanguageChange('cat')} className="block px-4 py-2 rounded-md transition ease hover:bg-beige-dark cursor-pointer duration-300">Català</a>
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;
