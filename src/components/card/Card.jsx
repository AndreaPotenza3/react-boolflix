import itFlag from '../../assets/itFlag.webp'
import enFlag from '../../assets/enFlag.avif'
import frFlag from '../../assets/frFlag.jpg'
import deFlag from '../../assets/deFlag.webp'
import placeHolder from '../../assets/placeholder-1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'

export default function Card({ item }) {

    const [isHovered, setIsHovered] = useState(false)

    function handleOnHover() {
        setIsHovered(true)

    }

    function handleOffHover() {
        setIsHovered(false)
    }

    const flags = {
        it: itFlag,
        en: enFlag,
        fr: frFlag,
        de: deFlag,
    }

    const { title, name, original_title, original_name, vote_average, original_language, poster_path, overview } = item
    const img_url = 'https://image.tmdb.org/t/p/w342'
    const roundNumber = Math.ceil(vote_average / 2)
    const stars = new Array(5)

    for (let i = 0; i < stars.length; i++) {
        stars[i] = <FontAwesomeIcon key={i} icon={i < roundNumber ? faStar : regularStar} />;

    }

    return (
        <div onMouseEnter={handleOnHover} onMouseLeave={handleOffHover} className='card'>
            <img className='card-img' src={poster_path ? img_url + poster_path : placeHolder} alt="" />
            {isHovered === true ? <div className='card-details'>
                <h3>{title || name}</h3>
                <p>{original_title || original_name}</p>
                <div className='languages'>
                    <strong>Language:</strong> <img src={flags[original_language]} height='15' alt="" />
                </div>
                <div>
                    <strong>Rating:</strong> <span className='stars'>{stars}</span>
                </div>
                <p><strong>Overview:</strong> {overview}</p>
            </div> : ''}
        </div >
    )
}