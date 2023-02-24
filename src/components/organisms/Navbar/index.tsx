import Container from '@mui/material/Container';

export const Navbar: React.FC = () => {
  return (
    <nav>
      <Container>
        <div className="py-4">
          <h1 className="text-2xl uppercase tracking-wider font-bold">
            ☕ Cafe <span className="text-blue-500">Sang</span>
          </h1>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
