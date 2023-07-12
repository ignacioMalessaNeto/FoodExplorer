import { Container } from './styles';

import { useState } from 'react';

import { Button } from '../../Components/Button';

import { AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';

import { ButtonText } from '../../Components/ButtonText';

import { Ingredients } from '../../Components/Ingredients';

import { HeaderUser } from '../../Components/HeaderUser';

import { Footer } from '../../Components/Footer'


export function UserDetails() {
  const [amount, setAmount] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  return (
    <Container>
      <HeaderUser />

      <Button />
      
      <div className='content'>
      <img src="https://github.com/ignacioMalessaNeto.png" />
      <main>

      <h1>Salada Ravanello</h1>

      <p>Rabanetes, folhas verdes e molho agridoce  salpicados com gergelim. O pão naan dá um toque especial.</p>

      <div>
        <Ingredients title="Pão"/> 
        <Ingredients title="Pão"/> 
        <Ingredients title="Pão"/> 
        <Ingredients title="Pão"/> 
      </div>

      <div className='buttonsAmount'>
        <button className='buttonAmount' onClick={() => {setAmount( amount - 1)}}><AiOutlineMinus/></button>
        {amount}
        <button className='buttonAmount' onClick={() => {setAmount( amount + 1)}}><AiOutlinePlus/></button>
        <ButtonText title="Incluir R$:25,00 "></ButtonText>
      </div>
      </main>
      </div>
      <Footer/>
    </Container>
  )
}