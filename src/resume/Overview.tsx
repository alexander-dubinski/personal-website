import { Avatar, Grid, Text, Timeline, TimelineItem } from '@mantine/core';

import { urlForImage } from '@/src/cms/images';

interface OverviewProps {
  career: CareerEntry[];
  education: EducationEntry[];
}

export default function Overview({ career, education }: OverviewProps) {
  return (
    <Grid>
      <Grid.Col xs={12}>
        <Text color="blue.1" size="xl" align="center" fw="bold" underline>
          Introduction
        </Text>
        <Text pt="8px" sx={{ textIndent: '30px' }}>
          If I needed to describe myself in a single sentence or phrase, I would
          say <b>life long learner</b>. Above all other descriptions or
          qualities I might claim to have, the non-stop pursuit of knowledge and
          new skills is by far the most important and is the quality I am most
          sure of. I think you will find this description of mt is accurate
          after looking at my educational and career history.
        </Text>
        <Text pt="8px" sx={{ textIndent: '30px' }}>
          In terms of education, I began my academic journey while serving in
          the military, pursuing a degree in political science. Soon after I
          completed an undergraduate degree in Economics and then in computer
          science. My academic curiosity was not satisfied and so I then
          achieved a master&#39;s degree in computer and also an MBA from the
          University of Illinois.
        </Text>
        <Text pt="8px" sx={{ textIndent: '30px' }}>
          For my career, after high school I joined the U.S. Marine Corps as a
          military police investigator. My time in the military gave me some of
          my most cherished and important lessons about leadership, integrity
          and personal responsibility. After the military I entered the civilian
          workforce as a software engineer, working in Japan for the largest
          e-commerce company in the region. I later found my interest lied in
          the emerging industry of autonomous driving technology and so I moved
          to a company which was working on such technology and worked as a
          senior software engineer in the mapping department. I was later
          promoted to engineering manager where I am today. Stay tuned for more
          updates!
        </Text>
      </Grid.Col>
      <Grid.Col xs={12} sm={6}>
        <Text
          color="blue.1"
          size="xl"
          align="center"
          mb="15px"
          fw="bold"
          underline
        >
          Education
        </Text>
        <Timeline active={education.length}>
          {education.map(({ school, degree, major, image }) => (
            <TimelineItem
              sx={{ color: 'white' }}
              title={`${major} - ${degree}`}
              key={`${school}_${degree}`}
              bullet={
                <Avatar
                  src={urlForImage(image.asset).size(24, 24).url()}
                  size={24}
                  alt={image.alt}
                  radius="xl"
                />
              }
            >
              <Text>{school}</Text>
            </TimelineItem>
          ))}
        </Timeline>
      </Grid.Col>
      <Grid.Col xs={12} sm={6}>
        <Text
          color="blue.1"
          size="xl"
          align="center"
          mb="15px"
          fw="bold"
          underline
        >
          Career
        </Text>
        <Timeline active={career.length}>
          {career.map(({ company, title, image }) => (
            <TimelineItem
              sx={{ color: 'white' }}
              title={title}
              key={`${company}_${title}`}
              bullet={
                <Avatar
                  src={urlForImage(image.asset).size(24, 24).url()}
                  size={24}
                  alt={image.alt}
                  radius="xl"
                />
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
