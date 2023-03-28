import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './Pages/Home'
import Destination from './Pages/Destination'
import Crew from './Pages/Crew'
import Technology from './Pages/Technology'
import './App.css'
import * as data from './data.json'

function App() {

  return (
  <HashRouter history={history}>
    <Header />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destination" element={<Destination data={data.destinations} />}/>
      <Route path="/crew" element={<Crew data={data.crew}/>}/>
      <Route path="/technology" element={<Technology data={data.technology} />}/>
    </Routes>

  </HashRouter>
  )
}

export default App
