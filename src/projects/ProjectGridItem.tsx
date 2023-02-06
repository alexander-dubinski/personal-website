import { Grid, Box, Text, Card } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectGridItem({
  id,
  name,
  description,
  mainImage,
  tools,
  startYear,
}: ProjectContent) {
  return (
    <Grid.Col xs={12} sm={6}>
      <Link href={`/projects/${id}`}>
        <Card radius="md" p="md" shadow="lg" withBorder>
          <Card.Section>
            <Box pos="relative" pt="50%">
              <Image
                style={{ borderRadius: '8px' }}
                src={mainImage.url}
                alt={mainImage.alt}
                fill
              />
            </Box>
          </Card.Section>
          <Box mt="10px" sx={{ color: 'white' }}>
            <Text size="lg" fw="bold">
              {name}
            </Text>
            <Text>Started {startYear}</Text>
            <Text>{description}</Text>
            <Text color="dimmed">Tools: {tools.join(', ')}</Text>
          </Box>
        </Card>
      </Link>
    </Grid.Col>
  );
}
