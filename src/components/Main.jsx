import { useState } from "react"
export default function Main() {
    // Creare una pagina che visualizzi una lista di articoli, mostrandone solo il titolo.

    //Aggiungiamo in pagina un semplice form con un campo input in cui inserire il titolo di un nuovo articolo del blog. Al submit del form, mostrare la lista degli articoli aggiornati.

    // array di articoli
    const articoli = [
        { id: 1, titolo: "Tazza in ceramica" },
        { id: 2, titolo: "Taccuino con copertina rigida" },
        { id: 3, titolo: "Set di pennelli per acrilici" },
        { id: 4, titolo: "Gioco da tavolo cooperativo fantasy" },
        { id: 5, titolo: "Punta a tazza da 20 mm" }
    ];

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

        // 1. Aggiungi il nuovo articolo all'array esistente
        // setArticols({ ...articols, newArticol });

        // 2. Aggiungi il nuovo articolo all'array di oggetti
        // new id inizialmente vuota
        let newId = null;

        // condizione per non avere errore se l'array è vuoto
        { articols.length === 0 ? newId = 1 : newId = articols[articols.length - 1].id + 1; }
        // crea il nuovo oggetto
        const newItems = {
            id: newId,
            titolo: newArticol
        }
        // aggiorna l'array
        setArticols([...articols, newItems])

        // Resetta l'input dopo l'aggiunta
        setNewArticol('');
    }

    // Gestione della rimozione di un elemento della lista
    const removeArticol = i => {

        // filtra sull'array
        const updateArticol = articols.filter(articol => {
            // ritornami tutti gli oggetti con id diverso da quello selezionato
            return articol.id !== i
        })
        // aggiorna l'array 
        setArticols(updateArticol);
    }

    // console.log(articols)

    return (
        <main>
            {/* contenitore esterno */}
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

                { }

                <ul>
                    {articols.map((articolo) => (
                        <li className="articolo" key={articolo.id}>
                            <span>{articolo.titolo}</span>
                            <button
                                className="btn-close"
                                aria-label="Close"
                                onClick={() => removeArticol(articolo.id)}>

                            </button>

                        </li>
                    ))}
                </ul>


            </div>
        </main>
    )

}
