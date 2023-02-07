import { Grid, Avatar, Text } from '@mantine/core';
import { useState } from 'react';
import Image from 'next/image';
import ResumeTimeline from '@/src/resume/ResumeTimeline';
import ResumeTimelineItem from '@/src/resume/ResumeTimelineItem';
import ResumeItemDetails from '@/src/resume/ResumeItemDetails';
import { urlForImage } from '@/src/cms/images';

interface EducationProps {
  education: EducationEntry[];
}
export default function Education({ education }: EducationProps) {
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
                  src={urlForImage(image.asset).size(40, 40).url()}
                  radius="xl"
                  alt={image.alt}
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
            src={urlForImage(details.image.asset).url()}
            alt={details.image.alt}
            fill
          />
        }
        description={details.description}
      />
    </Grid>
  );
}
