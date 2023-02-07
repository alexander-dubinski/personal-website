import { getStarField } from '@/src/util/stars';
import { GetStaticPropsContext } from 'next';
import StarryBackground, {
  StarryBackgroundProps,
} from '@/src/components/StarryBackground';
import {
  DocumentType,
  getAllForDocumentType,
  getProjectForSlug,
} from '@/src/cms/client';
import PageContentBox from '@/src/components/PageContentBox';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { LoadingOverlay } from '@mantine/core';

interface ProjectProps extends StarryBackgroundProps {
  project: Project;
}

export default function Project({ project, stars }: ProjectProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{project.name || ''}</title>
      </Head>
      <PageContentBox>
        <LoadingOverlay visible={router.isFallback} />
      </PageContentBox>
      <StarryBackground stars={stars} />
    </>
  );
}

export async function getStaticPaths() {
  const projects: Project[] = await getAllForDocumentType<Project>(
    DocumentType.Project
  );

  if (!projects || projects.length < 1) {
    throw Error('No projects found for /projects');
  }

  return {
    paths: projects.map(({ slug }) => ({
      params: { slug: slug.current },
    })),
    fallback: true,
  };
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const slug = ctx.params?.slug;
  if (!slug) throw Error('Slug not found for /projects/{slug}');

  const project = await getProjectForSlug<Project>(slug as string);

  if (!project || project.length < 1 || project.length > 1) {
    throw Error(`Incorrect number of projects for /projects/${slug}`);
  }

  return {
    props: {
      project: project[0],
      stars: getStarField(350),
    },
  };
}
