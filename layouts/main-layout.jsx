"use client";

import React from "react";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";
import ScrollToTop from "@/components/header/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import PropTypes from "prop-types";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main className="flex flex-col min-h-screen relative z-1">
        <div className="main-layout flex-1 relative z-1">
          <div className="flex flex-auto overflow-hidden relative z-10">
            <div className="relative isolate flex w-full flex-col">
              {children}                            
              <Analytics />
              <SpeedInsights />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
