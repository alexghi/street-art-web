import './App.css'

import data from './data/data.js'

function App() {
    return (
        <div>
            {data.map((streetArtItem) => {
                const {id, title, description} = streetArtItem
                return <div key={id}>
                    <h2>{title}</h2>
                    <h4>{description}

                    </h4>
                </div>
            })}
        </div>
    )
}

export default App
