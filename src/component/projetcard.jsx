export const ProjetCard = ({ title, image, width, height, alt, description, link, linktext, compact = false, eager = false }) => {
    return(
        <section className="max-w-[1170px] mx-auto rounded-lg p-4 md:p-5 bg-surface mt-4 mb-4 m-4">
            <div className={`flex flex-col sm:flex-row gap-4 justify-around ${compact ? "items-center" : ""}`}>
                <div className="flex flex-col items-center justify-center gap-4 max-w-[440px]">
                    <h2 className="text-xl">{title}</h2>
                    <p>{description}</p>
                    {link && (
                        <a href={link} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">{linktext}</a>
                    )}
                </div>
                <div className={compact ? "flex items-center justify-center" : "max-h-[300px] sm:max-h-[450px] overflow-auto w-full sm:w-auto"}>
                    <img
                        src={image}
                        alt={alt ?? title}
                        width={width}
                        height={height}
                        loading={eager ? "eager" : "lazy"}
                        className={compact
                            ? "max-w-[300px] sm:max-w-[400px] max-h-[200px] sm:max-h-[270px] object-contain"
                            : "max-w-[300px] sm:max-w-[450px]"}
                    />
                </div>
            </div>
        </section>
    )
}
