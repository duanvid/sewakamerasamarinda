import { Outlet } from 'react-router-dom';
import './index.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import { auth } from './firebase-config';
import Footer from './components/Footer';
import WhatsAppButton from './components/whatsapp/WhatsappButton';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col  font-poppins relative">
      <Header setIsOpen={setIsOpen} isLogin={isLogin} />
      <Nav
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isLogin={isLogin}
      />
      <div id="main" className="grow bg-slate-100 w-full flex flex-col items-center">
        <Outlet />
      </div>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;
