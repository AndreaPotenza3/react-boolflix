import Card from "../Card/Card";

export default function Sections({ items = [], title }) {

    return (

        <section className="section-item">
            <div className="container">
                <h2 className="section-title">{title}</h2>
            </div>
            <div className="container">
                <ul className="list">
                    {items.map((item) => (
                        <li key={items.id}>
                            <Card className='card' item={item} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}