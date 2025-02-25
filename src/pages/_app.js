import '../styles/globals.css';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (href) => {
    setMenuOpen(false);
    router.push(href);
  };

  return (
    <div className={darkMode ? 'dark' : 'light'} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header>
        <h1>AppGest</h1>
        <button className="menu-hamburger" onClick={toggleMenu}>☰</button>
        {menuOpen && (
          <div className="menu">
            <div className="tile-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: 0 }}>
              <a className="tile tile1" onClick={() => handleLinkClick('/seconnecter')} style={{ gridColumn: 'span 2' }}>Se connecter</a>
              <a className="tile tile2" onClick={() => handleLinkClick('/logistique')} style={{ gridColumn: 'span 1' }}>Logistique</a>
              <a className="tile tile3" onClick={() => handleLinkClick('/tracabilite')} style={{ gridColumn: 'span 1' }}>Traçabilité</a>
              <a className="tile tile4" onClick={() => handleLinkClick('/production')} style={{ gridColumn: 'span 1' }}>Production</a>
              <a className="tile tile5" onClick={() => handleLinkClick('/mediation')} style={{ gridColumn: 'span 1' }}>Médiation</a>
              <a className="tile tile6" onClick={() => handleLinkClick('/sav')} style={{ gridColumn: 'span 1' }}>SAV</a>
              <a className="tile tile7" onClick={() => handleLinkClick('/dons')} style={{ gridColumn: 'span 1' }}>Dons</a>
              <a className="tile tile8" onClick={() => handleLinkClick('/bilans')} style={{ gridColumn: 'span 1' }}>Bilans</a>
              <a className="tile tile9" onClick={() => handleLinkClick('/stocks')} style={{ gridColumn: 'span 1' }}>Stocks</a>
              <a className="tile tile10" onClick={() => handleLinkClick('/admin')} style={{ gridColumn: 'span 1' }}>Accès admin</a>
              <a className="tile tile11" onClick={() => handleLinkClick('/')} style={{ gridColumn: 'span 1' }}>Accueil</a>
            </div>
          </div>
        )}
      </header>
      <main style={{ flex: 1 }}>
        <Component {...pageProps} />
      </main>
      <footer>
        <button className="toggle-dark-mode" onClick={toggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <span>@n0r3f</span>
      </footer>
    </div>
  );
}

export default MyApp;
