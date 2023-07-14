import { useEffect, useState } from 'react';

import { Container } from './styles';

import { Button } from '../../Components/Button'

import { ButtonText } from '../../Components/ButtonText'

import { Ingredients } from '../../Components/Ingredients';

import { HeaderAdm } from '../../Components/HeaderAdm';

import { Footer } from '../../Components/Footer';

import { Link } from 'react-router-dom';

import { api } from '../../Services/api';

import { useParams } from 'react-router-dom';

export function AdmDetails() {
  const [dishs, setDishs] = useState();

  const {  dish_id } = useParams();

  const [ingredients, setIngredients] = useState([]);
  
  useEffect(() =>{
  async function getDish(){
    const response = await api.get(`/dish/${dish_id}`);
    setDishs(response.data);
  }
  
  async function getIngredients(){
    const response = await api.get("/ingredients");

    setIngredients(response.data);
  }

  getDish()
  getIngredients()
  console.log(dishs)
  }, [])


  return (
    <Container>
      <HeaderAdm/>
    
      <Button />
      {dishs &&
      <div className='content'>
      <img className='img_dish'src={`${api.defaults.baseURL}/files/${dishs.img_dish}`}/>

      <main>

      <h1>{dishs.name}</h1>

      <p>{dishs.description}</p>

      <div>
        {
          dishs.ingredients && dishs.ingredients.map(ingredient => (
            <Ingredients
            key={ingredient.id} 
            title={ingredient.name}
            /> 
          ))
        }
      </div>
      <Link to={`/updateDish/${dish_id}`}><ButtonText title="Editar prato"/></Link>
      </main>
      </div>
    }

      <Footer/>
    </Container>
  )
}
