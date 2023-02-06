import { Accordion, Group, Box, Text, Button } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectListItem({
  id,
  name,
  description,
  mainImage,
  tools,
  startYear,
}: ProjectContent) {
  return (
    <Accordion.Item value={id}>
      <Accordion.Control>
        <Group noWrap>
          <Box>
            <Image
              style={{ borderRadius: '8px' }}
              src={mainImage.url}
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
            <Text color="dimmed">Tools: {tools.join(', ')}</Text>
          </Box>
        </Group>
      </Accordion.Control>
      <Accordion.Panel>
        <Box m="0 0 15px 0">{description}</Box>
        <Link href={`/projects/${id}`}>
          <Button variant="default" color="blue">
            Click Here to See More
          </Button>
        </Link>
      </Accordion.Panel>
    </Accordion.Item>
  );
}
