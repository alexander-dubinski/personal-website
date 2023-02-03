import StarryBackground, {
  StarryBackgroundProps,
} from '@/src/StarryBackground';
import { getStarField } from '@/src/util/stars';
import Head from 'next/head';

interface ProjectsProps extends StarryBackgroundProps {}
export default function Projects({ stars }: ProjectsProps) {
  return (
    <>
      <Head>
        <title>Alexander Dubinski - Projects</title>
      </Head>
      <StarryBackground stars={stars} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      stars: getStarField(350),
    },
  };
}
