import React from 'react';
import { useTranslation } from 'react-i18next';

interface Service {
    title: string;
    text: string;
  }
  
  interface Reason {
    title: string;
    text: string;
  }

const Home: React.FC = () => {
  const { t } = useTranslation();

  const sections = [
    'who',
    'mission',
    'services',
    'focus',
    'whyChooseUs',
    'callToAction',
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {sections.map((section) => (
        <section key={section} className="mb-12">
          <h2 className="text-3xl font-semibold">{t(`home.${section}.title`)}</h2>
          {t(`home.${section}.text`, { defaultValue: '' }) && (
            <p className="mt-4 text-lg text-gray-700">{t(`home.${section}.text`)}</p>
          )}

          {section === 'services' && (
            <ul className="mt-6 space-y-4">
              {(t('home.services.service-list', { returnObjects: true }) as Service[]).map((service: Service, index: number) => (
                <li key={index}>
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                  <p className="mt-2 text-gray-600">{service.text}</p>
                </li>
              ))}
            </ul>
          )}

          {section === 'whyChooseUs' && (
            <ul className="mt-6 space-y-4">
              {(t('home.whyChooseUs.reason-list', { returnObjects: true }) as Reason[]).map((reason: Reason, index: number) => (
                <li key={index}>
                  <h3 className="text-2xl font-semibold">{reason.title}</h3>
                  <p className="mt-2 text-gray-600">{reason.text}</p>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
};

export default Home;
