import { Container, Labels1 } from './styles'
import { useAuth } from '../../Hooks/auth'
import { AiOutlineSearch } from "react-icons/ai"
import { Link } from 'react-router-dom'
import { Input } from "../Input";
import React, { useState } from 'react';
import order from '../../assets/order.svg'
import exit from '../../assets/exit.svg'
import logoFoodExplorer from "../../assets/logoFoodExplorer.png"

export function HeaderUser({ onSearch }) {
    const { signOut } = useAuth();
    const [searchType, setSearchType] = useState("name")
    const handleSearch = (searchQuery) => {
        onSearch(searchQuery, searchType);
    };

    return (
        <>
            <Container>
                <Link to='/'><img src={logoFoodExplorer} alt="Logo image food explorer" /></Link>

                <div className='heading'>
                    <div className='labels'>
                        <Input
                            icon={AiOutlineSearch}
                            placeholder="Busque por pratos."
                            onChange={(e) => handleSearch(e.target.value)}
                        />
                        <div className='divider'>
                            <label>
                                <input
                                    type="radio"
                                    value="name"
                                    checked={searchType === "name"}
                                    onChange={() => setSearchType("name")}
                                />
                                Nome
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    value="description"
                                    checked={searchType === "description"}
                                    onChange={() => setSearchType("description")}
                                />
                                Ingredientes
                            </label>
                        </div>
                    </div>
                </div>

                <button className='buttonOrder'> <img src={order} alt="order image" /> Pedidos (0)</button>

                <img src={order} alt="order image" className='order' />

                <Link to={"/"}><button onClick={signOut}><img src={exit} alt="icon for exit" /></button></Link>


            </Container>
            <Labels1>
                <div className='inputMobile'>
                    <Input
                        icon={AiOutlineSearch}
                        placeholder="Busque por pratos."
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </div>
                <div className='divider'>
                    <label>
                        <input
                            type="radio"
                            value="name"
                            checked={searchType === "name"}
                            onChange={() => setSearchType("name")}
                        />
                        Nome
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="description"
                            checked={searchType === "description"}
                            onChange={() => setSearchType("description")}
                        />
                        Ingredientes
                    </label>
                </div>
            </Labels1>
        </>
    )
}