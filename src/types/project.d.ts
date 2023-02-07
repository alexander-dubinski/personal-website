interface Project extends CMSDocument {
  description: string;
  images?: Image[];
  mainImage: Image;
  name: string;
  slug: Slug;
  startYear: number;
  tools: string[];
}
