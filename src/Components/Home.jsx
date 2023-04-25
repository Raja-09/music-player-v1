import React from 'react'
import './styles/Home.scss'
import bgDisc from "../assets/images/bg-disc.png"
import Album from './Album'
import album1 from "../assets/images/album1.png"
import album2 from "../assets/images/album2.png"
import album3 from "../assets/images/album3.png"
import album4 from "../assets/images/album4.png"
import album5 from "../assets/images/Joji_-_Nectar.png";
import album6 from "../assets/images/ab67616d0000b27370f2ab5608885749f7210b5f.jpeg";
import album7 from "../assets/images/album7.png"
import album8 from "../assets/images/album8.png"
import album9 from "../assets/images/album9.png"
import album10 from "../assets/images/album10.png"


function Home() {
    const albums =
        [
            {
                imgSrc: album1,
                title: "Legends Never Die"
            },
            {
                imgSrc: album2,
                title: "Mercury"
            },
            {
                imgSrc: album3,
                title: "Starboy"
            },
            {
                imgSrc: album4,
                title: "Evolve"
            },
            {
                imgSrc: album5,
                title: "Nectar"
            },
            {
                imgSrc: album6,
                title: "FRANCHISE (feat. Young Thug & M.I.A.)"
            },
            {
                imgSrc: album8,
                title: "The End is Where we Begin"
            },

        ];
    const albums2 = [{
        imgSrc: album7,
        title: "Stellar"
    },
    {
        imgSrc: album9,
        title: "The Suicide Squad"
    },
    {
        imgSrc: album10,
        title: "Die For You"
    }
    ]

    return (
        <div className='container home-page'>
            <div className='banner'>

                <span className='banner-text'><span className="special-text">Unlimited Music</span> For all your <br /> desires</span>
                <img src={bgDisc} alt="" />
            </div>
            <div className="albums-content">
                <span className='content-descriptor'>Released this week <span></span></span>
                <div className="content">
                    <Album albums={albums} />
                </div>
                <span className='content-descriptor'>Featured Playlist <span></span></span>
                <div className="content">
                    <Album albums={albums2} />

                </div>
            </div>
        </div>
    )
}

export default Home
