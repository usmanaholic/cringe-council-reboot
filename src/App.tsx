import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from '@/pages/Index'
import Shahan from '@/pages/Shahan'
import Shanzay from '@/pages/Shanzay'
import Eman from '@/pages/Eman'
import Nimra from '@/pages/Nimra'
import Sajeel from '@/pages/Sajeel'
import Mehreen from '@/pages/Mehreen'
import NotFound from '@/pages/NotFound'
import Offended from '@/pages/Offended'
import Shahanp from '@/pages/Shahanp'
import Shanzayp from '@/pages/Shanzayp'
import Emanp from '@/pages/Emanp'

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
        <Route path="/offended" element={<Offended />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  )
}

export default App
