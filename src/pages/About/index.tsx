import { motion } from 'framer-motion';

const stats = [
  { label: 'Clientes ativos', value: '1000+' },
  { label: 'Produtos gerenciados', value: '5M+' },
  { label: 'Pedidos processados', value: '10M+' },
  { label: 'Marketplaces integrados', value: '15+' },
];

const values = [
  {
    name: 'Inovação',
    description: 'Buscamos constantemente novas soluções e tecnologias para melhorar nossos serviços.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    name: 'Excelência',
    description: 'Comprometidos com a qualidade e melhoria contínua em tudo que fazemos.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    name: 'Cliente no Centro',
    description: 'O sucesso dos nossos clientes é nossa principal prioridade e motivação.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
  },
];

const About = () => {
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
                Sobre a 00K
              </h1>
              <p className="mt-6 text-lg leading-8 text-secondary">
                Transformando o e-commerce brasileiro com tecnologia e inovação desde 2010.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="container py-24">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-8">
              Nossa História
            </h2>
            <div className="text-lg text-secondary space-y-6">
              <p>
                A 00K nasceu da visão de simplificar e potencializar o e-commerce brasileiro. 
                Identificamos que muitas empresas enfrentavam desafios na gestão de múltiplos 
                canais de venda e na automação de processos.
              </p>
              <p>
                Começamos desenvolvendo soluções para integração com marketplaces, e ao longo 
                dos anos expandimos nossa plataforma para oferecer um conjunto completo de 
                ferramentas para gestão de e-commerce.
              </p>
              <p>
                Hoje, somos referência no mercado, atendendo mais de 1000 empresas e 
                processando milhões de pedidos mensalmente. Nossa missão é continuar inovando 
                e ajudando nossos clientes a crescerem no mundo digital.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-primary py-24">
        <div className="container">
          <div className="mx-auto max-w-7xl">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="mx-auto flex max-w-xs flex-col gap-y-4"
                >
                  <dt className="text-base leading-7 text-gray-300">{stat.label}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                    {stat.value}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="container py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Nossos Valores
            </h2>
            <p className="mt-6 text-lg leading-8 text-secondary">
              Princípios que guiam nossas decisões e ações todos os dias.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {values.map((value) => (
                <motion.div
                  key={value.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col"
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-primary">
                    <div className="text-accent">{value.icon}</div>
                    {value.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-secondary">
                    <p className="flex-auto">{value.description}</p>
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
              Faça parte da nossa história
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Junte-se a milhares de empresas que já transformaram seu e-commerce com a 00K.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/planos" className="btn bg-white text-primary hover:bg-gray-100">
                Conhecer Planos
              </a>
              <a href="/contato" className="btn text-white border border-white hover:bg-white/10">
                Falar com Time
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
