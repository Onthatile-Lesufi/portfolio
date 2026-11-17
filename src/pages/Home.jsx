import { Link } from "react-router";
import instagramLogo from "../assets/logos/Instagram_logo_2022.svg";
import githubLogo from "../assets/logos/GitHub_Invertocat_White_Clearspace.svg";
import itchLogo from "../assets/logos/itchio-logo-textless-white.svg";
import showReel from "../assets/videos/GD_Showreel.mp4";

const Home = () => {
    return(
        <div className="min-h-screen w-full bg-blue-300 p-15">
            <h1 className="font-black text-8xl mb-5">Onthatile Tumiso Lesufi</h1>
            <p className="font-semibold text-3xl mb-5"><Link to={"/games"} className="text-white hover:text-black">Game Designer</Link> • <Link to={"/dev"} className="text-white hover:text-black">Web/App Designer</Link></p>
            <div className="mb-15">
                <p className="font-semibold text-3xl mb-2">About Me</p>
                <p className="text-lg mb-7">Hello, I'm Onthatile Lesufi, in certain corners of cyberspace I go by MrNineFrames (or Mr.9 for short). I am currently an aspiring developer whose is studying in both the fields of web development and game development (with a minor in creative computing) at university. This Github page consists of all of my web development projects.</p>
                <Link to={"mailto:onthatumi@outlook.com"} className="font-semibold text-xl">onthatumi@outlook.com</Link>
            </div>
            <div className="h-35 mb-12 mt-5">
                <Link to={"https://www.instagram.com/mrnineframes/"} target="_blank" className="float-left w-35 rounded-full">
                    <img src={instagramLogo} className="m-auto"/>
                </Link>
                <Link to={"https://github.com/Onthatile-Lesufi"} target="_blank"  className="float-left w-35 mr-5 ml-5 bg-black rounded-full">
                    <img src={githubLogo} className="m-auto"/>
                </Link>
                <Link to={"https://mrnineframes.itch.io/"} target="_blank"  className="float-left w-35 bg-[#fa5c5c] p-7 rounded-full">
                    <img src={itchLogo} className="m-auto"/>
                </Link>
            </div>
            <div className="grid grid-cols-2 h-115 gap-1">
                <Link to={"/games"}>
                    <p className=" text-white font-bold text-5xl absolute z-20 text-center ">My Games</p>
                    <video src={showReel} height="100%" width="100%" autoPlay muted loop className="m-auto relative z-0"/>
                </Link>
                <Link to={"/dev"}>
                    <div className="w-full h-full bg-black content-center text-center">
                        <p className="text-white font-bold text-5xl">My Apps</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Home;