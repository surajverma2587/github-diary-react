import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";

import { Banner } from "../components/Banner";
import { Repos } from "../components/Repos";

export const MyRepos = () => {
  return (
    <Container>
      <Stack gap={3}>
        <Banner
          title="My Repositories"
          subTitle="Here is a list of my favourite GitHub repositories"
        />
        <Repos
          errorMessage="You have no repositories in your favourites."
          actionControl="delete"
        />
      </Stack>
    </Container>
  );
};
