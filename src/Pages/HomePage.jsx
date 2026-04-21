import { lazy, Suspense } from "react";
import SkeletonLoader from "../Components/SkeletonLoader";

const Herosection = lazy(() => import("../Components/Herosection"));
const AboutSection = lazy(() => import("../Components/AboutSection"));
const ServiceSection = lazy(() => import("../Components/ServiceSection"));
const WhySection = lazy(() => import("../Components/WhySection"));
const BannerSection = lazy(() => import("../Components/BannerSection"));

const HomePage = () => {
  return (
    <>
    <Suspense fallback={<SkeletonLoader />}><Herosection /></Suspense>
    <Suspense fallback={<SkeletonLoader />}><AboutSection /></Suspense>
    <Suspense fallback={<SkeletonLoader />}><ServiceSection /></Suspense>
    <Suspense fallback={<SkeletonLoader />}><WhySection /></Suspense>
    <Suspense fallback={<SkeletonLoader />}><BannerSection /></Suspense>
    </>
  )
}

export default HomePage
