import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './Pages/Home'
import Destination from './Pages/Destination'
import Crew from './Pages/Crew'
import Technology from './Pages/Technology'
import './App.css'
import * as data from './data.json'

function App() {

  return (
  <BrowserRouter>
    <Header />

    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/destination" element={<Destination data={data.destinations} />}/>
      <Route exact path="/crew" element={<Crew data={data.crew}/>}/>
      <Route exact path="/technology" element={<Technology data={data.technology} />}/>
    </Routes>

  </BrowserRouter>
  )
}

export default App
