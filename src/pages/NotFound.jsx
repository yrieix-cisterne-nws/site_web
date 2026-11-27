import { Link } from "react-router-dom";
import { Meta } from "react-head";
import SEO from "../component/seo";

export default function NotFound () {
    return(
        <>
            <SEO
                title="Page introuvable | Yrieix Cisterne"
                description="La page que vous cherchez n'existe pas ou a été déplacée."
            />
            <Meta name="robots" content="noindex"/>
            <div className="flex flex-col gap-6 items-center text-center bg-surface sm:p-16 p-5 rounded-lg">
                <p className="text-6xl font-bold">404</p>
                <h1 className="text-3xl">Page introuvable</h1>
                <p>La page que vous cherchez n'existe pas ou a été déplacée.</p>
                <Link to="/" className="inline-block bg-primary hover:bg-accent transition-all duration-500 rounded-full py-2 px-4">Retour à l'accueil</Link>
            </div>
        </>
    )
}
