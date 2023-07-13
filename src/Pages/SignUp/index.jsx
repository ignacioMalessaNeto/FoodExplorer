import { Box } from '../../Components/Box';
import { Link, useNavigate  } from 'react-router-dom';
import {useState} from "react";
import { InputAuth } from '../../Components/InputAuth';

import { api } from '../../Services/api';

import { Container, Form } from './styles';

import foodExplorerLogo from '../../assets/foodExplorerLogo.png';

export function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [is_admin, setIs_admin] = useState(false);
    const navigate = useNavigate();

    
    function handleSignUp(){
        if(!name || !email || !password){
            return alert("Preencha todos os campos!")
        }
       
        if(password < 6){
            return alert("A senha tem que ter no mínimo 6 caracteres")
        }


        api.post("/users", { name, email, password, is_admin})
        .then(()=>{
            console.log("chegou aqui")
            navigate("/")
            return alert("Usuário cadastrado com sucesso!")
        })
        .catch(error =>{
            if(error.response){
                alert(error.response.data.message);
            }else {
                alert("Não foi possível cadastrar");
            }
        })
    }
    return(
        <Container>
            <div>
                <img src={foodExplorerLogo} alt="Imagem do logo" />
            </div>
            <Form>
                <h1>Crie sua conta</h1>
                <Box>
                    <label htmlFor="Email">Seu nome</label>
                    <InputAuth 
                    placeholder='Exemplo: Maria da Silva'
                    onChange={e=> setName(e.target.value)}
                    type="text" 
                    />
                </Box>

                <Box>
                    <label htmlFor="Email">Email</label>
                    <InputAuth 
                    placeholder='Exemplo: exemplo@exemplo.com.br' 
                    type="email"
                    onChange={e=> setEmail(e.target.value)} 
                    />
                </Box>
                <Box>
                    <label htmlFor="password">Senha</label>
                    <InputAuth 
                    placeholder='No mínimo 6 caracteres' 
                    type="password"
                    onChange={e=> setPassword(e.target.value)}
                    />
                </Box>
                <button 
                className='buttonCreateLogin'
                onClick={handleSignUp}
                type="button"
                >
                    Criar Conta
                </button>
                <Link className='buttonLogin' to="/"> Já tenho uma conta </Link>
            </Form>
        </Container>
    )
}