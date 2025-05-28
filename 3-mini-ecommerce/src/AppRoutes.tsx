import { Route, Routes } from "react-router";
import { mainNavItems, staticNavItems } from "./routes";
import { Suspense } from "react";
import AppSkeleton from "./components/AppSkeleton";

function AppRoutes() {
    return (
        <Suspense fallback={<AppSkeleton />}>
            <Routes>
                {[...mainNavItems, ...staticNavItems].map((item, index) => (
                    <Route key={index} path={item.path} element={<item.component />} />
                ))}
            </Routes>
        </Suspense>
    );
}
export default AppRoutes;