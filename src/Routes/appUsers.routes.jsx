import { Routes, Route } from 'react-router-dom';
import { UserDetails } from '../Pages/UserDetails';
import { UserHome } from '../Pages/UserHome';

import { HeaderUser } from '../Components/HeaderUser';

export function AppUsersRoutes() {
    return (
        <>
        <HeaderUser />
        <Routes>
            <Route path="/" element={<UserHome />} />
            <Route path="/UserDetails/:dish_id" element={<UserDetails />} />
        </Routes>
        </>
    )
}