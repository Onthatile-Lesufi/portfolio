import { Link } from "react-router";

const Home = () => {
    return(
        <div className="min-h-screen w-full bg-blue-300 p-5">
            <h1 className="font-black text-8xl">Onthatile Tumiso Lesufi</h1>
            <p className="font-semibold text-3xl"><Link to={"/games"} className="text-white">Game Designer</Link> • <Link to={"/dev"} className="text-white">Web/App Designer</Link></p>
            <p></p>
        </div>
    )
}

export default Home;