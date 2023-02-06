import { Box, Grid, Text } from '@mantine/core';
import { ReactNode } from 'react';

interface ResumeItemDetailsProps {
  image: ReactNode;
  description: string;
}

export default function ResumeItemDetails({
  image,
  description,
}: ResumeItemDetailsProps) {
  return (
    <Grid.Col xs={12} sm={6}>
      <Text
        align="center"
        size="xl"
        fw="bold"
        color="blue.2"
        mb="20px"
        underline
      >
        Details
      </Text>
      <Box
        sx={{
          position: 'relative',
          paddingTop: '50%',
          width: '50%',
          display: 'inline-block',
          float: 'right',
          marginRight: '1em',
        }}
      >
        {image}
      </Box>
      <Text size="lg">{description}</Text>
    </Grid.Col>
  );
}
