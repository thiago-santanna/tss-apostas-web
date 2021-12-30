
import './App.css';
import Apostas from './components/apostas';
import Footer from './components/footer';
import NavBar from './components/navbar';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <p className="">Geração de apostas</p>
        <main className="content">
          <form className="for">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Quantidade de apostas</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">Informe a Quantidade de apostas que deseja gerar. Boa sorte!</div>
            </div>

            <div className="d-flex gap-3 btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-primary">Gerar apostas</button>
              <button type="button" className="btn btn-danger">Limpar apostas</button>
            </div>
          </form>
          <Apostas />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
