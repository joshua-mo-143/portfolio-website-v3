import Home from './pages/Home'
import './index.css'
import About from './pages/About'
import { BrowserRouter } from 'react-router-dom'
import AllRoutes from './pages/AllRoutes'
import { AnimatePresence } from 'framer-motion'

function App() {

  return (
    <AnimatePresence>
      <AllRoutes/>
    </AnimatePresence>
  )
}

export default App
