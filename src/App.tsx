import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Tools from './pages/Tools';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <main className="space-y-32">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="services"><Services /></section>
        <section id="tools"><Tools /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}
