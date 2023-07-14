import { Routes, Route } from 'react-router-dom';

import { SigIn } from '../Pages/SignIn';

import { SignUp } from '../Pages/SignUp';

export function AuthRoutes() {
    return (

        <Routes>
            <Route path="/" element={<SigIn />} />
            <Route path="/register" element={<SignUp />} />
        </Routes>
    )
}