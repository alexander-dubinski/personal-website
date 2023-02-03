import StarryBackground, {
  StarryBackgroundProps,
} from '@/src/StarryBackground';
import { getStarField } from '@/src/util/stars';
import Head from 'next/head';

interface AboutProps extends StarryBackgroundProps {}
export default function About({ stars }: AboutProps) {
  return (
    <>
      <Head>
        <title>Alexander Dubinski - About</title>
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
