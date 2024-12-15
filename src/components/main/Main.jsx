import { useContext } from "react"
import Sections from "../sections/Sections"
import globalContext from "../../contex/contex"

export default function Main() {

    const { filmList, seriesList } = useContext(globalContext)

    return (
        <main>
            <Sections value={filmList} />
            <Sections value={seriesList} />
        </main>
    )
}