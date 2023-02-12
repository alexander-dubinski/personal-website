import { Box, Button, Title } from '@mantine/core';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import StarryBackground, {
  StarryBackgroundProps,
} from '@/src/components/StarryBackground';
import { getStarField } from '@/src/util/stars';

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
        pos="relative"
        top="50%"
        sx={{
          zIndex: 1,
          transform: 'translateY(-50%)',
        }}
      >
        <Box ta="center">
          <Image
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAArACsDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAABQQGAwf/xAAlEAABAwMDBAMBAAAAAAAAAAABAAIDBAUREyExEiIjMhQzgVH/xAAYAQEAAwEAAAAAAAAAAAAAAAAFAAQGAv/EACERAAIBAwQDAQAAAAAAAAAAAAABAwIRIgQSISMxMjNB/9oADAMBAAIRAxEAPwDBthfIQACtfZICAFwjt7Q71WgtVIGgbKnrFu1Kt4NLNMqorFYiOmgLxA4tcto2m8fCFutJlp2VmHGRAqd2ecx0Lm1Lnf0pEUzsBJ/CGqdlUKLbhOT1brFOWTIrbCM8Jm2xjIRXUAUpbZBkLPzruQ1X8zQMjGmiLnGMFMRvGmhrrKMFd0/RB1AEIQZOFWIBjhTwuDpUiAMBOVrhBc9WYA+XCQtk+XDdDylX2s9wQmpXajUSrA10cviQV3nwDulY/q/EBeTsVI+ZUF+CSjl6pU013aFnrf8AZ+p9vqE7J+A8/uf/2Q=="
            style={{ borderRadius: '25px' }}
            src="/ProfilePicture.jpg"
            alt="profile"
            width={300}
            height={300}
          />
          <Box
            m="20px auto 16px auto"
            w="360px"
            p="15px 0"
            sx={(theme) => ({
              backgroundColor: theme.colors.alphaDarkBlue[8],
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
