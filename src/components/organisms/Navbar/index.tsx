import Container from '@mui/material/Container';

export const Navbar: React.FC = () => {
  return (
    <nav>
      <Container>
        <div className="py-8">
          <h1 className="text-xl">☕ Cafe Sang</h1>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
