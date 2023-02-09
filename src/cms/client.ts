import sanityClient from '@sanity/client';

export enum DocumentType {
  Project = 'project',
  Career = 'career',
  Education = 'education',
}

export enum Order {
  ASC = 'asc',
  DESC = 'desc',
}

export enum OrderBy {
  EndYear = 'endYear',
}

export const cmsClient = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: false,
  apiVersion: new Date().toISOString().split('T')[0],
  token: process.env.SANITY_API_KEY,
});

export function getAllForDocumentType<T>(docType: DocumentType): Promise<T[]> {
  return cmsClient.fetch(`*[_type == "${docType}"]{..., body[]{}}`);
}

export function getAllForDocumentTypeOrdered<T>(
  docType: DocumentType,
  orderBy: OrderBy,
  order: Order
): Promise<T[]> {
  return cmsClient.fetch(
    `*[_type == "${docType}"]{..., body[]{}} | order(${orderBy} ${order})`
  );
}

export function getProjectForSlug<T>(slug: string): Promise<T[]> {
  return cmsClient.fetch(
    `*[_type == "project" && slug.current == "${slug}"]{..., body[]{..., asset->{_id, _type, metadata{dimensions}}}}`
  );
}
