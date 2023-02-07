import { Grid, Box, Text, Card, Badge } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '@/src/cms/images';

export default function ProjectGridItem({
  slug,
  name,
  description,
  mainImage,
  tools,
  startYear,
}: Project) {
  return (
    <Grid.Col xs={12} sm={6}>
      <Link href={`/projects/${slug.current}`}>
        <Card radius="md" p="md" shadow="lg" withBorder>
          <Card.Section>
            <Box pos="relative" pt="50%">
              <Image
                style={{ borderRadius: '8px' }}
                src={urlForImage(mainImage.asset).url()}
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
            <Box mt="10px">
              {tools.map((tool) => (
                <Badge mr="5px" variant="filled" color="blue.6" key={tool}>
                  {tool}
                </Badge>
              ))}
            </Box>
          </Box>
        </Card>
      </Link>
    </Grid.Col>
  );
}
