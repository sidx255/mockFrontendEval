import React from 'react';
import './HomePage.css';
import makeRequest from '../../utils/makeRequest';
import { GET_SONGS_DATA, GET_1SONG_DATA } from '../../constants/apiEndPoints';


import Card from '../../components/Card';
import Sync from '../Sync';
import GenrePage from '../GenrePage';

// const instance = axios.create({
//     baseURL: 'http://localhost:8080/',
//     headers: {'Authorization': 'Bearer '+'WWFzaGkgTWlzcmE='}
// });

const Home = () => {
    const [records, setRecords] = React.useState<Array<[]>>([]);
    const [isClicked, setIsClicked] = React.useState(false);
    const [genreClicked, setGenreClicked] = React.useState(false);

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

    //console.log(records);

    return (
        (isClicked) ? 
            (!genreClicked) ?
                <div className='body'>
                    <div className='home-page'>
                        <div className='dark-bg'>
                        
                            <div className='util-bar'>
                                <div className='title'>
                                    <p>all songs</p>
                                </div>
                                <div className='genre-button'>
                                    <img src='/assets/icon-genre.svg' onClick={() =>setGenreClicked(true)}/>
                                </div>
                            </div>
                            <div className='cards'>
                                {/* {records.map((record: any, idx: number) => (
                                    <Card key={idx} {...record}/> */}
                                {records.map((record: any, idx: number) => (
                                    <Card key={idx} {...record}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className='body'>
                    <div className='home-page'>
                        <div className='dark-bg'>
                            <div className='util-bar'>
                                <div className='title'>
                                    <p>genres</p>
                                </div>
                                <div className='genre-button'>
                                    <img src='/assets/icon-grid.svg' onClick={() =>setGenreClicked(false)}/>
                                </div>
                            </div>
                            <div className='cards'>
                                <GenrePage/>
                            </div>

                        </div>
                    </div>
                </div>

            :<div>
                <Sync setIsClicked={setIsClicked}/>
            </div>
    );
};

export default Home;