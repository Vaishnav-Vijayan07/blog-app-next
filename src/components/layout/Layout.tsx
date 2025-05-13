import React from "react";
import Link from "next/link";
import {
  Menu,
  Search,
  Sun,
  Moon,
  Github,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children = <div>Content goes here</div> }: LayoutProps) => {
  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-background">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-sm dark:bg-background/90">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-foreground">
              BlogMaster
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground font-medium"
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="text-muted-foreground hover:text-foreground font-medium"
              >
                Blog Posts
              </Link>
              <Link
                href="/categories"
                className="text-muted-foreground hover:text-foreground font-medium"
              >
                Categories
              </Link>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-foreground font-medium"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-foreground font-medium"
              >
                Contact
              </Link>
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" aria-label="Search">
                <Search className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                aria-label={
                  isDarkMode ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={toggleMobileMenu}
                aria-label="Menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-foreground font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog Posts
                </Link>
                <Link
                  href="/categories"
                  className="text-muted-foreground hover:text-foreground font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Categories
                </Link>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About section */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">About BlogMaster</h3>
              <p className="text-muted-foreground mb-4">
                A modern blog platform focused on delivering high-quality
                content with an exceptional user experience and SEO
                optimization.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/categories/technology"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Technology
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories/design"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories/business"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Business
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories/lifestyle"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Lifestyle
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom footer */}
          <div className="border-t border-border mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} BlogMaster. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-foreground text-sm"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-foreground text-sm"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/sitemap"
                  className="text-muted-foreground hover:text-foreground text-sm"
                >
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
