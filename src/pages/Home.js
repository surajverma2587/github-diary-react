import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";

import { Banner } from "../components/Banner";
import { GithubSearch } from "../containers/GithubSearch";

export const Home = () => {
  return (
    <Container>
      <Stack gap={3}>
        <Banner
          title="GitHub Diary"
          subTitle="A GitHub search tool to save your favourite repositories"
        />
        <GithubSearch />
      </Stack>
    </Container>
  );
};
