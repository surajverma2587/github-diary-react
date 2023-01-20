import Stack from "react-bootstrap/Stack";

import { Error } from "./Error";
import { RepoCard } from "./RepoCard";

export const Repos = ({
  errorMessage,
  actionControl,
  repos = [],
  setRepos,
}) => {
  return (
    <Stack>
      {repos.length === 0 ? (
        <Error errorMessage={errorMessage} />
      ) : (
        <Stack gap={5}>
          <h1 className="text-light text-center">My Favourites</h1>
          <Stack
            direction="horizontal"
            className="flex-wrap justify-content-around"
          >
            {repos.map((repo) => {
              return (
                <RepoCard
                  key={repo.id}
                  actionControl={actionControl}
                  repo={repo}
                  setRepos={setRepos}
                />
              );
            })}
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};
