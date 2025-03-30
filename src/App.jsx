import { ThemeContext } from "@emotion/react"
import DashboardPage from "./pages/DashboardPage"
import LoginPage from "./pages/login"
import { BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {

  return (
    <>
      <ThemeContext>
        <BrowserRouter >
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="dashboard" element={<DashboardPage />}  />
          </Routes>
        </BrowserRouter>
      </ThemeContext>
    </>
  )
}

export default App
