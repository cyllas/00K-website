import React from 'react';
import { Link } from 'react-router-dom';
import { ResponsiveContainer } from '../../layout/ResponsiveContainer';
import { texts } from '../../../constants/texts';

const Footer: React.FC = () => {
  const { footer } = texts;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-12">
      <ResponsiveContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <img
              src="/images/logo-00K.svg"
              alt="00K"
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-gray-400 text-sm">
              Transforme seu e-commerce com a plataforma mais completa do mercado.
            </p>
          </div>

          {/* Links da Empresa */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{footer.company}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre" className="text-gray-400 hover:text-primary transition-colors">
                  {texts.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-400 hover:text-primary transition-colors">
                  {texts.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Links do Produto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{footer.product}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/solucoes" className="text-gray-400 hover:text-primary transition-colors">
                  {texts.nav.solutions}
                </Link>
              </li>
              <li>
                <Link to="/planos" className="text-gray-400 hover:text-primary transition-colors">
                  {texts.nav.plans}
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Legais */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{footer.legal}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/termos" className="text-gray-400 hover:text-primary transition-colors">
                  {footer.terms}
                </Link>
              </li>
              <li>
                <Link to="/privacidade" className="text-gray-400 hover:text-primary transition-colors">
                  {footer.privacy}
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-400 hover:text-primary transition-colors">
                  {footer.cookies}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-gray-800 my-8" />

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p> {currentYear} 00K. {footer.rights}</p>
        </div>
      </ResponsiveContainer>
    </footer>
  );
};

export default Footer;
