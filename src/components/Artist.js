import React, {Component} from 'react';

const Artist = props => {

    if (!props.artist) {
        return null;
    }

    const { followers,  genres, images, name } = props.artist;

    return (
        <div>
            <h3>{name}</h3>
            <p>{followers.total} followers</p>
            <p>{genres.join(',')}</p>
            <img 
            src={images[0] && images[0].url} 
            alt='artist-profile'
            style={{
                width: 150,
                height: 150,
                borderRadius: 75
            }}
            />
        </div>
    )
}

export default Artist;