import React from 'react';
import { Link } from 'react-router-dom'; 
import { useTranslation } from 'react-i18next';

interface Props {
  isMobile?: boolean;
}

const NavLinks: React.FC<Props> = ({ isMobile = false }) => {
  const { t } = useTranslation();

  const linkClasses = `${isMobile ? 'block text-base' : 'text-sm'} transition ease hover:bg-beige-dark px-3 py-2 rounded-md font-medium duration-300`;

  const navbarLinks = Object.keys(t('navbar', { returnObjects: true })).filter(key => key !== 'language');

  return (
    <>
      {navbarLinks.map((linkKey) => (
        <Link key={linkKey} to={`/${linkKey}`} className={linkClasses}>
          {t(`navbar.${linkKey}`)}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
