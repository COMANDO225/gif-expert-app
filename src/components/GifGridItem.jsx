const GifGridItem = ( {title, url} ) => {
    return (
        <div className="gif_card">
            <div className="gif_image">
                <img draggable={false} src={url} alt={`imagen de ${title}`} />
            </div>
            <div className="gif_title">
                <p>{title}</p>
            </div>
        </div>
    );
}

export default GifGridItem;