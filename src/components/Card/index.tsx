import React from 'react';
import makeRequest from '../../utils/makeRequest';

import { GET_1SONG_DATA, PATCH_1SONG_DATA } from '../../constants/apiEndPoints';
import './Card.css';

const Card = ({
    id, name, genre, artist, album, imageUrl  }
    : { id:string; name:string; genre:string; artist:any; album:string; imageUrl:string;
    }
) => {

    // like button
    const [isLiked, setIsLiked] = React.useState(false);
    const [likeCount, setLikeCount] = React.useState(0);

    React.useEffect(() => {
        makeRequest(GET_1SONG_DATA(id), {
            headers: { authorization: 'Bearer ' + 'WWFzaGkgTWlzcmE=' },
        }).then((res: any) => {
            setLikeCount(res.data.count);
            setIsLiked(res.data.like);
        }).catch((err: any) => {
            console.log(err);
        });
    }, []);

    const handleLike = () => {
        handlePatch({
            liked: !isLiked
        });
        setIsLiked(!isLiked);
        if (isLiked) {
            setLikeCount(likeCount - 1);
        } else {
            setLikeCount(likeCount + 1);
        }
    };

    const handlePatch = (obj: any) => {
        makeRequest(PATCH_1SONG_DATA(id), {

            headers: { 
                'Authorization': 'Bearer WWFzaGkgTWlzcmE=', 
                'Content-Type': 'application/json'
            },
            data : JSON.stringify({
                'like': obj.liked
            })
            
        })
            .then((res: any) => {
                console.log(res);
            }).catch((err: any) => {
                console.log(err);
            }
            );
    };

    return (
        <div className='card'>
            <div className='card-body'>
                <div className='cover'>
                    {/* image tag */}
                    <img src={imageUrl} alt='cover' width={180} height={180} style={{borderRadius: '50%'}}/>
                </div>
                <div className='song-name'>
                    <h5>{name}</h5>
                </div>
                <h6 className='artist'>{artist.name}</h6>

                <div className='like-button' onClick={handleLike}> 
                    {
                        isLiked?
                            <img src='/assets/heart-red.svg' alt='heart' width={20} height={20} style={{marginRight: '5px'}}/>
                            :<img src='/assets/heart-gray.svg' alt='heart' width={20} height={20} style={{marginRight: '5px'}}/>
                    }
                </div>
                <div className='like-count'>
                    <p>{likeCount}</p>
                </div>
            </div>
        </div>
        // <div>
        //     {JSON.stringify({id, name, genre, artist, album, imageUrl})}
        // </div>
    );
};

export default Card;