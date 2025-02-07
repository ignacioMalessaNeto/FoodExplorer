import { Container, ImageDish, OptionDish, SectionIngredients } from './styles';

import { Button } from '../../Components/Button';

import { Box } from '../../Components/Box';

import { Textarea } from '../../Components/Textarea';

import { BsUpload } from 'react-icons/bs';

import { IngredientItem } from '../../Components/IngredientItem';

import { useState } from 'react';

import { api } from '../../Services/api';
import { useNavigate } from 'react-router-dom';


export function AddDish() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [newIngredients, setNewIngredients] = useState("");
    const [category, setCategory] = useState("");
    const [dishImage, setDishImage] = useState("");


    async function handleNewDish() {
        try {

            if (!name) {
                return alert("Digite o nome do prato!")
            }

            if (!category) {
                return alert("Selecione a categoria do prato!")
            }

            if (newIngredients) {
                return alert("Você deixou um ingrediente no campo para adicionar. Clique para adicionar ou deixe o campo vazio.")
            }

            if (dishImage) {
                const { data } = await api.post("/dish", {
                    name,
                    description,
                    category,
                    price,
                    ingredients,
                });

                const fileUploadForm = new FormData();
                fileUploadForm.append("img_dish", dishImage);
                fileUploadForm.append("dish_id", data.dish_id);
                await api.patch("dish/img_dish/", fileUploadForm);
            } else {
                await api.post("/dish", {
                    name,
                    description,
                    category,
                    price,
                    ingredients,
                });
            }

            alert("Prato criado com sucesso!");
            navigate("/");
        } catch (error) {
            alert("Não foi possível criar o prato");
        }
    }

    function handleChangeImg_dish(event) {
        const img_dish = event.target.files[0];

        setDishImage(img_dish);
    }


    function handleAddIngredients() {
        setIngredients(prevState => [...prevState, newIngredients])
        setNewIngredients("");
    }

    function handleRemoveIngredients(deleted) {
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
    }
    return (
        <Container>
            <Button />
            <h1>Adicionar prato</h1>

            <main>

                <ImageDish>
                    <label htmlFor="opcoes">Imagem</label>
                    <label htmlFor="img_dish">
                        <BsUpload />
                        Selecione uma imagem
                        <input
                            id="img_dish"
                            type="file"
                            onChange={handleChangeImg_dish}
                        />
                    </label>
                </ImageDish>


                <Box>
                    <label htmlFor="name">Nome</label>
                    <input
                        className='inputName'
                        placeholder='Ex.: Salada Ceasar'
                        onChange={e => setName(e.target.value)}
                    />

                </Box>

                <OptionDish>
                    <label htmlFor="opcoes">Categoria</label>
                    <select id="opcoes" onChange={e => setCategory(e.target.value)}>
                        <option value="" />
                        <option value="meal">Refeição</option>
                        <option value="dessert">Sobremesa</option>
                        <option value="drinks">Drinks</option>
                    </select>
                </OptionDish>

                <Box>
                    <label htmlFor="ingredients">Ingredientes</label>
                    <SectionIngredients>
                        {
                            ingredients.map((ingredient, index) => (
                                <IngredientItem
                                    key={String(index)}
                                    value={ingredient}
                                    onClick={() => handleRemoveIngredients(ingredient)}
                                />
                            ))
                        }
                        <IngredientItem
                            isnew
                            placeholder="Novo ingrediente"
                            value={newIngredients}
                            onChange={e => setNewIngredients(e.target.value)}
                            onClick={handleAddIngredients}
                        />
                    </SectionIngredients>
                </Box>

                <Box>
                    <label htmlFor="price">Preço</label>
                    <input
                        className='inputPrice'
                        type="text"
                        placeholder='R$:00,00'
                        onChange={e => setPrice(e.target.value)}
                    />
                </Box>

                <Box>
                    <label htmlFor="description">Descrição</label>
                </Box>
                <Textarea
                    placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
                    onChange={e => setDescription(e.target.value)}
                />


                <div className='positionButton'>
                    <button
                        type='button'
                        className='buttonCreate'
                        onClick={handleNewDish}
                    >Salvar alterações</button>
                </div>
            </main>
        </Container>
    )
}