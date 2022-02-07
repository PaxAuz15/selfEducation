import { Link } from "wouter"

const POPULAR_GIFS = [
    "Naruto",
    "Morty",
    "La casa de papel",
    "React JS",
    "Barcelona SC"
]

const Home = () => {
    return (
        <>
        <h2 className="subtitle">Most popular gifs</h2>
        {
            POPULAR_GIFS.map(gifCategory => {
                return <Link key={gifCategory} to={`/search/${gifCategory}`}>{`Gifs de ${gifCategory}`}</Link>
            })
        }
        </>
    )
}

export default Home