export const Projethome = ({title, image, description, link, linktext}) => {
    return(
        <section>
            <div>
            <h3>{title}</h3>
            </div>
            <div>
                <img src={image} alt={title} />
            </div>
            <div>
                <p>{description}</p>
            </div>
            <div>
                {link ? (
                    <a href={link} className="text-blue-500 underline" rel="noopener noreferrer">{linktext}</a>
                ) : null}
            </div>
        </section>
    )
}