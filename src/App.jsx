// App é o componente raiz: monta a página juntando os três componentes.
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    // Fragment (<>...</>) agrupa os elementos sem criar uma <div> extra no DOM.
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;