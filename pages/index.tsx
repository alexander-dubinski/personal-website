import StarryBackground, {
  StarryBackgroundProps,
} from '@/src/StarryBackground';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Title, Button } from '@mantine/core';
import { getStarField } from '@/src/util/stars';
import Head from 'next/head';

interface HomeProps extends StarryBackgroundProps {}

const navButtons = [
  { label: 'About', path: '/about' },
  { label: 'Resume', path: '/resume' },
  { label: 'Projects', path: '/projects' },
];

export default function Home({ stars }: HomeProps) {
  return (
    <>
      <Head>
        <title>Alexander Dubinski - Home</title>
      </Head>
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
            priority
            style={{ borderRadius: '25px' }}
            src="/ProfilePicture.jpg"
            alt="profile"
            width={300}
            height={300}
          />
          <Box
            sx={(theme) => ({
              margin: '20px auto 16px auto',
              backgroundColor: theme.colors.alphaDarkBlue[8],
              width: '360px',
              padding: '15px 0',
              borderRadius: '10px',
            })}
          >
            <Title color="blue.0">
              Hi, my name is <br />
              <Box
                component="span"
                sx={(theme) => ({
                  color: theme.colors.blue[2],
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
          <Box sx={{ '& button': { margin: '4px 10px', minWidth: '140px' } }}>
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
  return {
    props: {
      stars: getStarField(350),
    },
  };
}
