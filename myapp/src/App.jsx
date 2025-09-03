import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Table from './components/Table'
import './App.css'
import Form from './components/Form'
import ExcelUploader from './components/ExcelUploader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Box sx={{ width: '100vw' }}>
        <AppBar position="static" sx={{ width: '100%' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              MyApp
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button color="inherit" component={Link} to="/login">Login</Button>
              <Button color="inherit" component={Link} to="/about">About</Button>
              <Button color="inherit" component={Link} to="/contact">Contact</Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Routes>
        <Route path="/" element={<ExcelUploader />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </Router>
  )
}

export default App
