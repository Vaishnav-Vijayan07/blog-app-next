import "../index.css";
import { Metadata } from "next";
import { TempoDevtools } from "tempo-devtools";

export const metadata: Metadata = {
  title: "BlogMaster - Modern Blog Platform",
  description:
    "A modern blog platform focused on delivering high-quality content with an exceptional user experience and SEO optimization.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blogmaster.com",
    siteName: "BlogMaster",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "BlogMaster",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@blogmaster",
    creator: "@blogmaster",
  },
  robots: {
    index: true,
    follow: true,
  },
};

if (typeof window !== "undefined") {
  // Initialize Tempo Devtools
  TempoDevtools.init();

  // Check for dark mode preference on initial load
  const theme = localStorage.getItem("theme") || "light";
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <script src="https://api.tempo.new/proxy-asset?url=https://storage.googleapis.com/tempo-public-assets/error-handling.js"></script>
      </body>
    </html>
  );
}
