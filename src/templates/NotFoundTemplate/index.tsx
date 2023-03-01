import Button from '@/components/atoms/Button';
import Container from '@mui/material/Container';
import Link from 'next/link';

export const NotFoundTemplate: React.FC = () => {
  return (
    <main className="h-screen">
      <Container className="h-full">
        <div className="h-full flex flex-col items-center justify-center gap-4">
          <h1 className="text-9xl font-bold">404</h1>
          <p className="uppercase text-3xl">Page Not Found</p>
          <Link href="/">
            <Button>Go to Home Page</Button>
          </Link>
        </div>
      </Container>
    </main>
  );
};

export default NotFoundTemplate;
