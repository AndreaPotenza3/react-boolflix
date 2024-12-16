import itFlag from '../../assets/itFlag.webp'
import enFlag from '../../assets/enFlag.avif'
import frFlag from '../../assets/frFlag.jpg'
import deFlag from '../../assets/deFlag.webp'

export default function Card({ item }) {

    const flags = {
        it: itFlag,
        en: enFlag,
        fr: frFlag,
        de: deFlag,
    }

    const { title, name, original_title, original_name, vote_average, original_language, poster_path } = item

    return (
        <div>
            <h3>{title || name}</h3>
            <p>{original_title || original_name}</p>
            <img src={flags[original_language]} height='20' alt="" />
            <p>{vote_average}</p>
        </div>
    )
}