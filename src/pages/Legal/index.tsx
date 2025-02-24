import { useParams } from 'react-router-dom';

const legalContent = {
  termos: {
    title: 'Termos de Uso',
    content: `
      1. Aceitação dos Termos

      Ao acessar e usar a plataforma 00K, você concorda com estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não use nossos serviços.

      2. Uso da Plataforma

      2.1. A plataforma 00K é destinada ao gerenciamento de e-commerce e integração com marketplaces.
      2.2. Você é responsável por manter a confidencialidade de sua conta e senha.
      2.3. Você concorda em não usar a plataforma para fins ilegais ou não autorizados.

      3. Propriedade Intelectual

      3.1. Todo o conteúdo da plataforma é propriedade da 00K ou de seus licenciadores.
      3.2. Você não pode copiar, modificar, distribuir ou criar trabalhos derivados do nosso conteúdo.

      4. Limitação de Responsabilidade

      4.1. A 00K não se responsabiliza por danos indiretos, incidentais ou consequenciais.
      4.2. Nossa responsabilidade máxima está limitada ao valor pago pelo serviço.

      5. Modificações

      5.1. Podemos modificar estes termos a qualquer momento.
      5.2. Modificações significativas serão notificadas com antecedência.
    `,
  },
  privacidade: {
    title: 'Política de Privacidade',
    content: `
      1. Coleta de Dados

      1.1. Coletamos informações necessárias para fornecer nossos serviços.
      1.2. Dados pessoais incluem nome, email, endereço e informações de pagamento.
      1.3. Dados de uso incluem logs, estatísticas e métricas de performance.

      2. Uso dos Dados

      2.1. Usamos seus dados para:
          - Fornecer e melhorar nossos serviços
          - Comunicar sobre atualizações e ofertas
          - Prevenir fraudes e abusos
          - Cumprir obrigações legais

      3. Compartilhamento de Dados

      3.1. Não vendemos seus dados pessoais.
      3.2. Compartilhamos dados apenas com:
          - Parceiros de serviço autorizados
          - Quando exigido por lei
          - Com seu consentimento explícito

      4. Segurança dos Dados

      4.1. Implementamos medidas técnicas e organizacionais para proteger seus dados.
      4.2. Mantemos padrões rigorosos de segurança e criptografia.

      5. Seus Direitos

      5.1. Você tem direito a:
          - Acessar seus dados
          - Corrigir dados incorretos
          - Solicitar exclusão de dados
          - Retirar consentimento
    `,
  },
  cookies: {
    title: 'Política de Cookies',
    content: `
      1. O que são Cookies

      Cookies são pequenos arquivos de texto armazenados em seu dispositivo quando você visita nosso site.

      2. Como Usamos Cookies

      2.1. Cookies Essenciais:
          - Autenticação e segurança
          - Funcionalidades básicas do site

      2.2. Cookies de Performance:
          - Análise de uso do site
          - Melhorias de performance

      2.3. Cookies de Funcionalidade:
          - Personalização da experiência
          - Preferências do usuário

      3. Gerenciamento de Cookies

      3.1. Você pode:
          - Aceitar ou recusar cookies
          - Configurar preferências no navegador
          - Excluir cookies existentes

      4. Cookies de Terceiros

      4.1. Utilizamos serviços de terceiros que podem usar cookies:
          - Analytics
          - Marketing
          - Redes sociais

      5. Atualizações

      5.1. Esta política pode ser atualizada.
      5.2. Alterações significativas serão notificadas.
    `,
  },
};

const Legal = () => {
  const { page = 'termos' } = useParams();
  const content = legalContent[page as keyof typeof legalContent];

  if (!content) {
    return (
      <div className="container py-24">
        <h1 className="text-3xl font-bold text-primary">Página não encontrada</h1>
      </div>
    );
  }

  return (
    <div className="container py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-primary mb-8">{content.title}</h1>
        <div className="prose prose-lg">
          {content.content.split('\n').map((line, index) => (
            <p key={index} className="text-secondary whitespace-pre-wrap">
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Legal;
