// Importa o CSS específico deste componente (estilos separados, sem inline).
import "./Header.css";

// Header é um componente funcional. Como só exibe um título fixo,
// não precisa de estado nem de props — retorna apenas JSX.
function Header() {
  return (
    // <header> é a tag semântica correta para o topo da página (acessibilidade/SEO).
    <header className="header">
      {/* Título da loja fictícia. */}
      <h1 className="header__title">Shoppy</h1>
    </header>
  );
}

export default Header;