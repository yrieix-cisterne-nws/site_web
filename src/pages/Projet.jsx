import { Projet_image } from '../component/projet';
import data from '../data/projet.json';
import SEO from "../component/seo";

export default function Projet () {
    return( 
        <>
            <SEO 
                title="Projets | Yrieix Cisterne"
                description="Découvrez mes projets et réalisations en développement web. Applications React modernes, design responsive avec Tailwind CSS et intégration d’API. Des solutions performantes et optimisées pour l’expérience utilisateur."
                keywords="Yrieix Cisterne, Développeur web, Développeur React, Réalisations web, Portfolio projets, Applications web React, Projets front-end, API REST integration"
                canonical="https://yrieix-cisterne.fr/projet"
            />
        <div className='mx-auto bg-[#FAFAFA]'>
            <h1 className='sr-only'>Mes projets</h1>
            {data
            .filter((projet) => projet.visible)
            .map((projet, index) => {
                return <Projet_image
                index={index} 
                key={projet.id} 
                id ={projet.id}
                title={projet.title} 
                description={projet.description} 
                image={projet.image} 
                alt={projet.altImage} 
                link={projet.link} 
                linktext={projet.linktext}
                />
            })}
        </div>
        </>
    )
}