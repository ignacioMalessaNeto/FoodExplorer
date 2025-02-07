import { Link } from "react-router-dom";
import { useAuth } from "../../Hooks/auth";
import exit from "../../assets/exit.svg";
import { Container } from "./styles";

// eslint-disable-next-line react/prop-types
export function Logout({className, text}) {
  const { signOut } = useAuth();

  return (
    <Container>
      <Link to={"/"} className={className}>
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button onClick={signOut}>
          <img src={exit} alt="icon for exit" /> {text ? text : ""}
        </button>
      </Link>
    </Container>
  );
}
