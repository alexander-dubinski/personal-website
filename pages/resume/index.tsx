import StarryBackground, {
  StarryBackgroundProps,
} from '@/src/StarryBackground';
import { getStarField } from '@/src/util/stars';
import Head from 'next/head';

interface ResumeProps extends StarryBackgroundProps {}
export default function Resume({ stars }: ResumeProps) {
  return (
    <>
      <Head>
        <title>Alexander Dubinski - Resume</title>
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
