import Container from '@mui/material/Container';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from 'next/link';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <div className="py-8">
          <div className="flex justify-between">
            <p className="text-gray-500">&copy; {year} Cafe Sang</p>
            <div className="flex gap-2">
              <Link href="https://facebook.com" target="_blank">
                <FacebookIcon className="text-gray-500 hover:text-red-500" />
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <TwitterIcon className="text-gray-500 hover:text-red-500" />
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <LinkedInIcon className="text-gray-500 hover:text-red-500" />
              </Link>
              <Link href="https://youtube.com" target="_blank">
                <YouTubeIcon className="text-gray-500 hover:text-red-500" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
