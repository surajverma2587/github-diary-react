import Stack from "react-bootstrap/Stack";

import { Error } from "./Error";
import { RepoCard } from "./RepoCard";

export const Repos = ({ errorMessage, actionControl }) => {
  return (
    <Stack>
      <Error errorMessage={errorMessage} />
      <Stack gap={5}>
        <h1 className="text-light text-center">My Favourites</h1>
        <Stack
          direction="horizontal"
          className="flex-wrap justify-content-around"
        >
          <RepoCard actionControl={actionControl} />
          <RepoCard actionControl={actionControl} />
          <RepoCard actionControl={actionControl} />
          <RepoCard actionControl={actionControl} />
          <RepoCard actionControl={actionControl} />
          <RepoCard actionControl={actionControl} />
        </Stack>
      </Stack>
    </Stack>
  );
};
