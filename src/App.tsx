import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Appointment from './pages/Appointment'
import MainLayout from './components/MainLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Appointment />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
