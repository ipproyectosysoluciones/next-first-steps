import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Page',
  description: 'Esta es la página de contacto de la empresa',
  keywords: ['Forms-Contact', 'Contacts', 'Contact Page', '...'],
};

export default function ContactPage() {
  return (
    <>
      <span className="text-7xl">Contact Page</span>
    </>
  );
}