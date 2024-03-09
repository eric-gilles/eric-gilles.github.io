import './App.css';

function App() {
    return (
        <div>
            <Accueil />
        </div>
    );
}

export default App;

function Accueil() {
  return (
      <section className="section">
          <div className="container">
              <h1 className="title">Bienvenue sur mon portfolio !</h1>
              <p className="subtitle">Découvrez mes projets informatiques.</p>
              <p>Salut !!!</p>
              GO sur <a href='https://github.com/eric-gilles'>mon github</a>
          </div>
      </section>
  );
}