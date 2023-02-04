import StarryBackground, {
  StarryBackgroundProps,
} from '@/src/StarryBackground';
import { getStarField } from '@/src/util/stars';
import Head from 'next/head';
import { Tabs } from '@mantine/core';
import PageContentBox from '@/src/PageContentBox';

interface ResumeProps extends StarryBackgroundProps {}
export default function Resume({ stars }: ResumeProps) {
  return (
    <>
      <Head>
        <title>Alexander Dubinski - Resume</title>
      </Head>
      <PageContentBox>
        <Tabs variant="pills" defaultValue="overview">
          <Tabs.List>
            <Tabs.Tab value="overview">Overview</Tabs.Tab>
            <Tabs.Tab value="education">Education</Tabs.Tab>
            <Tabs.Tab value="career_summary">Career Summary</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="overview">Overview</Tabs.Panel>
          <Tabs.Panel value="education">Education</Tabs.Panel>
          <Tabs.Panel value="career_summary">Career Summary</Tabs.Panel>
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
