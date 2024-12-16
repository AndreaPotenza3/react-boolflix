import Card from "../Card/Card";

export default function Sections({ items = [], title }) {

    return (

        <section>
            <div className="container">
                <h2>{title}</h2>
            </div>
            <div className="container">
                <ul>
                    {items.map((item) => (
                        <li key={items.id}>
                            <Card item={item} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}