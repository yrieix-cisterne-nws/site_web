export const Texte = ({description, link, linktext}) => {
    return(
        <div className="">
        <p>{description}</p>
            {link ? (
                <a href={link} className="text-blue-500 underline" rel="noopener noreferrer">{linktext}</a>
            ) : null}
            </div>
    )
}