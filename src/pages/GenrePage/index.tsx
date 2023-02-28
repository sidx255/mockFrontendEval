import React from 'react';
import './GenrePage.css';

import makeRequest from '../../utils/makeRequest';

import { GET_SONGS_DATA, GET_1SONG_DATA } from '../../constants/apiEndPoints';

import Card from '../../components/Card';
const GenreBollywood = '/assets/genre-bollywood.png';
const GenreCountry = '/assets/genre-country.png';
const GenrePop = '/assets/genre-pop.png';
const GenreRock = '/assets/genre-rock.png';
import GenreSongs from '../../components/GenreSongs';

const GenrePage = () => {
    const [records, setRecords] = React.useState<Array<[]>>([]);
    const [genre, setGenre] = React.useState('all');


    React.useEffect(() => {
        makeRequest(GET_SONGS_DATA(), {
            headers: { authorization: 'Bearer ' + 'WWFzaGkgTWlzcmE=' },
        }).then((res: any) => {
            setRecords(res.data);
            //console.log(res.data);
        }).catch((err: any) => {
            console.log(err);
        });
    }, []);

    // // show cards based on genre
    // const showCards = (genre: string) => {
    //     setGenre(genre);
    // };

    // array of unique genres
    // const genres = records.map((record: any) => record.genre.name);
    // const uniqueGenres = [...new Set(genres)];

    // eslint-disable-next-line prefer-const
    let uniqueGenres:any = [];
    records.forEach((song:any) => {
        if (!uniqueGenres.includes(song.genre.name)) {
            uniqueGenres.push(song.genre.name);
        }
    });

    // songs of a particular genre
    const songsByGenre:any = {};
    uniqueGenres.forEach((genre:any) => {
        songsByGenre[genre] = [];
    });

    records.forEach((record: any) => {
        songsByGenre[record.genre.name].push(record);
    });

    // console.log(songsByGenre);

    const genreIcons:any = {
        Bollywood: GenreBollywood,
        Country: GenreCountry,
        Pop: GenrePop,
        Rock: GenreRock,
    };

    return (
        <div className="genre-content">
            {uniqueGenres.map((genre: any) => (
                <GenreSongs
                    key={genre}
                    genre={genre}
                    songs={songsByGenre[genre]}
                    genreImage={genreIcons[genre]}
                />
            ))}
        </div>
    );
};

export default GenrePage;