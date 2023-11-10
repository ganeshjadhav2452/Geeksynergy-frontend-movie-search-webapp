import React, { useContext, useEffect, Suspense, lazy } from "react";

import Layout from "../../components/Layout/Layout";
import "../../styles/Movies.css";
import MovieContext from "../../contexts/movieContext/MovieContext";

// lazy loaded components
const SearchForm = lazy(() => import("../../components/MovieComponents/SearchForm"));
const MovieCard = lazy(() => import("../../components/MovieComponents/MovieCard"));
const Movies = () => {
    const { movies, fetchMoviesData } = useContext(MovieContext);

    useEffect(() => {
        fetchMoviesData();
    }, []);
    return (
        <Layout>
            <div className="movie-list-screen">
                <h1 className="screen-title">Movie List</h1>
                <Suspense fallback={<p>loading...</p>}>
                    <SearchForm />
                </Suspense>
                <div className="movie-list">
                    {!movies && <h1 className="screen-title">No Movies Found</h1>}
                    {movies?.map((movie, index) => (
                        <Suspense fallback={<p>loading...</p>}>
                            <MovieCard key={index} {...movie} />
                        </Suspense>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Movies;
