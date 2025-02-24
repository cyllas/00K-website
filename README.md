# 00K Website

Website institucional da plataforma 00K de gestão para e-commerce, desenvolvido com React, TypeScript, Tailwind CSS e Vite.

## Tecnologias

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Router](https://reactrouter.com/)
- [React Helmet Async](https://github.com/staylor/react-helmet-async)
- [Heroicons](https://heroicons.com/)

## Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/00k-website.git

# Entre no diretório
cd 00k-website

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## Scripts

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Gera a build de produção
- `npm run preview`: Visualiza a build de produção localmente
- `npm run lint`: Executa o linter
- `npm run type-check`: Verifica os tipos do TypeScript

## Estrutura do Projeto

```
src/
├── components/        # Componentes reutilizáveis
│   ├── common/       # Componentes comuns (Header, Footer, etc)
│   └── layout/       # Componentes de layout
├── pages/            # Páginas da aplicação
├── hooks/            # Custom hooks
├── utils/            # Funções utilitárias
├── styles/           # Estilos globais
└── assets/           # Imagens e outros assets
```

## Design

O projeto segue as diretrizes de design da 00K:

### Cores
- Primária: `#1E2A38` (Azul-profundo)
- Secundária: `#3B3F45` (Cinza-grafite)
- Destaque: `#CBA36A` (Dourado sutil)

### Tipografia
- Inter: Principal
- Poppins: Títulos
- Roboto: Conteúdo denso

## PWA

O site é uma Progressive Web App (PWA) e pode ser instalado em dispositivos móveis e desktop.

## SEO

- Meta tags otimizadas
- Sitemap.xml
- Robots.txt
- Open Graph tags
- Twitter Cards

## Performance

- Lazy loading de componentes
- Code splitting
- Otimização de imagens
- Minificação de código
- Cache de assets

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contribuição

1. Faça o fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request
