import React from 'react';
import AuthProvider from './features/auth/providers/AuthProvider';
import CartProvider from './features/cart/providers/CartProvider';
import { Provider } from "react-redux"
import { store } from './store/store'

interface AppProvidersProps {
    children: React.ReactNode;
}

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
    return (
        <Provider store={store}>
            <AuthProvider>
                <CartProvider>
                    {children}
                </CartProvider>
            </AuthProvider>
        </Provider>
    );
};

export default AppProviders;