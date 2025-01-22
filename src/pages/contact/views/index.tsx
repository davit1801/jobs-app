import useI18nLang from '@/hooks/use-i18n-lang';
import ContactForm from '@/pages/contact/components/contact-form/contact-form';
import React from 'react';

const ContactView: React.FC = () => {
  const { t } = useI18nLang();
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-lg rounded-md bg-card p-6 md:p-8">
        <h2 className="mb-8 text-center text-lg font-bold md:text-2xl">
          {t('contact.title')}
        </h2>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactView;
