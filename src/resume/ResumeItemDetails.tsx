import { Box, Grid, Text } from '@mantine/core';
import { ReactNode } from 'react';
import Link from 'next/link';

interface ResumeItemDetailsProps {
  image: ReactNode;
  description: string;
  link?: string;
}

export default function ResumeItemDetails({
  image,
  description,
  link,
}: ResumeItemDetailsProps) {
  return (
    <Grid.Col xs={12} sm={6}>
      <Text
        align="center"
        size="xl"
        fw="bold"
        color="blue.2"
        mb="20px"
        underline
      >
        Details
      </Text>
      <Box
        sx={{
          position: 'relative',
          width: '50%',
          paddingTop: '50%',
          display: 'inline-block',
          float: 'right',
          marginLeft: '1.15em',
        }}
      >
        {link ? (
          <Link
            href={link}
            target="_blank"
            style={{
              position: 'absolute',
              width: '100%',
              paddingTop: '100%',
              top: 0,
              left: 0,
            }}
          >
            {image}
          </Link>
        ) : (
          image
        )}
      </Box>
      <Text size="lg">{description}</Text>
    </Grid.Col>
  );
}
