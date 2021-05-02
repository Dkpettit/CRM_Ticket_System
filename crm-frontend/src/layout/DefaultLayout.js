import React from "react";
import { Footer } from "./partials/Footer.comp";
import { Header } from "./partials/Header.comp";

export const DefaultLayout = ({children}) => {
    return (
      <div className="default-layout">
        <header className="header mb-2">
          <Header />
        </header>
        <div className="main">{children}</div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
};
