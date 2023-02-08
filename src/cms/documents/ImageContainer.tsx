import { Box, Sx } from '@mantine/core';
import { PropsWithChildren } from 'react';

export enum ImageType {
  FullWidthImage = 'fullWidthImage',
  HalfWidthImage = 'halfWidthImage',
}

interface ImageContainerProps extends PropsWithChildren {
  type: ImageType;
  aspectRatio: number;
}

export default function ImageContainer({
  type,
  aspectRatio,
  children,
}: ImageContainerProps) {
  const sx: Sx = type === ImageType.HalfWidthImage ? { float: 'left' } : {};
  return (
    <Box
      w={type === ImageType.HalfWidthImage ? '50%' : '70%'}
      m="auto"
      display={type === ImageType.HalfWidthImage ? 'inline-block' : 'block'}
      p="15px"
      sx={sx}
    >
      <Box pos="relative" pt={`${aspectRatio * 100}%`}>
        {children}
      </Box>
    </Box>
  );
}
