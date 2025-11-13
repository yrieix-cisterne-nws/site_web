import { Projet_image } from '../component/projet';

export default function Projet () {
    return(
        <div className='max-w-[1170px] mx-auto'>
            <Projet_image title={"Maquette HTML lodge"} image={"/silly_cat_2.webp"} alt={"Silly cat"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"} link={"a"} linktext={"test"}/>
            <Projet_image title={"Maquette HTML lodge"} image={"/silly_cat_2.webp"} alt={"Silly cat"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"} link={"a"} linktext={"test"}/>
            <Projet_image title={"Maquette HTML lodge"} image={"/silly_cat_2.webp"} alt={"Silly cat"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"} link={"a"} linktext={"test"}/>
        </div>
    )
}