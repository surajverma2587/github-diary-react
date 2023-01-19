import Stack from "react-bootstrap/Stack";

export const Banner = ({ title, subTitle }) => {
  return (
    <Stack className="banner" gap={5}>
      <div className="title">{title}</div>
      <div className="sub-title">{subTitle}</div>
    </Stack>
  );
};
