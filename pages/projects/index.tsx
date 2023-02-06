import StarryBackground, {
  StarryBackgroundProps,
} from '@/src/StarryBackground';
import { getStarField } from '@/src/util/stars';
import Head from 'next/head';
import PageContentBox from '@/src/PageContentBox';
import { projects } from '@/src/data/projects';
import ProjectListItem from '@/src/projects/ProjectListItem';
import { ChangeEvent, useState } from 'react';
import { Accordion, ActionIcon, Grid, TextInput } from '@mantine/core';
import DownChevron from '@/src/icons/DownChevron.svg';
import ListView from '@/src/icons/ListView.svg';
import GridView from '@/src/icons/GridView.svg';
import Search from '@/src/icons/Search.svg';
import ProjectGridItem from '@/src/projects/ProjectGridItem';
import { projectsFuse } from '@/src/search/search';

enum ProjectView {
  List,
  Grid,
}

interface ProjectsProps extends StarryBackgroundProps {}
export default function Projects({ stars }: ProjectsProps) {
  const [currentProjects, setCurrentProjects] =
    useState<ProjectContent[]>(projects);
  const [projectView, setProjectView] = useState<ProjectView>(ProjectView.List);
  const [search, setSearch] = useState<string>('');
  const Wrapper = projectView === ProjectView.List ? Accordion : Grid;

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    if (!value) {
      setSearch(value);
      setCurrentProjects(projects);
      return;
    }
    setSearch(value);
    setCurrentProjects(projectsFuse.search(value).map((res) => res.item));
  };

  return (
    <>
      <Head>
        <title>Alexander Dubinski - Projects</title>
      </Head>
      <PageContentBox>
        <Grid>
          <Grid.Col xs={12} sm={4}>
            <ActionIcon
              onClick={setProjectView.bind(null, ProjectView.List)}
              mr="10px"
              display="inline-block"
              color="blue"
              size={42}
              variant={projectView === ProjectView.List ? 'filled' : 'light'}
            >
              <ListView />
            </ActionIcon>
            <ActionIcon
              onClick={setProjectView.bind(null, ProjectView.Grid)}
              display="inline-block"
              color="blue"
              size={42}
              variant={projectView === ProjectView.Grid ? 'filled' : 'light'}
            >
              <GridView />
            </ActionIcon>
          </Grid.Col>
          <Grid.Col xs={12} sm={8}>
            <TextInput
              maw="300px"
              m="auto"
              placeholder="Search..."
              rightSection={<Search />}
              value={search}
              onChange={handleSearchChange}
            />
          </Grid.Col>
        </Grid>
        <Wrapper chevron={<DownChevron />} chevronSize={40} variant="filled">
          {currentProjects.map((project) =>
            projectView === ProjectView.List ? (
              <ProjectListItem key={project.id} {...project} />
            ) : (
              <ProjectGridItem key={project.id} {...project} />
            )
          )}
        </Wrapper>
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
