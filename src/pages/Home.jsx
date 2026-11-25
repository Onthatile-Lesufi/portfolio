import { Link } from "react-router";
import instagramLogo from "../assets/logos/Instagram_logo_2022.svg";
import githubLogo from "../assets/logos/GitHub_Invertocat_White_Clearspace.svg";
import itchLogo from "../assets/logos/itchio-logo-textless-white.svg";
import showReel from "../assets/videos/GD_Showreel.mp4";
import dvReel from "../assets/videos/Portfolio.mp4"

const Home = () => {
    return (
        <div className="min-h-screen w-full bg-blue-300 p-6 py-15 sm:p-10 md:p-15">
            <h1 className="font-black text-4xl sm:text-6xl md:text-8xl mb-4 md:mb-5">
                Onthatile Tumiso Lesufi
            </h1>
            <p className="font-semibold text-xl sm:text-2xl md:text-3xl mb-10 md:mb-20">
                <Link to={"/games"} className="text-white hover:text-black">Game Designer</Link> • <Link to={"/dev"} className="text-white hover:text-black">Web/App Designer</Link>
            </p>

            <div className="mb-10 md:mb-15 max-w-4xl">
                <p className="font-extrabold text-2xl md:text-3xl mb-2 text-gray-800">About Me</p>
                <p className="font-semibold text-base md:text-lg mb-7">
                    Hello, I'm Onthatile Lesufi, in certain corners of cyberspace I go by MrNineFrames (or Mr.9 for short).
                    <br/> I am currently an aspiring developer who is just about done studying in both the fields of web/app development and game development (with a minor in creative computing) at university.
                    <br/> This site consists of all of my projects (both game and app related).
                    <br/>
                    <br/> If you wish to offer me work, please feel free to reach out through Instagram or my email.
                </p>
                <a href="mailto:onthatumi@outlook.com" className="font-bold text-lg sm:text-2xl text-gray-100 break-all">
                    onthatumi@outlook.com →
                </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 md:gap-5 mb-12 mt-5">
                <a href="https://www.instagram.com/mrnineframes/" target="_blank" rel="noopener noreferrer" className="w-16 h-16 sm:w-24 sm:h-24 md:w-35 md:h-35 rounded-full overflow-hidden">
                    <img src={instagramLogo} alt="Instagram" className="w-full h-full object-contain"/>
                </a>
                <a href="https://github.com/Onthatile-Lesufi" target="_blank" rel="noopener noreferrer" className="w-16 h-16 sm:w-24 sm:h-24 md:w-35 md:h-35 bg-black rounded-full overflow-hidden">
                    <img src={githubLogo} alt="GitHub" className="w-full h-full object-contain"/>
                </a>
                <a href="https://mrnineframes.itch.io/" target="_blank" rel="noopener noreferrer" className="w-16 h-16 sm:w-24 sm:h-24 md:w-35 md:h-35 bg-[#fa5c5c] p-3 sm:p-5 md:p-7 rounded-full flex items-center justify-center">
                    <img src={itchLogo} alt="Itch.io" className="w-full h-full object-contain"/>
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-1">
                <Link to={"/games"} className="relative h-64 sm:h-80 md:h-115 overflow-hidden">
                    <div className="absolute inset-0 z-20 bg-[#000000ac] flex items-center justify-center">
                        <p className="text-white font-bold text-3xl sm:text-4xl md:text-5xl text-center">My Games</p>
                    </div>
                    <video src={showReel} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0"/>
                </Link>
                <Link to={"/dev"} className="relative h-64 sm:h-80 md:h-115 overflow-hidden">
                    <div className="absolute inset-0 z-20 bg-[#000000ac] flex items-center justify-center">
                        <p className="text-white font-bold text-3xl sm:text-4xl md:text-5xl">My Apps</p>
                    </div>
                    <video src={dvReel} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0"/>
                </Link>
            </div>
        </div>
    )
}

export default Home;