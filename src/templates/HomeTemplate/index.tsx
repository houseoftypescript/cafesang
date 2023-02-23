import CTA from '@/components/organisms/CTA';
import Footer from '@/components/organisms/Footer';
import Hero from '@/components/organisms/Hero';
import Navbar from '@/components/organisms/Navbar';

export const HomeTemplate: React.FC = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <section className="grow"></section>
      <CTA />
      <Footer />
    </main>
  );
};

export default HomeTemplate;
