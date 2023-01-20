import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { getDataFromLocalStorage } from "../utils/getDataFromLocalStorage";

export const RepoCard = ({ repo, actionControl, setRepos }) => {
  const repos = getDataFromLocalStorage("repos", []);

  const [saved, setSaved] = useState(repos.some((each) => each.id === repo.id));

  const handleOnClickAdd = () => {
    if (!saved) {
      const repos = getDataFromLocalStorage("repos", []);

      repos.push(repo);

      localStorage.setItem("repos", JSON.stringify(repos));

      setSaved(true);
    }
  };

  const handleOnClickRemove = () => {
    const repos = getDataFromLocalStorage("repos", []);

    const newRepos = repos.filter((each) => {
      return each.id !== repo.id;
    });

    localStorage.setItem("repos", JSON.stringify(newRepos));

    setRepos(newRepos);
  };

  return (
    <Card className="repo-card">
      <Card.Body>
        <Card.Title>{repo.name}</Card.Title>
        <Card.Text>{repo.description}</Card.Text>
        <Card.Link href={repo.html_url} target="_blank">
          Repo Link
        </Card.Link>
      </Card.Body>
      <Card.Footer className="text-muted text-center">
        {actionControl === "delete" ? (
          <Button variant="danger" onClick={handleOnClickRemove}>
            Remove from favourites
          </Button>
        ) : (
          <Button
            variant={saved ? "success" : "dark"}
            onClick={handleOnClickAdd}
          >
            {saved ? (
              <i className="fa-solid fa-check me-2" />
            ) : (
              <i className="fa-solid fa-plus me-2" />
            )}{" "}
            Add to favourites
          </Button>
        )}
      </Card.Footer>
    </Card>
  );
};
