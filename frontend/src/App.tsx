import { Routes,Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Analyzer from './pages/Analyzer';
function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/analyzer' element={<Analyzer/>}/>
      </Routes>
    </>
  )
}

export default App
