import OhStudio from './pages/Ohtudio'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HapticStudio from './pages/HapticStudio'

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<OhStudio />} />
        <Route path="/haptic" element={<HapticStudio />} />
      </Routes>
    </Router>

    </>  
  )
}

export default App
