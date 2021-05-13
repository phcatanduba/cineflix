export default function MovieInfo({ movie, date }) {
    return (
        <footer>
            <div className="movie">
                <img src={movie.posterURL} />
            </div>
            <p>{movie.title}</p>
            <p>{date}</p>
        </footer>
    );
}
