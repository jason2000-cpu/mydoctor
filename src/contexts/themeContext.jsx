import { ThemeProvider } from "@mui/material/styles"
import theme from "./theme"

function ThemeContext({ children }) {
    
    return (
        <ThemeProvider theme={theme} >
            { children }
        </ThemeProvider>
    )
}

export default ThemeContext;