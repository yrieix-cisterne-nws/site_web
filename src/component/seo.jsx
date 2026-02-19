import { Title, Meta, Link as MetaLink } from "react-head";

export default function SEO({title, description, keywords, canonical }) {
    return(
        <>
        {title && <Title>{title}</Title>}
        {description && <Meta name="description" content={description}/>}
        {<Meta name="author" content="Yrieix Cisterne"/>}
        {keywords && <Meta name="keywords" content={keywords}/>}
        {canonical && <MetaLink rel="canonical" href={canonical}/>}
        </>
    )
}

