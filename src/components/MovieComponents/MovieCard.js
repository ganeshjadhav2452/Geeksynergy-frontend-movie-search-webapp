import React from 'react';
import '../../styles/MovieCard.css';

const MovieCard = (props) => {
    const { description, genre, language, poster, releasedDate, stars, title } = props;

    const formatedDate = new Date(releasedDate * 1000)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formatted = formatedDate.toLocaleDateString('en-US', options);
    return (
        <div className="movie-card">
            <img src={poster} alt={title} className="movie-card-img" />
            <div className="movie-card-content">
                <h3 className="movie-card-title">{title}</h3>
                <div className='info-container'>


                    <p className="detail"><b>Genre:</b> {genre}</p>
                    <p className="detail"><b>Release :</b> {formatted}</p>
                    <p className="detail"><b>Language:</b> {language}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
