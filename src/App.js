import './App.scss';
import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import CanvasLoader from './components/Loader';
import Layout from './components/Layout';
import { AnimatePresence } from 'framer-motion';

const Home = lazy(() => import('./components/pages/Home'));
const Portfolio = lazy(() => import('./components/pages/Portfolio'));
const About = lazy(() => import('./components/pages/About'));
const Contact = lazy(() => import('./components/pages/Contact'));

function App() {
  const location = useLocation();

  return (
    <Suspense fallback={<CanvasLoader insideCanvas={false} />}>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

export default App;
