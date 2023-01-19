import Stack from "react-bootstrap/Stack";

import { SearchForm } from "../components/SearchForm";
import { Repos } from "../components/Repos";

export const GithubSearch = () => {
  return (
    <Stack gap={5}>
      <SearchForm />
      <Repos errorMessage="No repositories found. Please try again." />
    </Stack>
  );
};
