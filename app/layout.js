"use client";
import Head from "next/head";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "@/components/BootstrapClient";
import TopNav from "@/components/nav/TopNav";
import Footer from "@/components/footer/Footer";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import { CategoryProvider } from "@/context/category";
import { ProductProvider } from "@/context/product";
import { TagProvider } from "@/context/tag";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" />

    </head>
      <SessionProvider>
        <CategoryProvider>
            <TagProvider>
              <ProductProvider>
                  <body >
                    <TopNav/>
                    <Toaster />
                    {children}
                    <BootstrapClient></BootstrapClient>
                    <Footer/>
                  </body>
              </ProductProvider>
              
              </TagProvider>
          </CategoryProvider>
      </SessionProvider>
    </html>
  );
}
