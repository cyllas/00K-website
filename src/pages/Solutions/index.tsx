import { motion } from 'framer-motion';

const solutions = [
  {
    title: 'Integração com Marketplaces',
    description: 'Conecte sua loja aos principais marketplaces do Brasil em poucos cliques.',
    features: [
      'Integração com MercadoLivre, B2W, Magazine Luiza e mais',
      'Sincronização automática de estoque',
      'Gestão centralizada de pedidos',
      'Precificação inteligente',
    ],
    image: '/images/marketplace-integration.svg',
  },
  {
    title: 'Gestão de Produtos',
    description: 'Gerencie seu catálogo de produtos de forma eficiente e organizada.',
    features: [
      'Cadastro em massa de produtos',
      'Categorização inteligente',
      'Variações de produtos',
      'Controle de estoque avançado',
    ],
    image: '/images/product-management.svg',
  },
  {
    title: 'Automação de Processos',
    description: 'Automatize tarefas repetitivas e foque no crescimento do seu negócio.',
    features: [
      'Atualização automática de preços',
      'Regras de negócio personalizadas',
      'Notificações automáticas',
      'Relatórios programados',
    ],
    image: '/images/process-automation.svg',
  },
];

const Solutions = () => {
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
                Soluções Completas para seu E-commerce
              </h1>
              <p className="mt-6 text-lg leading-8 text-secondary">
                Descubra como nossas soluções podem transformar seu negócio digital com
                automação, integração e gestão inteligente.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="py-24 sm:py-32">
        <div className="container">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12 mb-24 last:mb-0`}
            >
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-6">
                  {solution.title}
                </h2>
                <p className="text-lg text-secondary mb-8">{solution.description}</p>
                <ul className="space-y-4">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg
                        className="h-6 w-6 text-accent flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="ml-3 text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a href="/contato" className="btn btn-primary">
                    Saiba mais
                  </a>
                </div>
              </div>
              <div className="lg:w-1/2">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Pronto para transformar seu e-commerce?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Agende uma demonstração gratuita e descubra como a 00K pode ajudar seu negócio a crescer.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/planos" className="btn bg-white text-primary hover:bg-gray-100">
                Ver Planos
              </a>
              <a href="/contato" className="btn text-white border border-white hover:bg-white/10">
                Agendar Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
