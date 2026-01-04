import { ContactUs } from "../component/formulaire";

export default function Contact () {
    return(
        <>
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