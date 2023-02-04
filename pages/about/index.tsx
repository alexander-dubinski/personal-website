import StarryBackground, {
  StarryBackgroundProps,
} from '@/src/StarryBackground';
import { getStarField } from '@/src/util/stars';
import Head from 'next/head';
import { Box, Title, Text } from '@mantine/core';
import Image from 'next/image';

interface AboutProps extends StarryBackgroundProps {}
export default function About({ stars }: AboutProps) {
  return (
    <>
      <Head>
        <title>Alexander Dubinski - About</title>
      </Head>
      <Box
        sx={(theme) => ({
          position: 'absolute',
          top: '100px',
          left: '50%',
          maxWidth: '960px',
          width: '100%',
          height: 'calc(100% - 200px)',
          transform: 'translateX(-50%)',
          backgroundColor: theme.colors.alphaDarkBlue[8],
          borderRadius: '15px',
          zIndex: 1,
          padding: '1em',
          color: 'white',
          overflowY: 'auto',
          '@media (max-width: 620px)': {
            height: 'calc(100% - 100px)',
          },
        })}
      >
        <Box
          sx={{
            position: 'relative',
            paddingTop: '33.3333%',
            width: '33.3333%',
            display: 'inline-block',
            float: 'left',
            marginRight: '1em',
            '@media (max-width: 620px)': {
              paddingTop: '50%',
              width: '50%',
            },
            '@media (max-width: 400px)': {
              paddingTop: '60%',
              width: '60%',
            },
          }}
        >
          <Image
            priority
            style={{ borderRadius: '25px' }}
            src="/ProfilePicture.jpg"
            alt="profile"
            fill
          />
        </Box>
        <Title color="blue.2" align="center" underline>
          About
        </Title>
        <br />
        <Text size="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          lobortis, odio a condimentum tempus, augue lorem vestibulum velit, non
          iaculis nulla turpis in nisi. Cras condimentum lectus vel malesuada
          rutrum. Aliquam non laoreet eros, at laoreet metus. Nulla a justo
          aliquam dolor interdum dapibus. Nam ut mi sed tortor dictum molestie.
          Cras sodales justo nisl, eu fermentum sem pretium quis. Quisque eget
          ornare lacus, id aliquet dolor. Pellentesque sem nulla, maximus eu
          ligula et, imperdiet tempor nisi. Donec nec laoreet est. Suspendisse
          potenti. Maecenas efficitur quam leo. Maecenas sed magna felis.
          Aliquam dignissim, enim et porttitor bibendum, purus augue maximus
          velit, et consectetur odio felis vel ante. Nulla eget neque et mauris
          hendrerit fermentum eget sed libero.
        </Text>
        <br />
        <Text size="lg">
          Phasellus rutrum tincidunt imperdiet. Nulla porta mauris fringilla
          urna auctor tempus. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos. Donec auctor mi ac odio
          molestie finibus. Mauris sed accumsan dolor, vel tempor velit. Sed sed
          urna ultricies, aliquet justo a, ultrices arcu. Fusce vitae
          scelerisque lacus, ac sagittis lectus. Nullam eu sapien vitae enim
          vehicula gravida. Fusce in odio eu lorem pretium cursus. Nulla
          dignissim odio enim, eu sagittis metus imperdiet eget. Maecenas ut
          condimentum quam. Phasellus quis sodales arcu, a tincidunt libero.
          Aliquam posuere, neque quis vehicula venenatis, augue lorem tristique
          augue, ut hendrerit sapien sem vitae erat. Ut malesuada elementum
          justo, ut interdum nisi finibus eget.
        </Text>
        <br />
        <Text size="lg">
          Donec auctor et neque id commodo. Morbi sapien augue, commodo non
          consequat malesuada, facilisis at justo. Donec quam turpis, consequat
          vitae suscipit et, feugiat a orci. Suspendisse tempus est sit amet
          efficitur facilisis. In neque libero, placerat sed porttitor et,
          commodo nec eros. In eleifend lectus nec ante rhoncus faucibus. Donec
          efficitur, leo a fermentum aliquet, sapien mauris vestibulum ligula,
          sit amet varius turpis arcu at lacus. Nullam finibus luctus lorem ac
          ultrices. Mauris vel varius tellus, et porttitor leo.
        </Text>
        <br />
        <Text size="lg">
          Ut quis dui consectetur justo cursus tincidunt. Phasellus ut posuere
          dolor. Mauris tempor pretium enim, vel accumsan neque rhoncus vel.
          Proin malesuada congue euismod. Suspendisse massa ante, sodales
          eleifend risus auctor, gravida sagittis risus. Vestibulum eget varius
          turpis. Maecenas eu ex eget purus interdum pharetra a a leo. Aliquam
          quis aliquet neque. Curabitur interdum lacinia luctus.
        </Text>
      </Box>
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
