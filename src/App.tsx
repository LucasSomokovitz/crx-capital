import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import Services from './components/Services';
import Diferenciais from './components/Diferenciais';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StructuredData from './components/StructuredData';
import Presentation from './components/Presentation';

function App() {
  useEffect(() => {
    // Auto-scroll contínuo e "natural" (com easing/inércia).
    // Começa 2s após carregar e para ao primeiro sinal de interação do usuário.
    const START_AFTER_MS = 4000; // espera para iniciar (dobro do tempo)
    const START_SCROLL_AFTER_HERO_MS = 800; // tempo para animação do pulo do Hero
    const BASE_SPEED_PX_PER_SEC = 80; // rolagem mais lenta (dobro do tempo)

    let stopped = false;
    let started = false;
    let rafId: number | null = null;
    let timeoutId: number | null = null;
    let startScrollTimeoutId: number | null = null;
    let lastTs: number | null = null;
    let velocity = 0; // px/s

    const stop = () => {
      if (stopped) return;
      stopped = true;
      if (timeoutId) window.clearTimeout(timeoutId);
      if (startScrollTimeoutId) window.clearTimeout(startScrollTimeoutId);
      timeoutId = null;
      startScrollTimeoutId = null;
      if (rafId) {
        window.cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    const onUserIntent = () => stop();

    // Qualquer intenção do usuário deve parar
    window.addEventListener('wheel', onUserIntent, { passive: true });
    window.addEventListener('touchstart', onUserIntent, { passive: true });
    window.addEventListener('pointerdown', onUserIntent);
    window.addEventListener('keydown', onUserIntent);

    const tick = (ts: number) => {
      if (stopped) return;

      const doc = document.documentElement;
      const maxScrollY = Math.max(0, doc.scrollHeight - window.innerHeight);
      const y = window.scrollY;

      if (y >= maxScrollY - 1) {
        stop();
        return;
      }

      // dt em segundos (limitado para estabilidade)
      const prev = lastTs ?? ts;
      lastTs = ts;
      const dt = Math.min(0.05, (ts - prev) / 1000);

      // Easing "natural": acelera um pouco no começo e desacelera perto do fim
      const p = maxScrollY > 0 ? y / maxScrollY : 1;
      const easeIn = Math.min(1, p / 0.12); // ~12% iniciais
      const easeOut = Math.min(1, (1 - p) / 0.18); // ~18% finais
      const ease = 0.35 + 0.65 * Math.min(easeIn, easeOut);

      const targetV = BASE_SPEED_PX_PER_SEC * ease;
      // "inércia": velocity segue targetV suavemente (criticamente amortecido)
      const follow = 1 - Math.exp(-10 * dt);
      velocity = velocity + (targetV - velocity) * follow;

      const nextY = y + velocity * dt;
      window.scrollTo(0, nextY);

      rafId = window.requestAnimationFrame(tick);
    };

    timeoutId = window.setTimeout(() => {
      if (stopped) return;

      // Primeiro, pular apenas o Hero (slideshow) até o início da apresentação
      const presentationEl = document.getElementById('presentation');
      const targetTop = presentationEl
        ? presentationEl.getBoundingClientRect().top + window.scrollY
        : window.innerHeight; // fallback
      window.scrollTo({ top: targetTop, behavior: 'smooth' });

      // Depois que esse pulo termina, inicia a rolagem contínua natural
      startScrollTimeoutId = window.setTimeout(() => {
        if (stopped) return;
        started = true;
        lastTs = null;
        velocity = 0;
        rafId = window.requestAnimationFrame(tick);
      }, START_SCROLL_AFTER_HERO_MS);
    }, START_AFTER_MS);

    return () => {
      stop();
      if (started) {
        // noop, mas mantemos para clareza
      }
      window.removeEventListener('wheel', onUserIntent);
      window.removeEventListener('touchstart', onUserIntent);
      window.removeEventListener('pointerdown', onUserIntent);
      window.removeEventListener('keydown', onUserIntent);
    };
  }, []);

  return (
    <>
      <StructuredData />
      <Header />
      <Hero />
      <Presentation />
      {/* Seções ocultas temporariamente */}
      <div className="hidden">
        <TrustBar />
        <About />
        <Services />
        <Diferenciais />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
