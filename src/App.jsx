import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import WhyAlpAahar from './components/WhyAlpAahar';
import Authentic from './components/Authentic';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Footer from './components/Footer';
import OrderCTA from './components/OrderCTA';
import BottomNav from './components/BottomNav';
import OrderPage from './components/OrderPage';

function App() {
  const [currentView, setCurrentView] = useState('landing');

  useEffect(() => {
    // Clear any existing URL hash on load to keep the URL clean
    if (window.location.hash) {
      window.history.replaceState(
        '',
        document.title,
        window.location.pathname + window.location.search
      );
    }
  }, []);

  if (currentView === 'order') {
    return <OrderPage onBack={() => setCurrentView('landing')} />;
  }

  return (
    <div className="relative w-full bg-stone-50 overflow-x-hidden pb-16 md:pb-0">
      <Navbar onOrderClick={() => setCurrentView('order')} />
      <Hero />
      <Menu onOrderClick={() => setCurrentView('order')} />
      <WhyAlpAahar onOrderClick={() => setCurrentView('order')} />
      <Authentic />
      <Gallery />
      <Location />
      <Footer />
      <OrderCTA onOrderClick={() => setCurrentView('order')} />
      <BottomNav onOrderClick={() => setCurrentView('order')} />
    </div>
  );
}

export default App;
