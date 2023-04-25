import React from 'react'
import './styles/Album.scss'

function Album({ albums }) {
    return (
        <div className='albums'>
            {
                albums.map((album, i) => (
                    <div className={`album _${i + 10}`} key={i} >
                        <img src={album.imgSrc} alt="" />
                        <span>{album.title}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Album;
