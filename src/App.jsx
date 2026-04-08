import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MainLayout from "./Layout/MainLayout";
import AbooutPage from "./Pages/AbooutPage";
import ServicePage from "./Pages/ServicePage";
import BookingPage from "./Pages/BookingPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AbooutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
};

export default App;

 