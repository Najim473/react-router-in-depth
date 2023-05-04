import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
// PAGES 
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq.jsx";
import Contact from "./pages/help/Contact.jsx";
import NotFound from "./pages/NotFound";
import Careers, { careersLoader } from "./pages/careers/Careers";
import CareerDetails, { careerDetailsLoader } from "./pages/careers/CareerDetails";
import CareerError from "./pages/careers/CareerError";

// LAYOUTS 
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import CareersLayout from "./layouts/CareersLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<HelpLayout />}>
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="careers"
          element={<CareersLayout />}
          errorElement={<CareerError />}>
          <Route
            index
            element={<Careers />}

            loader={careersLoader}
          />
          <Route
            path=":id"
            element={<CareerDetails />}

            loader={careerDetailsLoader}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )
  return < RouterProvider router={router} />
}

export default App;
