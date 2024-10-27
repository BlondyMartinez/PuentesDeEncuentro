// Navbar.tsx
import React, { useState } from 'react';
import NavLinks from './nav-links.tsx';
import LanguageSelector from './language-selector.tsx';
import MobileMenuToggle from './mobile-menu-toggle.tsx';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-beige text-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <span className="text-xl font-bold">MyLogo</span>
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
