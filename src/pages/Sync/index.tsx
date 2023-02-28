
import React from 'react';
import './Sync.css';

const Sync = ({setIsClicked}: any) => {
    return(
        <div className='body'>
            <div className='box'>
                <div className='sync-page'>
                    <h1>:((</h1>
                    <h2>Seems a bit empty in here.</h2>
                    <br /><br />
                    <button className='sync-button' onClick={() => 
                        setIsClicked(true)}>sync
                    </button>
                </div>
            </div>
        </div>
    );
}; 

export default Sync;