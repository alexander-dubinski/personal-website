import StarryBackground, {
  Star,
  StarryBackgroundProps,
} from '@/src/StarryBackground';

interface HomeProps extends StarryBackgroundProps {}

export default function Home({ stars }: HomeProps) {
  return <StarryBackground stars={stars} />;
}

export async function getStaticProps() {
  const stars: Star[] = [];
  for (let i = 0; i < 250; i++) {
    const star: Star = {
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      r: `${Math.floor(Math.random() * 8 + 2)}px`,
    };
    stars.push(star);
  }
  return {
    props: {
      stars,
    },
  };
}
