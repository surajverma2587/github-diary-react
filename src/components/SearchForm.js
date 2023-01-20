import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";

export const SearchForm = ({ setUrl }) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);

  const handleOnChange = (event) => {
    setUsername(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (!username) {
      setError(true);
    } else {
      setError(false);
      setUrl(`https://api.github.com/users/${username}/repos`);
    }
  };

  return (
    <Form className="border p-4 rounded" onSubmit={handleOnSubmit}>
      <Stack gap={3}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter GitHub username"
            onChange={handleOnChange}
            value={username}
          />
          {error && (
            <Form.Text className="text-danger">
              Please enter a valid GitHub username.
            </Form.Text>
          )}
        </Form.Group>

        <Stack className="d-grid gap-2 col-6 mx-auto">
          <Button variant="success" type="submit">
            Search
          </Button>
        </Stack>
      </Stack>
    </Form>
  );
};
