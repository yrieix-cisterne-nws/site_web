export const Projethome = ({title, image, description, link, linktext}) => {
    return(
        <section className="max-w-[1170px] max-h-[500px] h-full mx-auto rounded-lg p-5 bg-[#e8cdb3] mt-4 flex">
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
                    <img src={image} alt={title} className="max-w-[400px] max-h-[270px]"/>
                </div>
            </div>

        </section>
    )
}