import { Routes, Route } from 'react-router-dom';
import { UserDetails } from '../Pages/UserDetails';
import { UserHome } from '../Pages/UserHome';

export function AppUsersRoutes() {
    return (
        <Routes>
            <Route path="/" element={<UserHome />} />
            <Route path="/UserDetails/:dish_id" element={<UserDetails />} />
        </Routes>
    )
}