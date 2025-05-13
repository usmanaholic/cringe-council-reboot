
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from '@/pages/Index'
import Shahan from '@/pages/Shahan'
import Shanzay from '@/pages/Shanzay'
import Eman from '@/pages/Eman'
import Nimra from '@/pages/Nimra'
import Sajeel from '@/pages/Sajeel'
import Mehreen from '@/pages/Mehreen'
import NotFound from '@/pages/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/shahan" element={<Shahan />} />
        <Route path="/shanzay" element={<Shanzay />} />
        <Route path="/eman" element={<Eman />} />
        <Route path="/nimra" element={<Nimra />} />
        <Route path="/sajeel" element={<Sajeel />} />
        <Route path="/mehreen" element={<Mehreen />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
