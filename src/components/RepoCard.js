import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const RepoCard = ({ repo, actionControl }) => {
  return (
    <Card className="repo-card">
      <Card.Body>
        <Card.Title>repo.name</Card.Title>
        <Card.Text>repo.description</Card.Text>
        <Card.Link href="https://github.com/surajverma2587/github-diary-react">
          Repo Link
        </Card.Link>
      </Card.Body>
      <Card.Footer className="text-muted text-center">
        {actionControl === "delete" ? (
          <Button variant="danger">Remove from favourites</Button>
        ) : (
          <Button variant="dark">Add to favourites</Button>
        )}
      </Card.Footer>
    </Card>
  );
};
