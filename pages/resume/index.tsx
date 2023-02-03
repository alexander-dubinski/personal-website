import StarryBackground, {
  StarryBackgroundProps,
} from '@/src/StarryBackground';
import { getStarField } from '@/src/util/stars';

interface ResumeProps extends StarryBackgroundProps {}
export default function Resume({ stars }: ResumeProps) {
  return <StarryBackground stars={stars} />;
}

export async function getStaticProps() {
  return {
    props: {
      stars: getStarField(350),
    },
  };
}
