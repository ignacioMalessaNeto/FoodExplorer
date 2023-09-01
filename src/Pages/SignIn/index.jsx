import { useState } from 'react';
import { Box } from '../../Components/Box';
import { Container, Form } from './styles';
import { Link } from 'react-router-dom'
import { InputAuth } from '../../Components/InputAuth';
import { useAuth } from '../../Hooks/auth';
import {TbEye} from 'react-icons/tb';


import foodExplorerLogo from '../../assets/foodExplorerLogo.png'
export function SigIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    function handleSignIn() {
        if (password.length < 6) {
            return alert("A senha tem que ter no mínimo 6 caracteres")
        }
        signIn({ email, password })
    }

    return (
        <Container>
            <div>
                <img src={foodExplorerLogo} alt="Imagem do logo" />
            </div>
            <Form>
                <h1>Faça seu login</h1>
                <Box>
                    <label htmlFor="Email">Email</label>
                    <InputAuth
                        placeholder='Exemplo: exemplo@exemplo.com.br'
                        type="email"
                        onChange={e => setEmail(e.target.value)}
                    />
                </Box>
                <Box>
                    <label htmlFor="password">Senha</label>
                    <InputAuth
                        icon={TbEye}
                        placeholder='No mínimo 6 caracteres'
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                    />
                </Box>
                <button
                    type="button"
                    className='buttonLogin'
                    onClick={handleSignIn}
                >
                    Entrar
                </button>
                <Link className='buttonCreateLogin' to="/register">Criar uma conta</Link>
            </Form>
        </Container>
    )
}