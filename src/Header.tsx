import Image from 'next/image';
import Link from 'next/link';
import { Box } from '@mantine/core';

export default function Header() {
  return (
    <header>
      <Link href="/">
        <Image
          style={{ backgroundColor: '#212121', borderRadius: '10px' }}
          src="/Logo.png"
          alt="logo"
          height={56}
          width={48}
        />
      </Link>
      <Box
        component="span"
        sx={{
          float: 'right',
          '& img': {
            margin: '0 10px',
          },
        }}
      >
        <Link
          style={{ backgroundColor: '#212121', borderRadius: '50%' }}
          target="_blank"
          href="https://www.linkedin.com/in/alexander-dubinski/"
        >
          <Image
            src="/LinkedIn.svg"
            alt="linkedin icon"
            height={46}
            width={46}
          />
        </Link>
        <Link
          style={{ backgroundColor: '#212121', borderRadius: '50%' }}
          target="_blank"
          href="https://github.com/alexander-dubinski"
        >
          <Image src="/Github.svg" alt="github icon" height={46} width={46} />
        </Link>
      </Box>
    </header>
  );
}
