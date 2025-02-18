import { useState } from "react"
export default function Main() {
    // Creare una pagina che visualizzi una lista di articoli, mostrandone solo il titolo.

    //Aggiungiamo in pagina un semplice form con un campo input in cui inserire il titolo di un nuovo articolo del blog. Al submit del form, mostrare la lista degli articoli aggiornati.

    // array di articoli
    const articoli = ["Tazza in ceramica", "Taccuino con copertina rigida", "Set di pennelli per acrilici", "Gioco da tavolo cooperativo fantasy", "Punta a tazza da 20 mm"]

    // Stato per memorizzare il valore dell'articolo
    const [articols, setArticols] = useState(articoli);
    // console.log(articol)

    // Stato per memorizzare il valore del nuovo articolo
    const [newArticol, setNewArticol] = useState('')

    // Gestione dell'invio del form, con rimozione dell'aggiornamento pagina 
    // const handleSubmit = event => {
    //     event.preventDefault();
    //     console.log(`l'articolo inviato è ${articol}`)
    // }

    // Gestione dell'invio del form, con rimozione dell'aggiornamento pagina e aggiunta nuovo elemento alla lista
    const addArticol = event => {
        event.preventDefault();
        // this
        // const updatedArticol = { ...articol, newArticol };
        // setArticol(updatedArticol);

        // Aggiungi il nuovo articolo all'array esistente
        setArticols([...articols, newArticol]);
        // Resetta l'input dopo l'aggiunta
        setNewArticol('');
    }

    // Gestione della rimozione di un elemento della lista
    const removeArticol = i => {
        const updateArticol = articols.filter((articol, index) => {
            return index !== i
        })
        setArticols(updateArticol);
    }

    return (
        <main>
            <div className="container">
                {/* inseriamo al form l'evento onSubmit */}
                <form onSubmit={addArticol}>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Inserire il nuovo articolo"
                            value={newArticol}
                            // Aggiorna lo stato 'articol' con il valore inserito dall'utente nell'input
                            onChange={event => {
                                setNewArticol(event.target.value)
                            }}
                        />
                        <button className="btn btn-outline-secondary" >
                            Add
                        </button>
                    </div>

                </form>


                <ul>
                    {articols.map((articolo, index) => (
                        <li className="articolo" key={index}>
                            <span>{articolo}</span>
                            <button
                                className="btn-close"
                                aria-label="Close"
                                onClick={() => removeArticol(index)}>

                            </button>

                        </li>
                    ))}
                </ul>


            </div>
        </main>
    )

}