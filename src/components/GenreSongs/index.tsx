import React from 'react';
import Card from '../Card';
import { GenreType } from '../../types/genreType';
import './GenreSongs.css';

const SongsOfGenre = (props: GenreType) => {
    return (
        <div className="songs-genre">
            <div className="genre-details">
                <img src={props.genreImage} alt={props.genre} />

                <div className='genre-name'><p>{props.genre}</p></div>
                {/* <ButtonGenre genre={props.genre} /> */}
            </div>
            <br></br><br></br>
            <div className="songs-genre-content">
                {props.songs.map((song: any, idx) => (
                    <Card key={idx} {...song}/>
                ))}
            </div>
            <br></br><br></br>
        </div>
    );
};

export default SongsOfGenre;