import { Box, Menu, Text } from '@mantine/core';

import Image from 'next/image';
import Link from 'next/link';

import CaretDown from '@/src/icons/CaretDown.svg';

const headerImageStyles = { backgroundColor: '#212121', borderRadius: '50%' };

export default function Header() {
  return (
    <header>
      <Box display="inline-block" pos="relative" w="60px">
        <Link href="/">
          <Image
            priority
            style={{ ...headerImageStyles, borderRadius: '10px' }}
            src="/Logo.png"
            alt="logo"
            height={56}
            width={48}
          />
        </Link>
      </Box>
      <Menu trigger="hover" position="bottom-start">
        <Menu.Target>
          <Box component="span">
            <CaretDown
              style={{
                verticalAlign: 'middle',
                backgroundColor: '#212427',
                borderRadius: '50%',
              }}
            />
          </Box>
        </Menu.Target>
        <Menu.Dropdown sx={{ '& a': { color: 'white' } }}>
          <Menu.Item href="/about" component={Link}>
            <Text size="xl">About</Text>
          </Menu.Item>
          <Menu.Item href="/resume" component={Link}>
            <Text size="xl">Resume</Text>
          </Menu.Item>
          <Menu.Item href="/projects" component={Link}>
            <Text size="xl">Projects</Text>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
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
          target="_blank"
          href="https://www.linkedin.com/in/alexander-dubinski/"
        >
          <Image
            style={headerImageStyles}
            src="/LinkedIn.svg"
            alt="linkedin icon"
            height={46}
            width={46}
          />
        </Link>
        <Link target="_blank" href="https://github.com/alexander-dubinski">
          <Image
            style={headerImageStyles}
            src="/Github.svg"
            alt="github icon"
            height={46}
            width={46}
          />
        </Link>
      </Box>
    </header>
  );
}
