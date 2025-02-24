import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { lazyLoad } from './utils/lazyLoad';

// Lazy load pages
const Home = lazyLoad(() => import('./pages/Home'));
const About = lazyLoad(() => import('./pages/About'));
const Solutions = lazyLoad(() => import('./pages/Solutions'));
const Resources = lazyLoad(() => import('./pages/Resources'));
const Plans = lazyLoad(() => import('./pages/Plans'));
const Contact = lazyLoad(() => import('./pages/Contact'));
const Legal = lazyLoad(() => import('./pages/Legal'));

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/solucoes" element={<Solutions />} />
          <Route path="/recursos" element={<Resources />} />
          <Route path="/planos" element={<Plans />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
