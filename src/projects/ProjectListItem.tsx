import { Accordion, Group, Box, Text, Button, Badge } from '@mantine/core';
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
        <Group>
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
        <Link href={`/projects/${id}`}>
          <Button variant="default" color="blue">
            Click Here to See More
          </Button>
        </Link>
      </Accordion.Panel>
    </Accordion.Item>
  );
}
