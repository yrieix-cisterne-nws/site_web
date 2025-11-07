export const Projet_image = ({title, image, description, link, linktext}) => {
    return(
        <section className="">
            <div className="flex flex-row gap-4">
                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div>
                    <img src={image} alt={title} />
                </div>
            </div>
            <div>
                {link ? (
                    <a href={link} className="text-blue-500 underline" rel="noopener noreferrer">{linktext}</a>
                ) : null}
            </div>
        </section>
    )
}