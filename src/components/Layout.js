import "./../styles/global.css";
import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

export default function Layout({ children }) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Shiv Dubey</title>
      </Helmet>
      <div className="mx-auto flex flex-col bg-red-100 text-red-800">
        <header className="container mx-1 flex-0 mx-auto text-opacity-100 py-4">
          <nav className="flex text-center uppercase items-center h-10 font-light">
            <div className="ml-2 px-3 flex-0">
              <Link to="/">Home</Link>
            </div>
            <div className="px-3 flex-0">about</div>
            <div className="px-3 flex-1 font-bold text-2xl">Shiv DUbey</div>
            <div className="px-3 flex-0">
              <Link to="#projects">projects</Link>
            </div>
            <div className="px-3 mr-2 flex-0">contact</div>
          </nav>
        </header>
        {children}
        <footer className="flex-0 text-center p-6">
          &copy; 2021 Shiv Dubey
        </footer>
      </div>
    </div>
  );
}
