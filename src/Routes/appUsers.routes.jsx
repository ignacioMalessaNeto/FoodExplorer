import { Routes, Route } from 'react-router-dom';

import { UserDetails } from '../Pages/UserDetails';

import { UserHome } from '../Pages/UserHome';

import { HeaderUser } from '../Components/HeaderUser';

import { Footer } from '../Components/Footer';

import { useState } from 'react';

export function AppUsersRoutes() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchType, setSearchType] = useState('name');

    return (
        <>
            <HeaderUser onSearch={(query, type) => {
        setSearchQuery(query);
        setSearchType(type); }}/>
            <Routes>
                <Route path="/" element={<UserHome  searchQuery={searchQuery} searchType={searchType}  />} />
                <Route path="/UserDetails/:dish_id" element={<UserDetails />} />
            </Routes>
            <Footer />
        </>
    )
}
