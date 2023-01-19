import Alert from "react-bootstrap/Alert";

export const Error = ({ errorMessage }) => {
  return <Alert variant="danger">{errorMessage}</Alert>;
};
