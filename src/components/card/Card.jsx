export default function Card({ item }) {

    const { title, name, original_title, original_name, vote_average, original_language, poster_path } = item

    return (
        <div>
            <h3>{title || name}</h3>
            <p>{original_title || original_name}</p>
            <p>{original_language}</p>
            <p>{vote_average}</p>
        </div>
    )
}