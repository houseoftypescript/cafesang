import content from '@/content';
import Container from '@mui/material/Container';
import { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';

export const CTA: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const subscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section id="cta">
      <div className="bg-red-500 text-white">
        <Container>
          <div className="py-8 md:py-16">
            <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">
              <div className="flex flex-col gap-4 text-center">
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
          </div>
        </Container>
      </div>
    </section>
  );
};

export default CTA;
