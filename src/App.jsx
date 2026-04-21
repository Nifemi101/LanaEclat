import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "./Layout/MainLayout";
import SkeletonLoader from "./Components/SkeletonLoader";

const HomePage = lazy(() => import("./Pages/HomePage"));
const AbooutPage = lazy(() => import("./Pages/AbooutPage"));
const ServicePage = lazy(() => import("./Pages/ServicePage"));
const BookingPage = lazy(() => import("./Pages/BookingPage"));

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Suspense fallback={<SkeletonLoader />}><HomePage /></Suspense>} />
        <Route path="/about" element={<Suspense fallback={<SkeletonLoader />}><AbooutPage /></Suspense>} />
        <Route path="/services" element={<Suspense fallback={<SkeletonLoader />}><ServicePage /></Suspense>} />
        <Route path="/booking" element={<Suspense fallback={<SkeletonLoader />}><BookingPage /></Suspense>} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
};

export default App;

 