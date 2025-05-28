import { Route, Routes } from "react-router";
import type { NavItems } from "./models/NavItem";
import React from "react";

const mainNav: NavItems = [
    { 
        component: React.lazy(() => import("./pages/HomePage")),
        path: "/",
    },
    { 
        component: React.lazy(() => import("./pages/ContactPage")),
        path: "/contact",
    } 
] 

function AppRoutes() {
    return (
        <Routes>
           {mainNav.map( navItem => 
                <Route path={navItem.path} element={<navItem.component />} />
           )}
        </Routes>
    )
} 

export default AppRoutes;