import { ContactUs } from "../component/formulaire";
import SEO from "../component/seo";

export default function Contact () {
    return(
        
        <>
            <SEO 
                title="Contact | Yrieix Cisterne"
                description="Intéressé par mon profil ? Contactez-moi pour une opportunité, un stage, une alternance ou une collaboration professionnelle en développement web."
                keywords="Yrieix Cisterne, Développeur web, Développeur React, Contact développeur web, Me contacter, Formulaire de contact, Prendre rendez-vous, Contact"
                canonical="https://yrieix-cisterne.fr/contact"
            />
            <div className="flex flex-col gap-16 bg-[#e8cdb3] sm:p-16 rounded-lg sm:flex-row p-5">
                <div className="flex flex-col gap-4 justify-center items-center">
                    <a href="mailto:ycisterne@normandiewebschool.fr" className="text-blue-500 underline">ycisterne@normandiewebschool.fr</a>
                    <p>Actuellement sur Rouen, 76000</p>
                    <p>06 18 03 13 27</p>
                </div>
                <ContactUs />
            </div>
        </>
        
    )
}