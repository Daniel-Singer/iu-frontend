import { UnstyledButton } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const Navlink = ({ label, path }: INavlink) => {
  const navigate = useNavigate();
  return (
    <UnstyledButton onClick={() => navigate(`/${path}`)}>
      {label}
    </UnstyledButton>
  );
};

export default Navlink;
