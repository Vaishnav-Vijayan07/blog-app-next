import "../index.css";
import { Metadata } from "next";
import { TempoDevtools } from "tempo-devtools";

export const metadata: Metadata = {
  title: "BlogMaster - Modern Blog Platform",
  description:
    "A modern blog platform focused on delivering high-quality content with an exceptional user experience and SEO optimization.",
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
