import { BrowserRouter } from "react-router-dom";

import { AppUsersRoutes } from "./appUsers.routes";

import { AppAdmRoutes} from "./appAdm.routes";

import { AuthRoutes } from "./appAuth.routes"

import { useAuth } from "../Hooks/auth";

export function Routes() {
    const { user } = useAuth();

    return (
        <BrowserRouter>
            {user ?  user.is_admin ?  <AppAdmRoutes/> : <AppUsersRoutes/> : <AuthRoutes/>}
        </BrowserRouter>
    )
}