import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";

export const SearchForm = () => {
  return (
    <Form className="border p-4 rounded">
      <Stack gap={3}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter GitHub username" />

          {/* show when error is true */}
          <Form.Text className="text-danger">
            Please enter a valid GitHub username.
          </Form.Text>
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
