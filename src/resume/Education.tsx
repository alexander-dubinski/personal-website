import { Grid, Avatar, Text } from '@mantine/core';
import { education } from '@/src/data/education';
import { useState } from 'react';
import Image from 'next/image';
import ResumeTimeline from '@/src/resume/ResumeTimeline';
import ResumeTimelineItem from '@/src/resume/ResumeTimelineItem';
import ResumeItemDetails from '@/src/resume/ResumeItemDetails';

export default function Education() {
  const [activeEducation, setActiveEducation] = useState<number>(0);
  const details = education[activeEducation];
  return (
    <Grid>
      <ResumeTimeline active={activeEducation}>
        {education.map(
          ({ school, degree, startYear, endYear, major, image, gpa }, idx) => (
            <ResumeTimelineItem
              onClick={setActiveEducation.bind(null, idx)}
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
                {startYear} - {endYear}
              </Text>
              <Text>GPA: {gpa.toFixed(1)}</Text>
            </ResumeTimelineItem>
          )
        )}
      </ResumeTimeline>
      <ResumeItemDetails
        image={
          <Image
            style={{ borderRadius: '25px' }}
            src={`/${details.image}.png`}
            alt={`${details.school} logo`}
            fill
          />
        }
        description={details.description}
      />
    </Grid>
  );
}
