import React, {useEffect, useState} from "react";

import "./styles.css";

function App() {
  const[repositories,setRepository]=useState([]);
  async function handleAddRepository() {
    // TODO
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {
          repositories.map(({id, title})=>(
              <li key={id}>
                  {title}

                <button onClick={() => handleRemoveRepository(id)}>
                  Remover
                </button>
              </li>
          ))
        }

      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
