// Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLinks from './nav-links.tsx';
import LanguageSelector from './language-selector.tsx';
import MobileMenuToggle from './mobile-menu-toggle.tsx';
import Logo from '../../../public/puentes_de_encuentro.svg';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-beige text-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                    <div>
                        <Link to="/" className="flex items-center py-4 px-2">
                            <img src={Logo} alt="Logo" className="h-14 w-14 mr-2" />
                            <span className="font-semibold text-black text-lg">Puentes de Encuentro</span>
                        </Link>
                        </div>
                        <div className="hidden md:flex ml-10 space-x-4">
                            <NavLinks />
                        </div>
                    </div>

                    {/* Language Selector for Desktop */}
                    <div className="hidden md:block">
                        <LanguageSelector />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <MobileMenuToggle isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <NavLinks isMobile />
                        <div className="mt-2">
                            <LanguageSelector isMobile />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
