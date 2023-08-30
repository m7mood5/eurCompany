import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import Error from "./components/Error";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Gallary from "./pages/Gallary";
import Contact from "./components/Content/Contact";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index="true" element={<Home />} />
        <Route path="homeEv" element={<Work />} />
        <Route path="*" element={<Error />} />
        <Route path="contact" element={<Contact />} />
        <Route path="galary/work1" element={<Gallary />} />
        <Route path="galary/work2" element={<Gallary />} />
        <Route path="galary/work3" element={<Gallary />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
