import { Carousel } from '@mantine/carousel';
import { Badge, Box, Grid, LoadingOverlay, Text, Title } from '@mantine/core';

import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import {
  DocumentType,
  getAllForDocumentType,
  getProjectForSlug,
} from '@/src/cms/client';
import DocumentRenderer from '@/src/cms/documents/DocumentRenderer';
import { urlForImage } from '@/src/cms/images';
import PageContentBox from '@/src/components/PageContentBox';
import StarryBackground, {
  StarryBackgroundProps,
} from '@/src/components/StarryBackground';
import { ProjectEntry } from '@/src/types/project';
import { getStarField } from '@/src/util/stars';

interface ProjectProps extends StarryBackgroundProps {
  project: ProjectEntry;
}

export default function Project({ project, stars }: ProjectProps) {
  const router = useRouter();

  return (
    <>
      {!router.isFallback && (
        <Head>
          <title>{project.name}</title>
        </Head>
      )}
      <PageContentBox>
        <LoadingOverlay visible={router.isFallback} />
        {!router.isFallback && (
          <>
            <Grid>
              <Grid.Col xs={12} md={7}>
                <Title fw="bold" underline>
                  {project.name}
                </Title>
                <Box mt="18px">
                  {project.tools.map((tool) => (
                    <Badge
                      mr="5px"
                      variant="filled"
                      color="blue.6"
                      size="lg"
                      key={tool}
                    >
                      {tool}
                    </Badge>
                  ))}
                </Box>
                <Text mt="15px" size="lg" color="blue.1">
                  Started {project.startYear}
                </Text>
              </Grid.Col>
              <Grid.Col pos="relative" xs={12} md={5}>
                <Box pos="relative" w="100%" pt="50%" mb="15px">
                  <Image
                    placeholder="blur"
                    blurDataURL={project.mainImage.asset.metadata?.lqip}
                    src={urlForImage(project.mainImage.asset).url()}
                    alt={project.mainImage.alt}
                    fill
                    sizes="(min-width: 768px) 75vw,
                    (win-width: 576px) 90vw,
                    100vw"
                  />
                </Box>
              </Grid.Col>
            </Grid>
            <DocumentRenderer document={project.body} />
          </>
        )}
        {project?.images && (
          <>
            <Text size="xl" color="blue.2" ta="center" mb="10px">
              Pictures
            </Text>
            <Carousel
              height={225}
              slideSize="33.333333%"
              slideGap="sm"
              breakpoints={[
                { maxWidth: 'md', slideSize: '50%' },
                { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
              ]}
              controlSize={34}
              align="start"
            >
              {project.images.map((image, idx) => (
                <Carousel.Slide key={`${image.asset._ref}_${idx}`}>
                  <Box
                    pos="relative"
                    h="250px"
                    w="100%"
                    sx={{ overflow: 'hidden' }}
                  >
                    <Image
                      placeholder="blur"
                      blurDataURL={image.asset.metadata?.lqip}
                      src={urlForImage(image.asset).height(250).url()}
                      alt={image.alt}
                      sizes="(min-width: 768px) 25vw,
                      (win-width: 576px) 33vw,
                      100vw"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>
                </Carousel.Slide>
              ))}
            </Carousel>
          </>
        )}
      </PageContentBox>
      <StarryBackground stars={stars} />
    </>
  );
}

export async function getStaticPaths() {
  const projects: ProjectEntry[] = await getAllForDocumentType<ProjectEntry>(
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

  const project = await getProjectForSlug<ProjectEntry>(slug as string);

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
