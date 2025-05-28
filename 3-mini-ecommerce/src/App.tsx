import './App.css'
import { BrowserRouter } from 'react-router'
import Header from './components/Header'
import AppRoutes from './AppRoutes'
import CartProvider from './features/cart/providers/CartProvider'

function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
            <Header />
            <AppRoutes />
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
