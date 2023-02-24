import cafesang from '@/assets/cafesang.svg';
import Button from '@/components/atoms/Button';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Link from 'next/link';

export const Navbar: React.FC = () => {
  return (
    <nav>
      <Container>
        <div className="py-8">
          <div className="flex justify-between">
            <Link href="/">
              <div className="flex items-center gap-2">
                <Image src={cafesang} alt="Cafe Sang" width={24} height={24} />{' '}
                <h1 className="text-2xl uppercase tracking-wider font-bold">
                  Cafe <span className="text-red-500">Sang</span>
                </h1>
              </div>
            </Link>
            <p>
              <Link
                href="https://vnexpress.net"
                target="_blank"
                className="uppercase"
              >
                <Button className="uppercase">vnexpress</Button>
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
