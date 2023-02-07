import sanityClient from '@sanity/client';

export enum DocumentType {
  Project = 'project',
}

export const cmsClient = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: false,
  apiVersion: new Date().toISOString().split('T')[0],
  token: process.env.SANITY_API_KEY,
});

export function getAllForDocumentType<T>(docType: DocumentType): Promise<T[]> {
  return cmsClient.fetch(`*[_type == "${docType}"]`);
}

export function getProjectForSlug<T>(slug: string): Promise<T[]> {
  return cmsClient.fetch(`*[_type == "project" && slug.current == "${slug}"]`);
}
