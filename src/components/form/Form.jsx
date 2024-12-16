import { useContext } from 'react'
import globalContext from '../../context/context'


export default function Form() {

    const { query, setQuery, fetchData } = useContext(globalContext)

    function onchange(e) {
        setQuery(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault()
        fetchData()
    }
    return (
        <form className='form' onSubmit={onSubmit}>
            <input className='form-input' type="text" name="query" id="query" value={query} onChange={onchange} placeholder='Cerca' />
            <button className='form-button'>Cerca</button>
        </form>
    )
}