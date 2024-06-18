import { Link } from "react-router-dom";
import { useAuth } from "../../Hooks/auth";
import exit from "../../assets/exit.svg";
import { Container } from './styles';

export function Logout(className){
  const { signOut } = useAuth();

  return(
    <Container>
    <Link to={"/"} className={className}>
          <button onClick={signOut}>
            <img src={exit} alt="icon for exit" />
          </button>
    </Link>
    </Container>
  )
}

