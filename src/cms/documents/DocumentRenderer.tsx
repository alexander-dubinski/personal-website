import { PortableTextComponents, PortableText } from '@portabletext/react';
import { PortableTextBlock } from '@portabletext/types';
import { urlForImage } from '@/src/cms/images';
import NextImage from 'next/image';
import Link from 'next/link';
import ImageContainer, { ImageType } from '@/src/cms/documents/ImageContainer';
import { Blockquote, List, Text, Title, Box } from '@mantine/core';

interface DocumentRendererProps {
  document: PortableTextBlock[] | undefined;
}

interface ImageComponent {
  value: Image;
}

interface Quote {
  quote: string;
  citation: string;
  floatRight?: boolean;
}

interface QuoteComponent {
  value: Quote;
}

const customComponents: PortableTextComponents = {
  types: {
    fullWidthImage: ({
      value: { asset, alt, floatRight, caption },
    }: ImageComponent) => {
      const aspectRatio = asset.metadata?.dimensions.aspectRatio || 1;
      return (
        <>
          <ImageContainer
            floatRight={floatRight}
            type={ImageType.FullWidthImage}
            aspectRatio={1 / aspectRatio}
            caption={caption}
          >
            <NextImage
              priority
              sizes="(min-width: 768px) 75vw,
                (win-width: 576px) 90vw,
                100vw"
              src={urlForImage(asset).url()}
              alt={alt}
              fill
            />
          </ImageContainer>
        </>
      );
    },
    halfWidthImage: ({
      value: { asset, alt, floatRight, caption },
    }: ImageComponent) => {
      const aspectRatio = asset.metadata?.dimensions.aspectRatio || 1;
      return (
        <>
          <ImageContainer
            floatRight={floatRight}
            type={ImageType.HalfWidthImage}
            aspectRatio={1 / aspectRatio}
            caption={caption}
          >
            <NextImage
              sizes="(min-width: 768px) 50vw,
                (win-width: 576px) 75vw,
                100vw"
              src={urlForImage(asset).url()}
              alt={alt}
              fill
            />
          </ImageContainer>
        </>
      );
    },
    fullWidthQuote: ({ value: { citation, quote } }: QuoteComponent) => {
      return <Blockquote cite={`- ${citation}`}>{quote}</Blockquote>;
    },
    halfWidthQuote: ({
      value: { citation, quote, floatRight },
    }: QuoteComponent) => {
      return (
        <Box
          w="50%"
          sx={{
            float: floatRight ? 'right' : 'left',
            '@media (max-width: 576px)': {
              width: '100%',
            },
          }}
        >
          <Blockquote cite={`- ${citation}`}>{quote}</Blockquote>
        </Box>
      );
    },
  },
  block: {
    h1: ({ children }) => (
      <Title mb="20px" color="blue.2" underline>
        {children}
      </Title>
    ),
    h3: ({ children }) => (
      <Text component="h3" size="xl" mb="8px" color="blue.2" underline>
        {children}
      </Text>
    ),
    normal: ({ children }) => <Text component="p">{children}</Text>,
  },
  list: {
    bullet: ({ children }) => (
      <Box
        display="inline-block"
        w="75%"
        m="15px auto"
        pos="relative"
        left="50%"
        sx={{
          transform: 'translateX(-50%)',
          '@media (max-width: 576px)': {
            width: '85%',
          },
        }}
      >
        <List type="unordered">{children}</List>
      </Box>
    ),
    number: ({ children }) => (
      <Box
        display="inline-block"
        w="75%"
        m="15px auto"
        pos="relative"
        left="50%"
        sx={{
          transform: 'translateX(-50%)',
          '@media (max-width: 576px)': {
            width: '85%',
          },
        }}
      >
        <List type="ordered">{children}</List>
      </Box>
    ),
  },
  listItem: {
    bullet: ({ children }) => <List.Item>{children}</List.Item>,
    number: ({ children }) => <List.Item>{children}</List.Item>,
  },
  marks: {
    link: ({ children, value: { href } }) => {
      const target = !href.startsWith('/') && '_blank';
      return (
        <Link className="text-link" href={href} target={target || ''}>
          {children}
        </Link>
      );
    },
  },
};

export default function DocumentRenderer({ document }: DocumentRendererProps) {
  if (!document) return null;
  return <PortableText value={document} components={customComponents} />;
}
