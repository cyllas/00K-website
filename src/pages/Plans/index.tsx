import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

const frequencies = [
  { value: 'monthly', label: 'Mensal', priceSuffix: '/mês' },
  { value: 'annual', label: 'Anual', priceSuffix: '/ano' },
];

const tiers = [
  {
    name: 'Básico',
    id: 'tier-basic',
    href: '/contato',
    price: { monthly: 'R$ 197', annual: 'R$ 1.970' },
    description: 'Ideal para pequenos e-commerces iniciando no mercado digital.',
    features: [
      'Até 500 produtos',
      'Integração com 2 marketplaces',
      'Gestão de pedidos',
      'Controle de estoque básico',
      'Relatórios essenciais',
      'Suporte por email',
    ],
    featured: false,
  },
  {
    name: 'Profissional',
    id: 'tier-professional',
    href: '/contato',
    price: { monthly: 'R$ 397', annual: 'R$ 3.970' },
    description: 'Perfeito para e-commerces em crescimento que precisam de mais recursos.',
    features: [
      'Até 2.000 produtos',
      'Integração com 5 marketplaces',
      'Gestão avançada de pedidos',
      'Automação de estoque',
      'Relatórios avançados',
      'Suporte prioritário',
      'API de integração',
      'Múltiplos usuários',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '/contato',
    price: { monthly: 'Consulte', annual: 'Consulte' },
    description: 'Solução personalizada para grandes operações de e-commerce.',
    features: [
      'Produtos ilimitados',
      'Integrações ilimitadas',
      'Gestão completa de pedidos',
      'Automação personalizada',
      'Business Intelligence',
      'Suporte 24/7',
      'API dedicada',
      'Onboarding especializado',
      'SLA garantido',
    ],
    featured: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Plans = () => {
  const [frequency, setFrequency] = useState(frequencies[0]);

  return (
    <div className="py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-accent">Preços</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Escolha o plano ideal para seu negócio
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-secondary">
          Escolha o plano que melhor se adapta às suas necessidades. Todos os planos incluem atualizações gratuitas
          e suporte técnico.
        </p>

        <div className="mt-16 flex justify-center">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {tiers.map((tier) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={classNames(
                  tier.featured
                    ? 'ring-2 ring-accent scale-105 shadow-xl'
                    : 'ring-1 ring-gray-200',
                  'rounded-3xl p-8 xl:p-10'
                )}
              >
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.featured ? 'text-accent' : 'text-primary',
                      'text-lg font-semibold leading-8'
                    )}
                  >
                    {tier.name}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-secondary">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-primary">
                    {tier.price[frequency.value as keyof typeof tier.price]}
                  </span>
                  {tier.price[frequency.value as keyof typeof tier.price] !== 'Consulte' && (
                    <span className="text-sm font-semibold leading-6 text-secondary">
                      {frequency.priceSuffix}
                    </span>
                  )}
                </p>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.featured
                      ? 'btn btn-accent'
                      : 'btn btn-primary',
                    'mt-6 block w-full'
                  )}
                >
                  {tier.featured ? 'Começar agora' : 'Saiba mais'}
                </a>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-secondary">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-5 flex-none text-accent" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mx-auto mt-32 max-w-2xl">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-primary">
            Perguntas Frequentes
          </h2>
          <dl className="mt-10 space-y-8">
            {faqs.map((faq) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <dt className="text-base font-semibold leading-7 text-primary">{faq.question}</dt>
                <dd className="mt-2 text-base leading-7 text-secondary">{faq.answer}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

const faqs = [
  {
    question: 'Posso mudar de plano a qualquer momento?',
    answer: 'Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As alterações serão refletidas na sua próxima fatura.',
  },
  {
    question: 'Existe período de fidelidade?',
    answer: 'Não há período de fidelidade. Você pode cancelar sua assinatura a qualquer momento sem multas ou taxas adicionais.',
  },
  {
    question: 'Como funciona o suporte técnico?',
    answer: 'Oferecemos suporte técnico por email para todos os planos. Clientes dos planos Profissional e Enterprise contam com suporte prioritário e canais exclusivos de atendimento.',
  },
  {
    question: 'Preciso de conhecimento técnico para usar a plataforma?',
    answer: 'Não, nossa plataforma foi desenvolvida para ser intuitiva e fácil de usar. Além disso, oferecemos treinamento e documentação completa para todos os usuários.',
  },
];

export default Plans;
