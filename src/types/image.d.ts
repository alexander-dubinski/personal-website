interface Image {
  _type: string;
  alt: string;
  link?: string;
  asset: Asset;
  caption?: string;
  floatRight?: boolean;
}

interface ImageMetadata {
  dimensions: ImageDimensions;
}

interface ImageDimensions {
  aspectRatio: number;
  height: number;
  width: number;
}
