import { getStarField } from '@/src/util/stars';
import { projects } from '@/src/data/projects';
import { GetStaticPropsContext } from 'next';
import StarryBackground, {
  StarryBackgroundProps,
} from '@/src/StarryBackground';

interface ProjectProps extends StarryBackgroundProps {
  project: ProjectContent;
}

export default function Project({ project, stars }: ProjectProps) {
  return <StarryBackground stars={stars} />;
}

export async function getStaticPaths() {
  return {
    paths: projects.map(({ id }) => ({
      params: { slug: id },
    })),
    fallback: true,
  };
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const project = projects.find((project) => project.id === ctx.params?.slug);
  if (!project) return { notFound: true };
  return {
    props: {
      project,
      stars: getStarField(350),
    },
  };
}
