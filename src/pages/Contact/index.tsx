import { motion } from 'framer-motion';
import { PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const whatsappLinks = [
    {
      title: 'Comercial',
      description: 'Fale com nossa equipe comercial',
      phone: '5511999999999',
      message: 'Olá! Gostaria de saber mais sobre a plataforma 00K.'
    },
    {
      title: 'Suporte',
      description: 'Precisa de ajuda? Fale com nosso suporte',
      phone: '5511988888888',
      message: 'Olá! Preciso de suporte técnico.'
    }
  ];

  const createWhatsAppLink = (phone: string, message: string) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phone}?text=${encodedMessage}`;
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/20">
        <div className="container py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
                Fale Conosco
              </h1>
              <p className="mt-6 text-lg leading-8 text-secondary">
                Estamos aqui para ajudar você a transformar seu e-commerce.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* WhatsApp Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {whatsappLinks.map((link, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">{link.title}</h3>
                <p className="text-secondary mb-6">{link.description}</p>
                <a
                  href={createWhatsAppLink(link.phone, link.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary inline-flex items-center"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Iniciar Conversa
                </a>
              </div>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <div className="flex items-center mb-6">
                <ClockIcon className="h-6 w-6 text-accent mr-3" />
                <h3 className="text-xl font-semibold text-primary">Horário de Atendimento</h3>
              </div>
              <p className="text-secondary">
                Segunda a Sexta: 9h às 18h<br />
                Sábado: 9h às 13h
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <div className="flex items-center mb-6">
                <MapPinIcon className="h-6 w-6 text-accent mr-3" />
                <h3 className="text-xl font-semibold text-primary">Localização</h3>
              </div>
              <p className="text-secondary">
                Av. Exemplo, 1000<br />
                São Paulo - SP<br />
                CEP: 00000-000
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Map Section */}
      <div className="container pb-24">
        <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden">
          <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center text-secondary">
            Mapa será carregado aqui
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
