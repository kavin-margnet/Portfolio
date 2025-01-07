import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from '../forms/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'kavinpgh700@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+91 80565 80645',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Coimbatore,Tamilnadu,India',
    },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Get in <span className="text-cyan-400">Touch</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-navy-800 p-6 rounded-lg flex items-start gap-4">
                <div className="text-cyan-400">{info.icon}</div>
                <div>
                  <h3 className="text-white font-medium mb-1">{info.title}</h3>
                  <p className="text-gray-400">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;