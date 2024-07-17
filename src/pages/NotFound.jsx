import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
	return (
		<div className="hero">
			<div className="text-center hero-content">
				<div className="max-w-lg">
					<h1 className="text-8xl font-bold mb-9">Opa!</h1>
					<p className="text-5xl mb-8">Erro 404 - Página não encontrada :/</p>
					<Link to="/" className="btn btn-primary btn-lg">
						<FaHome className="mr-2" />
						Voltar ao início
					</Link>
				</div>
			</div>
		</div>
	);
}

export default NotFound;
