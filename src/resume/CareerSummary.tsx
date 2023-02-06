import { Grid, Avatar, Text } from '@mantine/core';
import { useState } from 'react';
import Image from 'next/image';
import { careerSummary } from '@/src/data/career';
import ResumeTimeline from '@/src/resume/ResumeTimeline';
import ResumeTimelineItem from '@/src/resume/ResumeTimelineItem';
import ResumeItemDetails from '@/src/resume/ResumeItemDetails';

export default function CareerSummary() {
  const [activeCareer, setActiveCareer] = useState<number>(0);
  const details = careerSummary[activeCareer];
  return (
    <Grid>
      <ResumeTimeline active={activeCareer}>
        {careerSummary.map(
          (
            { company, title, startYear, endYear, department, team, image },
            idx
          ) => (
            <ResumeTimelineItem
              onClick={setActiveCareer.bind(null, idx)}
              key={`${company}_${title}`}
              title={title}
              bullet={
                <Avatar
                  onClick={setActiveCareer.bind(null, idx)}
                  src={`${image}_tiny.png`}
                  radius="xl"
                  size={activeCareer === idx ? 40 : 22}
                />
              }
            >
              <Text>{company}</Text>
              {department && team && (
                <Text>
                  {department} - {team}
                </Text>
              )}
              <Text>
                {startYear} - {endYear || 'Present'}
              </Text>
            </ResumeTimelineItem>
          )
        )}
      </ResumeTimeline>
      <ResumeItemDetails
        image={
          <Image
            style={{ borderRadius: '25px' }}
            src={`/${details.image}.png`}
            alt={`${details.company} logo`}
            fill
          />
        }
        description={details.description}
      />
    </Grid>
  );
}
