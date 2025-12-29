export const Projethome = ({title, image, description, link, linktext}) => {
    return(
        <section className="max-w-[1170px] mx-auto rounded-lg p-4 md:p-5 bg-[#e8cdb3] mt-4 mb-4 m-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-around items-center">
                <div className="flex flex-col items-center justify-center gap-4 max-w-[440px]">
                        <h2 className="text-xl">{title}</h2>
                        <p className="">{description}</p>
                    <div>
                        {link ? (
                            <a href={link} className="text-blue-500 underline" rel="noopener noreferrer">{linktext}</a>
                        ) : null}
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <img src={image} alt={title} className="max-w-[300px] sm:max-w-[400px] max-h-[200px] sm:max-h-[270px] object-contain"/>
                </div>
            </div>

        </section>
    )
}