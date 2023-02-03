import StarryBackground, {
  StarryBackgroundProps,
} from '@/src/StarryBackground';
import { getStarField } from '@/src/util/stars';

interface ProjectsProps extends StarryBackgroundProps {}
export default function Projects({ stars }: ProjectsProps) {
  return <StarryBackground stars={stars} />;
}

export async function getStaticProps() {
  return {
    props: {
      stars: getStarField(350),
    },
  };
}
