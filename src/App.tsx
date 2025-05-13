import { Suspense, lazy } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

// Lazy load pages for better performance
const BlogPage = lazy(() => import("./pages/blog"));
const BlogPostPage = lazy(() => import("./pages/blog/[slug]"));
const NewBlogPage = lazy(() => import("./pages/blog/new"));
const CategoriesPage = lazy(() => import("./pages/categories"));
const CategoryPage = lazy(() => import("./pages/categories/[slug]"));
const AboutPage = lazy(() => import("./pages/about"));
const ContactPage = lazy(() => import("./pages/contact"));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/new" element={<NewBlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/:slug" element={<CategoryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Add this before any catchall route */}
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
