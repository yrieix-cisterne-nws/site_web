import { Projet_image } from '../component/projet';

export default function Projet () {
    return(
        <div className='max-w-[1170px] mx-auto'>
            <Projet_image title={"projet 1"} image={"/silly_cat_2.webp"} alt={"Silly cat"} description={"lorem ipsum"}/>
        </div>
    )
}