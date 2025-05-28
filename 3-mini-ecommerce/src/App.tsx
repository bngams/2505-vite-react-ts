import './App.css'
import { BrowserRouter } from 'react-router'
import Header from './components/Header'
import AppRoutes from './AppRoutes'
import CartProvider from './features/cart/providers/CartProvider'
import { Provider } from "react-redux"
import { store } from './store/store'

function App() {

  return (
    <>
      <Provider store={store}>
        <CartProvider>
          <BrowserRouter>
              <Header />
              <AppRoutes />
          </BrowserRouter>
        </CartProvider>
      </Provider>
    </>
  )
}

export default App
