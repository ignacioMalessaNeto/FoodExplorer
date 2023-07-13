import { Container, ImageDish, OptionDish, Box, SectionIngredients } from './styles';

import { useEffect, useState } from 'react';

import { Button } from '../../Components/Button';

import { HeaderAdm } from '../../Components/HeaderAdm';

import { Textarea } from '../../Components/Textarea';

import { BsUpload } from 'react-icons/bs';

import { Footer } from '../../Components/Footer';

import { IngredientItem } from '../../Components/IngredientItem';

export function UpdateDish() {
    // const navigate = useNavigate();

    const [dish, setDish] = useState("")
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [newIngredients, setNewIngredients] = useState("");
    const [dishImage, setDishImage] = useState("");

    return (
        <Container>
            <HeaderAdm />
            <Button />
            <h1>Editar prato</h1>

            <main>

                <ImageDish>
                    <label for="opcoes">Imagem</label>
                    <label htmlFor="img_dish">
                        <BsUpload />
                        Selecione uma imagem
                        <input
                            id="img_dish"
                            type="file"
                        />
                    </label>
                </ImageDish>


                <Box>
                    <label for="name">Nome</label>
                    <input 
                    className='inputName' 
                    placeholder='Ex.: Salada Ceasar' 
                    value={name}
                    onChange={e=>setName(e.target.value)}
                    />
                </Box>

                <OptionDish>
                    <label for="opcoes">Categoria</label>
                    <select id="opcoes" onClick={e=>setCategory(e.target.value)}>
                        <option value="meal" >Refeição</option>
                        <option value="dessert">Sobremesa</option>
                        <option value="drinks" >Drinks</option>
                    </select>
                </OptionDish>

                <Box>
                    <label for="ingredients">Ingredientes</label>
                    <SectionIngredients>
                        <IngredientItem value="React" />
                        <IngredientItem isNew placeholder="Adicionar" />
                    </SectionIngredients>
                </Box>

                <Box>
                    <label for="price">Preço</label>
                    <input 
                    className='inputPrice' 
                    type="text" 
                    placeholder='R$:00,00' 
                    value={price}
                    onChange={e=>setPrice(e.target.value)}
                    />
                </Box>

                <label htmlFor="">Descrição</label>
                <Textarea 
                placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
                 onChange={e=>setDescription(e.target.value)}
                 >
                    {description}  
                </Textarea>


                <div className='positionButton'>
                    <button className='buttonDelete'>Excluir prato</button>

                    <button className='buttonCreate'>Salvar alterações</button>
                </div>
            </main>
            <Footer />
        </Container>
    )
}