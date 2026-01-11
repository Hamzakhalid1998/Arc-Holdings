import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Certificates = lazy(() => import("./pages/Certificates"));
const Projects = lazy(() => import("./pages/Projects"));
const Clients = lazy(() => import("./pages/Clients"));
const Contact = lazy(() => import("./pages/Contact"));

const App = () => {
  return (
    <Suspense fallback={<p className="text-center mt-10">Loading...</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="projects" element={<Projects />} />
          <Route path="clients" element={<Clients />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
