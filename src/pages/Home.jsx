import { Linkedin, Github } from 'lucide-react'; 
import { Link } from 'react-router-dom';
import { Projethome } from '../component/projethome';

export default function Home () {

    return(
        <div className="bg-[#FAFAFA]">
        <main className="max-w-[1170px] mx-auto">
            <div className="flex flex-col gap-8 items-center justify-center">
                <div className="pt-4">
                    <img src="funny_cat.jpg" alt="Photo de Yrieix Cisterne" className="rounded-full w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64"/>
                </div>
                <div className="flex flex-row gap-8">
                <a href="https://www.linkedin.com/in/yrieix-cisterne-96963b332/" target="_blank" rel="noopener noreferrer"><Linkedin size={24}/></a>
                <a href="https://github.com/yrieix-cisterne-nws" target="_blank" rel="noopener noreferrer"><Github size={24}/></a>
            </div>
                <div className='flex flex-col justify-center items-center'>
                    <h1>Yrieix Cisterne</h1>
                    <p>Développeur web</p>
                </div>
            </div>

            <div className="flex flex-row gap-8 justify-center pt-4">
                <div>
                    <a href=""><button className="bg-[#f78f27] hover:bg-[#278ff7] transition-all duration-500 rounded-full p-1 cursor-pointer">Mon CV</button></a>
                </div>
                <div>
                    <Link to="/projet" className="bg-[#f78f27] hover:bg-[#278ff7] transition-all duration-500 rounded-full p-1 cursor-pointer">Projets</Link>
                </div>
            </div>
        </main>
        <section className='max-w-[1170px] mx-auto pt-4'>
            <h2>Mes projets récents</h2>
            <div className='flex flex-row gap-8'>
                <div>
                    <Projethome title={"projet 1"} image={"/silly_cat_2.webp"} alt={"Silly cat"} description={"lorem ipsum"}/>
                </div>
                <div>
                    <Projethome title={"projet 2"} image={"/silly_cat_3.jpg"} alt={"Silly cat"} description={"lorem ipsum"}/>
                </div>
            </div>
        </section>
        <section className="max-w-[1170px] mx-auto pt-4">
            <div className=''>
                <div className=''>
                    <h2><span className="uppercase">à</span> propos de moi</h2>
                </div>
                <div className='flex flew-row items-center justify-center gap-16'>
                    <div>
                        <p>Lorem ipsum</p>
                    </div>
                    <div>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>

            </div>
                <div>
                    <Link to="/contact" className="bg-red-300 hover:bg-emerald-500 rounded-full p-1 cursor-pointer">Me contacter</Link>
                </div>
        </section>

        </div>
    )
}

