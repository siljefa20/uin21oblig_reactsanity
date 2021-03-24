
const Movie = (props) => {

    return (
        <article>
            <h1>Tittel: {props.title}</h1>
            <p>Skuespiller: {props.actor}</p>
        </article>
    );
};

export default Movie;