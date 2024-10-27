import React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
    isMobile?: boolean;
}

const NavLinks: React.FC<Props> = ({ isMobile = false }) => {
    const { t } = useTranslation();

    const linkClasses = `${isMobile ? 'block text-base' : 'text-sm'} transition ease hover:bg-beige-dark px-3 py-2 rounded-md font-medium duration-300`;

    return (
        <>
            <a href="#" className={linkClasses}>{t('navbar.home')}</a>
            <a href="#" className={linkClasses}>{t('navbar.about')}</a>
            <a href="#" className={linkClasses}>{t('navbar.services')}</a>
            <a href="#" className={linkClasses}>{t('navbar.contact')}</a>
        </>
    );
};

export default NavLinks;
