// src/components/Layout.tsx
import React from 'react';
import Navbar from './Navbar';
import WhatsAppButton from './WhatsAppButton';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <WhatsAppButton 
        phoneNumber="447908848685"
        message="Hi, I need IT support for my business."
        position="bottom-right"
        tooltipText="Chat with us on WhatsApp"
      />
    </>
  );
};

export default Layout;