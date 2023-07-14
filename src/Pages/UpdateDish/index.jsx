
// funcioanndo quase tudo menos os ingredients
// import { Container, ImageDish, OptionDish, Box, SectionIngredients } from './styles';
// import { useEffect, useState } from 'react';
// import { Button } from '../../Components/Button';
// import { HeaderAdm } from '../../Components/HeaderAdm';
// import { Textarea } from '../../Components/Textarea';
// import { BsUpload } from 'react-icons/bs';
// import { Footer } from '../../Components/Footer';
// import { IngredientItem } from '../../Components/IngredientItem';
// import { useParams, useNavigate } from 'react-router-dom';
// import { api } from '../../Services/api';

// export function UpdateDish() {
//     const navigate = useNavigate();

//     const [dishImage, setDishImage] = useState("");

//     const [dish, setDish] = useState({
//         name: "",
//         description: "",
//         price: "",
//         category: "",
//         ingredients: []
//     });
//     const [newIngredientName, setNewIngredientName] = useState("");

//     const { dish_id } = useParams();

//     async function handleUpdateDish() {
//         try {
//             const updatedDish = {
//                 ...dish,
//                 ingredients: dish.ingredients.map(ingredient => ingredient.name)
//             };
//             await api.put(`/dish/${dish_id}`, updatedDish);


//             const fileUploadForm = new FormData();
//             fileUploadForm.append("img_dish", dishImage);
//             fileUploadForm.append("dish_id", dish.id)

//             await api.patch("dish/img_dish/", fileUploadForm)
//             navigate(-1);
//         } catch (error) {
//             console.log(error);
//             alert("Ocorreu um erro ao atualizar o prato.");
//         }
//     }

//     async function handleUpdateImg_dish(event) {
//         const img_dish = event.target.files[0];
//         setDishImage(img_dish);

//     }

//     async function handleDeleteDish() {
//         const confirm = window.confirm("Deseja excluir esse prato?");

//         if (confirm) {
//             try {
//                 await api.delete(`/dish/${dish_id}`);
//                 navigate(-1);
//             } catch (error) {
//                 console.log(error);
//                 alert("Ocorreu um erro ao excluir o prato.");
//             }
//         }
//     }

//     function handleAddIngredient() {
//         if (newIngredientName.trim() !== "") {
//             const newIngredient = { name: newIngredientName };
//             setDish(prevState => ({
//                 ...prevState,
//                 ingredients: [...prevState.ingredients, newIngredient]
//             }));
//             setNewIngredientName("");
//         }
//     }

//     function handleRemoveIngredient(index) {
//         setDish(prevState => {
//             const updatedIngredients = [...prevState.ingredients];
//             updatedIngredients.splice(index, 1);
//             return {
//                 ...prevState,
//                 ingredients: updatedIngredients
//             };
//         });
//     }

//     useEffect(() => {
//         async function fetchDish() {
//             try {
//                 const response = await api.get(`/dish/${dish_id}`);
//                 setDish(response.data);
//             } catch (error) {
//                 console.log(error);
//             }
//         }

//         fetchDish();
//     }, [dish_id]);

//     return (
//         <Container>
//             <HeaderAdm />
//             <Button />
//             <h1>Editar prato</h1>
//             <main>
//                 <ImageDish>
//                     <label htmlFor="opcoes">Imagem</label>
//                     <label htmlFor="img_dish">
//                         <BsUpload />
//                         Selecione uma imagem
//                         <input
//                             id="img_dish"
//                             type="file"
//                             onChange={handleUpdateImg_dish}
//                         />
//                     </label>
//                 </ImageDish>
//                 <Box>
//                     <label htmlFor="name">Nome</label>
//                     <input
//                         className='inputName'
//                         placeholder={dish.name}
//                         onChange={e => setDish(prevState => ({ ...prevState, name: e.target.value }))}
//                     />
//                 </Box>
//                 <OptionDish>
//                     <label htmlFor="opcoes">Categoria</label>
//                     <select
//                         id="opcoes"
//                         value={dish.category}
//                         onChange={e => setDish(prevState => ({ ...prevState, category: e.target.value }))}
//                     >
//                         <option value=""></option>
//                         <option value="meal">Refeição</option>
//                         <option value="dessert">Sobremesa</option>
//                         <option value="drinks">Drinks</option>
//                     </select>
//                 </OptionDish>
//                 <Box>
//                     <label htmlFor="ingredients">Ingredientes</label>
//                     <SectionIngredients>
//                         {dish.ingredients.map((ingredient, index) => (
//                             <IngredientItem
//                                 key={index}
//                                 value={ingredient.name}
//                                 onClick={() => handleRemoveIngredient(index)}
//                             />
//                         ))}
//                         <IngredientItem
//                             isNew
//                             placeholder="Novo ingrediente"
//                             value={newIngredientName}
//                             onChange={e => setNewIngredientName(e.target.value)}
//                             onClick={handleAddIngredient}
//                         />
//                     </SectionIngredients>
//                 </Box>
//                 <Box>
//                     <label htmlFor="price">Preço</label>
//                     <input
//                         className='inputPrice'
//                         type="text"
//                         placeholder={`R$:${dish.price}`}
//                         onChange={e => setDish(prevState => ({ ...prevState, price: e.target.value }))}
//                     />
//                 </Box>
//                 <label htmlFor="">Descrição</label>
//                 <Textarea
//                     placeholder={dish.description}
//                     onChange={e => setDish(prevState => ({ ...prevState, description: e.target.value }))}
//                 />
//                 <div className='positionButton'>
//                     <button
//                         className='buttonDelete'
//                         onClick={handleDeleteDish}
//                     >
//                         Excluir prato
//                     </button>
//                     <button
//                         onClick={handleUpdateDish}
//                         className='buttonCreate'
//                     >
//                         Salvar alterações
//                     </button>
//                 </div>
//             </main>
//             <Footer />
//         </Container>
//     );
// }


