import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ForWhom from './components/ForWhom';
import Philosophy from './components/Philosophy';
import Method from './components/Method';
import About from './components/About';
import Packages from './components/Packages';
import UseCases from './components/UseCases';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionBridge from './components/SectionBridge';

export default function App() {
  return (
    <div className="relative overflow-x-hidden" style={{ backgroundColor: '#FAF8F5' }}>
      {/* Golden Thread — subtle vertical connection */}
      <div className="golden-thread hidden lg:block" aria-hidden="true" />

      <div className="relative">
        <Navigation />
        <Hero />

        <SectionBridge text="Für wen ist das hier?" />

        <ForWhom />

        <SectionBridge text="Was ich glaube" variant="dark" />

        <Philosophy />

        <SectionBridge text="In der Praxis" />

        <Method />

        <SectionBridge text="Wer dahinter steht" />

        <About />
        <Packages />

        <SectionBridge text="Kommt euch das bekannt vor?" />

        <UseCases />

        <SectionBridge text="Was andere sagen" />

        <Testimonials />
        <Process />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
