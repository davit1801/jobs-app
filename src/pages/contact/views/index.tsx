import ContactForm from '@/pages/contact/components/contact-form';
import React from 'react';

const ContactView: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-lg rounded-md bg-card p-8">
        <h2 className="mb-6 text-center text-2xl font-bold">Contact info</h2>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactView;
