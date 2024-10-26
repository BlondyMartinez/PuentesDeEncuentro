import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import flagEs from '../assets/Flag_of_Spain.svg';
import flagCat from '../assets/Flag_of_Catalonia.svg';

const Navbar: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isLangOpen, setIsLangOpen] = useState<boolean>(false);
    const [flag, setFlag] = useState<string>(flagEs);

    const handleLanguageChange = (lang: string) => {
        i18n.changeLanguage(lang);
        setIsLangOpen(false);
        setFlag(lang === 'es' ? flagEs : flagCat);
    };

    return (
        <nav className="bg-beige text-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <span className="text-xl font-bold">MyLogo</span>
                        <div className="hidden md:flex ml-10 space-x-4">
                            <a href="#" className="hover:bg-orange px-3 py-2 rounded-md text-sm font-medium">{t('navbar.home')}</a>
                            <a href="#" className="hover:bg-orange px-3 py-2 rounded-md text-sm font-medium">{t('navbar.about')}</a>
                            <a href="#" className="hover:bg-orange px-3 py-2 rounded-md text-sm font-medium">{t('navbar.services')}</a>
                            <a href="#" className="hover:bg-orange px-3 py-2 rounded-md text-sm font-medium">{t('navbar.contact')}</a>
                        </div>
                    </div>

                    {/* Language Selector for Desktop */}
                    <div className="relative hidden md:block">
                        <button
                            onClick={() => setIsLangOpen(!isLangOpen)}
                            className="bg-beige hover:bg-orange px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-1"
                        >
                            <span className="inline-flex items-center">
                                <img className="w-5 h-5 rounded-full mr-2 border-2 border-solid border-black" src={flag} ></img>
                                {t('navbar.language')}
                            </span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isLangOpen ? 'M6 18L18 6M6 6l12 12' : 'M19 9l-7 7-7-7'} />
                            </svg>
                        </button>

                        {isLangOpen && (
                            <div className="absolute right-0 mt-2 w-32 bg-beige text-gray-800 rounded-md shadow-lg">
                                <a onClick={() => handleLanguageChange('es')} className="block px-4 py-2 hover:bg-orange-light cursor-pointer">Español</a>
                                <a onClick={() => handleLanguageChange('cat')} className="block px-4 py-2 hover:bg-orange-light cursor-pointer">Català</a>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="bg-beige inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#" className="hover:bg-orange block px-3 py-2 rounded-md text-base font-medium">{t('navbar.home')}</a>
                        <a href="#" className="hover:bg-orange block px-3 py-2 rounded-md text-base font-medium">{t('navbar.about')}</a>
                        <a href="#" className="hover:bg-orange block px-3 py-2 rounded-md text-base font-medium">{t('navbar.services')}</a>
                        <a href="#" className="hover:bg-orange block px-3 py-2 rounded-md text-base font-medium">{t('navbar.contact')}</a>

                        {/* Language Selector in Mobile Menu */}
                        <div className="relative mt-2">
                            <button
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className="bg-beige hover:bg-orange px-3 py-2 rounded-md text-base font-medium flex items-center space-x-1"
                            >
                                <span className="inline-flex items-center">
                                    <img className="w-5 h-5 rounded-full mr-2 border-2 border-solid border-black" src={flag} ></img>
                                    {t('navbar.language')}
                                </span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isLangOpen ? 'M6 18L18 6M6 6l12 12' : 'M19 9l-7 7-7-7'} />
                                </svg>
                            </button>

                            {isLangOpen && (
                                <div className="absolute right-0 mt-2 w-32 bg-beige text-gray-800 rounded-md shadow-lg">
                                    <a onClick={() => handleLanguageChange('es')} className="block px-4 py-2 hover:bg-orange-light cursor-pointer">Español</a>
                                    <a onClick={() => handleLanguageChange('cat')} className="block px-4 py-2 hover:bg-orange-light cursor-pointer">Català</a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
