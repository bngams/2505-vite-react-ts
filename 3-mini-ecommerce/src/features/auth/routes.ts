import { NavItems } from "@/models/NavItem";
import LoginPage from "./pages/LoginPage";

export const authStaticNavItems: NavItems = [
    // /auth/login => parent route /auth + chidlren route /login
    {
        path: '/auth/login',
        component: LoginPage,
        label: 'Login',
    },
] 