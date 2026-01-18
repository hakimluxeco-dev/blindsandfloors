import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ChatBot from './components/ChatBot';
import MapModal from './components/MapModal';
import SplashScreen from './components/SplashScreen';

function App() {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="app">
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : (
        <>
          <Header />
          <main>
            <Hero />
            <Services />
            <Gallery />
            <Contact onOpenMap={() => setIsMapOpen(true)} />
          </main>
          <Footer />
          <WhatsAppButton />
          <ChatBot onOpenMap={() => setIsMapOpen(true)} />
          <MapModal isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} />
        </>
      )}
    </div>
  );
}

export default App;
