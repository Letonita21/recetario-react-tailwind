
import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Principal from './pages/Principal'
import Favoritos from './pages/Favoritos'
import Pruebas from './pages/Pruebas'



const App = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Principal/>}/> 
        <Route path='/favoritos' element={<Favoritos/>}/> 
        <Route path='/pruebas' element={<Pruebas/>}/> 
      </Routes>
      
    </div>
  )
}

export default App