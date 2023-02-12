import { Carousel } from '@mantine/carousel';
import { Badge, Box, Button, Card, Grid, Text } from '@mantine/core';

import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '@/src/cms/images';
import { ProjectEntry } from '@/src/types/project';

export default function ProjectGridItem({
  slug,
  name,
  description,
  mainImage,
  tools,
  startYear,
  images,
}: ProjectEntry) {
  return (
    <Grid.Col xs={12} sm={6}>
      <Card radius="md" p="md" shadow="lg" withBorder>
        <Card.Section>
          <Box pos="relative" pt="50%">
            <Carousel
              withControls={!!(images && images.length)}
              height="100%"
              h="100%"
              w="100%"
              pos="absolute"
              top="0"
              left="0"
              controlSize={34}
            >
              <Carousel.Slide>
                <Image
                  placeholder="blur"
                  blurDataURL={mainImage.asset.metadata?.lqip}
                  sizes="(min-width: 768px) 50vw,
                  (win-width: 576px) 75vw,
                  100vw"
                  style={{ borderRadius: '8px', objectFit: 'cover' }}
                  src={urlForImage(mainImage.asset).url()}
                  alt={mainImage.alt}
                  fill
                />
              </Carousel.Slide>
              {images?.map((image, idx) => (
                <Carousel.Slide key={`${image.asset._ref}_${idx}`}>
                  <Image
                    placeholder="blur"
                    blurDataURL={image.asset.metadata?.lqip}
                    sizes="(min-width: 768px) 50vw,
                    (win-width: 576px) 75vw,
                    100vw"
                    style={{ borderRadius: '8px', objectFit: 'cover' }}
                    src={urlForImage(image.asset).url()}
                    alt={image.alt}
                    fill
                  />
                </Carousel.Slide>
              ))}
            </Carousel>
          </Box>
        </Card.Section>
        <Box mt="10px" sx={{ color: 'white' }}>
          <Text size="lg" fw="bold">
            {name}
          </Text>
          <Text color="blue.3">Started {startYear}</Text>
          <Box mt="5px">
            {tools.map((tool) => (
              <Badge mr="5px" variant="filled" color="blue.6" key={tool}>
                {tool}
              </Badge>
            ))}
          </Box>
          <Text mt="10px">{description}</Text>
          <Box ta="right" mt="10px">
            <Link href={`/projects/${slug.current}`}>
              <Button
                variant="default"
                color="blue.1"
                size="md"
                sx={(theme) => ({
                  color: theme.colors.blue[1],
                })}
              >
                {'Click Here to See More >>>'}
              </Button>
            </Link>
          </Box>
        </Box>
      </Card>
    </Grid.Col>
  );
}
