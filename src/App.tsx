import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Import components
import Layout from "./components/layout/Layout";
import BlogPage from "./components/blog/BlogPage";
import BlogPostDetail from "./components/blog/BlogPostDetail";
import BlogForm from "./components/blog/BlogForm";
import CategoriesPage from "./components/categories/CategoriesPage";
import CategoryDetail from "./components/categories/CategoryDetail";
import AboutPage from "./components/about/AboutPage";
import ContactPage from "./components/contact/ContactPage";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <BlogPage />
            </Layout>
          }
        />
        <Route
          path="/blog"
          element={
            <Layout>
              <BlogPage />
            </Layout>
          }
        />
        <Route
          path="/blog/new"
          element={
            <Layout>
              <BlogForm />
            </Layout>
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <Layout>
              <BlogPostDetail slug="" />
            </Layout>
          }
        />
        <Route
          path="/categories"
          element={
            <Layout>
              <CategoriesPage />
            </Layout>
          }
        />
        <Route
          path="/categories/:slug"
          element={
            <Layout>
              <CategoryDetail slug="" />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <AboutPage />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <ContactPage />
            </Layout>
          }
        />

        {/* Add this before any catchall route */}
        {import.meta.env.VITE_TEMPO === "true" && <Route path="/tempobook/*" />}
      </Routes>
    </Suspense>
  );
}

export default App;
