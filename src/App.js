
import './App.css';
import Apostas from './components/apostas';
import Footer from './components/footer';
import NavBar from './components/navbar';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <main>
          <div>
            <form>
              <div className="mb-3 row ">
                <div className="mx-auto col-auto d-flex flex-column justify-content-center">
                  <input placeholder="Quantidade de jogos" type="number" className="form-control" id="inputAposta" aria-describedby="qtdAposta" min="1" />
                  <div className="col form-text" id="qtdAposta" >
                    Informe quantos jogos quer gerar
                  </div>
                  <button className="btn btn-success w-auto mt-3">
                    Gerar
                  </button>
                </div>
              </div>
            </form>
          </div>

          <Apostas quantidadeApostaProps={7} />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
