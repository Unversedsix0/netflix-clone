import { createBrowserRouter, Navigate } from "react-router-dom"
import { Home, Login } from "../pages"

export const Routes = createBrowserRouter([
    {
        path:'/pagina-inicial',
        element:<Home/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'*',
        element: <Navigate to='/pagina-inicial'/>
    },
])