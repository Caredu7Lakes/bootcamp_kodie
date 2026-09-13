import "./Footer.css";

// Componente simples de rodapé: apenas exibe um texto fixo.
function Footer() {
  return (
    // <footer> é a tag semântica para o rodapé da página.
    <footer className="footer">
      <p className="footer__text">Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;