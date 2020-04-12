import React, {useEffect, useState} from "react";
import api  from "./services/api";
import "./styles.css";

function App() {
  const[repositories,setRepository]=useState([]);

  useEffect(()=>{
    const getRepository = async ()=>{
        const {data} = await api.get('repositories');
        setRepository(data);
    }
    getRepository();
  },[])

  async function handleAddRepository() {
    const response = await api.post('repositories',{
        url: "https://github.com/josepholiveira",
        title: "Desafio ReactJS",
        techs: ["React", "Node.js"],
    })
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
