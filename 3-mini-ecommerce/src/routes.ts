import { lazy } from "react";
import { NavItems } from "./models/NavItem";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { authStaticNavItems } from "./features/auth/routes";

export const mainNavItems: NavItems = [
    {
        path: '/home',
        component: Home,
        label: 'Home',
    },
    {
        path: '/about',
        component: About,
        label: 'About',
    },
    {
        path: '/products',
        component: lazy(() => import('./features/product/pages/Products')),
        label: 'Products',
        private: true, // To test Auth Guard logic
    },
    // how to add some static routes (in menu or not)
    // here we choose a specific collection staticNavItems (see below)
    // {
    //     path: '*',
    //     component: NotFound,
    //     label: 'NotFound',
    //     showInMenu: ... 
    // } 
];

// Static routes, will not appears in any menu
export const staticNavItems: NavItems = [
    ...authStaticNavItems,
    // at the end with * pattern
    {
        path: '*',
        component: NotFound,
        label: 'NotFound'
    } 
] 