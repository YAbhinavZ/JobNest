import { createBrowserRouter } from "react-router-dom"
import "./App.css"
import AppLayout from "./layouts/AppLayout"
import { Button } from "./components/ui/button"
import LandingPage from "./pages/LandingPage"
const router = createBrowserRouter(
  [{
     element: <AppLayout />,
      children: [
        { path: "/", element: <LandingPage /> },
      ]
  }]
)
function App() {
  return (
   <Button>Button</Button>
  )
}

export default App