import { Carousel } from '@mantine/carousel';
import { Accordion, Badge, Box, Button, Group, Text } from '@mantine/core';

import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '@/src/cms/images';
import { ProjectEntry } from '@/src/types/project';

export default function ProjectListItem({
  slug,
  name,
  description,
  mainImage,
  tools,
  startYear,
  images,
}: ProjectEntry) {
  return (
    <Accordion.Item
      value={slug.current}
      sx={(theme) => ({ backgroundColor: theme.colors.dark[6] })}
    >
      <Accordion.Control>
        <Group>
          <Box>
            <Image
              priority
              style={{ borderRadius: '8px' }}
              src={urlForImage(mainImage.asset).url()}
              alt={mainImage.alt}
              width={260}
              height={130}
            />
          </Box>
          <Box sx={{ color: 'white' }}>
            <Text size="lg" fw="bold">
              {name}
            </Text>
            <Text color="blue.2">Started {startYear}</Text>
            <Box mt="8px">
              {tools.map((tool) => (
                <Badge mr="5px" variant="filled" color="blue.6" key={tool}>
                  {tool}
                </Badge>
              ))}
            </Box>
          </Box>
        </Group>
      </Accordion.Control>
      <Accordion.Panel>
        <Box m="-10px 0 15px 0">{description}</Box>
        {images?.length && (
          <Carousel
            height={225}
            slideSize="33.333333%"
            slideGap="sm"
            breakpoints={[
              { maxWidth: 'md', slideSize: '50%' },
              { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
            ]}
            controlSize={34}
            align="start"
          >
            {images.map((image, idx) => (
              <Carousel.Slide key={`${image.asset._ref}_${idx}`}>
                <Box
                  pos="relative"
                  h="225px"
                  w="100%"
                  sx={{ overflow: 'hidden' }}
                >
                  <Image
                    src={urlForImage(image.asset).height(200).url()}
                    alt={image.alt}
                    sizes="(min-width: 768px) 25vw,
                    (win-width: 576px) 33vw,
                    100vw"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              </Carousel.Slide>
            ))}
          </Carousel>
        )}
        <Box mt="15px" ta="right">
          <Link href={`/projects/${slug.current}`}>
            <Button
              variant="default"
              color="blue.1"
              size="lg"
              sx={(theme) => ({
                color: theme.colors.blue[1],
              })}
            >
              {'Click Here to See More >>>'}
            </Button>
          </Link>
        </Box>
      </Accordion.Panel>
    </Accordion.Item>
  );
}
