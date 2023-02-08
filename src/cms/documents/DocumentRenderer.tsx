import { PortableTextComponents } from '@portabletext/react';
import { PortableTextBlock } from '@portabletext/types';
import { urlForImage } from '@/src/cms/images';
import NextImage from 'next/image';
import ImageContainer, { ImageType } from '@/src/cms/documents/ImageContainer';
import { PortableText } from '@portabletext/react';

interface DocumentRendererProps {
  document: PortableTextBlock[] | undefined;
}

interface ImageComponent {
  value: Image;
}

const customComponents: PortableTextComponents = {
  types: {
    fullWidthImage: ({ value: { asset, alt } }: ImageComponent) => {
      const aspectRatio = asset.metadata?.dimensions.aspectRatio || 1;
      return (
        <ImageContainer
          type={ImageType.FullWidthImage}
          aspectRatio={1 / aspectRatio}
        >
          <NextImage src={urlForImage(asset).url()} alt={alt} fill />
        </ImageContainer>
      );
    },
    halfWidthImage: ({ value: { asset, alt } }: ImageComponent) => {
      const aspectRatio = asset.metadata?.dimensions.aspectRatio || 1;
      return (
        <ImageContainer
          type={ImageType.HalfWidthImage}
          aspectRatio={1 / aspectRatio}
        >
          <NextImage src={urlForImage(asset).url()} alt={alt} fill />
        </ImageContainer>
      );
    },
  },
};

export default function DocumentRenderer({ document }: DocumentRendererProps) {
  if (!document) return null;
  return <PortableText value={document} components={customComponents} />;
}
