import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Header from './components/Header'
import ProfilePage from './pages/ProfilePage'
import HomePage from './pages/HomePage'
import OrdersPage from './pages/OrdersPage'
import OrderDetailPage from './pages/OrderDetailPage'
import ContactUsPage from './pages/ContactUsPage'

function App() {
  return (
    <Router>
      <Header />
      <main className="bg-[#E4E4E4]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/orders/:orderId" element={<OrderDetailPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
