import { Navigation } from './components/Navigation';
import { CustomCursor } from './components/CustomCursor';
import { Hero } from './sections/Hero';
import { FeaturedWork } from './sections/FeaturedWork';
import { CreativePhilosophy } from './sections/CreativePhilosophy';
import { AboutPreview } from './sections/AboutPreview';
import { Services } from './sections/Services';
import { CreativeSystems } from './sections/CreativeSystems';
import { CreativeImpact } from './sections/CreativeImpact';
import { SignatureQuote } from './sections/SignatureQuote';
import { CallToAction } from './sections/CallToAction';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-gold/30 selection:text-white">
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <FeaturedWork />
        <CreativePhilosophy />
        <AboutPreview />
        <Services />
        <CreativeSystems />
        <CreativeImpact />
        <SignatureQuote />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
