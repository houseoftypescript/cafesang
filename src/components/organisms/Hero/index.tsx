import Container from '@mui/material/Container';
import { ChangeEvent, useState } from 'react';
import Input from '../../atoms/Input';

export const Hero: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  return (
    <section id="hero">
      <div className="bg-blue-500 text-white">
        <Container>
          <div className="py-16">
            <div className="w-full md:w-1/2">
              <div className="flex flex-col gap-4">
                <h1 className="text-4xl font-black">
                  Become updated in just 5 minutes
                </h1>
                <p>
                  Get the daily email that makes reading the news enjoyable.
                  Stay informed and entertained, for free.
                </p>
                <form className="flex gap-4">
                  <Input
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      setEmail(event.target.value)
                    }
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded bg-blue-900 shadow-2xl"
                  >
                    Subscribe
                  </button>
                </form>
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
