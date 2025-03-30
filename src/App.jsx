import DashboardPage from "./pages/DashboardPage"
import LoginPage from "./pages/login"
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { ThemeProvider } from "@mui/material"
import theme from "./contexts/theme"


function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter >
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="dashboard" element={<DashboardPage />}  />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
