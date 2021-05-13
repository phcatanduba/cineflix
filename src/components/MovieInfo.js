export default function MovieInfo({ movie, date }) {
    return (
        <footer>
            <div className="movie">
                <img src={movie.posterURL} />
            </div>
            <div>
                <p>{movie.title}</p>
                <p>{date}</p>
            </div>
        </footer>
    );
}
