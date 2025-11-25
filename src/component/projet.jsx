export const Projet_image = ({index, id, title, image, alt, description, link, linktext}) => {
    return(
        <section className="max-w-[1170px] mx-auto rounded-lg p-5 bg-[#e8cdb3] mt-4">
            <div className="flex flex-row gap-4 justify-around">
                <div className="flex flex-col items-center justify-center gap-4 max-w-[440px]">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    <div>
                        {link ? (
                            <a href={link} className="text-blue-500 underline" rel="noopener noreferrer">{linktext}</a>
                        ) : null}
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <img src={image} alt={alt} className="max-w-[450px]"/>
                </div>
            </div>

        </section>
    )
}