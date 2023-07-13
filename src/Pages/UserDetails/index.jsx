import { Container } from './styles';

import { useState,useEffect } from 'react';


import { Button } from '../../Components/Button';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import { ButtonText } from '../../Components/ButtonText';

import { Ingredients } from '../../Components/Ingredients';

import { HeaderUser } from '../../Components/HeaderUser';

import { Footer } from '../../Components/Footer'

import { api } from '../../Services/api';

import { useParams } from 'react-router-dom';

export function UserDetails() {
  const [dishs, setDishs] = useState();

  const { dish_id } = useParams();

  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    async function getDish() {
      const response = await api.get(`/dish/${dish_id}`);
      setDishs(response.data);
    }

    async function getIngredients() {
      const response = await api.get("/ingredients");

      setIngredients(response.data);
    }

    getDish()
    getIngredients()
    console.log(dishs)
  }, [])


  return (
    <Container>
      <HeaderUser />

      <Button />
      {dishs &&
        <div className='content'>
          <img src="https://github.com/ignacioMalessaNeto.png" />
          <main>

            <h1>{dishs.name}</h1>

            <p>{dishs.description}</p>

            {
              ingredients && ingredients.map(ingredient => (
                <Ingredients
                  key={ingredient.id}
                  title={ingredient.name}
                />
              ))
            }

            <div className='buttonsAmount'>
              <button className='buttonAmount' onClick={() => { setAmount(amount - 1) }}><AiOutlineMinus /></button>
              {amount}
              <button className='buttonAmount' onClick={() => { setAmount(amount + 1) }}><AiOutlinePlus /></button>
              <ButtonText title={`Incluir ${dishes.price}`}></ButtonText>
            </div>
          </main>
        </div>
      }
      <Footer />
    </Container>
  )
}