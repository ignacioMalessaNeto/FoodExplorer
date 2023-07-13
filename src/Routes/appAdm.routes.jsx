import { Routes, Route } from 'react-router-dom';

import { AdmDetails } from '../Pages/AdmDetails';

import { AdmHome } from '../Pages/AdmHome';

import { AddDish } from '../Pages/AddDish';

import { UpdateDish } from '../Pages/UpdateDish';


export function AppAdmRoutes() {
    return (
        <Routes>
            <Route path="/" element={<AdmHome />} />
            <Route path="/addDish" element={<AddDish />} />
            <Route path="/admDetails/:dish_id" element={<AdmDetails />} />
            <Route path="/updateDish/:dish_id" element={<UpdateDish />} />
        </Routes>
    )
}