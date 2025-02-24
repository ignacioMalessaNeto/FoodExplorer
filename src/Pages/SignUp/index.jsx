import { Box } from '../../Components/Box';
import { Link, useNavigate  } from 'react-router-dom';
import {useState} from "react";
import { InputAuth } from '../../Components/InputAuth';
import { TbEye} from 'react-icons/tb';


import { api } from '../../Services/api';

import { Container, Form } from './styles';

import foodExplorerLogo from '../../assets/foodExplorerLogo.png';

export function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [is_admin] = useState(false);
    const navigate = useNavigate();

    
    function handleSignUp(){

        if (password.length < 6) {
           return alert("A senha tem que ter no mínimo 6 caracteres");
        }

        if(!name || !email || !password){
            return alert("Preencha todos os campos!")
        }

        api.post("/users", { name, email, password, is_admin})
        .then(()=>{
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
                <img src={foodExplorerLogo} alt="Imagem do logo" className='image-logo'/>
            </div>
            <Form>
                <h1>Crie sua conta</h1>
                <Box className="box-input">
                    <label htmlFor="Email">Seu nome</label>
                    <InputAuth 
                    placeholder='Digite seu nome'
                    onChange={e=> setName(e.target.value)}
                    type="text" 
                    />
                </Box>

                <Box className="box-input">
                    <label htmlFor="Email">Email</label>
                    <InputAuth 
                    placeholder='Digite seu e-mail' 
                    type="email"
                    onChange={e=> setEmail(e.target.value)} 
                    />
                </Box>
                <Box className="box-input">
                    <label htmlFor="password">Senha</label>
                    <InputAuth 
                    icon={TbEye}
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