import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Page',
  description: 'SEO Description',
  keywords: ['About Page', 'Bladimir Parra', 'information', '...'],
};

export default function AboutPage() {
  return (
      <span className="text-7xl">About Page</span>
  );
}