import { Container, ImageDish, OptionDish, Box, SectionIngredients } from './styles';
import { useEffect, useState } from 'react';
import { Button } from '../../Components/Button';
import { HeaderAdm } from '../../Components/HeaderAdm';
import { Textarea } from '../../Components/Textarea';
import { BsUpload } from 'react-icons/bs';
import { Footer } from '../../Components/Footer';
import { IngredientItem } from '../../Components/IngredientItem';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../Services/api';

export function UpdateDish() {
    const navigate = useNavigate();

    const [dishImage, setDishImage] = useState("");

    const [dish, setDish] = useState({
        name: "",
        description: "",
        price: "",
        category: "",
        ingredients: []
    });
    const [newIngredientName, setNewIngredientName] = useState("");
    const [originalDish, setOriginalDish] = useState({});
    const { dish_id } = useParams();

    async function handleUpdateDish() {
        try {
            const updatedDish = {
                ...dish,
                ingredients: dish.ingredients.map(ingredient => ingredient.name)
            };

            const newIngredients = updatedDish.ingredients.filter(
                ingredient => !originalDish.ingredients.includes(ingredient)
            );
            updatedDish.ingredients = newIngredients;

            const fileUploadForm = new FormData();
            fileUploadForm.append("img_dish", dishImage);
            fileUploadForm.append("dish_id", dish_id)

            await api.patch("dish/img_dish/", fileUploadForm)
            await api.put(`/dish/${dish_id}`, updatedDish);
            navigate(-1);
            return alert("Nota atualizada com sucesso!")
        } catch (error) {
            console.log(error);
            alert("Ocorreu um erro ao atualizar o prato.");
        }
    }

    async function handleUpdateImg_dish(event) {
        const img_dish = event.target.files[0];
        setDishImage(img_dish);
    }

    async function handleDeleteDish() {
        const confirm = window.confirm("Deseja excluir esse prato?");

        if (confirm) {
            try {
                await api.delete(`/dish/${dish_id}`);
                navigate(-1);
            } catch (error) {
                console.log(error);
                alert("Ocorreu um erro ao excluir o prato.");
            }
        }
    }

    function handleAddIngredient() {
        if (newIngredientName.trim() !== "") {
            const newIngredient = { name: newIngredientName };
            setDish(prevState => ({
                ...prevState,
                ingredients: [...prevState.ingredients, newIngredient]
            }));
            setNewIngredientName("");
        }
    }

    function handleRemoveIngredient(index) {
        setDish(prevState => {
            const updatedIngredients = [...prevState.ingredients];
            updatedIngredients.splice(index, 1);
            return {
                ...prevState,
                ingredients: updatedIngredients
            };
        });
    }

    useEffect(() => {
        async function fetchDish() {
            try {
                const response = await api.get(`/dish/${dish_id}`);
                setDish(response.data);
                setOriginalDish(response.data); // Definir o prato original
            } catch (error) {
                console.log(error);
            }
        }

        fetchDish();
    }, [dish_id]);


    return (
        <Container>
            <HeaderAdm />
            <Button />
            <h1>Editar prato</h1>
            <main>
                <ImageDish>
                    <label htmlFor="opcoes">Imagem</label>
                    <label htmlFor="img_dish">
                        <BsUpload />
                        Selecione uma imagem
                        <input
                            id="img_dish"
                            type="file"
                            onChange={handleUpdateImg_dish}
                        />
                    </label>
                </ImageDish>
                <Box>
                    <label htmlFor="name">Nome</label>
                    <input
                        className='inputName'
                        placeholder={dish.name}
                        onChange={e => setDish(prevState => ({ ...prevState, name: e.target.value }))}
                    />
                </Box>
                <OptionDish>
                    <label htmlFor="opcoes">Categoria</label>
                    <select
                        id="opcoes"
                        value={dish.category}
                        onChange={e => setDish(prevState => ({ ...prevState, category: e.target.value }))}
                    >
                        <option value=""></option>
                        <option value="meal">Refeição</option>
                        <option value="dessert">Sobremesa</option>
                        <option value="drinks">Drinks</option>
                    </select>
                </OptionDish>
                <Box>
                    <label htmlFor="ingredients">Ingredientes</label>
                    <SectionIngredients>
                        {dish.ingredients.map((ingredient, index) => (
                            <IngredientItem
                                key={index}
                                value={ingredient.name}
                                onClick={() => handleRemoveIngredient(index)}
                            />
                        ))}
                        <IngredientItem
                            isNew
                            placeholder="Novo ingrediente"
                            value={newIngredientName}
                            onChange={e => setNewIngredientName(e.target.value)}
                            onClick={handleAddIngredient}
                        />
                    </SectionIngredients>
                </Box>
                <Box>
                    <label htmlFor="price">Preço</label>
                    <input
                        className='inputPrice'
                        type="text"
                        placeholder={`R$:${dish.price}`}
                        onChange={e => setDish(prevState => ({ ...prevState, price: e.target.value }))}
                    />
                </Box>
                <label htmlFor="">Descrição</label>
                <Textarea
                    placeholder={dish.description}
                    onChange={e => setDish(prevState => ({ ...prevState, description: e.target.value }))}
                />
                <div className='positionButton'>
                    <button
                        className='buttonDelete'
                        onClick={handleDeleteDish}
                    >
                        Excluir prato
                    </button>
                    <button
                        onClick={handleUpdateDish}
                        className='buttonCreate'
                    >
                        Salvar alterações
                    </button>
                </div>
            </main>
            <Footer />
        </Container>
    );
}

