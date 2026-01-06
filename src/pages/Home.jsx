import { Linkedin, Github } from 'lucide-react'; 
import { Link } from 'react-router-dom';
import { Projethome } from '../component/projethome';
import { Texte } from '../component/texte';

export default function Home () {

    return(
        <div className="bg-[#FAFAFA]">
        <main className="mx-auto">
            <div className="flex flex-col gap-8 items-center justify-center">
                <div className="pt-4">
                    <img src="photo_presentation.jpg" alt="Photo de Yrieix Cisterne" className="rounded-full w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64"/>
                </div>
                <div className="flex flex-row gap-8">
                <a href="https://www.linkedin.com/in/yrieix-cisterne-96963b332/" target="_blank" rel="noopener noreferrer"><Linkedin size={24}/></a>
                <a href="https://github.com/yrieix-cisterne-nws" target="_blank" rel="noopener noreferrer"><Github size={24}/></a>
            </div>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-3xl'>Yrieix Cisterne</h1>
                    <p>Développeur web</p>
                </div>
            </div>

            <div className="flex flex-row gap-8 justify-center pt-4">
                <div>
                    <a href="/CV_Cisterne_Yrieix.pdf" download={"Cisterne_Yrieix_CV"}><button className="bg-[#F2CC0F] hover:bg-[#8487BF] transition-all duration-500 rounded-full p-1 cursor-pointer">Mon CV</button></a>
                </div>
                <div className='pt-1'>
                    <Link to="/projet" className="bg-[#F2CC0F] hover:bg-[#8487BF] transition-all duration-500 rounded-full p-1 cursor-pointer">Projets</Link>
                </div>
            </div>
        </main>
        <section className='mx-auto pt-4'>
            <div className='flex justify-center'>
                <h2 className='text-xl'>Mes projets récents</h2>
            </div>
            <div className='flex flex-col sm:flex-row gap-8 justify-center mt-4 p-4 mx-4'>
                <div className='max-w-[550px]'>
                    <Projethome title={"OWGuesser"} image={"/projet/owguesser.png"} alt={"OWGuesser"} description={"Side project, petit mini jeu"} link={"https://owguesser.yrieix-cisterne.fr/"} linktext={"Vous pouvez voir le site ici"}/>
                </div>
                <div>
                    <Projethome title={"To do list"} image={"/projet/todolist.png"} alt={"To do list"} description={"Projet réalisé pour l'école."} link={"https://yrieix-cisterne-nws.github.io/Evaluation_todo_list/"} linktext={"Vous pouvez voir le github ici"}/> 
                </div>
            </div>
        </section>
        <section className="mx-auto pt-4">
            <div className=''>
                <div className='flex justify-center'>
                    <h2 className='text-xl'><span className="uppercase">à</span> propos de moi</h2>
                </div>
                    <div className='bg-[#e8cdb3] rounded-lg max-w-[1170px] mt-4 p-4 mx-4'>
                        <div className='flex flex-col sm:flex-row items-center justify-center gap-8'>
                            <Texte description="Je m'appelle Yrieix Cisterne. J'ai 19 ans. Je suis étudiant en deuxième année de Bachelor Chef de Projets Digitaux. J'étudie à la Normandie Web School de Rouen. Passionné par le numérique, j'ai découvert le code au lycée. J'ai obtenu un Bac général en 2024. Mes spécialités étaient NSI et Mathématiques. J'ai appris Python et SQL au lycée. Ces langages m'ont donné une base solide en programmation."/>
                            <img src="/stock_image/avatar.jpg" alt="NWS logo" className="w-48 rounded-lg"/>
                        </div>
                        <div className='flex flex-col sm:flex-row-reverse justify-center gap-8 pt-4 items-center'>
                            <Texte description="En rejoignant la Normandie Web School, j'ai approfondi mes compétences en développement web. J'ai appris HTML, CSS, JavaScript, ainsi que des frameworks comme React et MySQL. J'ai également acquis des connaissances en gestion de projets digitaux, UX/UI design et marketing digital. Mon objectif est de devenir un développeur web compétent et polyvalent, capable de créer des sites web performants et attrayants."/>
                            <img src="/stock_image/dev_web.jpg" alt="Ligne de code" className="w-72 rounded-lg"/>
                        </div>
                    </div>
            </div>
                <div className='flex justify-center pt-4 pb-4'>
                    <Link to="/contact" className="bg-[#F2CC0F] hover:bg-[#8487BF] transition-all duration-500 rounded-full p-1 cursor-pointer">Me contacter</Link>
                </div>
        </section>

        </div>
    )
}

