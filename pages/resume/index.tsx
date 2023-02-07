import StarryBackground, {
  StarryBackgroundProps,
} from '@/src/components/StarryBackground';
import { getStarField } from '@/src/util/stars';
import Head from 'next/head';
import { Tabs, Box } from '@mantine/core';
import PageContentBox from '@/src/components/PageContentBox';
import ResumeOverview from '@/src/icons/ResumeOverview.svg';
import School from '@/src/icons/School.svg';
import Work from '@/src/icons/Work.svg';
import { ReactNode } from 'react';
import Overview from '@/src/resume/Overview';
import Education from '@/src/resume/Education';
import CareerSummary from '@/src/resume/CareerSummary';

interface Tab {
  label: string;
  value: string;
  icon: ReactNode;
  content: ReactNode;
}

const tabs: Tab[] = [
  {
    label: 'Overview',
    value: 'overview',
    icon: <ResumeOverview />,
    content: <Overview />,
  },
  {
    label: 'Education',
    value: 'education',
    icon: <School />,
    content: <Education />,
  },
  {
    label: 'Career Summary',
    value: 'career_summary',
    icon: <Work />,
    content: <CareerSummary />,
  },
];

interface ResumeProps extends StarryBackgroundProps {}
export default function Resume({ stars }: ResumeProps) {
  return (
    <>
      <Head>
        <title>Alexander Dubinski - Resume</title>
      </Head>
      <PageContentBox>
        <Tabs variant="pills" defaultValue="overview">
          <Tabs.List position="center" grow>
            {tabs.map(({ label, value, icon }) => (
              <Tabs.Tab
                key={value}
                value={value}
                sx={{ fontWeight: 'bold', fontSize: '20px', color: 'white' }}
                icon={icon}
              >
                {label}
              </Tabs.Tab>
            ))}
          </Tabs.List>
          {tabs.map(({ value, content }) => (
            <Tabs.Panel key={value} value={value}>
              <Box pt="20px">{content}</Box>
            </Tabs.Panel>
          ))}
        </Tabs>
      </PageContentBox>
      <StarryBackground stars={stars} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      stars: getStarField(350),
    },
  };
}
