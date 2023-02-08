interface Image {
  _type: string;
  alt: string;
  link?: string;
  asset: Asset;
}

interface ImageMetadata {
  dimensions: ImageDimensions;
}

interface ImageDimensions {
  aspectRatio: number;
  height: number;
  width: number;
}
