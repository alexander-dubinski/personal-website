import StarryBackground, {
  StarryBackgroundProps,
} from '@/src/StarryBackground';
import { getStarField } from '@/src/util/stars';

interface AboutProps extends StarryBackgroundProps {}
export default function About({ stars }: AboutProps) {
  return <StarryBackground stars={stars} />;
}

export async function getStaticProps() {
  return {
    props: {
      stars: getStarField(350),
    },
  };
}
