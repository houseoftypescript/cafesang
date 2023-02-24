import Articles, { Article } from '@/components/organisms/Articles';
import CTA from '@/components/organisms/CTA';
import Footer from '@/components/organisms/Footer';
import Hero from '@/components/organisms/Hero';
import Navbar from '@/components/organisms/Navbar';
import useAxios from '@/hooks/use-axios';

export const HomeTemplate: React.FC = () => {
  const url = 'https://homapis.vercel.app/api/vietnam/vnexpress';
  const { loading, error, data } = useAxios<Article[]>(url);

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero article={(data || [])[0] || ({} as Article)} />
      <section className="grow">
        <Articles
          loading={loading}
          error={error}
          articles={data || ([] as Article[])}
        />
      </section>
      <CTA />
      <Footer />
    </main>
  );
};

export default HomeTemplate;
