import { ContactUs } from "../component/formulaire";

export default function Contact () {
    return(
        <div className='flex justify-center items-center h-screen bg-[#FAFAFA]'>
            <div className="flex flex-row gap-16 bg-[#e8cdb3] p-40 rounded-lg">
                <div className="flex flex-col gap-4 justify-center items-center">
                    <a href="mailto:ycisterne@normandiewebschool.fr" className="text-blue-500 underline">ycisterne@normandiewebschool.fr</a>
                    <p></p>
                    <p>Actuellement sur Rouen, 76000</p>
                </div>
                <ContactUs />
            </div>
        </div>
    )
}