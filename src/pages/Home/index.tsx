import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/20">
        <div className="container py-24 sm:py-32">
          <div className="mx-auto max-w-7xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
                Transforme seu E-commerce com Inteligência
              </h1>
              <p className="mt-6 text-lg leading-8 text-secondary">
                Gerencie todas as suas vendas online em um só lugar. Integração com os principais marketplaces,
                automação de processos e análise de dados em tempo real.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="/planos" className="btn btn-primary">
                  Comece Agora
                </a>
                <a href="/contato" className="btn btn-secondary">
                  Fale com Especialista
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-accent">Recursos Poderosos</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Tudo que você precisa para vender mais
            </p>
            <p className="mt-6 text-lg leading-8 text-secondary">
              Nossa plataforma oferece todas as ferramentas necessárias para impulsionar suas vendas online
              e gerenciar seu negócio de forma eficiente.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <motion.div
                  key={feature.name}
                  className="flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-primary">
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-secondary">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Pronto para começar?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Junte-se a milhares de empresas que já estão transformando seu e-commerce com a 00K.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/planos" className="btn bg-white text-primary hover:bg-gray-100">
                Ver Planos
              </a>
              <a href="/contato" className="btn text-white border border-white hover:bg-white/10">
                Falar com Vendas
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    name: 'Integração com Marketplaces',
    description: 'Conecte-se com os principais marketplaces do Brasil em poucos cliques. Gerencie pedidos, estoque e preços em um só lugar.',
  },
  {
    name: 'Automação Inteligente',
    description: 'Automatize processos repetitivos e foque no que realmente importa. Precificação, estoque e pedidos gerenciados automaticamente.',
  },
  {
    name: 'Analytics em Tempo Real',
    description: 'Tome decisões baseadas em dados com nossos relatórios detalhados e análises em tempo real do seu negócio.',
  },
];

export default Home;
