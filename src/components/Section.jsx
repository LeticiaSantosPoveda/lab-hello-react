function Section({noticia}){
    const {imageUrl, title, content} = noticia;
    return(
        <div className="nivell4">
            <img src={imageUrl} alt="" />
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
}

export default Section;