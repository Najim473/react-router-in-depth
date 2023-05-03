import { createBrowserRouter, Routes, Route, NavLink, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
// LAYOUTS 
import RootLayout from "./layouts/RootLayout";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    )
  )
  return < RouterProvider router={router} />
}

export default App;
