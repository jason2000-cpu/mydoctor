import DashboardPage from "./pages/DashboardPage"
import LoginPage from "./pages/login"
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { ThemeProvider } from "@mui/material"
import theme from "./contexts/theme"
import SignupPage from "./pages/SignupPage"


function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter >
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="dashboard" element={<DashboardPage />}  />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
