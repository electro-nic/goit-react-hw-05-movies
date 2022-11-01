import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ThreeDots } from 'react-loader-spinner';

const Home = lazy(() => import("./pages/Home/Home"));
const Movies = lazy(() => import("./pages/Movies/Movies"));
const Navbar = lazy(() => import("./NavBar/NavBar"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const SingleMoviePage = lazy(() => import("./pages/SingleMoviePage/SingleMoviePage"));
const Cast = lazy(() => import("./pages/SingleMoviePage/Cast/Cast"));
const Reviews = lazy(() => import("./pages/SingleMoviePage/Reviews/Reviews"));

export const UserRoute = () => {
    return (
        <>
            <Navbar/>
            <Suspense fallback={<ThreeDots 
                                height="90" 
                                width="90" 
                                radius="10"
                                color="#674aaa" 
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={true}
                                />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/movies/:id" element={<SingleMoviePage />}>
                    <Route path="cast" element={<Cast />} />
                    <Route path="reviews" element={<Reviews />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
                </Routes>
                </Suspense>
        </>
  );
};
