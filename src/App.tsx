import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Placeholder components simulating the main sections of Netflix
const Header = () => (
  <header style={{ 
    backgroundColor: 'rgba(20, 20, 20, 0.9)', 
    padding: '20px 50px', 
    position: 'fixed', 
    top: 0, 
    width: '100%', 
    zIndex: 100 
  }}>
    <div style={{ color: 'red', fontSize: '24px', fontWeight: 'bold' }}>NETFLIX</div>
    {/* Navigation links would go here */}
  </header>
)

const HomeScreen = () => (
  <div style={{ paddingTop: '80px', paddingBottom: '50px' }}>
    <h1>Home Screen - Featured Content</h1>
    {/* Rows of titles: Trending Now, Watch It Again, etc. */}
  </div>
)
const TVShowsScreen = () => <h1>TV Shows Catalog</h1>
const MoviesScreen = () => <h1>Movies Catalog</h1>
const LoginScreen = () => <h1>Sign In / Sign Up Screen</h1>
const NotFoundScreen = () => <h1>404 - Page Not Found</h1>

const App = () => {
  // In a real application, AuthContext would wrap BrowserRouter here
  
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: '#141414', minHeight: '100vh', color: '#fff', fontFamily: 'Netflix Sans, Helvetica Neue, sans-serif' }}>
        <Header />
        
        <main style={{ padding: '0 50px' }}>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<LoginScreen />} />

            {/* Main Content Routes (Assumed Protected) */}
            <Route path="/" element={<HomeScreen />} />
            <Route path="/tvshows" element={<TVShowsScreen />} />
            <Route path="/movies" element={<MoviesScreen />} />

            {/* Catch All */}
            <Route path="*" element={<NotFoundScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App