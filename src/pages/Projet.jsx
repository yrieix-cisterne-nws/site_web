import { Projet_image } from '../component/projet';
import data from '../data/projet.json';

export default function Projet () {
    return( 
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
    )
}