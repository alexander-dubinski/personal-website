import { Grid, Text, Timeline, TimelineItem, Avatar } from '@mantine/core';
import { education } from '@/src/data/education';
import { careerSummary } from '@/src/data/career';

export default function Overview() {
  return (
    <Grid>
      <Grid.Col xs={12}>
        <Text color="blue.1" size="xl" align="center" fw="bold">
          Introduction
        </Text>
        <Text pt="8px">
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
      </Grid.Col>
      <Grid.Col xs={12} sm={6}>
        <Text color="blue.1" size="xl" align="center" mb="15px" fw="bold">
          Education
        </Text>
        <Timeline active={education.length}>
          {education.map(({ school, degree, major, image }) => (
            <TimelineItem
              sx={{ color: 'white' }}
              title={`${major} - ${degree}`}
              key={`${school}_${degree}`}
              bullet={
                <Avatar src={`/${image}_tiny.png`} size={24} radius="xl" />
              }
            >
              <Text>{school}</Text>
            </TimelineItem>
          ))}
        </Timeline>
      </Grid.Col>
      <Grid.Col xs={12} sm={6}>
        <Text color="blue.1" size="xl" align="center" mb="15px" fw="bold">
          Career
        </Text>
        <Timeline active={careerSummary.length}>
          {careerSummary.map(({ company, title, image }) => (
            <TimelineItem
              sx={{ color: 'white' }}
              title={title}
              key={`${company}_${title}`}
              bullet={
                <Avatar src={`/${image}_tiny.png`} size={24} radius="xl" />
              }
            >
              <Text>{company}</Text>
            </TimelineItem>
          ))}
        </Timeline>
      </Grid.Col>
    </Grid>
  );
}
