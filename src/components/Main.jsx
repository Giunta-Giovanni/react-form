import { useState } from "react"
export default function Main() {
    // Creare una pagina che visualizzi una lista di articoli, mostrandone solo il titolo.

    //Aggiungiamo in pagina un semplice form con un campo input in cui inserire il titolo di un nuovo articolo del blog. Al submit del form, mostrare la lista degli articoli aggiornati.

    // array di articoli
    const articoli = ["Tazza in ceramica", "Taccuino con copertina rigida", "Set di pennelli per acrilici", "Gioco da tavolo cooperativo fantasy", "Punta a tazza da 20 mm"]

    // Stato per memorizzare il valore dell'articolo
    const [articol, setArticol] = useState(articoli);
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
        event.preventDefault()
        // this
        // const updatedArticol = { ...articol, newArticol };
        // setArticol(updatedArticol);

        // Aggiungi il nuovo articolo all'array esistente
        setArticol([...articol, newArticol]);
        // Resetta l'input dopo l'aggiunta
        setNewArticol('')

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
                    {articol.map((articolo, index) => (
                        <li key={index}>
                            articolo numero {index}: {articolo}
                        </li>
                    ))}
                </ul>


            </div>
        </main>
    )

}