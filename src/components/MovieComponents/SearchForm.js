import React, { useState, useContext, Suspense, lazy } from "react";
import { languages, genres } from "../../constants/index";
import "../../styles/Login.css";

import MovieContext from "../../contexts/movieContext/MovieContext";

const ReusableDropdown = lazy(() => import("../ReusableDropdown"));

const SearchForm = () => {
  const { fetchMoviesData } = useContext(MovieContext);
  const [language, setLanguage] = useState("");
  const [genre, setGenre] = useState("");

  const languageChangeHandler = (e) => {
    setLanguage(e.target.value);
  };
  const genreChangeHandler = (e) => {
    setGenre(e.target.value);
  };

  const dropDownSubmitHandler = (e) => {
    e.preventDefault();

    fetchMoviesData(language, genre);
  };
  return (
    <form
      className="login-form"
      style={{ height: "0", marginTop: "0", marginBottom: "0" }}
      onSubmit={dropDownSubmitHandler}
    >
      <select
        className="select-style"
        value={language}
        onChange={languageChangeHandler}
      >
        <Suspense fallback={<p>loading...</p>}>

          <ReusableDropdown list={languages} title={"Language"} />
        </Suspense>
      </select>
      <select
        className="select-style"
        value={genre}
        onChange={genreChangeHandler}
      >
        <Suspense fallback={<p>loading...</p>}>

          <ReusableDropdown list={genres} title={"Genre"} />
        </Suspense>
      </select>
      <input type="submit" value={"Search"} className="login-button" />
    </form>
  );
};

export default SearchForm;
