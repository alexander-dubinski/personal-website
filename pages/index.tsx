import StarryBackground, {
  Star,
  starRadiusRange,
  StarryBackgroundProps,
} from '@/src/StarryBackground';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Title, Button } from '@mantine/core';

interface HomeProps extends StarryBackgroundProps {}

const navButtons = [
  { label: 'About', path: '/about' },
  { label: 'Resume', path: '/resume' },
  { label: 'Projects', path: '/projects' },
];

export default function Home({ stars }: HomeProps) {
  return (
    <>
      <Box
        sx={{
          zIndex: 1,
          position: 'relative',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Image
            style={{ borderRadius: '25px' }}
            src="/ProfilePicture.jpg"
            alt="profile"
            width={300}
            height={300}
          />
          <Box
            sx={{
              margin: '20px auto',
              backgroundColor: 'rgba(13, 71, 161, 0.85)',
              width: '460px',
              padding: '15px 0',
              borderRadius: '10px',
            }}
          >
            <Title color="blue.0">
              Hi, my name is <br />
              <Box
                component="span"
                sx={(theme) => ({
                  color: theme.colors.blue[1],
                })}
              >
                Alexander
              </Box>
              &nbsp;
              <Box
                component="span"
                sx={(theme) => ({
                  color: theme.colors.blue[2],
                })}
              >
                Dubinski
              </Box>
            </Title>
          </Box>
          <Box sx={{ '& button': { margin: '0 10px', minWidth: '140px' } }}>
            {navButtons.map(({ path, label }) => (
              <Link key={label} href={path}>
                <Button color="blue.8" size="xl">
                  {label}
                </Button>
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
      <StarryBackground stars={stars} />
    </>
  );
}

export async function getStaticProps() {
  const stars: Star[] = [];
  for (let i = 0; i < 250; i++) {
    const r = Math.floor(Math.random() * starRadiusRange + 2);
    const star: Star = {
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      r: `${r}px`,
      opacity: r / starRadiusRange,
    };
    stars.push(star);
  }
  return {
    props: {
      stars,
    },
  };
}
