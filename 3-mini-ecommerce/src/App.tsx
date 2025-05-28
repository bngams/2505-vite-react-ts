import './App.css'
import { BrowserRouter } from 'react-router'
import Header from './components/Header'
import AppRoutes from './AppRoutes'
import AppProviders from './AppProviders'

function App() {

  return (
    <>
      <AppProviders>           
        <BrowserRouter>
            <Header />
            <AppRoutes />
        </BrowserRouter>
      </AppProviders>
    </>
  )
}

export default App
