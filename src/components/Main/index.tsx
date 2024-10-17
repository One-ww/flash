import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import ErrorBoundary from "@/components/ErrorBoundary";

import styles from "./index.scss";

const Home = lazy(() => import("@/pages/Home"));
const Articles = lazy(() => import("@/pages/Articles"));
const Classes = lazy(() => import("@/pages/Classes"));
const Tags = lazy(() => import("@/pages/Tags"));
const Say = lazy(() => import("@/pages/Say"));
// const Msg = lazy(() => import( '@/pages/Msg'));
const Link = lazy(() => import("@/pages/Link"));
const Show = lazy(() => import("@/pages/Show"));
const Log = lazy(() => import("@/pages/Log"));
const About = lazy(() => import("@/pages/About"));
const Post = lazy(() => import("@/pages/Post"));
const ArtDetail = lazy(() => import("@/pages/ArtDetail"));

const ParticleClock = lazy(() => import("@/pages/ShowSubPage/particle-clock"));
const ParallaxEffectRotation = lazy(
  () => import("@/pages/ShowSubPage/parallax-effect-rotation")
);
const ThreeDimensionalCard = lazy(
  () => import("@/pages/ShowSubPage/three-dimensional-card")
);
const CustomizedClassSchedule = lazy(
  () => import("@/pages/ShowSubPage/customized-class-schedule")
);
const ThreeDimensionalSwiper = lazy(
  () => import("@/pages/ShowSubPage/three-dimensional-swiper")
);
const CustomCoffee = lazy(() => import("@/pages/ShowSubPage/custom-coffee"));

const Main: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <ErrorBoundary>
          <Suspense fallback={<></>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/classes" element={<Classes />} />
              <Route path="/tags" element={<Tags />} />
              <Route path="/say" element={<Say />} />
              <Route path="/link" element={<Link />} />

              <Route path="/show" element={<Show />} />
              <Route path="/particle-clock" element={<ParticleClock />} />
              <Route
                path="/parallax-effect-rotation"
                element={<ParallaxEffectRotation />}
              />
              <Route
                path="/three-dimensional-card"
                element={<ThreeDimensionalCard />}
              />
              <Route
                path="/customized-class-schedule"
                element={<CustomizedClassSchedule />}
              />
              <Route
                path="/three-dimensional-swiper"
                element={<ThreeDimensionalSwiper />}
              />
              <Route path="/custom-coffee" element={<CustomCoffee />} />

              <Route path="/log" element={<Log />} />
              <Route path="/about" element={<About />} />
              <Route path="/post" element={<Post />} />
              <Route path="/artDetail" element={<ArtDetail />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </div>
    </main>
  );
};

export default Main;
