import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";

import { Banner } from "../components/Banner";
import { Repos } from "../components/Repos";
import { getDataFromLocalStorage } from "../utils/getDataFromLocalStorage";

export const MyRepos = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const reposFromLocalStorage = getDataFromLocalStorage("repos", []);

    setRepos(reposFromLocalStorage);
  }, []);

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
          repos={repos}
          setRepos={setRepos}
        />
      </Stack>
    </Container>
  );
};
