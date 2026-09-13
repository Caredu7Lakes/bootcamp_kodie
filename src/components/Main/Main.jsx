// useState -> guarda dados que mudam ao longo do tempo (aqui, a lista de produtos).
// useEffect -> executa "efeitos colaterais" (ex.: buscar dados) em momentos definidos.
import { useState, useEffect } from "react";
// Axios: cliente HTTP para fazer a requisição à API.
import axios from "axios";
import "./Main.css";

function Main() {
  // products: estado que armazena os produtos vindos da API.
  // setProducts: função que atualiza esse estado e re-renderiza o componente.
  // [] é o valor inicial (lista vazia, antes da API responder).
  const [products, setProducts] = useState([]);

  // useEffect com array de dependências vazio ([]) roda UMA vez,
  // logo após o componente ser montado na tela.
  useEffect(() => {
    // Requisição GET básica. A resposta do axios traz os dados em `res.data`.
    // Sem tratamento de erro (try/catch/.catch), conforme o escopo didático.
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data); // popula o estado com a lista recebida
    });
  }, []);

  return (
    // <main> é a região de conteúdo principal da página (semântica/acessibilidade).
    <main className="main">
      {/* .map() percorre a lista e cria um card para cada produto. */}
      {products.map((product) => (
        // key: identificador único que o React usa para otimizar a renderização da lista.
        <article className="card" key={product.id}>
          {/* alt descritivo -> essencial para leitores de tela (acessibilidade). */}
          <img
            className="card__image"
            src={product.image}
            alt={product.title}
          />

          {/* Título do produto. */}
          <h2 className="card__title">{product.title}</h2>

          {/* Preço formatado com 2 casas decimais. */}
          <p className="card__price">${product.price.toFixed(2)}</p>

          {/* Descrição do produto. */}
          <p className="card__description">{product.description}</p>
        </article>
      ))}
    </main>
  );
}

export default Main;