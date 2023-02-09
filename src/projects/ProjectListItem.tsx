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
}: ProjectEntry) {
  return (
    <Accordion.Item value={slug.current}>
      <Accordion.Control>
        <Group>
          <Box>
            <Image
              priority
              style={{ borderRadius: '8px' }}
              src={urlForImage(mainImage.asset).url()}
              alt={mainImage.alt}
              width={148}
              height={74}
            />
          </Box>
          <Box sx={{ color: 'white' }}>
            <Text size="lg" fw="bold">
              {name}
            </Text>
            <Text>Started {startYear}</Text>
            <Box mt="10px">
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
        <Box m="0 0 15px 0">{description}</Box>
        <Link href={`/projects/${slug.current}`}>
          <Button variant="default" color="blue">
            Click Here to See More
          </Button>
        </Link>
      </Accordion.Panel>
    </Accordion.Item>
  );
}
