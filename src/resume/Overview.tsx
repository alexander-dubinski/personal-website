import { Grid, Text } from '@mantine/core';

export default function Overview() {
  return (
    <>
      <Grid>
        <Grid.Col xs={12} sm={6} md={4}>
          <Text color="blue.1" size="xl" align="center">
            Introduction
          </Text>
          <Text pt="8px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            lobortis, odio a condimentum tempus, augue lorem vestibulum velit,
            non iaculis nulla turpis in nisi. Cras condimentum lectus vel
            malesuada rutrum. Aliquam non laoreet eros, at laoreet metus. Nulla
            a justo aliquam dolor interdum dapibus. Nam ut mi sed tortor dictum
            molestie. Cras sodales justo nisl, eu fermentum sem pretium quis.
            Quisque eget ornare lacus, id aliquet dolor. Pellentesque sem nulla,
            maximus eu ligula et, imperdiet tempor nisi. Donec nec laoreet est.
            Suspendisse potenti. Maecenas efficitur quam leo. Maecenas sed magna
            felis. Aliquam dignissim, enim et porttitor bibendum, purus augue
            maximus velit, et consectetur odio felis vel ante. Nulla eget neque
            et mauris hendrerit fermentum eget sed libero.
          </Text>
        </Grid.Col>
        <Grid.Col xs={12} sm={6} md={4}>
          <Text color="blue.1" size="xl" align="center">
            Schools
          </Text>
        </Grid.Col>
        <Grid.Col xs={12} sm={6} md={4}>
          <Text color="blue.1" size="xl" align="center">
            Career
          </Text>
        </Grid.Col>
      </Grid>
    </>
  );
}
