interface Project {
  _id: string;
  _type: string;
  description: string;
  images?: Image[];
  mainImage: Image;
  name: string;
  slug: Slug;
  startYear: number;
  tools: string[];
}
