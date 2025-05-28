import { Route, Routes } from "react-router";
import { mainNavItems, staticNavItems } from "./routes";
import { Suspense } from "react";
import AppSkeleton from "./components/AppSkeleton";
import AuthGuard from "./features/auth/guards/AuthGuard";

function AppRoutes() {
    return (
        <Suspense fallback={<AppSkeleton />}>
            <Routes>
                {[...mainNavItems, ...staticNavItems].map((item, index) => (
                    <Route key={index} path={item.path} element={
                        <>
                            {/* Example of role-based component usage */}
                            {/* <AuthCheckComponent...> <item.component /> </AuthCheckComponent...>*/}
                            <AuthGuard isPrivate={item.private || false}>
                                <item.component />
                            </AuthGuard>
                        </>
                    } />
                ))}
            </Routes>
        </Suspense>
    );
}
export default AppRoutes;