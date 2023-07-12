import { useState } from 'react';

import { Container } from './styles';

import { Button } from '../../Components/Button'

import { ButtonText } from '../../Components/ButtonText'

import { Ingredients } from '../../Components/Ingredients';

import { HeaderAdm } from '../../Components/HeaderAdm';

import { Footer } from '../../Components/Footer';

import { Link } from 'react-router-dom';



export function AdmDetails() {
  // const [name, setName] = useState("");
  // const [description, setDescription] = useState("");
  // const [category, setCategory] = useState("");
  // const [price, setPrice] = useState();
  
  // // dish.img_dish = `${api.defaults.baseURL}/files/${dish.img_dish}`;
  // // const img_dish =  dish.img_dish;

  return (
    <Container>
      <HeaderAdm/>
    
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

      <Link to="/updateDish"><ButtonText title="Editar prato"/></Link>
      </main>
      </div>
      <Footer/>
    </Container>
  )
}

// import { useEffect, useState } from 'react';

// import { Container } from './styles';

// import { Button } from '../../Components/Button'

// import { ButtonText } from '../../Components/ButtonText'

// import { Ingredients } from '../../Components/Ingredients';

// import { HeaderAdm } from '../../Components/HeaderAdm';

// import { Footer } from '../../Components/Footer';

// import { useParams } from 'react-router-dom';

// import { api } from '../../Services/api';

// export function AdmDetails() {
//   const [data, setData] = useState(null)

//   const params = useParams();

//   useEffect(() => {
//     async function fetchDish() {
//       const response = await api.get(`/dish/${params.id}`)
//       setData(response.data)
//     }
//   }, []);

//   return (
//     <Container>
//       <HeaderAdm />


//       <Button />
//       <div className='content'>
//       <img src="https://github.com/ignacioMalessaNeto.png" />

//       {
//         data &&
//       <main>

//       <h1>{data.name}</h1>

//       <p>{data.description}</p>

//       { 
//       data.ingredients &&
//       data.ingredients.map(ingredient  => (
//       <div>
//         <Ingredients 
//         key={String(ingredient.id)}
//         title={ingredient.name}
//         /> 
//       </div>
//       ))
//       }
//       <ButtonText title="Editar prato"/>
//       </main>
//       }

//       </div>
//       <Footer/>
//     </Container>
//   )
// }