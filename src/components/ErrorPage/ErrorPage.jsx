import { Link } from "react-router-dom";
import "./ErrorPage.css";

export default function LayoutError() {
  return (
    <div className="error-page">
      <div className="error-content">
        <h1>404</h1>
        <h2>Página não encontrada!</h2>
        <p>A página que você está tentando acessar não existe.</p>
        <Link to="/" className="error-button">
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
}
