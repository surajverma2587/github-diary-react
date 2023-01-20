import { useEffect, useState } from "react";
import axios from "axios";
import Stack from "react-bootstrap/Stack";

import { SearchForm } from "../components/SearchForm";
import { Repos } from "../components/Repos";

export const GithubSearch = () => {
  const [url, setUrl] = useState();
  const [repos, setRepos] = useState();

  useEffect(() => {
    if (url) {
      const fetchData = async () => {
        try {
          const { data } = await axios.get(url);

          setRepos(data);
        } catch (error) {
          console.log(error.message);
          setRepos([]);
        }
      };

      fetchData();
    }
  }, [url]);

  return (
    <Stack gap={5}>
      <SearchForm setUrl={setUrl} />
      {repos && (
        <Repos
          repos={repos}
          errorMessage="No repositories found. Please try again."
        />
      )}
    </Stack>
  );
};
