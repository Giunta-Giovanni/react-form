export default function Main() {
    // Creare una pagina che visualizzi una lista di articoli, mostrandone solo il titolo.
    const articoli = ["Tazza in ceramica", "Taccuino con copertina rigida", "Set di pennelli per acrilici", "Gioco da tavolo cooperativo fantasy", "Punta a tazza da 20 mm"]
    return (
        <main>
            <div className="container">
                <ul>
                    {articoli.map((articolo, index) => (
                        <li key={index}>
                            articolo numero {index}: {articolo}
                        </li>
                    ))}
                </ul>

            </div>
        </main>
    )

}