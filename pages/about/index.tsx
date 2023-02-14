import { Box, Text, Title } from '@mantine/core';

import Head from 'next/head';
import Image from 'next/image';

import PageContentBox from '@/src/components/PageContentBox';
import StarryBackground, {
  StarryBackgroundProps,
} from '@/src/components/StarryBackground';
import { getStarField } from '@/src/util/stars';

interface AboutProps extends StarryBackgroundProps {}

export default function About({ stars }: AboutProps) {
  return (
    <>
      <Head>
        <title>Alexander Dubinski - About</title>
      </Head>
      <PageContentBox>
        <Box
          pos="relative"
          pt="33.3333%"
          w="33.3333%"
          display="inline-block"
          mr="1em"
          sx={{
            float: 'left',
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
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAArACsDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAABQQGAwf/xAAlEAABAwMDBAMBAAAAAAAAAAABAAIDBAUREyExEiIjMhQzgVH/xAAYAQEAAwEAAAAAAAAAAAAAAAAFAAQGAv/EACERAAIBAwQDAQAAAAAAAAAAAAABAwIRIgQSISMxMjNB/9oADAMBAAIRAxEAPwDBthfIQACtfZICAFwjt7Q71WgtVIGgbKnrFu1Kt4NLNMqorFYiOmgLxA4tcto2m8fCFutJlp2VmHGRAqd2ecx0Lm1Lnf0pEUzsBJ/CGqdlUKLbhOT1brFOWTIrbCM8Jm2xjIRXUAUpbZBkLPzruQ1X8zQMjGmiLnGMFMRvGmhrrKMFd0/RB1AEIQZOFWIBjhTwuDpUiAMBOVrhBc9WYA+XCQtk+XDdDylX2s9wQmpXajUSrA10cviQV3nwDulY/q/EBeTsVI+ZUF+CSjl6pU013aFnrf8AZ+p9vqE7J+A8/uf/2Q=="
            style={{ borderRadius: '25px' }}
            src="/ProfilePicture.jpg"
            alt="profile"
            sizes="(min-width: 768px) 20vw,
            (win-width: 576px) 33vw,
            100vw"
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
      </PageContentBox>
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
