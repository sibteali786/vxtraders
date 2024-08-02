import './App.css'
import './globals.css'
import { ComingSoon } from "./components/coming-soon"
import { ThemeProvider } from "@/components/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ComingSoon />
    </ThemeProvider>
  )
}

export default App
