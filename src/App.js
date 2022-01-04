
import './App.css';
import Apostas from './components/apostas';
import Footer from './components/footer';
import NavBar from './components/navbar';

import { useEffect, useState } from "react";
import axios from 'axios';

function App() {
  const URL_BASE_PROD = process.env.REACT_APP_BACKEND_URL ?
    process.env.REACT_APP_BACKEND_URL :
    'http://localhost:8080'

  axios.defaults.baseURL = URL_BASE_PROD
  const [apostas, setApostas] = useState([])
  const [quantidadeAposta, setQuantidadeAposta] = useState(0)
  const [url, setUrl] = useState(`/gerar-apostas/${quantidadeAposta}`)

  useEffect(() => {
    axios.get(url)
      .then(response => {
        const results = response.data.map(aposta => {
          const id = Math.random().toString(36);
          return { id, ...aposta }
        })

        console.log("passei")
        setApostas(results);
      })
  }, [url])

  const handleApostas = () => {
    setUrl(`/gerar-apostas/${quantidadeAposta}`)
  }

  return (
    <>
      <NavBar />
      <div className="container">
        <main>
          <div>
            <form>
              <div className="mb-3 row ">
                <div className="mx-auto col-auto d-flex flex-column justify-content-center">
                  <input placeholder="Quantidade de jogos" type="number" className="form-control" id="inputAposta" aria-describedby="qtdAposta" min="1"
                    value={quantidadeAposta}
                    onChange={(event) => setQuantidadeAposta(event.target.value)}
                  />

                  <div className="col form-text" id="qtdAposta" >
                    Informe quantos jogos quer gerar
                  </div>

                  <button type="button" onClick={() => handleApostas()} className="btn btn-success w-auto mt-3">
                    Gerar
                  </button>
                </div>
              </div>
            </form>
          </div>

          <Apostas apostas={apostas} />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
