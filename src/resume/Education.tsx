import { Grid, Timeline, TimelineItem, Avatar, Text, Box } from '@mantine/core';
import { education } from '@/src/data/education';
import { useState } from 'react';
import Image from 'next/image';

export default function Education() {
  const [activeEducation, setActiveEducation] = useState<number>(0);
  const details = education[activeEducation];
  return (
    <Grid>
      <Grid.Col xs={12} sm={6}>
        <Text align="center" size="xl" fw="bold" color="blue.2" mb="20px">
          Timeline (click for more details)
        </Text>
        <Timeline active={activeEducation} ml="10px">
          {education.map(
            (
              { school, degree, start_year, end_year, major, image, gpa },
              idx
            ) => (
              <TimelineItem
                onClick={setActiveEducation.bind(null, idx)}
                sx={(theme) => ({
                  color: 'white',
                  borderRadius: '10px',
                  '&:hover': {
                    cursor: 'pointer',
                    backgroundColor: theme.colors.blue[9],
                  },
                })}
                key={`${school}_${degree}`}
                title={`${major} - ${degree}`}
                bullet={
                  <Avatar
                    onClick={setActiveEducation.bind(null, idx)}
                    src={`${image}_tiny.png`}
                    radius="xl"
                    size={activeEducation === idx ? 40 : 22}
                  />
                }
              >
                <Text>{school}</Text>
                <Text>
                  {start_year} - {end_year}
                </Text>
                <Text>GPA: {gpa.toFixed(1)}</Text>
              </TimelineItem>
            )
          )}
        </Timeline>
      </Grid.Col>
      <Grid.Col xs={12} sm={6}>
        <Text align="center" size="xl" fw="bold" color="blue.2" mb="20px">
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
          <Image
            style={{ borderRadius: '25px' }}
            src={`/${details.image}_tiny.png`}
            alt={`${details.school} logo`}
            fill
          />
        </Box>
        <Text size="lg">{details.description}</Text>
      </Grid.Col>
    </Grid>
  );
}
