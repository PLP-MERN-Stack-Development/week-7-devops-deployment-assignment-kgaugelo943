import { lazy, Suspense } from 'react';
import Home from '../pages/Home'; 

const About = lazy(() => import('./pages/About'));

<Suspense fallback={<div>Loading...</div>}>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</Suspense>
