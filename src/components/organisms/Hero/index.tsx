import Container from '@mui/material/Container';
import { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import content from '@/content';
import ArticleComponent from '@/components/molecules/Article';
import { Article } from '../Articles';
import Link from 'next/link';

type HeroProps = {
  article: Article;
};

export const Hero: React.FC<HeroProps> = ({ article }) => {
  const [email, setEmail] = useState<string>('');

  const subscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section id="hero">
      <div className="bg-red-500">
        <Container>
          <div className="py-8 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="col-span-1">
                <div className="flex flex-col gap-4 text-white">
                  <h1 className="text-4xl font-black">{content.tagline}</h1>
                  <p>{content.description}</p>
                  <form onSubmit={subscribe} className="flex gap-4">
                    <Input
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        setEmail(event.target.value)
                      }
                    />
                    <Button type="submit">Subscribe</Button>
                  </form>
                </div>
              </div>
              <div className="col-span-1">
                <div className="bg-white w-full min-h-full shadow-2xl rounded">
                  {article ? (
                    <Link href={article?.share_url || '#'} target="_blank">
                      <div className="flex items-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                          <div
                            title={article?.title}
                            style={{
                              backgroundImage: `url(${article?.thumbnail_url})`,
                            }}
                            className="pb-[100%] bg-center bg-cover bg-no-repeat rounded"
                          />
                          <div className="flex flex-col gap-2 p-8">
                            <p className="text-red-500 font-bold">
                              {article.article_category?.cate_name || ''}
                            </p>
                            <h3 className="truncate-multipleline text-xl font-medium">
                              {article?.title}
                            </h3>
                            <p className="truncate-multipleline">
                              {article?.lead}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

Hero.displayName = 'Hero';

export default Hero;
