import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";


const MovieContext = createContext();


export const MovieContextProvider = ({ children }) => {
    const [movies, setMovies] = useState([])

    const fetchMoviesData = async (language, genre) => {
        const apiUrl = 'https://hoblist.com/api/movieList'
        try {
            const body = {
                "category": "movies",
                "language": language || '',
                "genre": genre || '',
                "sort": "voting"
            }
            const { data } = await axios.post(apiUrl, body)

            console.log(data.result)
            setMovies(data.result)
            toast.success('Movies Fethced Successfully :)')
        } catch (error) {
            toast.error('Sorry :( Error While Fetching Movies')
        }
    }

    return <MovieContext.Provider value={{ movies, fetchMoviesData }}>{children}</MovieContext.Provider>
}

export default MovieContext;